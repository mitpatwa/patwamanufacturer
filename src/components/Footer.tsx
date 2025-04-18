
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  // Footer navigation items grouped by category
  const footerNavigation = {
    collections: [
      { name: "Tassels", href: "/collections/tassels" },
      { name: "Fringes", href: "/collections/fringes" },
      { name: "Cords & Braids", href: "/collections/cords-braids" },
      { name: "Embellishments", href: "/collections/embellishments" },
      { name: "Custom Creations", href: "/collections/custom-creations" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Craftsmanship", href: "/craftsmanship" },
      { name: "Workshop", href: "/workshop" },
      { name: "Sustainability", href: "/sustainability" },
    ],
    services: [
      { name: "Custom Services", href: "/custom-services" },
      { name: "Inquiry", href: "/inquiry" },
      { name: "Trade Program", href: "/trade-program" },
      { name: "Find a Designer", href: "/find-designer" },
    ],
    support: [
      { name: "FAQs", href: "/faqs" },
      { name: "Order Samples", href: "/samples" },
      { name: "Returns & Exchanges", href: "/returns" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
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
            <h3 className="font-serif text-lg font-medium mb-6">Services</h3>
            <ul className="space-y-3">
              {footerNavigation.services.map((item) => (
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
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
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
            <div className="newsletter-signup">
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 border border-sand-300 bg-sand-100 focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button 
                  type="submit" 
                  className="bg-primary text-primary-foreground px-4 py-2 hover:bg-accent transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Lower Footer: Copyright and Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Patwa Manufacturer. All rights reserved.</p>
          
          <div className="flex flex-wrap justify-center mt-4 md:mt-0 gap-x-6 gap-y-2">
            <Link to="/privacy" className="hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="hover:text-primary transition-colors duration-200">
              Accessibility
            </Link>
            <Link to="/cookies" className="hover:text-primary transition-colors duration-200">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
