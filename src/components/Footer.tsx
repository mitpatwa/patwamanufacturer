
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Twitter, MapPin, Phone, Mail } from "lucide-react";

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
      { name: "Inquiry", href: "https://wa.me/919322140480?text=Hello! I'm interested in your passementerie products and would like to make an inquiry.", external: true },
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

  // Updated social media links - using Twitter icon for Pinterest since Pinterest icon isn't available in lucide-react
  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/patwa_manufacturer" },
    { name: "Pinterest", icon: Twitter, href: "https://in.pinterest.com/patwamanufacturers/" }, // Using Twitter icon as placeholder
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Youtube", icon: Youtube, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
  ];

  // Updated contact information
  const contactInfo = {
    address: "237/C2 Shree Vaibhav Society, near Pragati School and Junior College, Gorai 2, Borivali West, Mumbai, Maharashtra 400092",
    phone: "+919322140480",
    email: "patwamanufacturers@gmail.com"
  };

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
                  {item.external ? (
                    <a 
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link 
                      to={item.href} 
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
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
        
        {/* Middle Footer: Logo, Contact, and Social */}
        <div className="py-12 border-b border-sand-300 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="inline-block">
              <h1 className="text-2xl font-serif font-medium tracking-wider">PATWA MANUFACTURER</h1>
            </Link>
            <div className="mt-4 space-y-2 text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-1 shrink-0" />
                <p>{contactInfo.address}</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-primary transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              {socialLinks.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  target="_blank"
                  rel="noopener noreferrer"
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
