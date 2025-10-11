import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const ModernFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 py-12 sm:py-16">
          {/* Left Column - Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <div className="text-xl sm:text-2xl font-bold mb-2">ExpTek</div>
              <div className="text-sm text-gray-400 mb-4">SAP Finance Experts</div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
              Leading SAP S/4HANA Public Cloud Finance consulting with 100+ Fit-to-Standard workshops delivered using proven SAP Activate methodology.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#60d5ff] flex-shrink-0 mt-1" />
                <div className="text-gray-300 text-sm">
                  <div className="font-semibold mb-1">ExpTek LLC</div>
                  <div>28345 Beck Road, Suite 406</div>
                  <div>Wixom, Michigan, 48393</div>
                  <div>United States</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#60d5ff] flex-shrink-0" />
                <a href="mailto:hr@exptek.com" className="text-gray-300 hover:text-[#60d5ff] transition-colors text-sm">
                  hr@exptek.com
                </a>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="text-sm text-gray-400 font-semibold mb-2">Business Hours</div>
                <div className="text-sm text-gray-300">
                  <div>Monday - Friday: 9:00 AM - 6:00 PM EST</div>
                  <div className="text-gray-400">Saturday - Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/services/finance-implementation" 
                  className="text-gray-300 hover:text-[#60d5ff] transition-colors text-sm touch-manipulation block py-1 min-h-[44px] flex items-center"
                >
                  Finance Implementation
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/digital-payments" 
                  className="text-gray-300 hover:text-[#60d5ff] transition-colors text-sm touch-manipulation block py-1 min-h-[44px] flex items-center"
                >
                  Digital Payments
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/api-integration" 
                  className="text-gray-300 hover:text-[#60d5ff] transition-colors text-sm touch-manipulation block py-1 min-h-[44px] flex items-center"
                >
                  API Integration
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/revenue-recognition" 
                  className="text-gray-300 hover:text-[#60d5ff] transition-colors text-sm touch-manipulation block py-1 min-h-[44px] flex items-center"
                >
                  Revenue Recognition
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/banking-treasury" 
                  className="text-gray-300 hover:text-[#60d5ff] transition-colors text-sm touch-manipulation block py-1 min-h-[44px] flex items-center"
                >
                  Banking & Treasury
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/tax-compliance" 
                  className="text-gray-300 hover:text-[#60d5ff] transition-colors text-sm touch-manipulation block py-1 min-h-[44px] flex items-center"
                >
                  Tax & Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-[#60d5ff] transition-colors text-sm touch-manipulation block py-1 min-h-[44px] flex items-center"
                >
                  About ExpTek
                </Link>
              </li>
              <li>
                <Link 
                  to="/case-studies" 
                  className="text-gray-300 hover:text-[#60d5ff] transition-colors text-sm touch-manipulation block py-1 min-h-[44px] flex items-center"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link 
                  to="/insights" 
                  className="text-gray-300 hover:text-[#60d5ff] transition-colors text-sm touch-manipulation block py-1 min-h-[44px] flex items-center"
                >
                  Insights & Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-[#60d5ff] transition-colors text-sm touch-manipulation block py-1 min-h-[44px] flex items-center"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  className="text-gray-300 hover:text-[#60d5ff] transition-colors text-sm touch-manipulation block py-1 min-h-[44px] flex items-center"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-6 sm:py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            <div className="text-sm text-gray-400">
              <p>&copy; {currentYear} ExpTek LLC. All rights reserved.</p>
              <p className="mt-1">Jurisdiction: Oakland County, Michigan</p>
            </div>
            <div className="text-xs text-gray-500 max-w-md lg:text-right">
              <p>
                SAP, SAP S/4HANA, and related marks are trademarks of SAP SE. 
                ExpTek is an independent consulting company, not a product company. 
                All trademarks belong to their respective owners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;