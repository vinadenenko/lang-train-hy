import { useState } from 'react';
import { ALPHABET } from '../../data/alphabet';
import { UI } from '../../data/strings';
import { useAlphabetProgress } from '../../hooks/useAlphabetProgress';
import AlphabetGrid from './AlphabetGrid';
import LetterDetail from './LetterDetail';
import QuizMode from './QuizMode';

export default function AlphabetTrainer({ lang }) {
  const s = UI[lang] ?? UI.en;
  const { progress, record, resetProgress, masteredCount } = useAlphabetProgress();
  const [tab, setTab] = useState('browse');
  const [selected, setSelected] = useState(null);

  const pct = Math.round((masteredCount / ALPHABET.length) * 100);
  const TABS = [
    { id: 'browse', label: s.browse },
    { id: 'quiz',   label: s.quiz },
  ];

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-slate-500 mb-1">
          <span>{s.lettersmastered}: <strong className="text-slate-700">{masteredCount} / {ALPHABET.length}</strong></span>
          <span>{pct}%</span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 transition-all duration-500 rounded-full"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-slate-100 rounded-xl p-1 mb-6 w-fit">
        {TABS.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-5 py-2 rounded-lg font-medium text-sm transition-all ${
              tab === t.id ? 'bg-white shadow text-indigo-600' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'browse' && (
        <>
          <p className="text-sm text-slate-500 mb-4">
            {s.browseHint}{' '}
            <span className="text-emerald-600">{s.colorMastered}</span> = {s.masteredLabel},{' '}
            <span className="text-amber-500">{s.colorInProgress}</span> = {s.inProgressLabel}.
          </p>
          <AlphabetGrid progress={progress} onSelect={setSelected} />
          {masteredCount > 0 && (
            <button
              onClick={resetProgress}
              className="mt-6 text-xs text-slate-400 hover:text-red-400 underline transition-colors"
            >
              {s.resetAlphabet}
            </button>
          )}
        </>
      )}

      {tab === 'quiz' && (
        <QuizMode progress={progress} onRecord={record} lang={lang} s={s} />
      )}

      {selected && (
        <LetterDetail letter={selected} lang={lang} s={s} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
