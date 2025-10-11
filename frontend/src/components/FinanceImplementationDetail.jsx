import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { ChevronDown, ChevronUp, CheckCircle2, Target, TrendingUp } from 'lucide-react';

const FinanceImplementationDetail = () => {
  const [openSection, setOpenSection] = useState(null);

  const implementationSections = [
    {
      title: "Strategic Readiness",
      items: [
        "Define the transformation vision and objectives",
        "Identify process gaps and improvements", 
        "Establish measurable KPIs",
        "Conduct feasibility & impact assessments"
      ]
    },
    {
      title: "Preparation",
      items: [
        "Establish project governance and team structure",
        "Configure development and sandbox environments",
        "Define data migration strategy and approach",
        "Create detailed project timeline and milestones",
        "Establish testing strategy and quality gates",
        "Design integration architecture and interfaces"
      ]
    },
    {
      title: "Discovery", 
      items: [
        "Conduct comprehensive as-is process analysis",
        "Document current system landscape and integrations",
        "Identify pain points and improvement opportunities",
        "Define business requirements and success criteria",
        "Map current data structures and quality issues",
        "Assess organizational readiness for change"
      ]
    },
    {
      title: "Design",
      items: [
        "Blueprint target processes and data structures",
        "Define integrations and security model",
        "Design organizational structure and master data",
        "Create detailed configuration workbook",
        "Define user roles and authorization matrix",
        "Plan customization and extension requirements"
      ]
    },
    {
      title: "Realize",
      items: [
        "Configure SAP S/4HANA Cloud finance modules",
        "Build and test system integrations",
        "Execute data migration and validation",
        "Develop custom reports and analytics",
        "Configure workflow and approval processes",
        "Conduct unit testing and quality assurance"
      ]
    },
    {
      title: "Deploy",
      items: [
        "Execute production cutover and go-live activities",
        "Perform final data migration to production",
        "Conduct user acceptance testing and sign-off",
        "Execute end-to-end integration testing",
        "Provide go-live support and issue resolution",
        "Deliver post-go-live hypercare and optimization"
      ]
    },
    {
      title: "Key Success Factors",
      items: [
        "Executive sponsorship and organizational commitment",
        "Dedicated business user participation in workshops",
        "Clean and accurate master data preparation",
        "Comprehensive change management and training",
        "Rigorous testing across all business scenarios",
        "Proactive risk identification and mitigation"
      ]
    },
    {
      title: "Finance Outcomes",
      items: [
        "Faster period close cycles and improved accuracy",
        "Real-time financial visibility and reporting",
        "Automated compliance and regulatory reporting",
        "Streamlined accounts payable and receivable processes",
        "Enhanced cash flow management and forecasting",
        "Improved financial controls and audit readiness"
      ]
    },
    {
      title: "Lessons Learned & Best Practices",
      items: [
        "Fit-to-standard approach reduces implementation risk",
        "Early and continuous stakeholder engagement is critical",
        "Data quality issues must be resolved pre-migration",
        "Comprehensive testing prevents post-go-live issues",
        "Change management drives user adoption success",
        "Regular communication ensures project alignment"
      ]
    }
  ];

  const accelerators = [
    { text: "Industry Best Practices", desc: "Preconfigured solutions for finance, retail, manufacturing, and services." },
    { text: "Continuous Innovation", desc: "Adoption of quarterly SAP updates for new features and improvements." },
    { text: "Change Management for High Adoption", desc: "Structured approach to user readiness and process adoption." },
    { text: "Security & Compliance Alignment", desc: "Configured to meet both SAP governance and client-specific requirements." },
    { text: "SAP BTP & API Integration", desc: "Seamless connectivity to SAP and third-party applications." },
    { text: "Fit-to-Standard Workshop Expertise", desc: "Aligning processes with SAP standards to minimize customizations." },
    { text: "Scope Item Activation Mastery", desc: "Expert configuration of critical finance scope items." },
    { text: "Data Migration Excellence", desc: "Clean and accurate migration via SAP Migration Cockpit." },
    { text: "Real-Time Analytics Enablement", desc: "Embedded SAP Fiori and analytics apps for instant insights." },
    { text: "Automation for Efficiency", desc: "Streamlined workflows for payments, reconciliations, and reporting." },
    { text: "Global Template Approach", desc: "Scalable configuration for multi-country rollouts." },
    { text: "Post-Go-Live Optimization", desc: "Continuous fine-tuning to maximize ROI." },
    { text: "User-Centric Training", desc: "Role-based enablement ensuring strong adoption at all levels." },
    { text: "Proven SAP Activate Methodology", desc: "Structured, phased delivery for predictable success." }
  ];

  const financeOutcomes = [
    { text: "Faster Period Close", desc: "Streamlined workflows reduce close cycles by up to 30%." },
    { text: "Real-Time Financial Visibility", desc: "Instant access to profitability, liquidity, and operational KPIs." },
    { text: "Improved Cash Flow", desc: "Faster payment collections through automation and digital payment integration." },
    { text: "Enhanced Compliance", desc: "Automated tax, audit trails, and reporting for IFRS and local regulations." },
    { text: "Standardized Global Processes", desc: "Harmonized finance operations across all legal entities." },
    { text: "Reduced Manual Effort", desc: "Automation of reconciliations, allocations, and reporting tasks." },
    { text: "Accurate Revenue Recognition", desc: "Event-Based Revenue Recognition (EBRR) for precise financial reporting." },
    { text: "Optimized Working Capital", desc: "Better control over receivables, payables, and inventory valuation." },
    { text: "Scalable Operations", desc: "Configuration ready to support multi-country and multi-currency expansion." },
    { text: "Improved Decision-Making", desc: "Embedded analytics for faster, data-driven actions." },
    { text: "Lower Total Cost of Ownership", desc: "Cloud model reduces infrastructure and maintenance costs." },
    { text: "High User Adoption", desc: "Intuitive Fiori UI enabling faster onboarding and usage." }
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900/50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero/Intro Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Finance Implementation End-to-End
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-5xl mx-auto leading-relaxed">
            Implementing SAP S/4HANA Cloud, Public Edition is more than a system upgrade — it's a business transformation. 
            At ExpTek, we guide clients through every stage of the journey, ensuring a seamless transition to a future-ready cloud ERP platform.
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            {/* [CONTENT TO BE UPDATED] */}
            Our approach blends industry best practices with hands-on expertise to deliver results that are precise, scalable, and aligned with long-term goals.
          </p>
        </div>

        {/* Implementation Phases Accordion */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Implementation Phases
          </h3>
          <div className="space-y-4">
            {implementationSections.map((section, index) => (
              <Card key={index} className="overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {section.title}
                  </h4>
                  {openSection === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  )}
                </button>
                
                {openSection === index && (
                  <div className="px-6 pb-6 pt-0 border-t border-gray-100 dark:border-gray-700">
                    <div className="pt-4">
                      <ol className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">
                              {itemIndex + 1}
                            </span>
                            <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Guided Implementation Accelerators Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Guided Implementation Accelerators
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Leveraging SAP-provided tools and templates for faster delivery.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {accelerators.map((accelerator, index) => (
              <Card key={index} className="p-6 bg-white dark:bg-gray-800 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {accelerator.text}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {accelerator.desc}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Finance Outcomes Section */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
              Finance Outcomes
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Measurable business results from our finance implementations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {financeOutcomes.map((outcome, index) => (
              <Card key={index} className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-200">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {outcome.text}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {outcome.desc}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-to-r from-blue-600 to-cyan-600 border-0 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Finance Operations?
            </h3>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              {/* [CONTENT TO BE UPDATED] */}
              Let our finance implementation experts guide you through every step of your SAP S/4HANA Cloud transformation.
            </p>
            <button 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              onClick={() => console.log('Finance Implementation Consultation CTA clicked')}
            >
              Schedule Implementation Consultation
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FinanceImplementationDetail;