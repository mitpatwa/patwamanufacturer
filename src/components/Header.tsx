import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoAsset from "@/assets/patwa-manufacturer-logo.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import InteractiveSearch from "./InteractiveSearch";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname: currentPath } = useLocation();
  const pathname = currentPath.replace(/\/+$/, "") || "/";

  const isRouteActive = (link: string) => pathname === link || pathname.startsWith(`${link}/`);
  const isNavItemActive = (item: { link: string; items?: Array<{ link: string }> }) =>
    isRouteActive(item.link) || Boolean(item.items?.some((subItem) => isRouteActive(subItem.link)));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: Array<{
    name: string;
    link: string;
    external?: boolean;
    items?: Array<{ name: string; link: string }>;
  }> = [
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
    { name: "Inquiry", link: "/inquiry" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b border-gold-200/80 bg-background/95 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "py-2.5 shadow-md" : "py-3.5 shadow-sm"
      }`}
    >
      <div className="container-custom">
        <div className="flex min-h-14 items-center justify-between gap-3">
          <Link
            to="/"
            aria-label="Patwa Manufacturer home"
            aria-current={pathname === "/" ? "page" : undefined}
            className="inline-flex shrink-0 items-center gap-3 rounded-sm transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
          >
            <img
              src={logoAsset.url}
              alt="Patwa Manufacturer, Design for Designer logo"
              className="h-12 w-[54px] object-contain md:h-14 md:w-[62px]"
            />
            <span className="font-serif text-base font-semibold leading-tight text-foreground sm:text-lg">
              Patwa Manufacturer
            </span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden lg:block">
            <ul className="flex items-center gap-4 xl:gap-5">
              {navItems.map((item) => (
                <li key={item.name} className="group relative">
                  {item.external ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-sm px-2.5 py-2 text-sm font-medium text-foreground/85 transition-colors duration-200 hover:bg-gold-50 hover:text-gold-800 active:bg-gold-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.link}
                      aria-current={isNavItemActive(item) ? "page" : undefined}
                      className={`inline-flex items-center rounded-sm px-2.5 py-2 text-sm transition-colors duration-200 hover:bg-gold-50 hover:text-gold-800 active:bg-gold-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 ${
                        isNavItemActive(item) ? "bg-gold-100 font-semibold text-gold-900" : "font-medium text-foreground/85"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {item.items && (
                    <div className="invisible absolute left-0 top-full z-50 w-56 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      <ul className="rounded-sm border border-gold-200 bg-background py-2 shadow-lg">
                        {item.items.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              to={subItem.link}
                              aria-current={isRouteActive(subItem.link) ? "page" : undefined}
                              className={`block rounded-sm px-5 py-2 text-sm transition-colors hover:bg-gold-50 hover:text-gold-800 active:bg-gold-100 focus-visible:bg-gold-50 focus-visible:outline-none ${
                                isRouteActive(subItem.link) ? "bg-gold-50 font-semibold text-gold-900" : "text-foreground"
                              }`}
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
            </ul>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="border-gold-200 bg-background text-foreground hover:bg-gold-50 lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-l border-gold-200 bg-background sm:w-[360px]">
              <nav aria-label="Mobile navigation" className="mt-12">
                <div className="mb-6 flex items-center justify-between gap-3 border-b border-gold-200 pb-5">
                  <InteractiveSearch />
                  <LanguageSwitcher />
                </div>
                <ul className="space-y-5">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      {item.external ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-sm border-l-2 border-transparent px-3 py-2 text-lg font-medium text-foreground transition-colors hover:bg-gold-50 hover:text-gold-800 active:bg-gold-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          to={item.link}
                          aria-current={isNavItemActive(item) ? "page" : undefined}
                          className={`block rounded-sm border-l-2 px-3 py-2 text-lg transition-colors hover:bg-gold-50 hover:text-gold-800 active:bg-gold-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 ${
                            isNavItemActive(item)
                              ? "border-gold-600 bg-gold-50 font-semibold text-gold-900"
                              : "border-transparent font-medium text-foreground"
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                      {item.items && (
                        <ul className="mt-3 space-y-3 border-l border-gold-200 pl-4">
                          {item.items.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                to={subItem.link}
                                aria-current={isRouteActive(subItem.link) ? "page" : undefined}
                                className={`block rounded-sm border-l-2 px-3 py-1.5 text-base transition-colors hover:bg-gold-50 hover:text-gold-800 active:bg-gold-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 ${
                                  isRouteActive(subItem.link)
                                    ? "border-gold-600 bg-gold-50 font-semibold text-gold-900"
                                    : "border-transparent text-muted-foreground"
                                }`}
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