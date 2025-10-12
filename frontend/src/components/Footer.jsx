import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_commit-preview/artifacts/wtlv5yv8_ExpTek%20Logo.jpeg" 
                alt="ExpTek Logo" 
                className="h-12 w-auto"
              />
              <div className="text-sm text-gray-400">SAP Finance Experts</div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading SAP S/4HANA Public Cloud Finance consulting with 100+ Fit-to-Standard workshops delivered using proven SAP Activate methodology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#0A6ED1]" />
                <span className="text-gray-300 text-sm">ExpTek LLC, Michigan, USA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#0A6ED1]" />
                <span className="text-gray-300 text-sm">info@exptek.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#0A6ED1]" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/finance-implementation" className="text-gray-300 hover:text-white transition-colors text-sm">Finance Implementation</Link></li>
              <li><Link to="/services/digital-payments" className="text-gray-300 hover:text-white transition-colors text-sm">Digital Payments</Link></li>
              <li><Link to="/services/api-integration" className="text-gray-300 hover:text-white transition-colors text-sm">API Integration</Link></li>
              <li><Link to="/services/revenue-recognition" className="text-gray-300 hover:text-white transition-colors text-sm">Revenue Recognition</Link></li>
              <li><Link to="/services/banking-treasury" className="text-gray-300 hover:text-white transition-colors text-sm">Banking & Treasury</Link></li>
              <li><Link to="/services/analytics-reporting" className="text-gray-300 hover:text-white transition-colors text-sm">Analytics & Reporting</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">About ExpTek</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors text-sm">Case Studies</Link></li>
              <li><Link to="/insights" className="text-gray-300 hover:text-white transition-colors text-sm">Insights & Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>© {currentYear} ExpTek LLC. All rights reserved.</p>
              <p className="mt-1">Jurisdiction: Oakland County, Michigan</p>
            </div>
            <div className="text-xs text-gray-500 text-center md:text-right max-w-md">
              <p>
                SAP, SAP S/4HANA, and related marks are trademarks of SAP SE. ExpTek is an independent consulting company, not a product company. All trademarks belong to their respective owners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;