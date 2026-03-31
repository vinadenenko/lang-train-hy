import { useState, useCallback } from 'react';
import { SOURCE_LANGUAGES } from '../data/flashcards';

const STORAGE_KEY = 'armenian_source_lang';
const DEFAULT_LANG = 'en';
const SUPPORTED_LANGS = Object.keys(SOURCE_LANGUAGES);

function resolvelang(l) {
  return SUPPORTED_LANGS.includes(l) ? l : DEFAULT_LANG;
}

export function useSourceLanguage() {
  const [lang, setLangState] = useState(() =>
    resolvelang(localStorage.getItem(STORAGE_KEY))
  );

  const setLang = useCallback((l) => {
    const resolved = resolvelang(l);
    localStorage.setItem(STORAGE_KEY, resolved);
    setLangState(resolved);
  }, []);

  const t = (card) => ({
    meaning:       card.translations[lang] ?? card.translations[DEFAULT_LANG],
    example:       card.example,
    exampleNative: card.examples[lang]      ?? card.examples[DEFAULT_LANG],
  });

  return { lang, setLang, t };
}
