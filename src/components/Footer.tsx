import { NavLink } from "@/components/NavLink";
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                <Heart className="h-6 w-6 text-primary-foreground" fill="currentColor" />
              </div>
              <span className="text-lg font-bold">United Relief Network</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Providing essential blood donation camps, medical aid, and community health support to save lives.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/initiatives" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Initiatives
                </NavLink>
              </li>
              <li>
                <NavLink to="/impact" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Impact
                </NavLink>
              </li>
              <li>
                <NavLink to="/events" className="text-muted-foreground hover:text-primary transition-colors">
                  Events Calendar
                </NavLink>
              </li>
              <li>
                <NavLink to="/transparency" className="text-muted-foreground hover:text-primary transition-colors">
                  Financial Transparency
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-foreground">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/donate" className="text-muted-foreground hover:text-primary transition-colors">
                  Donate Now
                </NavLink>
              </li>
              <li>
                <NavLink to="/volunteer" className="text-muted-foreground hover:text-primary transition-colors">
                  Become a Volunteer
                </NavLink>
              </li>
              <li>
                <NavLink to="/partner" className="text-muted-foreground hover:text-primary transition-colors">
                  Partner With Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-foreground">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>123 Healthcare Avenue, Medical District, NY 10001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="tel:+15557354333" className="hover:text-primary transition-colors">
                  +1 (555) 735-4333
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="mailto:contact@unitedreliefnetwork.org" className="hover:text-primary transition-colors">
                  contact@unitedreliefnetwork.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p>© {currentYear} United Relief Network. All rights reserved.</p>
            <div className="flex gap-6">
              <NavLink to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </NavLink>
              <NavLink to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
