import { useState, useCallback } from 'react';
import { ALPHABET, STORAGE_KEY_ALPHABET } from '../data/alphabet';

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ALPHABET);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY_ALPHABET, JSON.stringify(progress));
}

// progress[id] = { correct: number, wrong: number, mastered: boolean }
export function useAlphabetProgress() {
  const [progress, setProgress] = useState(loadProgress);

  const record = useCallback((letterId, correct) => {
    setProgress(prev => {
      const entry = prev[letterId] ?? { correct: 0, wrong: 0 };
      const next = {
        ...prev,
        [letterId]: {
          correct: entry.correct + (correct ? 1 : 0),
          wrong: entry.wrong + (correct ? 0 : 1),
          // mastered = 3+ correct, accuracy >= 75%
          mastered: (() => {
            const c = entry.correct + (correct ? 1 : 0);
            const w = entry.wrong + (correct ? 0 : 1);
            return c >= 3 && c / (c + w) >= 0.75;
          })(),
        },
      };
      saveProgress(next);
      return next;
    });
  }, []);

  const resetProgress = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY_ALPHABET);
    setProgress({});
  }, []);

  const masteredCount = ALPHABET.filter(l => progress[l.id]?.mastered).length;
  const attemptedCount = ALPHABET.filter(l => progress[l.id]).length;

  return { progress, record, resetProgress, masteredCount, attemptedCount };
}
