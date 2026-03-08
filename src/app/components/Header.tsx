import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Über Uns', path: '/about' },
    { name: 'Dienstleistungen', path: '/services' },
    { name: 'Preise', path: '/pricing' },
    { name: 'Kontakt', path: '/contact' },
  ];

  // Hilfsfunktion, um zu prüfen, ob ein Link aktiv ist
  const isActive = (path: string) => location.pathname === path;

  return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
                to="/"
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent z-50"
                onClick={() => setIsOpen(false)}
            >
              EK-Webservice
            </Link>

            {/* Desktop Navigation (versteckt auf mobilen Geräten) */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                  <Link
                      key={link.path}
                      to={link.path}
                      className={`text-sm font-medium transition-all hover:text-blue-600 ${
                          isActive(link.path)
                              ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                              : 'text-black/70'
                      }`}
                  >
                    {link.name}
                  </Link>
              ))}
              <Link
                  to="/contact"
                  className="hidden lg:inline-flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg"
              >
                Projekt starten
              </Link>
            </nav>

            {/* Mobile Menu Button (Hamburger) */}
            <button
                className="md:hidden p-2 text-black/70 hover:text-blue-600 transition-colors z-50"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menü umschalten"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation (Dropdown) */}
        <div
            className={`md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-blue-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${
                isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
            }`}
        >
          <nav className="flex flex-col px-4 pt-4 pb-8 gap-2">
            {navLinks.map((link) => (
                <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive(link.path)
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-black/70 hover:bg-blue-50/50 hover:text-blue-600'
                    }`}
                >
                  {link.name}
                </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-blue-100 px-4">
              <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-base font-medium transition-all shadow-md"
              >
                Projekt starten
              </Link>
            </div>
          </nav>
        </div>
      </header>
  );
}