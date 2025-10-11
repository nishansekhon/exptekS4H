import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import ExpTekLogo from './ExpTekLogo';

const ModernHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Insights', path: '/insights' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActivePath = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/98 dark:bg-gray-900/98 backdrop-blur-lg shadow-lg py-2' 
        : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 touch-manipulation">
            <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white transition-colors">
              ExpTek
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hidden sm:block transition-colors">
              SAP Finance Experts
            </div>
          </Link>

          {/* Desktop Navigation with Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Navigation Menu */}
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative font-medium transition-all duration-200 py-2 touch-manipulation ${
                    isActivePath(item.path) 
                      ? 'text-[#0A6ED1] dark:text-[#60d5ff]' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-[#0A6ED1] dark:hover:text-[#60d5ff]'
                  }`}
                >
                  {item.name}
                  {isActivePath(item.path) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A6ED1] dark:bg-[#60d5ff] transform origin-left transition-all duration-200" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <Button 
              asChild
              className="bg-[#0A6ED1] hover:bg-[#085bb5] dark:bg-[#0A6ED1] dark:hover:bg-[#085bb5] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow-sm hover:shadow-lg hover:scale-105 min-h-[44px] touch-manipulation"
            >
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-[#0A6ED1] dark:hover:text-[#60d5ff] transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 min-h-[44px] min-w-[44px] touch-manipulation"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-gray-900/98 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 shadow-lg transition-all duration-300">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-3 px-4 font-medium rounded-lg transition-all duration-200 touch-manipulation min-h-[44px] flex items-center ${
                  isActivePath(item.path) 
                    ? 'text-[#0A6ED1] dark:text-[#60d5ff] bg-blue-50 dark:bg-blue-900/30' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-[#0A6ED1] dark:hover:text-[#60d5ff] hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
              <Button 
                asChild
                className="w-full bg-[#0A6ED1] hover:bg-[#085bb5] dark:bg-[#0A6ED1] dark:hover:bg-[#085bb5] text-white px-6 py-3 rounded-lg font-semibold shadow-sm hover:shadow-lg transition-all duration-200 min-h-[44px] touch-manipulation"
              >
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default ModernHeader;