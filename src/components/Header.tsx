
import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";

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
      link: "/inquiry",
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
            <h1 className={`text-xl md:text-2xl font-serif font-medium tracking-wider transition-colors duration-300 ${
              isScrolled || isMenuOpen ? 'text-primary' : 'text-white'
            }`}>
              PATWA MANUFACTURER
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.name} className="group relative">
                  <Link 
                    to={item.link}
                    className={`text-sm font-medium hover:text-gold-600 transition-colors duration-300 py-2 ${
                      isScrolled ? 'text-primary' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                  
                  {item.items && (
                    <div className="absolute top-full left-0 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <ul className="bg-white shadow-lg rounded-md py-2 border border-border">
                        {item.items.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              to={subItem.link}
                              className="block px-5 py-2 text-sm hover:bg-sand-50 hover:text-gold-600 transition-colors"
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
              
              <li>
                <button 
                  className={`p-2 rounded-full hover:bg-white/10 transition-colors ${
                    isScrolled ? 'text-primary' : 'text-white'
                  }`}
                >
                  <Search className="h-5 w-5" />
                </button>
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
                <ul className="space-y-6">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.link}
                        className="block text-lg font-medium hover:text-gold-600 transition-colors"
                      >
                        {item.name}
                      </Link>
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
