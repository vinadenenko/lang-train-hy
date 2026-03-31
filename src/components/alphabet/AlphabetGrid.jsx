import { ALPHABET } from '../../data/alphabet';

export default function AlphabetGrid({ progress, onSelect }) {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
      {ALPHABET.map(letter => {
        const p = progress[letter.id];
        const mastered = p?.mastered;
        const attempted = !!p;
        return (
          <button
            key={letter.id}
            onClick={() => onSelect(letter)}
            className={`
              flex flex-col items-center justify-center rounded-xl p-2 border-2 transition-all
              hover:scale-105 hover:shadow-md cursor-pointer
              ${mastered
                ? 'bg-emerald-50 border-emerald-400 text-emerald-800'
                : attempted
                  ? 'bg-amber-50 border-amber-300 text-amber-800'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-indigo-300'}
            `}
          >
            <span className="text-2xl font-bold leading-tight">{letter.upper}</span>
            <span className="text-lg leading-tight">{letter.lower}</span>
            <span className="text-xs mt-1 font-mono text-slate-500">{letter.translit}</span>
            {mastered && <span className="text-xs text-emerald-600 mt-0.5">✓</span>}
          </button>
        );
      })}
    </div>
  );
}
