import { useState, useEffect } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Updated navigation items based on the website structure
  const navItems = [
    { 
      name: "Collections", 
      dropdown: "collections", 
      items: [
        { name: "Tassels", link: "/collections/tassels" },
        { name: "Fringes", link: "/collections/fringes" },
        { name: "Cords & Braids", link: "/collections/cords-braids" },
        { name: "Embellishments & Trims", link: "/collections/embellishments" },
        { name: "Custom Creations", link: "/collections/custom-creations" }
      ] 
    },
    { 
      name: "Custom Services", 
      dropdown: null, 
      items: [],
      link: "/custom-services"
    },
    { 
      name: "Company", 
      dropdown: "company", 
      items: [
        { name: "About Us", link: "/about" },
        { name: "Craftsmanship", link: "/craftsmanship" },
        { name: "Workshop", link: "/workshop" },
        { name: "Sustainability", link: "/sustainability" }
      ] 
    },
    { 
      name: "Inquiry", 
      dropdown: null, 
      items: [],
      link: "/inquiry"
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
            <SheetTrigger className="md:hidden">
              <Menu className="h-6 w-6" />
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
