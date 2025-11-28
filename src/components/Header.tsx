import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/team", label: "Our Team" },
    { to: "/stories", label: "Impact Stories" },
    { to: "/#events", label: "Events" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
            <Heart className="h-6 w-6 text-primary-foreground" fill="currentColor" />
          </div>
          <span className="hidden sm:inline">United Relief Network</span>
          <span className="sm:hidden">URN</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeClassName="text-primary font-semibold"
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" size="sm" asChild>
            <NavLink to="/volunteer">Volunteer</NavLink>
          </Button>
          <Button size="sm" className="bg-gradient-primary" asChild>
            <NavLink to="/donate">Donate Now</NavLink>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden animate-fade-in">
          <div className="container mx-auto space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                activeClassName="bg-primary-light text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="outline" className="w-full" asChild>
                <NavLink to="/volunteer" onClick={() => setMobileMenuOpen(false)}>
                  Volunteer
                </NavLink>
              </Button>
              <Button className="w-full bg-gradient-primary" asChild>
                <NavLink to="/donate" onClick={() => setMobileMenuOpen(false)}>
                  Donate Now
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
