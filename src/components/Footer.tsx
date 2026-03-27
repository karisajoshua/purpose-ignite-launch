import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-primary py-16 border-t border-navy-light">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <img src={logo} alt="Limitless Communications" className="h-16 w-auto mb-4" />
          <p className="text-muted/60 text-sm leading-relaxed">
            We Connect. Empower. Transform.
          </p>
          <p className="text-secondary text-sm font-bold mt-2">#WeConnectEmpowerTransform</p>
        </div>
        <div>
          <h4 className="font-heading font-bold text-secondary mb-4">Quick Links</h4>
          <div className="space-y-2">
            {[
              { label: "About", to: "/#about" },
              { label: "Programmes", to: "/programmes" },
              { label: "Mentorship", to: "/mentorship" },
              { label: "Services", to: "/services" },
              { label: "Gallery", to: "/gallery" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="block text-sm text-muted/60 hover:text-secondary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading font-bold text-secondary mb-4">Contact</h4>
          <div className="space-y-2 text-sm text-muted/60">
            <p>info.limitlessglobal@gmail.com</p>
            <p>+254 756 157 885</p>
            <p>Nairobi, Kenya</p>
          </div>
        </div>
      </div>
      <div className="border-t border-navy-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted/40">
          © {new Date().getFullYear()} Limitless Communications Limited. All rights reserved.
        </p>
        <p className="text-xs text-muted/40">Powered by Texcortech System</p>
      </div>
    </div>
  </footer>
);

export default Footer;
