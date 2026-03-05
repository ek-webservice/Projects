import { Link, useLocation } from 'react-router-dom';
import { Code2 } from 'lucide-react';

export function Header() {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Über Uns', path: '/about' },
    { name: 'Dienstleistungen', path: '/services' },
    { name: 'Preise', path: '/pricing' },
    { name: 'Kontakt', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-blue-600 p-2 rounded-xl group-hover:bg-blue-700 transition-colors">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              EK-Webservice
            </span>
          </Link>

          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`relative px-3 py-2 transition-all ${
                    isActive(item.path)
                      ? 'text-blue-600'
                      : 'text-black/70 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
