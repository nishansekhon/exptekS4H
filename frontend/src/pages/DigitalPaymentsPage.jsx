import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/ui/collapsible';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../components/ui/breadcrumb';
import { 
  ArrowRight, 
  Download, 
  Calendar, 
  CreditCard, 
  Shield, 
  Zap, 
  RefreshCw, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  Globe,
  Smartphone,
  Lock,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  Target,
  FileText,
  ArrowDown
} from 'lucide-react';
import PaymentEcosystemDiagram from '../components/PaymentEcosystemDiagram';
import PaymentFlowDiagram from '../components/PaymentFlowDiagram';

const DigitalPaymentsPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [expandedScope, setExpandedScope] = useState(null);

  const handleCTAClick = (ctaType) => {
    console.log(`Digital Payments CTA clicked: ${ctaType}`);
    // GA4 Event tracking placeholder
  };

  const handleDownloadClick = (resource) => {
    console.log(`Download requested: ${resource}`);
    // GA4 Event tracking placeholder
  };

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const toggleScope = (index) => {
    setExpandedScope(expandedScope === index ? null : index);
  };

  const scopeItems = [
    {
      id: '1Z1',
      title: 'Digital Payment Sales',
      status: 'Activated',
      statusColor: 'bg-green-500',
      items: [
        'Enables credit card processing from order to billing',
        'Used in B2B/B2C sales flows',
        'Integrated with sales order management'
      ]
    },
    {
      id: '1S2',
      title: 'Digital Payments',
      status: 'Activated', 
      statusColor: 'bg-green-500',
      items: [
        'Core communication with Digital Payments Add-On',
        'Foundation scope item for all integrations',
        'Required for PSP connectivity'
      ]
    },
    {
      id: '2L7',
      title: 'External Digital Payment',
      status: 'OSS Request Needed',
      statusColor: 'bg-orange-500',
      items: [
        'Integrates external payment providers (Stripe, Adyen, etc.)',
        'Hybrid payment landscape support',
        'Flexible PSP configuration'
      ]
    },
    {
      id: '150',
      title: 'Customer Payments (Sunset)',
      status: 'Deprecated',
      statusColor: 'bg-red-500',
      items: [
        'Being replaced by API-based architecture',
        'Migration to new payment framework required',
        'Post-2502 release deprecation'
      ]
    }
  ];

  const faqData = [
    {
      question: 'How does the Cloud for Customer Payment Portal simplify payment workflows?',
      answer: 'The CCP provides a user-friendly interface where customers can securely manage payments, view invoices, and update billing details. Integrated with SAP S/4HANA, it ensures real-time updates and streamlines payment processes.'
    },
    {
      question: 'What are the key benefits of integrating the Digital Payments Add-On?',
      answer: 'The Digital Payments Add-On offers real-time payment processing, enhanced security through PCI-DSS compliance, end-to-end payment visibility, and automated reconciliation with tools like F110 and FCC1.'
    },
    {
      question: 'Can the system handle ad-hoc payments or custom payment needs?',
      answer: 'Yes, the CCP supports flexible configurations, including ad-hoc payments and customizable fields like "Sold-To Party," enabling tailored solutions for diverse business requirements.'
    },
    {
      question: 'What payment methods and PSPs does the integration support?',
      answer: 'The system integrates with multiple Payment Service Providers (PSPs), supporting credit cards, PayPal, electronic checks, digital wallets, and more, with dynamic routing capabilities.'
    },
    {
      question: 'How is payment security ensured?',
      answer: 'All transactions are PCI-DSS compliant with end-to-end encryption, tokenization, fraud detection, and secure authentication protocols.'
    },
    {
      question: 'What happens if a payment authorization fails?',
      answer: 'The system has built-in retry logic and reauthorization triggers. Failed payments are flagged for review, and customers are notified to update payment information.'
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-8 w-8" />,
      stat: '30%',
      title: 'Faster Payment Processing',
      description: 'Automated workflows reduce manual intervention'
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      stat: '99.9%',
      title: 'Transaction Success Rate',
      description: 'Robust authorization and retry logic'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      stat: '100%',
      title: 'PCI-DSS Compliant',
      description: 'Built-in security and encryption'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      stat: '25%',
      title: 'Reduced Payment Costs',
      description: 'Lower processing fees through optimization'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      stat: '50%',
      title: 'Improved Cash Flow',
      description: 'Faster payment capture and settlement'
    },
    {
      icon: <RefreshCw className="h-8 w-8" />,
      stat: '100%',
      title: 'Real-Time Reconciliation',
      description: 'Automated matching with F110/FCC1 tools'
    }
  ];

  const pspProviders = [
    {
      name: 'Stripe',
      features: ['Credit/debit cards', 'Digital wallets', 'Bank transfers', 'Global coverage'],
      color: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'Adyen',
      features: ['Unified commerce platform', 'Local payment methods', 'Risk management', 'Multi-currency support'],
      color: 'from-green-500 to-teal-600'
    },
    {
      name: 'PayPal',
      features: ['Consumer payments', 'Business accounts', 'Express checkout', 'Buyer protection'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Worldpay',
      features: ['Enterprise solutions', 'Card processing', 'Alternative payments', 'Fraud tools'],
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Custom PSPs',
      features: ['API-based integration', 'Flexible configuration', 'Custom payment flows', 'Regional providers'],
      color: 'from-gray-500 to-slate-600'
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
              <BreadcrumbPage>Digital Payments</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* SECTION 1 - HERO SECTION */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50 dark:text-blue-400 dark:border-blue-800 dark:bg-blue-950/50">
              Digital Payment Solutions
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Digital Payments & Cloud for Customer Payment
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Streamline payment processes with integrated digital payment solutions and customer portals for SAP S/4HANA Public Cloud
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
                onClick={() => handleCTAClick('schedule-consultation')}
              >
                Schedule Consultation
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/50 px-8 py-6 text-lg"
                onClick={() => handleDownloadClick('payment-guide')}
              >
                Download Payment Guide
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* Hero Visual - Original Design */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-xl p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Modern Payment Ecosystem</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">End-to-End Digital Payment Processing</p>
                </div>
                
                {/* Original Payment Flow Visual */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-20 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                      <Smartphone className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                    <div className="w-20 h-16 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                      <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                    <div className="w-20 h-16 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
                      <CreditCard className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                    <span>Customer</span>
                    <span>SAP S/4HANA</span>
                    <span>PSP</span>
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
            Modern Payment Processing for SAP S/4HANA
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {/* [CONTENT TO BE UPDATED] */}
            To address modern payment challenges, SAP offers an integrated payment ecosystem combining the Cloud for Customer Payment Portal, Digital Payments Add-On, and S/4HANA backend systems. ExpTek helps you implement and optimize this complete payment infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Cloud for Customer Payment Portal (CCP)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Self-service customer portal for payment management</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Digital Payments Add-On</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Real-time payment processing and PSP integration</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">SAP S/4HANA Integration</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Seamless backend system connectivity and processing</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="h-8 w-8 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Payment Service Provider (PSP) Connectivity</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Multi-PSP support for diverse payment methods</p>
          </Card>
        </div>
      </section>

      {/* SECTION 3 - PAYMENT ECOSYSTEM ARCHITECTURE */}
      <PaymentEcosystemDiagram />

      {/* SECTION 4 - CUSTOMER PAYMENT PORTAL (CCP) */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Cloud for Customer Payment Portal
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Empower your customers with a secure, self-service payment portal integrated directly with SAP S/4HANA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:text-white" />
              </div>
              <CardTitle className="text-lg">Self-Service Payment Management</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Secure customer portal
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Invoice viewing and payment
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Payment history tracking
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Billing detail updates
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                <Zap className="h-6 w-6 text-green-600 dark:text-green-400 group-hover:text-white" />
              </div>
              <CardTitle className="text-lg">Real-Time Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Direct S/4HANA connectivity
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Instant payment updates
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Automated reconciliation
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Live status tracking
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                <CreditCard className="h-6 w-6 text-purple-600 dark:text-purple-400 group-hover:text-white" />
              </div>
              <CardTitle className="text-lg">Multi-Payment Support</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Credit/debit cards
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Digital wallets
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Bank transfers
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Alternative payment methods
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                <Shield className="h-6 w-6 text-red-600 dark:text-red-400 group-hover:text-white" />
              </div>
              <CardTitle className="text-lg">Enhanced Security</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  PCI-DSS compliance
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Encrypted transactions
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Fraud prevention
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Secure authentication
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SECTION 5 - END-TO-END PAYMENT FLOW */}
      <PaymentFlowDiagram />

      {/* SECTION 6 - KEY SCOPE ITEMS */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            SAP Scope Items & Configuration
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Essential scope items for digital payment implementation in SAP S/4HANA Public Cloud.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {scopeItems.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <Collapsible open={expandedScope === index} onOpenChange={() => toggleScope(index)}>
                <CollapsibleTrigger asChild>
                  <button className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <Badge className={`${item.statusColor} text-white px-3 py-1`}>
                        ✅ {item.id}
                      </Badge>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Status: {item.status}
                        </p>
                      </div>
                    </div>
                    {expandedScope === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    )}
                  </button>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700">
                  <div className="pt-4">
                    <ul className="space-y-3">
                      {item.items.map((detail, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 7 - IMPLEMENTATION STEPS */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Step-by-Step Configuration Guide
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Complete implementation process for SAP S/4HANA Digital Payments configuration.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                number: '1',
                title: 'Activate SAP Digital Payments Add-On',
                items: [
                  'Assign catalog SAP_CA_BC_DP_COMMON_PC',
                  'Configure business roles',
                  'Set up user authorizations'
                ]
              },
              {
                number: '2',
                title: 'Maintain Payment Card Plan Types',
                items: [
                  'Activity ID: 102379',
                  'Configure VISA, MasterCard, AMEX, etc.',
                  'Set up card validation rules',
                  'Define payment limits'
                ]
              },
              {
                number: '3',
                title: 'Define Checking Groups (Critical!)',
                items: [
                  'Activity ID: 103509',
                  'Configure credit card data validation',
                  'Set retry logic and reauthorization triggers',
                  'Define checking parameters'
                ]
              },
              {
                number: '4',
                title: 'Order Creation & Authorization',
                items: [
                  'Select \'CC\' payment method in sales order',
                  'Real-time authorization triggered',
                  'Payment card status tracked',
                  'Authorization holds managed'
                ]
              },
              {
                number: '5',
                title: 'Billing & Capture',
                items: [
                  'Auto-capture upon billing creation',
                  'Payment settlement processing',
                  'Bank reconciliation automation',
                  'Financial posting completion'
                ]
              }
            ].map((step, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        {step.title}
                      </h3>
                      <ul className="space-y-2">
                        {step.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300">{item}</span>
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

      {/* SECTION 8 - PAYMENT SERVICE PROVIDER INTEGRATION */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Supported Payment Methods & PSPs
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Flexible integration with leading Payment Service Providers for comprehensive payment method support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {pspProviders.map((psp, index) => (
            <Card key={index} className={`overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
              <div className={`h-2 bg-gradient-to-r ${psp.color}`}></div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-center">
                  {psp.name}
                </h3>
                <ul className="space-y-2">
                  {psp.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 9 - BENEFITS & OUTCOMES */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Digital Payment Benefits
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Measurable improvements in payment processing efficiency, security, and business outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 dark:text-blue-400">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {benefit.stat}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 - FAQ SECTION */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Digital Payments FAQ
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Common questions about SAP S/4HANA digital payments implementation and configuration.
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

      {/* SECTION 11 - CASE STUDY */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50 dark:text-green-400 dark:border-green-800 dark:bg-green-950/50 mb-6">
              SUCCESS STORY
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              E-Commerce Retailer Payment Transformation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {/* [CONTENT TO BE UPDATED] */}
              How a leading online retail company achieved 45% faster payment processing and $500K annual cost savings.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 text-white">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Leading Online Retail Company</h3>
                    <p className="text-blue-100">E-Commerce Industry</p>
                    <div className="flex items-center mt-4 space-x-4">
                      <span className="text-sm bg-blue-700/50 px-3 py-1 rounded-full">$2.5B Revenue</span>
                      <span className="text-sm bg-blue-700/50 px-3 py-1 rounded-full">Global Operations</span>
                      <span className="text-sm bg-blue-700/50 px-3 py-1 rounded-full">10M+ Customers</span>
                    </div>
                  </div>
                  <div className="mt-6 lg:mt-0 text-center lg:text-right">
                    <div className="text-3xl font-bold">45%</div>
                    <div className="text-blue-200">Payment Processing Improvement</div>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Challenge</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Manual payment processing, high failure rates, and reconciliation delays were impacting cash flow 
                      and customer satisfaction. The company needed a modern, automated payment infrastructure.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Solution Implemented</h4>
                    <ul className="space-y-2">
                      {[
                        'Cloud for Customer Payment Portal',
                        'Digital Payments Add-On with Stripe & PayPal',
                        'Automated reconciliation workflows',
                        'Multi-currency support'
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Results</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {[
                      { value: '45%', label: 'Reduction in payment processing time' },
                      { value: '98%', label: 'Authorization success rate (up from 82%)' },
                      { value: '60%', label: 'Faster reconciliation (same-day vs 3-day)' },
                      { value: '$500K', label: 'Annual cost savings in payment fees' },
                      { value: '35%', label: 'Increase in customer satisfaction' }
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
                      ExpTek's digital payment implementation transformed our payment operations. Real-time processing 
                      and automated reconciliation have significantly improved our cash flow.
                    </p>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      - CFO, Leading Online Retail Company
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 12 - FINAL CTA */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 dark:from-blue-800 dark:via-blue-900 dark:to-cyan-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Modernize Your Payment Processing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {/* [CONTENT TO BE UPDATED] */}
            Let ExpTek guide you through a seamless digital payments transformation with proven SAP expertise and implementation accelerators.
          </p>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50 px-12 py-6 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={() => handleCTAClick('schedule-payment-consultation')}
            >
              Schedule Free Payment Consultation
              <Calendar className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-12 py-6 text-xl font-semibold transition-all duration-300"
              onClick={() => handleDownloadClick('digital-payments-guide')}
            >
              Download Digital Payments Guide
              <Download className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              size="lg" 
              variant="ghost"
              className="text-white hover:bg-white/10 px-12 py-6 text-xl font-semibold transition-all duration-300"
              onClick={() => handleCTAClick('view-architecture')}
            >
              View Integration Architecture
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>

          <div className="border-t border-blue-500/30 pt-8">
            <h3 className="text-xl font-bold text-white mb-6">Trust Indicators</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <Shield className="h-8 w-8 text-blue-200 mx-auto mb-2" />
                <div className="text-white font-semibold">PCI-DSS Certified Implementation</div>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-blue-200 mx-auto mb-2" />
                <div className="text-white font-semibold">50+ Payment Integrations Completed</div>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-blue-200 mx-auto mb-2" />
                <div className="text-white font-semibold">99.9% Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalPaymentsPage;