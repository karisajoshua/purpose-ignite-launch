import { Link } from "react-router-dom";
import { Linkedin, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "About", to: "/about" },
  { label: "Programmes", to: "/programmes" },
  { label: "Mentorship", to: "/mentorship" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-primary py-16 border-t border-navy-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" aria-label="Limitless Communications home">
              <img
                src={logo}
                alt="Limitless Communications"
                className="h-16 w-auto mb-4"
              />
            </Link>

            <p className="text-muted/60 text-sm leading-relaxed">
              We Connect. Empower. Transform.
            </p>

            <p className="text-secondary text-sm font-bold mt-2">
              #WeConnectEmpowerTransform
            </p>

            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/company/limitless-consultants/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Limitless on LinkedIn"
                className="text-muted/60 hover:text-secondary transition-colors"
              >
                <Linkedin
                  className="w-5 h-5"
                  aria-hidden="true"
                />
              </a>

              <a
                href="https://www.facebook.com/share/p/1KvCWQYHJj/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Limitless on Facebook"
                className="text-muted/60 hover:text-secondary transition-colors"
              >
                <Facebook
                  className="w-5 h-5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-secondary mb-4">
              Quick Links
            </h4>

            <nav aria-label="Footer navigation" className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm text-muted/60 hover:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-secondary mb-4">
              Contact
            </h4>

            <div className="space-y-2 text-sm text-muted/60">
              <a
                href="mailto:info@limitlessconsultancy.co.ke"
                className="block hover:text-secondary transition-colors"
              >
                info@limitlessconsultancy.co.ke
              </a>

              <a
                href="tel:+254756157885"
                className="block hover:text-secondary transition-colors"
              >
                +254 756 157 885
              </a>

              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-navy-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted/40">
            © {new Date().getFullYear()} Limitless Communications Limited.
            All rights reserved.
          </p>

          <p className="text-xs text-muted/40">
            Powered by Texcortech System
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
