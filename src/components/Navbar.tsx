import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Menu, X, ChevronDown } from "lucide-react";

const aboutLinks = [
  const aboutLinks = [
  { label: "Who We Are", href: "/about#who-we-are" },
  { label: "Our Vision", href: "/about#vision" },
  { label: "Our Mission", href: "/about#mission" },
  { label: "The GRIT Framework", href: "/about#grit" },
  { label: "Our Team", href: "/about#team" },

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

  const closeAll = () => {
    setOpen(false);
    setAboutOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-navy-light">
      <div className="container mx-auto flex items-center justify-between h-20 px-4 lg:px-8">

        {/* LOGO */}
        <Link
          to="/"
          onClick={closeAll}
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Limitless Communications"
            className="h-12 w-auto"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center gap-8">

          {/* ABOUT DROPDOWN */}
          <div className="relative">

            <button
              type="button"
              onClick={() => setAboutOpen(!aboutOpen)}
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

            {/* DROPDOWN MENU */}
            {aboutOpen && (
              <div className="absolute left-0 top-full mt-3 w-64 bg-primary border border-navy-light shadow-2xl z-[100]">

                {aboutLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={closeAll}
                    className="block px-5 py-3 text-sm font-medium text-secondary/80 hover:text-secondary hover:bg-navy-light/40 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}

              </div>
            )}
          </div>

          {/* OTHER NAVIGATION LINKS */}
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

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-secondary"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-primary border-t border-navy-light animate-fade-in">
          <div className="container mx-auto py-6 px-4 flex flex-col gap-2">

            {/* MOBILE ABOUT */}
            <div>

              <button
                type="button"
                onClick={() => setAboutOpen(!aboutOpen)}
                className="w-full flex items-center justify-between text-sm font-medium tracking-wide text-secondary/80 hover:text-secondary py-2"
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
                <div className="ml-4 mt-1 border-l border-navy-light pl-4">

                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={closeAll}
                      className="block py-2 text-sm text-secondary/70 hover:text-secondary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}

                </div>
              )}

            </div>

            {/* OTHER MOBILE LINKS */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={closeAll}
                className="text-sm font-medium tracking-wide text-secondary/80 hover:text-secondary py-2"
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
