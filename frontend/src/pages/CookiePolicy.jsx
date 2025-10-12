import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../components/ui/breadcrumb';

const CookiePolicy = () => {
  return (
    <div className="legal-page min-h-screen bg-white dark:bg-gray-900">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 pt-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Cookie Policy</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="legal-container max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Cookie Policy</h1>
        <p className="last-updated text-gray-600 dark:text-gray-400 text-sm italic mb-8">Last Updated: January 15, 2025</p>

        <div className="legal-content text-gray-700 dark:text-gray-300 leading-relaxed">
          <p className="mb-4">This Cookie Policy explains how ExpTek LLC ("we," "us," or "our") uses cookies and similar technologies on our website https://exptek.com.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">1. What Are Cookies?</h2>
          <p className="mb-4">Cookies are small text files placed on your device when you visit a website. They help websites remember your preferences and improve your browsing experience.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">2. Types of Cookies We Use</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">2.1 Essential Cookies</h3>
          <p className="mb-4">These cookies are necessary for the Site to function properly. They enable basic functions like page navigation and access to secure areas.</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li>Session cookies (deleted when you close your browser)</li>
            <li>Security cookies (prevent fraudulent activity)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">2.2 Analytics Cookies</h3>
          <p className="mb-4">We use analytics cookies to understand how visitors interact with our Site.</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li><strong>Google Analytics:</strong> Tracks page views, sessions, bounce rates, and user demographics</li>
            <li><strong>Purpose:</strong> Improve website performance and user experience</li>
            <li><strong>Retention:</strong> Up to 2 years</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">2.3 Functionality Cookies</h3>
          <p className="mb-4">These cookies remember your preferences and choices.</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li>Language preferences</li>
            <li>Theme settings (light/dark mode)</li>
            <li>Form data (to prevent re-entry)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">2.4 Marketing Cookies</h3>
          <p className="mb-4">With your consent, we may use marketing cookies to:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li>Show relevant advertisements</li>
            <li>Track campaign effectiveness</li>
            <li>Retarget website visitors</li>
          </ul>
          <p className="mb-4"><strong>Third-party providers:</strong> LinkedIn Insights, Google Ads (if applicable)</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">3. How We Use Cookies</h2>
          <p className="mb-4">We use cookies to:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li>Remember your preferences and settings</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Improve website functionality and performance</li>
            <li>Deliver personalized content and recommendations</li>
            <li>Measure the effectiveness of marketing campaigns</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">4. Third-Party Cookies</h2>
          <p className="mb-4">We use third-party services that may set cookies on your device:</p>
          
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Service</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Purpose</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Privacy Policy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Google Analytics</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Website analytics</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">Google Privacy Policy</a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">LinkedIn Insights</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Business analytics</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">LinkedIn Privacy Policy</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">5. Managing Cookies</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">5.1 Browser Settings</h3>
          <p className="mb-4">You can control cookies through your browser settings:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li><strong>Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies</li>
            <li><strong>Firefox:</strong> Options &gt; Privacy & Security &gt; Cookies</li>
            <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies</li>
            <li><strong>Edge:</strong> Settings &gt; Cookies and Site Permissions</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">5.2 Opt-Out Tools</h3>
          <p className="mb-4">You can opt-out of specific cookies:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">Google Analytics Opt-out</a></li>
            <li><strong>All advertising cookies:</strong> <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">DAA Opt-Out</a></li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">5.3 Cookie Consent Manager</h3>
          <p className="mb-4">You can manage your cookie preferences using our cookie consent banner when you first visit the Site.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">6. Impact of Disabling Cookies</h2>
          <p className="mb-4">If you disable cookies, some features of the Site may not function properly:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li>Preference settings may not be saved</li>
            <li>Forms may require re-entry of information</li>
            <li>We cannot provide personalized content</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">7. Do Not Track Signals</h2>
          <p className="mb-4">Some browsers support "Do Not Track" (DNT) signals. Currently, there is no industry standard for responding to DNT signals. We do not currently respond to DNT signals.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">8. Updates to This Policy</h2>
          <p className="mb-4">We may update this Cookie Policy periodically. Changes will be posted on this page with an updated "Last Updated" date.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">9. Contact Us</h2>
          <p className="mb-4">For questions about our use of cookies, contact:</p>
          <p className="mb-4">
            <strong>ExpTek LLC</strong><br />
            Email: hr@exptek.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
