import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../components/ui/breadcrumb';

const TermsOfUse = () => {
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
              <BreadcrumbPage>Terms of Use</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="legal-container max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Terms of Use</h1>
        <p className="last-updated text-gray-600 dark:text-gray-400 text-sm italic mb-8">Last Updated: January 15, 2025</p>

        <div className="legal-content text-gray-700 dark:text-gray-300 leading-relaxed">
          <p className="mb-4">Welcome to ExpTek LLC ("ExpTek," "we," "us," or "our"). These Terms of Use ("Terms") govern your access to and use of our website https://exptek.com (the "Site") and services. By accessing or using the Site, you agree to be bound by these Terms.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">By accessing or using our Site, you acknowledge that you have read, understood, and agree to be bound by these Terms and our <Link to="/privacy-policy" className="text-blue-600 dark:text-blue-400 underline">Privacy Policy</Link>. If you do not agree to these Terms, please do not use the Site.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">2. Use of the Site</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">2.1 Permitted Use</h3>
          <p className="mb-4">You may use the Site for lawful purposes only and in accordance with these Terms. You agree not to:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon intellectual property rights</li>
            <li>Transmit harmful code or viruses</li>
            <li>Engage in unauthorized data mining or scraping</li>
            <li>Interfere with the Site's operation or security</li>
            <li>Impersonate ExpTek or any person or entity</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">2.2 User Accounts</h3>
          <p className="mb-4">If you create an account on our Site, you are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">3. Intellectual Property Rights</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">3.1 ExpTek Content</h3>
          <p className="mb-4">All content on the Site, including text, graphics, logos, images, software, and design, is the property of ExpTek LLC or its licensors and is protected by copyright, trademark, and other intellectual property laws.</p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">3.2 SAP Trademarks</h3>
          <p className="mb-4">SAP, SAP S/4HANA, SAP Business Technology Platform, and all related SAP product names are trademarks or registered trademarks of SAP SE in Germany and other countries. ExpTek is an independent consulting firm and is not affiliated with, endorsed by, or sponsored by SAP SE.</p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">3.3 Limited License</h3>
          <p className="mb-4">We grant you a limited, non-exclusive, non-transferable license to access and use the Site for personal or internal business purposes. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">4. User-Generated Content</h2>
          <p className="mb-4">If you submit content to our Site (e.g., comments, feedback, or testimonials), you grant ExpTek a worldwide, royalty-free, perpetual license to use, reproduce, modify, and display such content.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">5. Professional Services</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">5.1 Consulting Engagements</h3>
          <p className="mb-4">Any consulting services provided by ExpTek are subject to separate written agreements. These Terms do not create a consulting relationship or obligation to provide services.</p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">5.2 No Guarantees</h3>
          <p className="mb-4">Information on the Site is for general informational purposes only. We make no guarantees regarding implementation timelines, cost savings, or project outcomes. Actual results may vary based on specific circumstances.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">6. Third-Party Links and Services</h2>
          <p className="mb-4">Our Site may contain links to third-party websites or services that are not owned or controlled by ExpTek. We are not responsible for the content, privacy policies, or practices of any third-party sites.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">7. Disclaimers</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">7.1 "As Is" Basis</h3>
          <p className="mb-4">THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.</p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">7.2 No Warranty</h3>
          <p className="mb-4">We do not warrant that:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li>The Site will be uninterrupted, secure, or error-free</li>
            <li>Information on the Site is accurate, complete, or current</li>
            <li>Defects will be corrected</li>
            <li>The Site is free from viruses or harmful components</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">8. Limitation of Liability</h2>
          <p className="mb-4">TO THE FULLEST EXTENT PERMITTED BY LAW, EXPTEK SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li>Your use or inability to use the Site</li>
            <li>Any unauthorized access to or use of our servers</li>
            <li>Any interruption or cessation of transmission to or from the Site</li>
            <li>Any bugs, viruses, or similar harmful code</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">9. Indemnification</h2>
          <p className="mb-4">You agree to indemnify, defend, and hold harmless ExpTek, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising out of your use of the Site or violation of these Terms.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">10. Governing Law and Jurisdiction</h2>
          <p className="mb-4">These Terms are governed by the laws of the State of Michigan, United States, without regard to conflict of law principles. Any disputes shall be resolved exclusively in the courts of Oakland County, Michigan.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">11. Changes to Terms</h2>
          <p className="mb-4">We reserve the right to modify these Terms at any time. Material changes will be effective upon posting. Your continued use of the Site constitutes acceptance of the modified Terms.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">12. Severability</h2>
          <p className="mb-4">If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">13. Contact Information</h2>
          <p className="mb-4">For questions about these Terms, please contact:</p>
          <p className="mb-4">
            <strong>ExpTek LLC</strong><br />
            28345 Beck Road, Suite 406<br />
            Wixom, Michigan 48393<br />
            United States<br />
            Email: hr@exptek.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
