import React, { useState } from 'react';
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

  const choose = (lang: Lang) => {
    setCurrent(lang);
    setOpen(false);
    if (window.setLanguage) {
      window.setLanguage(lang.code);
    }
  };

  return (
    <div className="relative">
      <button
        aria-label="Language selector"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
      >
        <span className="text-lg" aria-hidden>{current.flag}</span>
        <span className="hidden sm:inline text-sm font-medium">{current.name}</span>
        <ChevronDown className="h-4 w-4" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
          <ul className="py-2">
            {languages.map((l) => (
              <li key={l.code}>
                <button
                  onClick={() => choose(l)}
                  className={`w-full text-left px-4 py-2 flex items-center gap-3 hover:bg-gray-50 ${current.code===l.code?'bg-gray-50':''}`}
                >
                  <span className="text-lg" aria-hidden>{l.flag}</span>
                  <span className="text-sm text-gray-800">{l.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;


