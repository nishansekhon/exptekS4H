import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import ModernHeader from './components/ModernHeader';
import ModernFooter from './components/ModernFooter';
import EnhancedHomePage from './pages/EnhancedHomePage';
import FinanceImplementationPage from './pages/FinanceImplementationPage';
import DigitalPaymentsPage from './pages/DigitalPaymentsPage';
import ServicesOverviewPage from './pages/ServicesOverviewPage';
import ComingSoonPage from './components/ComingSoonPage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <ModernHeader />
          <main>
            <Routes>
              <Route path="/" element={<EnhancedHomePage />} />
              <Route path="/services/finance-implementation" element={<FinanceImplementationPage />} />
              {/* Service Pages - Placeholder for future implementation */}
              <Route path="/services/digital-payments" element={<DigitalPaymentsPage />} />
              <Route path="/services/api-integration" element={<div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"><div className="text-center"><h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">API & System Integration</h1><p className="text-gray-600 dark:text-gray-400">Coming Soon - Salesforce, Concur, Worldpay Integration Services</p></div></div>} />
              <Route path="/services/revenue-recognition" element={<div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"><div className="text-center"><h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Revenue Recognition & EBRR</h1><p className="text-gray-600 dark:text-gray-400">Coming Soon - Revenue Recognition & Compliance Solutions</p></div></div>} />
              <Route path="/services/banking-treasury" element={<div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"><div className="text-center"><h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Banking & Treasury</h1><p className="text-gray-600 dark:text-gray-400">Coming Soon - Banking & Treasury Optimization Services</p></div></div>} />
              <Route path="/services/tax-compliance" element={<div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"><div className="text-center"><h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Tax & Compliance</h1><p className="text-gray-600 dark:text-gray-400">Coming Soon - Tax & Compliance Automation Services</p></div></div>} />
              {/* Other placeholder routes */}
              <Route path="/services" element={<div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"><div className="text-center"><h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Services</h1><p className="text-gray-600 dark:text-gray-400">Services Overview Page - Coming Soon</p></div></div>} />
              <Route path="/contact" element={<div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"><div className="text-center"><h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h1><p className="text-gray-600 dark:text-gray-400">Contact Form - Coming Soon</p></div></div>} />
              <Route path="/case-studies" element={<div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"><div className="text-center"><h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Case Studies</h1><p className="text-gray-600 dark:text-gray-400">Success Stories - Coming Soon</p></div></div>} />
            </Routes>
          </main>
          <ModernFooter />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
