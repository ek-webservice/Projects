import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">EK-Webservice</h3>
            <p className="text-white/70 text-sm">
              Professionelle Webentwicklung für Ihr Business
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-white/70 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-blue-400 transition-colors">
                  Über Uns
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-blue-400 transition-colors">
                  Dienstleistungen
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-white/70 hover:text-blue-400 transition-colors">
                  Preise
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/impressum" className="text-white/70 hover:text-blue-400 transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="text-white/70 hover:text-blue-400 transition-colors">
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-white/70 hover:text-blue-400 transition-colors">
                  Kontaktseite
                </Link>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@ek-webservice.com" className="hover:text-blue-400 transition-colors">
                  info@ek-webservice.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} EK-Webservice. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/60 hover:text-blue-400 transition-colors">
                <FaTiktok className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
