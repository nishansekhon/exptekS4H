import React from 'react';
import { Card, CardContent } from './ui/card';
import { ArrowDown, CheckCircle, CreditCard, FileText, RefreshCw, ShoppingCart, Users, Zap } from 'lucide-react';

const PaymentFlowDiagram = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          End-to-End Payment Flow
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {/* [CONTENT TO BE UPDATED] */}
          Complete payment journey from order creation to final reconciliation with automated processing at each step.
        </p>
      </div>

      {/* Original Payment Flow Visualization */}
      <div className="max-w-4xl mx-auto">
        {/* Step 1: Order Creation */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-200 dark:border-blue-800">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Order Creation</h3>
                    <p className="text-gray-600 dark:text-gray-400">Customer initiates purchase process</p>
                  </div>
                </div>
                <ShoppingCart className="h-12 w-12 text-blue-600 dark:text-blue-400" />
              </div>
              
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Customer places order</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Online shop/external app</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                    <ArrowDown className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Order sent to SAP S/4HANA</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Flow Arrow */}
          <div className="flex justify-center my-4">
            <ArrowDown className="h-8 w-8 text-gray-400" />
          </div>
        </div>

        {/* Step 2: Authorization */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-200 dark:border-green-800">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Authorization</h3>
                    <p className="text-gray-600 dark:text-gray-400">Real-time payment authorization process</p>
                  </div>
                </div>
                <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
              </div>
              
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Payment method selected</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Digital Payments Add-On</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">PSP authorization</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Flow Arrow */}
          <div className="flex justify-center my-4">
            <ArrowDown className="h-8 w-8 text-gray-400" />
          </div>
        </div>

        {/* Step 3: Billing & Settlement */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 border-2 border-purple-200 dark:border-purple-800">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Billing & Settlement</h3>
                    <p className="text-gray-600 dark:text-gray-400">Automated billing and payment capture</p>
                  </div>
                </div>
                <FileText className="h-12 w-12 text-purple-600 dark:text-purple-400" />
              </div>
              
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
                    <FileText className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Sales order → Billing document</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Payment capture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Settlement processing</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Flow Arrow */}
          <div className="flex justify-center my-4">
            <ArrowDown className="h-8 w-8 text-gray-400" />
          </div>
        </div>

        {/* Step 4: Reconciliation */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border-2 border-orange-200 dark:border-orange-800">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Reconciliation</h3>
                    <p className="text-gray-600 dark:text-gray-400">Automated payment reconciliation</p>
                  </div>
                </div>
                <RefreshCw className="h-12 w-12 text-orange-600 dark:text-orange-400" />
              </div>
              
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center">
                    <FileText className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Bank statement processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center">
                    <RefreshCw className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Auto-reconciliation (F110/FCC1)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Advice document creation</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Process Summary */}
        <Card className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-950/50">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Payment Automation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              From customer order to final reconciliation, the entire process is automated with real-time visibility and control.
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Real-Time</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Authorization</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">Automated</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Billing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Instant</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Settlement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">Auto</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Reconciliation</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PaymentFlowDiagram;