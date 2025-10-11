import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ArrowRight, Cloud, CreditCard, Database, Globe, Smartphone, Zap } from 'lucide-react';

const PaymentEcosystemDiagram = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Payment Ecosystem Architecture
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {/* [CONTENT TO BE UPDATED] */}
            Complete payment infrastructure showing data flow from consumer applications through SAP Digital Payments Hub to Payment Service Providers.
          </p>
        </div>

        {/* Original Three-Column Architecture Diagram */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* LEFT COLUMN - Consumer Applications */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">
                Consumer Applications
              </h3>
              
              <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Database className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">SAP S/4HANA</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Core ERP system for business processes</p>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Cloud className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">SAP S/4HANA Cloud</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Cloud-native ERP platform</p>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Database className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Other SAP Systems</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">SuccessFactors, Concur, Ariba</p>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Non-SAP Applications</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">E-commerce, mobile apps, third-party systems</p>
                </CardContent>
              </Card>
            </div>

            {/* CENTER COLUMN - SAP Digital Payments Hub */}
            <div className="space-y-6">
              {/* Flow Arrows - Left to Center */}
              <div className="hidden lg:flex items-center justify-center">
                <ArrowRight className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl p-8 border-2 border-green-200 dark:border-green-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">
                  SAP Digital Payments Hub
                </h3>
                
                <div className="space-y-4">
                  <Card className="bg-white/80 dark:bg-gray-800/80 border-0">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                          <Cloud className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm">SAP Business Technology Platform</h4>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/80 dark:bg-gray-800/80 border-0">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                          <Zap className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Digital Payments Add-On</h4>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/80 dark:bg-gray-800/80 border-0">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                          <Globe className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Secure Payment Processing</h4>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Central Processing Indicator */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold">
                    <Zap className="h-4 w-4 mr-2" />
                    Real-Time Processing
                  </div>
                </div>
              </div>

              {/* Flow Arrows - Center to Right */}
              <div className="hidden lg:flex items-center justify-center">
                <ArrowRight className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
            </div>

            {/* RIGHT COLUMN - Payment Service Providers */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">
                Payment Service Providers
              </h3>

              <Card className="bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                      <CreditCard className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Multiple PSP Connections</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Stripe, Adyen, PayPal, Worldpay</p>
                </CardContent>
              </Card>

              <Card className="bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                      <CreditCard className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Credit Card Processors</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">VISA, MasterCard, AMEX processing</p>
                </CardContent>
              </Card>

              <Card className="bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Digital Wallets</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Apple Pay, Google Pay, Samsung Pay</p>
                </CardContent>
              </Card>

              <Card className="bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                      <Database className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Bank Integrations</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Direct bank connections, ACH, SEPA</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Data Flow Indicators */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
              Data Flow Legend
            </h4>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                <span className="text-gray-600 dark:text-gray-400">SAP Systems</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                <span className="text-gray-600 dark:text-gray-400">Payment Hub</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-orange-500 rounded mr-2"></div>
                <span className="text-gray-600 dark:text-gray-400">External PSPs</span>
              </div>
              <div className="flex items-center">
                <ArrowRight className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-600 dark:text-gray-400">Data Flow Direction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentEcosystemDiagram;