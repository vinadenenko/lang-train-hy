import { useState, useEffect, useRef, useCallback } from 'react';
import { ALPHABET } from '../../data/alphabet';

// Weight letters by how poorly the user knows them
function pickLetter(progress) {
  const weighted = ALPHABET.flatMap(letter => {
    const p = progress[letter.id];
    if (!p) return [letter, letter, letter]; // unseen = high weight
    if (p.mastered) return [letter];          // mastered = low weight
    const ratio = p.wrong / (p.correct + p.wrong + 1);
    const weight = Math.max(1, Math.round(ratio * 5) + 1);
    return Array(weight).fill(letter);
  });
  return weighted[Math.floor(Math.random() * weighted.length)];
}

const QUIZ_TYPES = ['letter-to-translit', 'translit-to-letter'];

export default function QuizMode({ progress, onRecord }) {
  const [quizType, setQuizType] = useState(QUIZ_TYPES[0]);
  const [current, setCurrent] = useState(() => pickLetter(progress));
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState(null); // null | 'correct' | 'wrong'
  const [streak, setStreak] = useState(0);
  const inputRef = useRef(null);

  const next = useCallback(() => {
    setCurrent(pickLetter(progress));
    setInput('');
    setFeedback(null);
    // alternate quiz types occasionally
    if (Math.random() < 0.4) setQuizType(QUIZ_TYPES[Math.floor(Math.random() * 2)]);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, [progress]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const check = () => {
    if (feedback) { next(); return; }
    const answer = input.trim().toLowerCase();
    let correct = false;

    if (quizType === 'letter-to-translit') {
      correct = answer === current.translit.toLowerCase();
    } else {
      // translit-to-letter: accept upper or lower
      correct = answer === current.upper || answer === current.lower;
    }

    setFeedback(correct ? 'correct' : 'wrong');
    onRecord(current.id, correct);
    setStreak(s => correct ? s + 1 : 0);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') check();
  };

  const prompt = quizType === 'letter-to-translit'
    ? { label: 'Type the transliteration:', display: current.upper, placeholder: 'e.g. a, b, zh, sh…' }
    : { label: 'Type the Armenian letter:', display: current.translit, placeholder: 'e.g. ա, բ…' };

  return (
    <div className="max-w-md mx-auto">
      {/* Streak */}
      <div className="flex justify-between items-center mb-6 text-sm text-slate-500">
        <span>Streak: <strong className="text-indigo-600">{streak}</strong></span>
        <button
          onClick={() => setQuizType(q => q === QUIZ_TYPES[0] ? QUIZ_TYPES[1] : QUIZ_TYPES[0])}
          className="text-xs bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-full transition-colors"
        >
          {quizType === 'letter-to-translit' ? '⇄ Switch to: Letter from translit' : '⇄ Switch to: Translit from letter'}
        </button>
      </div>

      {/* Card */}
      <div className={`
        rounded-2xl border-2 p-8 text-center mb-6 transition-all
        ${feedback === 'correct' ? 'border-emerald-400 bg-emerald-50' :
          feedback === 'wrong'   ? 'border-red-400 bg-red-50' :
                                   'border-slate-200 bg-white'}
      `}>
        <div className="text-xs uppercase tracking-widest text-slate-400 mb-4">{prompt.label}</div>
        <div className={`font-bold mb-2 ${quizType === 'letter-to-translit' ? 'text-8xl text-indigo-600' : 'text-4xl font-mono text-slate-700'}`}>
          {prompt.display}
        </div>
        {feedback && (
          <div className="mt-4 text-sm">
            {feedback === 'correct'
              ? <span className="text-emerald-700 font-semibold">✓ Correct!</span>
              : <span className="text-red-700 font-semibold">
                  ✗ Wrong — answer: <span className="font-mono">
                    {quizType === 'letter-to-translit' ? current.translit : current.upper}
                  </span>
                </span>
            }
            <div className="text-slate-500 text-xs mt-1">{current.name} · {current.sound}</div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey}
          disabled={!!feedback}
          placeholder={prompt.placeholder}
          className={`
            flex-1 border-2 rounded-xl px-4 py-3 text-lg outline-none transition-colors
            ${feedback ? 'bg-slate-50 border-slate-200 text-slate-400' : 'border-indigo-200 focus:border-indigo-500 bg-white'}
          `}
        />
        <button
          onClick={check}
          className={`
            px-6 py-3 rounded-xl font-semibold transition-colors text-white
            ${feedback ? 'bg-indigo-400 hover:bg-indigo-500' : 'bg-indigo-600 hover:bg-indigo-700'}
          `}
        >
          {feedback ? 'Next →' : 'Check'}
        </button>
      </div>
      <p className="text-xs text-slate-400 mt-2 text-center">Press Enter to submit / continue</p>
    </div>
  );
}
