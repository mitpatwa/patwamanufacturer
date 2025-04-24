
import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        { name: "Cords & Braids", link: "/collections/cords-braids" },
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
    <header className={`fixed top-0 left-0 right-0 z-50 bg-background transition-all duration-300 ${isScrolled ? 'border-b border-border shadow-sm' : ''}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="inline-block">
            <h1 className="text-xl md:text-2xl font-serif font-medium tracking-wider">
              PATWA MANUFACTURER
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.link}
                    className="text-sm font-medium hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="mt-8">
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.link}
                        className="block text-lg font-medium hover:text-accent transition-colors"
                      >
                        {item.name}
                      </Link>
                      {item.items && (
                        <ul className="pl-4 mt-2 space-y-2">
                          {item.items.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                to={subItem.link}
                                className="block text-base text-muted-foreground hover:text-accent transition-colors"
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
