import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Mentorship", href: "/mentorship" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const renderLink = (l: { label: string; href: string }, className: string) => {
    if (l.href.startsWith("/#")) {
      if (location.pathname === "/") {
        return (
          <a key={l.href} href={l.href} onClick={() => handleClick(l.href)} className={className}>
            {l.label}
          </a>
        );
      }
      return (
        <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className={className}>
          {l.label}
        </Link>
      );
    }
    return (
      <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className={className}>
        {l.label}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-navy-light">
      <div className="container mx-auto flex items-center justify-between h-20 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Limitless Communications" className="h-12 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) =>
            renderLink(l, "text-sm font-medium tracking-wide text-secondary/80 hover:text-secondary transition-colors gold-underline")
          )}
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-secondary" aria-label="Toggle menu">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-primary border-t border-navy-light animate-fade-in">
          <div className="container mx-auto py-6 px-4 flex flex-col gap-4">
            {navLinks.map((l) =>
              renderLink(l, "text-sm font-medium tracking-wide text-secondary/80 hover:text-secondary transition-colors py-2")
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
