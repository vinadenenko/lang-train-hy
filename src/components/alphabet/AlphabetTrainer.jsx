import { useState } from 'react';
import { ALPHABET } from '../../data/alphabet';
import { useAlphabetProgress } from '../../hooks/useAlphabetProgress';
import AlphabetGrid from './AlphabetGrid';
import LetterDetail from './LetterDetail';
import QuizMode from './QuizMode';

const TABS = ['Browse', 'Quiz'];

export default function AlphabetTrainer() {
  const { progress, record, resetProgress, masteredCount } = useAlphabetProgress();
  const [tab, setTab] = useState('Browse');
  const [selected, setSelected] = useState(null);

  const pct = Math.round((masteredCount / ALPHABET.length) * 100);

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-slate-500 mb-1">
          <span>Letters mastered: <strong className="text-slate-700">{masteredCount} / {ALPHABET.length}</strong></span>
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
            key={t}
            onClick={() => setTab(t)}
            className={`px-5 py-2 rounded-lg font-medium text-sm transition-all ${
              tab === t ? 'bg-white shadow text-indigo-600' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 'Browse' && (
        <>
          <p className="text-sm text-slate-500 mb-4">Click any letter to see details. <span className="text-emerald-600">Green</span> = mastered, <span className="text-amber-500">amber</span> = in progress.</p>
          <AlphabetGrid progress={progress} onSelect={setSelected} />
          {masteredCount > 0 && (
            <button
              onClick={resetProgress}
              className="mt-6 text-xs text-slate-400 hover:text-red-400 underline transition-colors"
            >
              Reset all progress
            </button>
          )}
        </>
      )}

      {tab === 'Quiz' && (
        <QuizMode progress={progress} onRecord={record} />
      )}

      {selected && (
        <LetterDetail letter={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
