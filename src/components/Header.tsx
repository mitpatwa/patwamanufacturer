import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import InteractiveSearch from "./InteractiveSearch";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: "Collections", 
      link: "/collections/tassels",
      items: [
        { name: "Tassels", link: "/collections/tassels" },
        { name: "Fringes", link: "/collections/fringes" },
        { name: "Braids", link: "/collections/braids" },
        { name: "Cords", link: "/collections/cords" },
        { name: "Embellishments", link: "/collections/embellishments" }
      ] 
    },
    { name: "Custom Builder", link: "/configurator" },
    { name: "Custom Services", link: "/custom-services" },
    { name: "About Us", link: "/about" },
    { name: "Blog", link: "/blog" },
    { 
      name: "Inquiry", 
      link: "https://wa.me/919322140480?text=Hello!%20I'm%20interested%20in%20your%20passementerie%20products%20and%20would%20like%20to%20make%20an%20inquiry.",
      external: true
    },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-3' 
          : 'bg-background/90 backdrop-blur-md border-b border-border/20 py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="inline-block">
            <span className="text-xl md:text-2xl font-serif font-medium tracking-wider text-foreground hover:opacity-80 transition-opacity">
              PATWA MANUFACTURER
            </span>
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-6">
              {navItems.map((item) => (
                <li key={item.name} className="group relative">
                  {item.external ? (
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-foreground hover:text-primary/70 transition-colors duration-300 py-2"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link 
                      to={item.link}
                      className="text-sm font-medium text-foreground hover:text-primary/70 transition-colors duration-300 py-2"
                    >
                      {item.name}
                    </Link>
                  )}
                  
                  {item.items && (
                    <div className="absolute top-full left-0 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <ul className="bg-background shadow-lg rounded-md py-2 border border-border">
                        {item.items.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              to={subItem.link}
                              className="block px-5 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
              <li><LanguageSwitcher /></li>
              <li><InteractiveSearch /></li>
              <li><ThemeToggle /></li>
            </ul>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <button className="lg:hidden p-2 text-foreground">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="mt-12">
                <div className="mb-6 pb-6 border-b border-border flex items-center justify-between">
                  <InteractiveSearch />
                  <ThemeToggle />
                </div>
                <ul className="space-y-6">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      {item.external ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-lg font-medium text-foreground hover:text-primary/70 transition-colors"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          to={item.link}
                          className="block text-lg font-medium text-foreground hover:text-primary/70 transition-colors"
                        >
                          {item.name}
                        </Link>
                      )}
                      {item.items && (
                        <ul className="pl-4 mt-3 space-y-3">
                          {item.items.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                to={subItem.link}
                                className="block text-base text-muted-foreground hover:text-foreground transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;