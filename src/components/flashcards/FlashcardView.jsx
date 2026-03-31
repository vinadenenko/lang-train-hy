import { useState } from 'react';

const RATINGS = [
  { quality: 0, label: 'Again',  sub: '< 1 day',  color: 'bg-red-500 hover:bg-red-600' },
  { quality: 1, label: 'Hard',   sub: '~1 day',   color: 'bg-orange-400 hover:bg-orange-500' },
  { quality: 3, label: 'Good',   sub: '~few days', color: 'bg-indigo-500 hover:bg-indigo-600' },
  { quality: 5, label: 'Easy',   sub: '~1 week+', color: 'bg-emerald-500 hover:bg-emerald-600' },
];

export default function FlashcardView({ card, cardProgress, onRate, queueSize }) {
  const [flipped, setFlipped] = useState(false);

  const handleRate = (quality) => {
    onRate(card.id, quality);
    setFlipped(false);
  };

  return (
    <div className="max-w-lg mx-auto">
      {/* Queue indicator */}
      <div className="text-sm text-slate-500 text-center mb-4">
        <span className="font-medium text-slate-700">{queueSize}</span> card{queueSize !== 1 ? 's' : ''} left in session
      </div>

      {/* Card */}
      <div
        onClick={() => !flipped && setFlipped(true)}
        className={`
          rounded-2xl border-2 p-8 text-center mb-4 transition-all cursor-pointer select-none
          ${flipped ? 'border-indigo-300 bg-indigo-50 cursor-default' : 'border-slate-200 bg-white hover:border-indigo-200 hover:shadow-md'}
        `}
      >
        {/* Front — always visible */}
        <div className="mb-4">
          <div className="text-xs uppercase tracking-widest text-slate-400 mb-3">Armenian</div>
          <div className="text-5xl font-bold text-indigo-700 mb-2">{card.hy}</div>
          <div className="text-xl font-mono text-slate-500">/{card.translit}/</div>
        </div>

        {!flipped && (
          <div className="mt-6 text-sm text-slate-400 border-t border-slate-100 pt-4">
            Tap to reveal meaning
          </div>
        )}

        {/* Back — shown after flip */}
        {flipped && (
          <div className="border-t border-indigo-200 pt-4 mt-2">
            <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">English</div>
            <div className="text-2xl font-semibold text-slate-800 mb-4">{card.en}</div>
            <div className="bg-white rounded-xl p-3 text-sm text-slate-600 border border-indigo-100">
              <div className="font-medium text-indigo-700 mb-1">{card.example}</div>
              <div className="text-slate-500 italic">{card.exampleEn}</div>
            </div>
          </div>
        )}
      </div>

      {/* Rating buttons — only after flip */}
      {flipped && (
        <div>
          <div className="text-xs text-center text-slate-400 mb-2">How well did you know it?</div>
          <div className="grid grid-cols-4 gap-2">
            {RATINGS.map(r => (
              <button
                key={r.quality}
                onClick={() => handleRate(r.quality)}
                className={`${r.color} text-white rounded-xl py-3 transition-colors`}
              >
                <div className="font-semibold text-sm">{r.label}</div>
                <div className="text-xs opacity-80">{r.sub}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Card metadata */}
      {cardProgress?.repetitions > 0 && (
        <div className="mt-4 text-xs text-slate-400 text-center">
          Interval: {cardProgress.interval}d · Reviews: {cardProgress.repetitions} · EF: {cardProgress.easeFactor?.toFixed(2)}
        </div>
      )}
    </div>
  );
}
