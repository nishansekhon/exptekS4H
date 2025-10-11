import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import ModernHeader from './components/ModernHeader';
import ModernFooter from './components/ModernFooter';
import EnhancedHomePage from './pages/EnhancedHomePage';
import FinanceImplementationPage from './pages/FinanceImplementationPage';
import DigitalPaymentsPage from './pages/DigitalPaymentsPage';
import APIIntegrationPage from './pages/APIIntegrationPage';
import ServicesOverviewPage from './pages/ServicesOverviewPage';
import ContactPage from './pages/ContactPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import AboutPage from './pages/AboutPage';
import InsightsPage from './pages/InsightsPage';
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
              <Route path="/services" element={<ServicesOverviewPage />} />
              <Route path="/services/finance-implementation" element={<FinanceImplementationPage />} />
              <Route path="/services/digital-payments" element={<DigitalPaymentsPage />} />
              {/* Service Pages - Coming Soon */}
              <Route path="/services/api-integration" element={<APIIntegrationPage />} />
              <Route path="/services/revenue-recognition" element={<ComingSoonPage title="Revenue Recognition & Compliance (EBRR)" description="Event-Based Revenue Recognition implementation and IFRS 15/ASC 606 compliance automation." features={["EBRR configuration", "IFRS 15 compliance", "ASC 606 implementation", "Automated revenue posting"]} />} />
              <Route path="/services/banking-treasury" element={<ComingSoonPage title="Banking & Treasury Optimization" description="Optimize cash management, bank connectivity, and treasury operations." features={["Multi-bank connectivity", "Cash positioning", "Treasury workflows", "Liquidity management"]} />} />
              <Route path="/services/tax-compliance" element={<ComingSoonPage title="Tax & Compliance Automation" description="Multi-country tax compliance and automated reporting solutions." features={["Tax determination", "SOX compliance", "Regulatory reporting", "Multi-jurisdiction support"]} />} />
              <Route path="/services/analytics-reporting" element={<ComingSoonPage title="Analytics & Reporting" description="SAP Fiori apps, custom dashboards, and financial analytics solutions." features={["Financial statements", "Management reporting", "Embedded analytics", "Real-time dashboards"]} />} />
              <Route path="/services/support-optimization" element={<ComingSoonPage title="Post-Go-Live Support & Optimization" description="24/7 support, continuous improvement, and system optimization services." features={["24/7 support", "Performance tuning", "Continuous optimization", "User training"]} />} />
              {/* Other placeholder routes */}
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
