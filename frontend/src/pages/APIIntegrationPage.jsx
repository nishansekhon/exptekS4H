import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/ui/collapsible';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../components/ui/breadcrumb';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  ArrowRight, 
  Download, 
  Calendar, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  Globe,
  Zap,
  RefreshCw,
  Shield,
  Database,
  Link2,
  Clock,
  TrendingUp,
  Users,
  AlertTriangle,
  Eye,
  Lock,
  BarChart3,
  FileText,
  Target,
  Building2,
  CreditCard,
  Layers
} from 'lucide-react';
import APICapabilitiesSection from '../components/APICapabilitiesSection';

const APIIntegrationPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [expandedUseCase, setExpandedUseCase] = useState(null);

  const handleCTAClick = (ctaType) => {
    console.log(`API Integration CTA clicked: ${ctaType}`);
  };

  const handleDownloadClick = (resource) => {
    console.log(`Download requested: ${resource}`);
  };

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const toggleUseCase = (index) => {
    setExpandedUseCase(expandedUseCase === index ? null : index);
  };

  const apiPackages = [
    {
      id: 1,
      title: 'Financial Accounting & Close',
      subtitle: 'Accounting and Financial Close Data Products API',
      icon: <BarChart3 className="h-8 w-8" />,
      iconEmoji: '📊',
      apiCount: 29,
      features: [
        'GL account balances',
        'Journal entry posting', 
        'Period-end close automation',
        'Financial statements API'
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 2,
      title: 'Accounts Payable & Receivable',
      subtitle: 'AP/AR Operations Data Products API',
      icon: <CreditCard className="h-8 w-8" />,
      iconEmoji: '💰',
      apiCount: 15,
      features: [
        'Invoice processing',
        'Payment processing',
        'Customer/vendor master data',
        'Dunning and collections'
      ],
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'Digital Payments & Customer Portal',
      subtitle: 'Cloud for Customer Payments API',
      icon: <CreditCard className="h-8 w-8" />,
      iconEmoji: '💳',
      apiCount: 5,
      features: [
        'Payment card processing',
        'Customer payment portal',
        'Payment status tracking',
        'Reconciliation data'
      ],
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 4,
      title: 'Banking & Treasury',
      subtitle: 'Bank Account Management API',
      icon: <Building2 className="h-8 w-8" />,
      iconEmoji: '🏦',
      apiCount: 8,
      features: [
        'Bank master data',
        'Bank statement processing',
        'Cash positioning',
        'Liquidity management'
      ],
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 5,
      title: 'Revenue Recognition (EBRR)',
      subtitle: 'Revenue Growth Management API',
      icon: <TrendingUp className="h-8 w-8" />,
      iconEmoji: '📈',
      apiCount: 3,
      features: [
        'Event-based revenue recognition',
        'Contract data',
        'Revenue schedules',
        'Compliance reporting'
      ],
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 6,
      title: 'Financial Reporting & Analytics',
      subtitle: 'Financial Operations Data Products API',
      icon: <FileText className="h-8 w-8" />,
      iconEmoji: '📊',
      apiCount: 10,
      features: [
        'Real-time financial KPIs',
        'Custom report data',
        'Profitability analysis',
        'Management reporting'
      ],
      color: 'from-violet-500 to-purple-600'
    }
  ];

  const integrationPatterns = [
    {
      title: 'Real-Time Synchronization',
      icon: '⚡',
      features: [
        'OData V4 RESTful APIs',
        'Immediate data updates',
        'Event-driven triggers',
        'Sub-second latency'
      ],
      useCases: 'Payment processing, invoice creation, GL posting'
    },
    {
      title: 'Batch Integration',
      icon: '📦',
      features: [
        'Scheduled data exchange',
        'High-volume processing',
        'Delta change detection',
        'Error recovery'
      ],
      useCases: 'Master data sync, financial close, reporting'
    },
    {
      title: 'Hybrid Approach',
      icon: '🔄',
      features: [
        'Combination of real-time and batch',
        'Optimized for performance',
        'Business-driven triggers',
        'Flexible scheduling'
      ],
      useCases: 'Multi-system landscapes, complex workflows'
    }
  ];

  const externalSystems = [
    {
      name: 'Salesforce Integration',
      subtitle: 'CRM to Finance Data Flow',
      processes: [
        'Opportunity → Sales Order → Invoice',
        'Customer Master Sync',
        'Payment Status Updates', 
        'Revenue Recognition Triggers'
      ],
      apis: ['Sales Data Products API', 'Customer Master API', 'Revenue Recognition API'],
      benefits: [
        'Quote-to-cash automation',
        'Real-time revenue visibility',
        'Unified customer view'
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Concur Integration',
      subtitle: 'Expense to Finance Automation',
      processes: [
        'Expense Report → AP Invoice',
        'Employee Master Sync',
        'GL Account Mapping',
        'Automatic Posting'
      ],
      apis: ['AP Operations API', 'Employee Master API', 'Journal Entry API'],
      benefits: [
        'Automated expense processing',
        'Policy compliance',
        'Faster reimbursements'
      ],
      color: 'from-green-500 to-teal-600'
    },
    {
      name: 'Payment Gateway Integration',
      subtitle: 'Digital Payment Connectivity',
      processes: [
        'Stripe',
        'Worldpay',
        'PayPal',
        'Adyen'
      ],
      apis: ['Cloud for Customer Payments API', 'Digital Payments Add-On API'],
      benefits: [
        'PCI-DSS compliance',
        'Multiple payment methods',
        'Automated reconciliation'
      ],
      color: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'Tax Engine Integration',
      subtitle: 'Automated Tax Compliance',
      processes: [
        'Vertex',
        'Avalara',
        'Thomson Reuters'
      ],
      apis: ['Tax Determination API', 'GL Posting API'],
      benefits: [
        'Real-time tax calculation',
        'Multi-jurisdiction support',
        'Automated compliance'
      ],
      color: 'from-orange-500 to-red-600'
    }
  ];

  const implementationSteps = [
    {
      number: 1,
      title: 'Discovery & Mapping',
      duration: '1-4 weeks',
      tasks: [
        'Identify integration touchpoints',
        'Document data flows',
        'Map API endpoints',
        'Define transformation rules'
      ]
    },
    {
      number: 2,
      title: 'Design & Architecture',
      duration: '2-4 weeks', 
      tasks: [
        'Integration architecture design',
        'Security & authentication setup',
        'Error handling strategy',
        'Performance optimization'
      ]
    },
    {
      number: 3,
      title: 'Development & Configuration',
      duration: '2-6 weeks',
      tasks: [
        'API connection setup',
        'Data mapping configuration',
        'Transformation logic',
        'Custom API development (if needed)'
      ]
    },
    {
      number: 4,
      title: 'Testing & Validation',
      duration: '1-2 weeks',
      tasks: [
        'Unit testing',
        'Integration testing',
        'Performance testing',
        'Security validation'
      ]
    },
    {
      number: 5,
      title: 'Deployment & Monitoring',
      duration: '1 week',
      tasks: [
        'Production deployment',
        'Monitoring dashboard setup',
        'Error alerting',
        'Documentation delivery'
      ]
    }
  ];

  const useCases = [
    {
      title: 'Automated Invoice-to-Cash',
      problem: 'Manual invoice creation from sales orders',
      solution: 'Salesforce → SAP S/4HANA integration',
      apis: 'Sales Order API, Billing API, AR API',
      result: '70% reduction in manual effort'
    },
    {
      title: 'Expense Report Automation',
      problem: 'Delayed expense reimbursements',
      solution: 'Concur → SAP S/4HANA integration',
      apis: 'AP Operations API, Payment API',
      result: 'Same-day reimbursement processing'
    },
    {
      title: 'Real-Time Payment Processing',
      problem: 'Payment authorization delays',
      solution: 'Payment gateway → Digital Payments API',
      apis: 'Cloud for Customer Payments API',
      result: '99.9% authorization success rate'
    },
    {
      title: 'Multi-Country Tax Compliance',
      problem: 'Complex tax calculations',
      solution: 'Tax engine → SAP S/4HANA integration',
      apis: 'Tax Determination API, GL Posting API',
      result: '100% compliance across 15 countries'
    }
  ];

  const faqData = [
    {
      question: 'Which APIs are available for SAP S/4HANA Public Cloud Finance?',
      answer: 'SAP provides 800+ APIs for S/4HANA Public Cloud through the API Business Hub, with finance-specific packages covering Accounting, AP/AR, Payments, Banking, Revenue Recognition, and Reporting.'
    },
    {
      question: 'Can we integrate with non-SAP systems?',
      answer: 'Yes, SAP APIs are based on open standards (REST/OData) and can integrate with any system that supports standard protocols including Salesforce, Concur, payment gateways, and custom applications.'
    },
    {
      question: 'How do you ensure API security?',
      answer: 'We implement OAuth 2.0 authentication, TLS encryption, API key rotation, rate limiting, and comprehensive audit logging to ensure secure integrations.'
    },
    {
      question: 'What\'s the typical timeline for API integration?',
      answer: 'Simple integrations typically take 2-3 months, while complex multi-system integrations require 4-6 months depending on scope, data volume, and transformation complexity.'
    },
    {
      question: 'Do you support real-time integrations?',
      answer: 'Yes, we implement both real-time (synchronous) and batch (asynchronous) integrations based on business requirements and system capabilities.'
    },
    {
      question: 'What happens if an API integration fails?',
      answer: 'We implement robust error handling with automatic retry logic, error queues, alerting mechanisms, and fallback procedures to ensure business continuity.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-950">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 pt-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/services">Services</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>API Integration</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* SECTION 1 - HERO SECTION */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50 dark:text-blue-400 dark:border-blue-800 dark:bg-blue-950/50">
              API Integration Services
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              API & External System Integration
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Seamless connectivity between SAP S/4HANA Public Cloud Finance and your enterprise ecosystem
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {/* [CONTENT TO BE UPDATED] */}
              Connect your SAP Finance system with Salesforce, Concur, payment providers, and other critical business 
              applications through robust API integrations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
                onClick={() => handleCTAClick('schedule-integration-consultation')}
              >
                Schedule Integration Consultation
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/50 px-8 py-6 text-lg"
                onClick={() => handleDownloadClick('integration-guide')}
              >
                Download Integration Guide
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* Hero Visual - Original API Integration Design */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-xl p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">API Integration Hub</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Finance System Connectivity</p>
                </div>
                
                {/* Original Integration Flow Visual */}
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 items-center">
                    <div className="space-y-2">
                      <div className="w-16 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mx-auto">
                        <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="text-xs text-center text-gray-600 dark:text-gray-400">Salesforce</div>
                    </div>
                    <div className="flex justify-center">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="space-y-2">
                      <div className="w-16 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mx-auto">
                        <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="text-xs text-center text-gray-600 dark:text-gray-400">SAP S/4HANA</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 items-center">
                    <div className="space-y-2">
                      <div className="w-16 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mx-auto">
                        <CreditCard className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="text-xs text-center text-gray-600 dark:text-gray-400">Concur</div>
                    </div>
                    <div className="flex justify-center">
                      <Link2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="space-y-2">
                      <div className="w-16 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center mx-auto">
                        <Globe className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div className="text-xs text-center text-gray-600 dark:text-gray-400">Payment Gateway</div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <Badge className="bg-blue-600 text-white text-xs">
                      <Link2 className="h-3 w-3 mr-1" />
                      800+ APIs Available
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - OVERVIEW */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Finance-Focused API Integration Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            {/* [CONTENT TO BE UPDATED] */}
            ExpTek specializes in connecting SAP S/4HANA Public Cloud Finance with your critical business systems. 
            We leverage SAP's API Business Hub and modern integration patterns to create seamless data flows between 
            finance and your operational systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'RESTful API Integration (OData V2/V4)',
              icon: <Link2 className="h-8 w-8" />,
              color: 'blue'
            },
            {
              title: 'Real-time data synchronization',
              icon: <Zap className="h-8 w-8" />,
              color: 'green'
            },
            {
              title: 'Bi-directional data flows',
              icon: <RefreshCw className="h-8 w-8" />,
              color: 'purple'
            },
            {
              title: 'Error handling & monitoring',
              icon: <Eye className="h-8 w-8" />,
              color: 'orange'
            },
            {
              title: 'Security & authentication (OAuth 2.0)',
              icon: <Shield className="h-8 w-8" />,
              color: 'red'
            },
            {
              title: 'Custom API development',
              icon: <Target className="h-8 w-8" />,
              color: 'indigo'
            }
          ].map((capability, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className={`w-16 h-16 bg-${capability.color}-100 dark:bg-${capability.color}-900/50 rounded-full flex items-center justify-center mx-auto mb-4 text-${capability.color}-600 dark:text-${capability.color}-400`}>
                {capability.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {capability.title}
              </h3>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 3 - FINANCE API PACKAGES */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              SAP S/4HANA Finance API Packages
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive finance APIs available through SAP API Business Hub for seamless integration capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apiPackages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`h-2 bg-gradient-to-r ${pkg.color}`}></div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{pkg.iconEmoji}</div>
                    <Badge className="bg-blue-600 text-white">
                      {pkg.apiCount} APIs
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {pkg.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
                    {pkg.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - INTEGRATION PATTERNS */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Integration Architecture & Patterns
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Flexible integration patterns tailored to your business requirements and system capabilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {integrationPatterns.map((pattern, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {pattern.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {pattern.title}
              </h3>
              <ul className="space-y-3 mb-6">
                {pattern.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm text-left">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 text-sm mb-2">Use Cases:</h4>
                <p className="text-xs text-blue-800 dark:text-blue-200">
                  {pattern.useCases}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 5 - KEY EXTERNAL SYSTEM INTEGRATIONS */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Finance System Integration Ecosystem
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Pre-built integration solutions for leading enterprise systems in the finance ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {externalSystems.map((system, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className={`h-2 bg-gradient-to-r ${system.color}`}></div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">{system.name}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {system.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Connected Processes:</h4>
                      <ul className="space-y-2">
                        {system.processes.map((process, pIndex) => (
                          <li key={pIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">{process}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">APIs Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {system.apis.map((api, aIndex) => (
                          <Badge key={aIndex} variant="outline" className="text-xs">
                            {api}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {system.benefits.map((benefit, bIndex) => (
                          <li key={bIndex} className="flex items-start">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - API CAPABILITIES BY PROTOCOL */}
      <APICapabilitiesSection />

      {/* SECTION 7 - IMPLEMENTATION APPROACH */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Our API Integration Methodology
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Proven 5-step process for successful API integration projects with predictable timelines and deliverables.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {implementationSteps.map((step, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                      <Badge className="bg-green-500 text-white mt-2 md:mt-0">
                        {step.duration}
                      </Badge>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {step.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline Summary */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-0 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Total Project Timeline
              </h3>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                7-17 Weeks
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                From initial discovery to production deployment with ongoing support
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SECTION 8 - SAP BTP & INTEGRATION SUITE */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              SAP Business Technology Platform Integration
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {/* [CONTENT TO BE UPDATED] */}
              We leverage SAP BTP and Cloud Platform Integration (CPI) for complex integration scenarios requiring 
              advanced orchestration, transformation, and routing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">BTP Capabilities</h3>
              <div className="space-y-4">
                {[
                  { name: 'Cloud Integration (CPI)', icon: <Layers className="h-5 w-5" /> },
                  { name: 'API Management', icon: <Globe className="h-5 w-5" /> },
                  { name: 'Open Connectors', icon: <Link2 className="h-5 w-5" /> },
                  { name: 'Integration Advisor', icon: <Target className="h-5 w-5" /> },
                  { name: 'Process Integration', icon: <RefreshCw className="h-5 w-5" /> }
                ].map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                      {capability.icon}
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">{capability.name}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Use Cases for BTP</h3>
              <div className="space-y-4">
                {[
                  'Multi-step integration flows',
                  'Complex data transformations',
                  'Legacy system connectivity',
                  'API governance and security',
                  'Integration monitoring'
                ].map((useCase, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{useCase}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">When to Use BTP</h4>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  Complex integration scenarios involving multiple systems, data transformation requirements, 
                  or enterprise-grade orchestration needs.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 9 - FINANCE API USE CASES */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Real-World Finance Integration Scenarios
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Proven use cases demonstrating the business value of finance API integrations.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card key={index} className="overflow-hidden">
              <Collapsible open={expandedUseCase === index} onOpenChange={() => toggleUseCase(index)}>
                <CollapsibleTrigger asChild>
                  <button className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg text-white font-bold flex items-center justify-center text-sm">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {useCase.title}
                      </h3>
                    </div>
                    {expandedUseCase === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    )}
                  </button>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700">
                  <div className="pt-4 grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Problem:</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{useCase.problem}</p>
                      
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solution:</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{useCase.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">APIs Used:</h4>
                      <p className="text-blue-600 dark:text-blue-400 text-sm mb-4">{useCase.apis}</p>
                      
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Result:</h4>
                      <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-3">
                        <p className="text-green-700 dark:text-green-300 font-semibold text-sm">{useCase.result}</p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 10 - SECURITY & COMPLIANCE */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Integration Security & Compliance
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade security measures and compliance standards for all API integrations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Authentication & Authorization',
                icon: <Lock className="h-8 w-8" />,
                features: ['OAuth 2.0 / SAML 2.0', 'API key management', 'Certificate-based auth', 'Role-based access control'],
                color: 'blue'
              },
              {
                title: 'Data Encryption',
                icon: <Shield className="h-8 w-8" />,
                features: ['TLS 1.2+ in transit', 'AES-256 at rest', 'Tokenization for sensitive data', 'PCI-DSS compliance'],
                color: 'green'
              },
              {
                title: 'Monitoring & Auditing',
                icon: <Eye className="h-8 w-8" />,
                features: ['Real-time API monitoring', 'Error logging & alerting', 'Audit trail maintenance', 'Performance metrics'],
                color: 'purple'
              },
              {
                title: 'Compliance Standards',
                icon: <CheckCircle2 className="h-8 w-8" />,
                features: ['SOC 2 Type II', 'GDPR compliance', 'ISO 27001', 'Industry-specific regulations'],
                color: 'orange'
              }
            ].map((security, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 bg-${security.color}-100 dark:bg-${security.color}-900/50 rounded-full flex items-center justify-center mx-auto mb-4 text-${security.color}-600 dark:text-${security.color}-400`}>
                  {security.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-center">
                  {security.title}
                </h3>
                <ul className="space-y-2">
                  {security.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 - FAQ */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            API Integration FAQ
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Common questions about SAP S/4HANA API integrations and implementation approach.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <Collapsible open={expandedFAQ === index} onOpenChange={() => toggleFAQ(index)}>
                <CollapsibleTrigger asChild>
                  <button className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                      {faq.question}
                    </h3>
                    {expandedFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700">
                  <div className="pt-4">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 12 - CASE STUDY */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50 dark:text-green-400 dark:border-green-800 dark:bg-green-950/50 mb-6">
              INTEGRATION SUCCESS STORY
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Global Manufacturing Company API Integration
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {/* [CONTENT TO BE UPDATED] */}
              How we connected SAP S/4HANA with Salesforce, Concur, and Worldpay for seamless financial operations.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 text-white">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Global Manufacturing Company</h3>
                    <p className="text-blue-100">Manufacturing Industry</p>
                    <div className="flex items-center mt-4 space-x-4">
                      <span className="text-sm bg-blue-700/50 px-3 py-1 rounded-full">SAP S/4HANA</span>
                      <span className="text-sm bg-blue-700/50 px-3 py-1 rounded-full">Salesforce</span>
                      <span className="text-sm bg-blue-700/50 px-3 py-1 rounded-full">Concur</span>
                      <span className="text-sm bg-blue-700/50 px-3 py-1 rounded-full">Worldpay</span>
                    </div>
                  </div>
                  <div className="mt-6 lg:mt-0 text-center lg:text-right">
                    <div className="text-3xl font-bold">80%</div>
                    <div className="text-blue-200">Reduction in Manual Data Entry</div>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Challenge</h4>
                    <ul className="space-y-2 mb-6">
                      {[
                        'Manual data entry across 4 systems',
                        '5-day invoice processing cycle',
                        'Payment reconciliation delays',
                        'No real-time financial visibility'
                      ].map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Solution Implemented</h4>
                    <ul className="space-y-2">
                      {[
                        'Salesforce to SAP order-to-cash integration',
                        'Concur expense automation',
                        'Worldpay payment gateway integration',
                        'Real-time financial reporting APIs'
                      ].map((solution, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Results</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {[
                      { value: '80%', label: 'Reduction in manual data entry' },
                      { value: '6 hours', label: 'Invoice processing (from 5 days)' },
                      { value: 'Same-day', label: 'Payment reconciliation' },
                      { value: 'Real-time', label: 'Revenue visibility' },
                      { value: '$750K', label: 'Annual cost savings' }
                    ].map((result, index) => (
                      <Card key={index} className="p-4 text-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-0">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">{result.value}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-300">{result.label}</div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl text-blue-600 dark:text-blue-400 mb-4">"</div>
                    <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
                      {/* [CONTENT TO BE UPDATED] */}
                      ExpTek's API integration expertise transformed our finance operations. The seamless connectivity 
                      between our systems has eliminated errors and provided real-time visibility.
                    </p>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      - VP Finance, Global Manufacturing Company
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 13 - SAP TRADEMARK DISCLAIMER */}
      <section className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-6xl mx-auto border-2 border-yellow-200 dark:border-yellow-800">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-8 w-8 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    ⚠️ Important Disclaimer
                  </h3>
                  <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
                    <p>
                      <strong>SAP, SAP S/4HANA, SAP Business Technology Platform, SAP API Business Hub</strong>, and all related 
                      SAP products and services mentioned on this page are trademarks or registered trademarks of 
                      <strong> SAP SE</strong> in Germany and other countries.
                    </p>
                    <p>
                      ExpTek is an independent SAP consulting partner and is <strong>not affiliated with, endorsed by, or sponsored by SAP SE</strong>. 
                      All API package names, product names, and technologies referenced are used for informational purposes only to describe our integration expertise.
                    </p>
                    <p>
                      For official SAP API documentation, please visit the SAP API Business Hub at{' '}
                      <a href="https://api.sap.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">
                        https://api.sap.com
                      </a>
                    </p>
                    <p>
                      All third-party trademarks (<strong>Salesforce, Concur, Worldpay, Stripe, PayPal, Adyen, Vertex, Avalara</strong>) 
                      are the property of their respective owners.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SECTION 14 - FINAL CTA */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 dark:from-blue-800 dark:via-blue-900 dark:to-cyan-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Connect Your Finance Systems?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {/* [CONTENT TO BE UPDATED] */}
            Let's build seamless integrations that transform your financial operations with proven API expertise and SAP specialization.
          </p>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50 px-12 py-6 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={() => handleCTAClick('schedule-integration-assessment')}
            >
              Schedule Integration Assessment
              <Calendar className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-12 py-6 text-xl font-semibold transition-all duration-300"
              onClick={() => handleDownloadClick('api-integration-guide')}
            >
              Download API Integration Guide
              <Download className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              size="lg" 
              variant="ghost"
              className="text-white hover:bg-white/10 px-12 py-6 text-xl font-semibold transition-all duration-300"
              onClick={() => handleCTAClick('view-integration-architecture')}
            >
              View Integration Architecture
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>

          <div className="border-t border-blue-500/30 pt-8">
            <h3 className="text-xl font-bold text-white mb-6">Trust Indicators</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100+</div>
                <div className="text-blue-200 text-sm">API Integrations Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">SAP-Certified</div>
                <div className="text-blue-200 text-sm">Integration Specialists</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-blue-200 text-sm">Integration Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-200 text-sm">Monitoring & Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APIIntegrationPage;