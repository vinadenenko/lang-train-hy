import { CATEGORY_KEYS, FLASHCARDS } from '../../data/flashcards';

export default function DeckOverview({ stats, progress, isDue, onStartSession, onStartCategory, s }) {
  const byCategory = CATEGORY_KEYS.map(key => {
    const label = s.categoryLabels[key];
    const cards = FLASHCARDS.filter(c => c.cat === key);
    const due     = cards.filter(c => isDue(progress[c.id])).length;
    const learned = cards.filter(c => progress[c.id]?.repetitions > 0).length;
    return { key, label, total: cards.length, due, learned };
  });

  return (
    <div>
      {/* Summary stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { label: s.dueToday, value: stats.due,     color: 'text-indigo-600',  bg: 'bg-indigo-50' },
          { label: s.newCards, value: stats.new,     color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: s.learned,  value: stats.learned, color: 'text-slate-700',   bg: 'bg-slate-50' },
          { label: s.mature,   value: stats.mature,  color: 'text-amber-600',   bg: 'bg-amber-50' },
        ].map(stat => (
          <div key={stat.label} className={`${stat.bg} rounded-xl p-4 text-center`}>
            <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Start session button */}
      {stats.due > 0 ? (
        <button
          onClick={onStartSession}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-2xl mb-8 text-lg transition-colors shadow-sm"
        >
          {s.studyDue} {stats.due} {stats.due === 1 ? s.dueCard : s.dueCards} →
        </button>
      ) : (
        <div className="w-full bg-emerald-50 border-2 border-emerald-200 text-emerald-700 font-semibold py-4 rounded-2xl mb-8 text-center">
          {s.allCaughtUp}
        </div>
      )}

      {/* Category list */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-3">{s.categories}</h3>
        {byCategory.map(cat => (
          <button
            key={cat.key}
            onClick={() => onStartCategory(cat.key)}
            className="w-full flex items-center justify-between bg-white hover:bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 transition-colors group"
          >
            <div className="text-left">
              <div className="font-medium text-slate-700 group-hover:text-indigo-600 transition-colors">{cat.label}</div>
              <div className="text-xs text-slate-400">{cat.learned}/{cat.total} {s.learned.toLowerCase()}</div>
            </div>
            <div className="flex items-center gap-3">
              {cat.due > 0 && (
                <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                  {cat.due} {s.due}
                </span>
              )}
              <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-400 rounded-full"
                  style={{ width: `${(cat.learned / cat.total) * 100}%` }}
                />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
