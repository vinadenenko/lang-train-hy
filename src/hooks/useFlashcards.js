import { useState, useCallback } from 'react';
import { FLASHCARDS, STORAGE_KEY_FLASHCARDS } from '../data/flashcards';

// SM-2 algorithm
// quality: 0=Again, 1=Hard, 3=Good, 5=Easy
function sm2(card, quality) {
  let { easeFactor = 2.5, interval = 0, repetitions = 0 } = card;

  if (quality < 3) {
    // Failed — reset
    repetitions = 0;
    interval = 1;
  } else {
    if (repetitions === 0) interval = 1;
    else if (repetitions === 1) interval = 6;
    else interval = Math.round(interval * easeFactor);
    repetitions += 1;
  }

  easeFactor = easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02);
  easeFactor = Math.max(1.3, easeFactor);

  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + interval);
  nextReview.setHours(0, 0, 0, 0);

  return { easeFactor, interval, repetitions, nextReview: nextReview.toISOString() };
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_FLASHCARDS);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY_FLASHCARDS, JSON.stringify(progress));
}

function isDue(cardProgress) {
  if (!cardProgress?.nextReview) return true; // never reviewed
  return new Date(cardProgress.nextReview) <= new Date();
}

export function useFlashcards() {
  const [progress, setProgress] = useState(loadProgress);

  const dueCards = FLASHCARDS.filter(c => isDue(progress[c.id]));
  const newCards  = FLASHCARDS.filter(c => !progress[c.id]);

  const review = useCallback((cardId, quality) => {
    setProgress(prev => {
      const current = prev[cardId] ?? {};
      const updated = { ...current, ...sm2(current, quality) };
      const next = { ...prev, [cardId]: updated };
      saveProgress(next);
      return next;
    });
  }, []);

  const resetProgress = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY_FLASHCARDS);
    setProgress({});
  }, []);

  const stats = {
    total: FLASHCARDS.length,
    due: dueCards.length,
    new: newCards.length,
    learned: FLASHCARDS.filter(c => progress[c.id]?.repetitions > 0).length,
    mature: FLASHCARDS.filter(c => (progress[c.id]?.interval ?? 0) >= 21).length,
  };

  return { progress, dueCards, review, resetProgress, stats, isDue };
}
