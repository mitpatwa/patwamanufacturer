
import { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingBag, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between py-5">
          {/* Logo */}
          <div className="flex-1">
            <Link to="/" className="inline-block">
              <h1 className="text-2xl font-serif font-medium tracking-wider">PATWA MANUFACTURER</h1>
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1">
            <ul className="flex items-center justify-center space-x-6">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  {item.dropdown ? (
                    <button 
                      className="font-medium hover-underline py-2 flex items-center space-x-1"
                      onClick={() => item.dropdown && handleDropdownToggle(item.dropdown)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  ) : (
                    <Link 
                      to={item.link || "#"} 
                      className="font-medium hover-underline py-2"
                    >
                      {item.name}
                    </Link>
                  )}
                  
                  {item.dropdown && (
                    <div className={`absolute left-0 mt-2 w-48 bg-background border border-border shadow-md transition-all duration-300 ${activeDropdown === item.dropdown ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                      <ul className="py-2">
                        {item.items.map((subItem) => (
                          <li key={subItem.name}>
                            <Link to={subItem.link} className="block px-4 py-2 hover:bg-secondary">
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Actions */}
          <div className="flex-1 flex items-center justify-end space-x-6">
            <button className="text-primary hover:text-accent transition-colors">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Mobile Header */}
        <div className="flex lg:hidden items-center justify-between py-4">
          <button onClick={toggleMenu} className="text-primary">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          <Link to="/" className="inline-block">
            <h1 className="text-xl font-serif font-medium tracking-wider">PATWA MANUFACTURER</h1>
          </Link>
          
          <div className="flex items-center space-x-4">
            <button className="text-primary">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-background z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="container-custom py-20">
          <nav>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button 
                        className="text-lg font-medium py-2 w-full text-left flex items-center justify-between"
                        onClick={() => item.dropdown && handleDropdownToggle(item.dropdown)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`h-5 w-5 transition-transform ${activeDropdown === item.dropdown ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <div className={`transition-all duration-300 overflow-hidden ${activeDropdown === item.dropdown ? 'max-h-60' : 'max-h-0'}`}>
                        <ul className="pt-2 pl-4 space-y-2">
                          {item.items.map((subItem) => (
                            <li key={subItem.name}>
                              <Link to={subItem.link} className="block py-1 text-muted-foreground hover:text-primary">
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link 
                      to={item.link || "#"} 
                      className="text-lg font-medium py-2 block"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
