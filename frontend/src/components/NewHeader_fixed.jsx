import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const NewHeader = () => {
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
        ? 'bg-white shadow-lg py-3' 
        : 'bg-white shadow-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-2xl font-bold text-gray-900">ExpTek</div>
            <div className="text-sm text-gray-600 hidden sm:block">SAP Finance Experts</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-medium transition-colors duration-200 py-2 ${
                  isActivePath(item.path) 
                    ? 'text-[#0A6ED1]' 
                    : 'text-gray-700 hover:text-[#0A6ED1]'
                }`}
              >
                {item.name}
                {isActivePath(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A6ED1] transform origin-left transition-transform duration-200" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              asChild
              className="bg-[#0A6ED1] hover:bg-[#085bb5] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow-sm hover:shadow-lg hover:scale-105"
            >
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-[#0A6ED1] transition-colors rounded-lg hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-3 px-4 font-medium rounded-lg transition-colors duration-200 ${
                  isActivePath(item.path) 
                    ? 'text-[#0A6ED1] bg-blue-50' 
                    : 'text-gray-700 hover:text-[#0A6ED1] hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <Button 
                asChild
                className="w-full bg-[#0A6ED1] hover:bg-[#085bb5] text-white px-6 py-3 rounded-lg font-semibold shadow-sm hover:shadow-lg transition-all duration-200"
              >
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NewHeader;