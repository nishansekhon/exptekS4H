import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../components/ui/breadcrumb';

const DoNotSell = () => {
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
              <BreadcrumbPage>Do Not Sell My Personal Information</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="legal-container max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Do Not Sell My Personal Information</h1>
        <p className="last-updated text-gray-600 dark:text-gray-400 text-sm italic mb-8">Last Updated: January 15, 2025</p>

        <div className="legal-content text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">California Consumer Privacy Act (CCPA) Notice</h2>
          <p className="mb-4">ExpTek LLC respects your privacy rights under the California Consumer Privacy Act (CCPA). This page explains your rights and how to exercise them.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">We Do Not Sell Your Personal Information</h2>
          <p className="mb-4"><strong>Important:</strong> ExpTek does NOT sell, rent, or trade personal information to third parties for monetary or other valuable consideration. We have not sold personal information in the past 12 months.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">Your California Privacy Rights</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Right to Know</h3>
          <p className="mb-4">You have the right to request information about:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li>Categories of personal information we collect</li>
            <li>Sources of personal information</li>
            <li>Business purposes for collecting personal information</li>
            <li>Categories of third parties with whom we share information</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Right to Delete</h3>
          <p className="mb-4">You have the right to request deletion of personal information we have collected from you, subject to certain exceptions.</p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Right to Opt-Out</h3>
          <p className="mb-4">While we do not sell personal information, you have the right to opt-out of any future sales should our practices change.</p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Right to Non-Discrimination</h3>
          <p className="mb-4">We will not discriminate against you for exercising your CCPA rights. This means we will not:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li>Deny goods or services</li>
            <li>Charge different prices or rates</li>
            <li>Provide different quality of services</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">Personal Information We Collect</h2>
          <p className="mb-4">We collect the following categories of personal information:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li><strong>Identifiers:</strong> Name, email, phone number, company name</li>
            <li><strong>Commercial Information:</strong> Services inquired about, project requirements</li>
            <li><strong>Internet Activity:</strong> Browsing history, IP address, cookies</li>
            <li><strong>Professional Information:</strong> Job title, company size, industry</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">How We Use Personal Information</h2>
          <p className="mb-4">We use personal information for:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li>Providing consulting services</li>
            <li>Responding to inquiries</li>
            <li>Marketing communications (with consent)</li>
            <li>Website analytics and improvements</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">Third Parties We Share With</h2>
          <p className="mb-4">We may share information with:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li>Service providers (email, analytics, CRM)</li>
            <li>Professional advisors (legal, accounting)</li>
            <li>Law enforcement (when required by law)</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">How to Exercise Your Rights</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Submit a Request</h3>
          <p className="mb-4">To exercise your CCPA rights, contact us:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li><strong>Email:</strong> hr@exptek.com</li>
            <li><strong>Subject Line:</strong> "CCPA Privacy Request"</li>
            <li><strong>Include:</strong> Your name, email, and specific request (know, delete, or opt-out)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Verification Process</h3>
          <p className="mb-4">To protect your privacy, we will verify your identity before fulfilling your request. We may ask for:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li>Email confirmation</li>
            <li>Matching information (name, company)</li>
            <li>Additional verification if requesting sensitive data</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Response Timeline</h3>
          <p className="mb-4">We will respond to verified requests within 45 days. If we need more time, we will notify you and explain the delay.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">Authorized Agent</h2>
          <p className="mb-4">You may designate an authorized agent to submit requests on your behalf. The agent must provide:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li>Written authorization from you</li>
            <li>Proof of their identity</li>
            <li>Verification that they are authorized to act on your behalf</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">Minors Under 16</h2>
          <p className="mb-4">We do not knowingly sell personal information of minors under 16 years of age.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">Changes to This Notice</h2>
          <p className="mb-4">We may update this notice. Material changes will be posted with an updated "Last Updated" date.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">Contact Information</h2>
          <p className="mb-4">For questions about your California privacy rights:</p>
          <p className="mb-4">
            <strong>ExpTek LLC</strong><br />
            28345 Beck Road, Suite 406<br />
            Wixom, Michigan 48393<br />
            Email: hr@exptek.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoNotSell;