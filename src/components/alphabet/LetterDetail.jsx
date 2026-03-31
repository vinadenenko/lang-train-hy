export default function LetterDetail({ letter, lang, s, onClose }) {
  const sound = letter.sounds[lang] ?? letter.sounds.en;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center">
        <div className="flex justify-end mb-2">
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 text-2xl leading-none">&times;</button>
        </div>
        <div className="text-8xl font-bold text-indigo-600 mb-1">{letter.upper}</div>
        <div className="text-5xl text-indigo-400 mb-4">{letter.lower}</div>
        <div className="text-2xl font-mono font-semibold text-slate-700 mb-2">/{letter.translit}/</div>
        <div className="text-lg font-semibold text-slate-600 mb-1">{letter.name}</div>
        <div className="text-sm text-slate-500 bg-slate-50 rounded-lg px-4 py-2">{sound}</div>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-xl transition-colors"
        >
          {s.gotIt}
        </button>
      </div>
    </div>
  );
}
