import { useState } from 'react';
import AlphabetTrainer from './components/alphabet/AlphabetTrainer';
import FlashcardDeck from './components/flashcards/FlashcardDeck';
import './index.css';

const MODES = [
  { id: 'alphabet',   label: 'ABC Alphabet', icon: 'Ա' },
  { id: 'flashcards', label: 'Flashcards',   icon: '🃏' },
];

export default function App() {
  const [mode, setMode] = useState('alphabet');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">Հ</div>
            <h1 className="text-lg font-bold text-slate-800">Armenian Learner</h1>
          </div>
          <nav className="flex gap-1">
            {MODES.map(m => (
              <button
                key={m.id}
                onClick={() => setMode(m.id)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${mode === m.id
                    ? 'bg-indigo-600 text-white shadow'
                    : 'text-slate-600 hover:bg-slate-100'}
                `}
              >
                <span>{m.icon}</span>
                <span className="hidden sm:inline">{m.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {mode === 'alphabet' && (
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Armenian Alphabet</h2>
              <p className="text-slate-500 mt-1">Eastern Armenian · 39 letters · Click a letter to learn it, then practice in Quiz mode</p>
            </div>
            <AlphabetTrainer />
          </section>
        )}
        {mode === 'flashcards' && (
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Flashcards</h2>
              <p className="text-slate-500 mt-1">110+ words · Spaced repetition (SM-2) · Progress saved automatically</p>
            </div>
            <FlashcardDeck />
          </section>
        )}
      </main>
    </div>
  );
}
