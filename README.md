# Armenian Learner

A web app for learning Eastern Armenian — alphabet, pronunciation, and vocabulary.
No account needed, using local storage.

## Features

### Alphabet Trainer
- Browse all 39 letters of the Armenian alphabet with their name, transliteration, and pronunciation guide
- Click any letter to see a detailed explanation
- **Quiz mode** — practice in two directions: see the Armenian letter and type the transliteration, or see the transliteration and type the letter
- Weak letters come up more often so you focus where it matters
- Track your progress — letters turn green when mastered

### Flashcards
- 110+ common Armenian words across 10 categories: greetings, numbers, colors, family, food, daily phrases, time, body parts, verbs, and adjectives
- Each card shows the Armenian word, transliteration, translation, and an example sentence
- **Spaced repetition (SM-2)** — cards you know well come back less often, cards you struggle with come back sooner
- Study all due cards at once or drill a specific category
- Progress is saved in your browser automatically

### Language support
- Choose your source language: **English** or **Russian**
- The entire UI and all translations switch accordingly

## Running locally

### Requirements
- Node.js 18+
- npm 9+

### Commands

```
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

```
npm run build    # build for production
npm run preview  # preview the production build locally
```
