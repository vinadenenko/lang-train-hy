import { useState } from 'react';
import { FLASHCARDS, CATEGORY_KEYS } from '../../data/flashcards';
import { UI } from '../../data/strings';
import { useFlashcards } from '../../hooks/useFlashcards';
import FlashcardView from './FlashcardView';
import DeckOverview from './DeckOverview';

export default function FlashcardDeck({ lang, t }) {
  const s = UI[lang] ?? UI.en;
  const { progress, dueCards, review, resetProgress, stats, isDue } = useFlashcards();
  const [session, setSession] = useState(null);

  const startSession = (categoryKey = null) => {
    let queue;
    if (categoryKey) {
      queue = FLASHCARDS
        .filter(c => c.cat === categoryKey)
        .sort((a, b) => {
          const aDue = isDue(progress[a.id]);
          const bDue = isDue(progress[b.id]);
          if (aDue !== bDue) return aDue ? -1 : 1;
          return 0;
        });
    } else {
      queue = [...dueCards].sort(() => Math.random() - 0.5);
    }
    if (queue.length === 0) return;
    setSession({ queue, index: 0, category: categoryKey });
  };

  const handleRate = (cardId, quality) => {
    review(cardId, quality);
    setSession(prev => {
      if (!prev) return null;
      const nextIndex = prev.index + 1;
      if (nextIndex >= prev.queue.length) return null;
      return { ...prev, index: nextIndex };
    });
  };

  const sessionDone = session === null && dueCards.length === 0;

  if (session) {
    const card = session.queue[session.index];
    const remaining = session.queue.length - session.index;
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setSession(null)}
            className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
          >
            {s.backToDeck}
          </button>
          {session.category && (
            <span className="text-sm text-indigo-600 font-medium">
              {s.categoryLabels[session.category]}
            </span>
          )}
          <span className="text-sm text-slate-400">
            {session.index + 1} / {session.queue.length}
          </span>
        </div>
        <div className="h-1.5 bg-slate-100 rounded-full mb-6 overflow-hidden">
          <div
            className="h-full bg-indigo-500 rounded-full transition-all duration-300"
            style={{ width: `${(session.index / session.queue.length) * 100}%` }}
          />
        </div>
        <FlashcardView
          card={card}
          cardProgress={progress[card.id]}
          onRate={handleRate}
          queueSize={remaining}
          lang={lang}
          t={t}
          s={s}
        />
      </div>
    );
  }

  return (
    <div>
      {sessionDone && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6 text-center text-emerald-700 font-medium">
          {s.sessionComplete}
        </div>
      )}
      <DeckOverview
        stats={stats}
        progress={progress}
        isDue={isDue}
        onStartSession={() => startSession()}
        onStartCategory={startSession}
        s={s}
      />
      {Object.keys(progress).length > 0 && (
        <button
          onClick={resetProgress}
          className="mt-6 text-xs text-slate-400 hover:text-red-400 underline transition-colors"
        >
          {s.resetFlashcards}
        </button>
      )}
    </div>
  );
}
