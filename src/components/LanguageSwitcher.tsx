import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

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


const LanguageSwitcher: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Lang>(languages[1]);

  // Load persisted language on mount
  useEffect(() => {
    const saved = localStorage.getItem('siteLang');
    const found = languages.find(l => l.code === saved);
    if (found) {
      setCurrent(found);
      document.documentElement.setAttribute('lang', found.code);
    }
  }, []);

  const choose = (lang: Lang) => {
    setCurrent(lang);
    setOpen(false);
    localStorage.setItem('siteLang', lang.code);
    document.documentElement.setAttribute('lang', lang.code);
  };

  return (
    <div className="relative">
      <Button
        type="button"
        variant="outline"
        aria-label="Language selector"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="h-10 gap-2 border-gold-200 bg-background px-3 text-foreground shadow-sm hover:bg-gold-50"
      >
        <span className="text-base" aria-hidden>{current.flag}</span>
        <span className="hidden sm:inline text-sm font-medium">{current.name}</span>
        <ChevronDown className="h-4 w-4" />
      </Button>
      {open && (
        <div className="absolute right-0 z-50 mt-2 w-60 rounded-sm border border-gold-200 bg-background shadow-lg">
          <ul className="py-1">
            {languages.map((l) => (
              <li key={l.code}>
                <Button
                  type="button"
                  variant="ghost"
                  size="default"
                  onClick={() => choose(l)}
                  className={`h-auto w-full justify-start rounded-none px-4 py-2.5 text-left ${current.code === l.code ? 'bg-gold-50 text-foreground' : 'text-foreground hover:bg-gold-50'}`}
                >
                  <span className="text-base" aria-hidden>{l.flag}</span>
                  <span className="text-[15px]">{l.name}</span>
                </Button>
                <div className="mx-3 h-px bg-border" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;


