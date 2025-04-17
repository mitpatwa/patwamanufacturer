import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  // Footer navigation items grouped by category
  const footerNavigation = {
    collections: [
      { name: "Trimmings", href: "#" },
      { name: "Borders", href: "#" },
      { name: "Braids", href: "#" },
      { name: "Cords", href: "#" },
      { name: "Fringes", href: "#" },
      { name: "Tassels", href: "#" },
    ],
    showrooms: [
      { name: "New York", href: "#" },
      { name: "London", href: "#" },
      { name: "Paris", href: "#" },
      { name: "Chicago", href: "#" },
      { name: "Los Angeles", href: "#" },
      { name: "Milan", href: "#" },
    ],
    company: [
      { name: "Our Story", href: "#" },
      { name: "Sustainability", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Contact", href: "#" },
    ],
    support: [
      { name: "Trade Program", href: "#" },
      { name: "Find a Designer", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Order Samples", href: "#" },
      { name: "Returns & Exchanges", href: "#" },
    ],
  };

  // Social media links
  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Youtube", icon: Youtube, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
  ];

  return (
    <footer className="bg-sand-200 pt-16 pb-8">
      <div className="container-custom">
        {/* Upper Footer: Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-sand-300">
          <div>
            <h3 className="font-serif text-lg font-medium mb-6">Collections</h3>
            <ul className="space-y-3">
              {footerNavigation.collections.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-medium mb-6">Showrooms</h3>
            <ul className="space-y-3">
              {footerNavigation.showrooms.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-medium mb-6">Company</h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-medium mb-6">Support</h3>
            <ul className="space-y-3">
              {footerNavigation.support.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Middle Footer: Logo and Social */}
        <div className="py-12 border-b border-sand-300 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="inline-block">
              <h1 className="text-2xl font-serif font-medium tracking-wider">PATWA MANUFACTURER</h1>
            </Link>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label={item.name}
              >
                <item.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        
        {/* Lower Footer: Copyright and Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Patwa Manufacturer. All rights reserved.</p>
          
          <div className="flex flex-wrap justify-center mt-4 md:mt-0 gap-x-6 gap-y-2">
            <Link to="#" className="hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-primary transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-primary transition-colors duration-200">
              Accessibility
            </Link>
            <Link to="#" className="hover:text-primary transition-colors duration-200">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
