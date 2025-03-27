import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-purple-600">
              EduAI
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors ${
                location.pathname === '/'
                  ? 'text-purple-600 font-semibold'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/how-it-works"
              className={`transition-colors ${
                location.pathname === '/how-it-works'
                  ? 'text-purple-600 font-semibold'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              How It Works
            </Link>
            <Link
              to="/features"
              className={`transition-colors ${
                location.pathname === '/features'
                  ? 'text-purple-600 font-semibold'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Features
            </Link>
            <Link
              to="/live-demo"
              className={`transition-colors ${
                location.pathname === '/live-demo'
                  ? 'text-purple-600 font-semibold'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Live Demo
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                location.pathname === '/about'
                  ? 'text-purple-600 font-semibold'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              About EduAI
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${
                location.pathname === '/contact'
                  ? 'text-purple-600 font-semibold'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-purple-600 focus:outline-none focus:text-purple-600"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md transition-colors ${
                  location.pathname === '/'
                    ? 'text-purple-600 bg-purple-50 font-semibold'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                Home
              </Link>
              <Link
                to="/how-it-works"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md transition-colors ${
                  location.pathname === '/how-it-works'
                    ? 'text-purple-600 bg-purple-50 font-semibold'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                How It Works
              </Link>
              <Link
                to="/features"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md transition-colors ${
                  location.pathname === '/features'
                    ? 'text-purple-600 bg-purple-50 font-semibold'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                Features
              </Link>
              <Link
                to="/live-demo"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md transition-colors ${
                  location.pathname === '/live-demo'
                    ? 'text-purple-600 bg-purple-50 font-semibold'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                Live Demo
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md transition-colors ${
                  location.pathname === '/about'
                    ? 'text-purple-600 bg-purple-50 font-semibold'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                About EduAI
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md transition-colors ${
                  location.pathname === '/contact'
                    ? 'text-purple-600 bg-purple-50 font-semibold'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}; 