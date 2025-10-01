
import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import InteractiveSearch from "./InteractiveSearch";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated navigation items
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
    { 
      name: "Custom Services", 
      link: "/custom-services",
    },
    { 
      name: "About Us", 
      link: "/about",
    },
    { 
      name: "Inquiry", 
      link: "https://wa.me/919322140480?text=Hello! I'm interested in your passementerie products and would like to make an inquiry.",
      external: true
    },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="inline-block">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className={`text-xl md:text-2xl font-serif font-medium tracking-wider transition-colors duration-300 ${
                isScrolled || isMenuOpen ? 'text-primary' : 'text-white'
              }`}
            >
              PATWA MANUFACTURER
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
               {navItems.map((item) => (
                <li key={item.name} className="group relative">
                  {item.external ? (
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-medium hover:text-gold-600 transition-colors duration-300 py-2 ${
                        isScrolled ? 'text-primary' : 'text-white'
                      }`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link 
                      to={item.link}
                      className={`text-sm font-medium hover:text-gold-600 transition-colors duration-300 py-2 ${
                        isScrolled ? 'text-primary' : 'text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                  
                  {item.items && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-0 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
                    >
                      <ul className="bg-white shadow-lg rounded-md py-2 border border-border">
                        {item.items.map((subItem, idx) => (
                          <motion.li
                            key={subItem.name}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Link
                              to={subItem.link}
                              className="block px-5 py-2 text-sm hover:bg-sand-50 hover:text-gold-600 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </li>
              ))}
              
              <li>
                <LanguageSwitcher />
              </li>
              <li>
                <InteractiveSearch />
              </li>
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button className={`md:hidden p-2 ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="mt-12">
                {/* Mobile Search and Theme Toggle */}
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
                          className="block text-lg font-medium hover:text-gold-600 transition-colors"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          to={item.link}
                          className="block text-lg font-medium hover:text-gold-600 transition-colors"
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
                              className="block text-base text-muted-foreground hover:text-gold-600 transition-colors"
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
