import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { ChevronDown, ChevronUp, CheckCircle2, Target, TrendingUp, Shield } from 'lucide-react';

const FinanceModules = () => {
  const [expandedModule, setExpandedModule] = useState(null);

  const financeModules = [
    {
      id: 'general-ledger',
      icon: '💰',
      title: 'General Ledger (FI-GL)',
      subtitle: 'Chart of Accounts, Posting Logic, Period-End Close',
      description: 'Core financial accounting foundation with intelligent posting and automated period-end processing.',
      features: [
        'Flexible Chart of Accounts design with segment reporting',
        'Real-time financial postings with document splitting',
        'Automated period-end close with task monitoring',
        'Multi-currency processing with real-time conversion',
        'Financial statement preparation and consolidation',
        'Integration with all SAP modules for complete audit trail'
      ],
      benefits: [
        '75% faster financial close process',
        'Real-time financial visibility',
        '100% audit compliance with automated controls',
        'Reduced manual journal entries by 80%'
      ],
      metrics: {
        implementation: '2-3 weeks',
        complexity: 'Medium',
        roi: '250%'
      }
    },
    {
      id: 'accounts-payable',
      icon: '📋',
      title: 'Accounts Payable (FI-AP)',
      subtitle: 'Vendor Management, Invoice Processing, Payment Automation',
      description: 'Streamlined vendor lifecycle management with intelligent invoice processing and automated payments.',
      features: [
        'Vendor master data management with duplicate detection',
        'Three-way matching (PO, receipt, invoice) automation',
        'Electronic invoice processing and approval workflows',
        'Payment optimization with cash flow forecasting',
        'Vendor performance analytics and scorecards',
        'Integration with procurement and expense management'
      ],
      benefits: [
        '60% reduction in invoice processing time',
        '95% straight-through processing rate',
        '40% early payment discount capture improvement',
        'Elimination of duplicate payments'
      ],
      metrics: {
        implementation: '2-3 weeks',
        complexity: 'Medium',
        roi: '180%'
      }
    },
    {
      id: 'accounts-receivable',
      icon: '💳',
      title: 'Accounts Receivable (FI-AR)',
      subtitle: 'Customer Billing, Collections, Cash Application',
      description: 'Automated customer billing and collections with intelligent cash application and dispute management.',
      features: [
        'Automated invoice generation and delivery',
        'Credit management with real-time scoring',
        'Electronic payment processing and bank reconciliation',
        'Dunning process automation with escalation workflows',
        'Customer portal for self-service capabilities',
        'AI-powered cash application with matching algorithms'
      ],
      benefits: [
        '50% reduction in Days Sales Outstanding (DSO)',
        '85% automated cash application accuracy',
        '30% improvement in collection effectiveness',
        'Real-time customer credit risk monitoring'
      ],
      metrics: {
        implementation: '2-3 weeks',
        complexity: 'Medium',
        roi: '220%'
      }
    },
    {
      id: 'asset-accounting',
      icon: '🏢',
      title: 'Asset Accounting (FI-AA)',
      subtitle: 'Fixed Assets, Depreciation, Asset Lifecycle Management',
      description: 'Complete asset lifecycle management from acquisition to disposal with automated depreciation calculations.',
      features: [
        'Asset master data management with hierarchical structures',
        'Multiple depreciation methods and parallel ledgers',
        'Asset transfers and organizational assignments',
        'Impairment testing and revaluation processes',
        'Asset retirement obligations (ARO) processing',
        'Integration with controlling for internal reporting'
      ],
      benefits: [
        '90% automation of depreciation calculations',
        'Real-time asset visibility and tracking',
        '100% compliance with accounting standards',
        'Simplified asset reporting and analytics'
      ],
      metrics: {
        implementation: '2-3 weeks',
        complexity: 'Low-Medium',
        roi: '150%'
      }
    },
    {
      id: 'controlling',
      icon: '📊',
      title: 'Controlling (CO)',
      subtitle: 'Cost Centers, Profit Centers, Internal Orders',
      description: 'Management accounting with cost center management, profitability analysis, and internal reporting.',
      features: [
        'Cost center accounting with activity-based costing',
        'Profit center accounting for segment reporting',
        'Internal orders for project and campaign tracking',
        'Product costing with material ledger integration',
        'Profitability analysis (CO-PA) with real-time allocation',
        'Management reporting with drill-down capabilities'
      ],
      benefits: [
        '70% improvement in cost transparency',
        'Real-time profitability insights',
        '50% faster management reporting',
        'Enhanced decision-making with detailed cost analytics'
      ],
      metrics: {
        implementation: '3-4 weeks',
        complexity: 'High',
        roi: '280%'
      }
    },
    {
      id: 'financial-reporting',
      icon: '📈',
      title: 'Financial Reporting & Analytics',
      subtitle: 'Financial Statements, Management Reporting, Analytics',
      description: 'Comprehensive financial reporting with embedded analytics and real-time dashboards.',
      features: [
        'Standard financial statements with drill-down capability',
        'Management reporting with KPI dashboards',
        'Embedded analytics with predictive insights',
        'Regulatory reporting for multiple jurisdictions',
        'Real-time financial consolidation',
        'Mobile-friendly executive dashboards'
      ],
      benefits: [
        '80% faster report generation',
        'Real-time financial insights',
        'Automated regulatory compliance reporting',
        'Self-service analytics for business users'
      ],
      metrics: {
        implementation: '2-3 weeks',
        complexity: 'Medium',
        roi: '200%'
      }
    },
    {
      id: 'treasury',
      icon: '💱',
      title: 'Treasury & Risk Management',
      subtitle: 'Cash Management, Foreign Exchange, Bank Integration',
      description: 'Advanced treasury operations with cash positioning, FX management, and integrated bank connectivity.',
      features: [
        'Multi-bank connectivity with real-time integration',
        'Cash positioning and forecasting',
        'Foreign exchange risk management',
        'Liquidity management and investment tracking',
        'Payment factory for centralized processing',
        'Bank fee analysis and optimization'
      ],
      benefits: [
        '60% improvement in cash visibility',
        '40% reduction in FX exposure risk',
        'Centralized payment processing efficiency',
        'Real-time bank reconciliation'
      ],
      metrics: {
        implementation: '3-4 weeks',
        complexity: 'High',
        roi: '190%'
      }
    },
    {
      id: 'compliance',
      icon: '⚖️',
      title: 'Compliance & Controls',
      subtitle: 'Tax Compliance, Audit Trail, Regulatory Reporting',
      description: 'Built-in compliance controls with automated tax calculations and comprehensive audit trails.',
      features: [
        'Automated tax determination and calculations',
        'SOX compliance with automated controls testing',
        'Complete audit trail with document management',
        'Regulatory reporting for multiple jurisdictions',
        'Risk management and control monitoring',
        'Data privacy and security compliance (GDPR, etc.)'
      ],
      benefits: [
        '100% audit readiness with automated controls',
        '90% reduction in compliance preparation time',
        'Real-time risk monitoring and alerts',
        'Simplified regulatory reporting'
      ],
      metrics: {
        implementation: '2-3 weeks',
        complexity: 'Medium-High',
        roi: '160%'
      }
    }
  ];

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {financeModules.map((module) => (
        <Collapsible key={module.id} open={expandedModule === module.id} onOpenChange={() => toggleModule(module.id)}>
          <CollapsibleTrigger asChild>
            <Card className={`p-6 text-center hover:shadow-lg transition-all duration-300 group cursor-pointer ${
              expandedModule === module.id ? 'ring-2 ring-blue-500 shadow-xl' : ''
            }`}>
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {module.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {module.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {module.subtitle}
              </p>
              <div className="flex justify-center">
                {expandedModule === module.id ? (
                  <ChevronUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </div>
            </Card>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="mt-4">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-200 dark:border-blue-800">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-gray-900 dark:text-white flex items-center">
                  <Target className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                  Module Overview
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {module.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {module.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Business Benefits */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                    Business Benefits
                  </h4>
                  <ul className="space-y-2">
                    {module.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Implementation Metrics */}
                <div className="bg-white/60 dark:bg-gray-800/60 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <Shield className="h-4 w-4 text-blue-500 mr-2" />
                    Implementation Details
                  </h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {module.metrics.implementation}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Timeline</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-600 dark:text-green-400">
                        {module.metrics.complexity}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Complexity</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                        {module.metrics.roi}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">ROI</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
};

export default FinanceModules;