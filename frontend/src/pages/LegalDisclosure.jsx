import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../components/ui/breadcrumb';

const LegalDisclosure = () => {
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
              <BreadcrumbPage>Legal Disclosure</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="legal-container max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Legal Disclosure</h1>
        <p className="last-updated text-gray-600 dark:text-gray-400 text-sm italic mb-8">Last Updated: January 15, 2025</p>

        <div className="legal-content text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">Company Information</h2>
          <p className="mb-4">
            <strong>Legal Entity:</strong> ExpTek LLC<br />
            <strong>Jurisdiction:</strong> State of Michigan, United States<br />
            <strong>County:</strong> Oakland County<br />
            <strong>Business Address:</strong><br />
            28345 Beck Road, Suite 406<br />
            Wixom, Michigan 48393<br />
            United States
          </p>
          <p className="mb-4">
            <strong>Email:</strong> hr@exptek.com
          </p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">Business Type</h2>
          <p className="mb-4">ExpTek LLC is a professional consulting firm specializing in SAP S/4HANA Public Cloud Finance implementation and optimization services.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">Professional Services Disclaimer</h2>
          <p className="mb-4">ExpTek provides professional consulting services related to SAP enterprise software. We are not a software vendor or product company. All consulting engagements are subject to separate written agreements and statements of work.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">SAP Trademark Disclaimer</h2>
          <p className="mb-4">SAP, SAP S/4HANA, SAP Business Technology Platform, SAP Activate, SAP Fiori, SAP HANA, and all other SAP product and service names mentioned on this website are trademarks or registered trademarks of SAP SE (or an SAP affiliate company) in Germany and other countries.</p>
          
          <p className="mb-4">ExpTek LLC is an independent consulting firm and is not affiliated with, endorsed by, sponsored by, or otherwise connected with SAP SE or any SAP affiliate company. All SAP trademarks are used for informational purposes only to describe our areas of expertise and the services we provide.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">Third-Party Trademarks</h2>
          <p className="mb-4">All third-party trademarks, service marks, and logos mentioned on this website (including but not limited to Salesforce, Concur, Workday, Oracle, Microsoft, Google, AWS, and others) are the property of their respective owners. Use of these names, logos, and brands does not imply endorsement.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">No Partnership or Agency</h2>
          <p className="mb-4">Nothing on this website creates or implies:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li>A partnership, joint venture, or agency relationship between ExpTek and SAP SE</li>
            <li>Any authorization to bind or represent SAP SE</li>
            <li>Any sponsorship or approval by SAP SE of ExpTek's services</li>
            <li>Any official certification beyond individual consultant certifications</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">Content Accuracy and Currency</h2>
          <p className="mb-4">While we strive to provide accurate and up-to-date information, we make no representations or warranties regarding:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li>Accuracy, completeness, or reliability of website content</li>
            <li>SAP product features, pricing, or availability (which are subject to change)</li>
            <li>Implementation timelines or project outcomes</li>
            <li>Cost savings or ROI projections (which vary by circumstance)</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">No Guarantee of Results</h2>
          <p className="mb-4">Case studies, testimonials, and statistics on this website are based on specific client engagements and do not guarantee similar results. Actual outcomes depend on numerous factors including:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li>Client's existing systems and processes</li>
            <li>Data quality and organizational readiness</li>
            <li>Scope and complexity of implementation</li>
            <li>Client resource availability and commitment</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">Professional Liability</h2>
          <p className="mb-4">ExpTek maintains professional liability insurance appropriate for our business activities. Consulting engagements are governed by separate agreements that define the scope of liability and warranties.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">Regulatory Compliance</h2>
          <p className="mb-4">ExpTek complies with applicable laws and regulations including:</p>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li>General Data Protection Regulation (GDPR) for EU clients</li>
            <li>California Consumer Privacy Act (CCPA)</li>
            <li>US federal and state business regulations</li>
            <li>Industry-specific compliance requirements as applicable</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">Export Controls</h2>
          <p className="mb-4">Our services and any deliverables may be subject to U.S. export control laws and regulations. Clients are responsible for compliance with all applicable export laws.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">Removal Requests</h2>
          <p className="mb-4">If you believe any content on our website infringes your intellectual property rights or contains inaccurate information about your company, please contact us at hr@exptek.com. We will review and respond to legitimate requests within 30 business days.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">Dispute Resolution</h2>
          <p className="mb-4">Any disputes arising from or relating to this website or our services shall be governed by the laws of the State of Michigan and resolved in the courts of Oakland County, Michigan.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">Content License</h2>
          <p className="mb-4">All original content on this website, including but not limited to text, graphics, logos, images, and software, is the property of ExpTek LLC and is protected by United States and international copyright laws.</p>
          
          <p className="mb-4">You may not reproduce, distribute, modify, or create derivative works from our content without express written permission, except as permitted for personal, non-commercial use.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">Website Availability</h2>
          <p className="mb-4">We strive to maintain website availability but do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue the website at any time without notice.</p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">Contact for Legal Matters</h2>
          <p className="mb-4">For legal inquiries, intellectual property matters, or formal notices:</p>
          <p className="mb-4">
            <strong>ExpTek LLC</strong><br />
            Legal Department<br />
            28345 Beck Road, Suite 406<br />
            Wixom, Michigan 48393<br />
            United States<br />
            Email: hr@exptek.com
          </p>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4">Last Updated</h2>
          <p className="mb-4">This Legal Disclosure was last updated on January 15, 2025. We reserve the right to update this disclosure at any time. Material changes will be reflected in the "Last Updated" date above.</p>
        </div>
      </div>
    </div>
  );
};

export default LegalDisclosure;