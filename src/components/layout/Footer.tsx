import { Link } from 'react-router-dom';
import { Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.svg" 
                alt="Monie Utils Logo" 
                className="w-8 h-8"
              />
              <span className="font-heading font-bold text-xl text-gray-900">
                Monie Utils
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              A comprehensive TypeScript library for money-related utilities including currency formatting, conversion, validation, and financial calculations.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/spiderocious/monie-utils"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            
              <a
                href="mailto:devferanmi@gmail.com"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/#get-started" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Getting Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.npmjs.com/package/monie-utils"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  NPM Package
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/spiderocious/monie-utils/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Changelog
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/spiderocious/monie-utils/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Report Issues
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 text-sm">
              © {currentYear} Monie Utils. Built with{' '}
              <Heart className="inline w-4 h-4 text-red-500 mx-1" />
              by{' '}
              <a
                href="https://github.com/spiderocious"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Oluwaferanmi
              </a>
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
