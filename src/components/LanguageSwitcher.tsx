import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

type Lang = {
  code: string;
  name: string;
  flag: string; // emoji flag for simplicity
};

const languages: Lang[] = [
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
];

declare global {
  interface Window { setLanguage?: (lang: string) => void }
}

const LanguageSwitcher: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Lang>(languages[1]);

  // Load persisted language on mount
  useEffect(() => {
    const saved = localStorage.getItem('siteLang');
    const found = languages.find(l => l.code === saved);
    if (found) {
      setCurrent(found);
      if (window.setLanguage) window.setLanguage(found.code);
      document.documentElement.setAttribute('lang', found.code);
    }
  }, []);

  const choose = (lang: Lang) => {
    setCurrent(lang);
    setOpen(false);
    if (window.setLanguage) {
      window.setLanguage(lang.code);
    }
    localStorage.setItem('siteLang', lang.code);
    document.documentElement.setAttribute('lang', lang.code);
  };

  return (
    <div className="relative">
      <button
        aria-label="Language selector"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/90 text-gray-800 hover:bg-white shadow-sm border border-gray-200 transition-colors"
      >
        <span className="text-base" aria-hidden>{current.flag}</span>
        <span className="hidden sm:inline text-sm font-medium">{current.name}</span>
        <ChevronDown className="h-4 w-4" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-60 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
          <ul className="py-1">
            {languages.map((l) => (
              <li key={l.code}>
                <button
                  onClick={() => choose(l)}
                  className={`w-full text-left px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 ${current.code===l.code?'bg-gray-50':''}`}
                >
                  <span className="text-base" aria-hidden>{l.flag}</span>
                  <span className="text-[15px] text-gray-800">{l.name}</span>
                </button>
                <div className="h-px bg-gray-200 mx-3" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;


