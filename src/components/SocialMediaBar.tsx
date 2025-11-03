import { Instagram, Facebook, Linkedin, Youtube, Share2 } from 'lucide-react';
import { Button } from './ui/button';

const SocialMediaBar = () => {
  const socialLinks = [
    { icon: Instagram, url: 'https://instagram.com/patwamanufacturer', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Facebook, url: 'https://facebook.com/patwamanufacturer', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Share2, url: 'https://pinterest.com/patwamanufacturer', label: 'Pinterest', color: 'hover:text-red-600' },
    { icon: Linkedin, url: 'https://linkedin.com/company/patwamanufacturer', label: 'LinkedIn', color: 'hover:text-blue-700' },
    { icon: Youtube, url: 'https://youtube.com/@patwamanufacturer', label: 'YouTube', color: 'hover:text-red-500' }
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2 bg-background/80 backdrop-blur-sm border-l border-border rounded-l-lg p-2 shadow-lg">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <Button
            key={social.label}
            variant="ghost"
            size="icon"
            asChild
            className={`transition-colors ${social.color}`}
            aria-label={`Follow us on ${social.label}`}
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="h-5 w-5" />
            </a>
          </Button>
        );
      })}
    </div>
  );
};

export default SocialMediaBar;
