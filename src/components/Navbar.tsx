import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Menu, X, ChevronDown } from "lucide-react";

const aboutLinks = [
  { label: "Who We Are", href: "/about#who-we-are" },
  { label: "Our Story", href: "/about#story" },
  { label: "Mission & Vision", href: "/about#mission-vision" },
  { label: "Our Values", href: "/about#values" },
  { label: "Our Approach", href: "/about#approach" },
  { label: "Our Team", href: "/about#team" },
  { label: "Impact & Partnerships", href: "/about#impact" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programmes", href: "/programmes" },
  { label: "Mentorship", href: "/mentorship" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    setAboutOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-navy-light">
      <div className="container mx-auto flex items-center justify-between h-20 px-4 lg:px-8">

        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
          <img
            src={logo}
            alt="Limitless Communications"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              type="button"
              onClick={() => setAboutOpen((current) => !current)}
              className="flex items-center gap-1 text-sm font-medium tracking-wide text-secondary/80 hover:text-secondary transition-colors gold-underline"
            >
              About
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  aboutOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {aboutOpen && (
              <div className="absolute left-0 top-full pt-3 z-50">
                <div className="w-64 bg-primary border border-navy-light shadow-xl py-2">

                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={closeMenu}
                      className="block px-5 py-3 text-sm font-medium tracking-wide text-secondary/80 hover:text-secondary hover:bg-navy-light/40 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}

                </div>
              </div>
            )}
          </div>

          {/* Other Navigation Links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium tracking-wide text-secondary/80 hover:text-secondary transition-colors gold-underline"
            >
              {link.label}
            </Link>
          ))}

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-secondary"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="lg:hidden bg-primary border-t border-navy-light animate-fade-in">
          <div className="container mx-auto py-6 px-4 flex flex-col gap-2">

            {/* Mobile About */}
            <div>
              <button
                type="button"
                onClick={() => setAboutOpen((current) => !current)}
                className="w-full flex items-center justify-between text-sm font-medium tracking-wide text-secondary/80 hover:text-secondary transition-colors py-2"
              >
                <span>About</span>

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {aboutOpen && (
                <div className="pl-4 border-l border-navy-light mt-1 mb-2">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={closeMenu}
                      className="block text-sm font-medium tracking-wide text-secondary/70 hover:text-secondary transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Other Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={closeMenu}
                className="text-sm font-medium tracking-wide text-secondary/80 hover:text-secondary transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
