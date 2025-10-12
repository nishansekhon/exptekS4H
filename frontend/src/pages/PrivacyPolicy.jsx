import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../components/ui/breadcrumb';

const PrivacyPolicy = () => {
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
              <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="legal-container max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
        <p className="last-updated text-gray-600 dark:text-gray-400 text-sm italic mb-8">Last Updated: January 15, 2025</p>

        <div className="legal-content text-gray-700 dark:text-gray-300 leading-relaxed">
          <p className="mb-4">ExpTek LLC ("ExpTek," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://exptek.com (the "Site") or use our services.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">1. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">1.1 Personal Information</h3>
          <p className="mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li>Fill out a contact form or consultation request</li>
            <li>Subscribe to our newsletter or insights</li>
            <li>Register for webinars or events</li>
            <li>Download resources or whitepapers</li>
            <li>Communicate with us via email or phone</li>
          </ul>
          
          <p className="mb-4">This information may include:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li>Name and company name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Job title and industry</li>
            <li>Company size and revenue (if provided)</li>
            <li>Project requirements and timeline</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">1.2 Automatically Collected Information</h3>
          <p className="mb-4">When you visit our Site, we automatically collect certain information about your device and usage, including:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li>IP address and browser type</li>
            <li>Operating system and device information</li>
            <li>Pages viewed and time spent on pages</li>
            <li>Referring website and exit pages</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li>Respond to your inquiries and provide consulting services</li>
            <li>Send you marketing communications and service updates (with your consent)</li>
            <li>Improve our website and user experience</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Comply with legal obligations and prevent fraud</li>
            <li>Deliver personalized content and recommendations</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">3. Information Sharing and Disclosure</h2>
          <p className="mb-4">We do not sell, rent, or trade your personal information. We may share your information only in the following circumstances:</p>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">3.1 Service Providers</h3>
          <p className="mb-4">We may share information with third-party service providers who perform services on our behalf, such as:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li>Email marketing platforms (Mailchimp, SendGrid)</li>
            <li>Analytics services (Google Analytics)</li>
            <li>CRM systems (HubSpot, Salesforce)</li>
            <li>Hosting providers (Vercel, AWS)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">3.2 Legal Requirements</h3>
          <p className="mb-4">We may disclose your information if required by law or in response to valid requests by public authorities.</p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">3.3 Business Transfers</h3>
          <p className="mb-4">If ExpTek is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
          <p className="mb-4">We use cookies and similar technologies to enhance your experience. You can control cookies through your browser settings. For more information, see our <Link to="/cookie-policy" className="text-blue-600 dark:text-blue-400 underline">Cookie Policy</Link>.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">5. Your Privacy Rights</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">5.1 GDPR Rights (EU Residents)</h3>
          <p className="mb-4">If you are in the European Economic Area, you have the right to:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li>Access your personal data</li>
            <li>Rectify inaccurate data</li>
            <li>Request erasure of your data</li>
            <li>Restrict processing of your data</li>
            <li>Data portability</li>
            <li>Object to processing</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">5.2 CCPA Rights (California Residents)</h3>
          <p className="mb-4">If you are a California resident, you have the right to:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li>Know what personal information we collect and how it's used</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of the sale of personal information (we do not sell personal information)</li>
            <li>Non-discrimination for exercising your privacy rights</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">6. Data Security</h2>
          <p className="mb-4">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">7. Data Retention</h2>
          <p className="mb-4">We retain personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">8. International Data Transfers</h2>
          <p className="mb-4">Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">9. Children's Privacy</h2>
          <p className="mb-4">Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">10. Third-Party Links</h2>
          <p className="mb-4">Our Site may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to review their privacy policies.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">11. Changes to This Privacy Policy</h2>
          <p className="mb-4">We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">12. Contact Us</h2>
          <p className="mb-4">If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:</p>
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

export default PrivacyPolicy;
