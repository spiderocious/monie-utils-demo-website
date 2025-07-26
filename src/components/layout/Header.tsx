import { Github, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/logo.svg" 
              alt="Monie Utils Logo" 
              className="w-8 h-8"
            />
            <span className="font-heading font-bold text-xl text-gray-900">
              Monie Utils
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-primary-600 ${
                isActive('/') && location.pathname === '/'
                  ? 'text-primary-600'
                  : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/docs"
              className={`font-medium transition-colors hover:text-primary-600 ${
                isActive('/docs') ? 'text-primary-600' : 'text-gray-700'
              }`}
            >
              Documentation
            </Link>
          </nav>

          {/* Search & Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={toggleMenu}
                className={`font-medium transition-colors ${
                  isActive('/') && location.pathname === '/'
                    ? 'text-primary-600'
                    : 'text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link
                to="/docs"
                onClick={toggleMenu}
                className={`font-medium transition-colors ${
                  isActive('/docs') ? 'text-primary-600' : 'text-gray-700'
                }`}
              >
                Documentation
              </Link>
              
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="https://github.com/spiderocious/monie-utils"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 mt-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
