import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Check, X } from 'lucide-react';

const ComparisonTool = () => {
  const [activeView, setActiveView] = useState('overview');

  const comparisonData = {
    overview: [
      {
        category: "Implementation Speed",
        exptek: "50% Faster",
        exptekDetail: "3-4 months typical timeline",
        bigFour: "Standard Timeline", 
        bigFourDetail: "6-8 months typical timeline",
        advantage: "exptek"
      },
      {
        category: "Cost Savings",
        exptek: "40% Less Cost",
        exptekDetail: "Lean team structure, focused expertise",
        bigFour: "Premium Pricing",
        bigFourDetail: "Large team overhead, generalist rates",
        advantage: "exptek"
      },
      {
        category: "Expertise Focus",
        exptek: "SAP Finance Specialist",
        exptekDetail: "100+ SAP Finance implementations",
        bigFour: "Generalist Approach",
        bigFourDetail: "Multi-practice consultants",
        advantage: "exptek"
      },
      {
        category: "Post-Go-Live Support",
        exptek: "24/7 Dedicated Support",
        exptekDetail: "95% client retention rate",
        bigFour: "Limited Support",
        bigFourDetail: "Project-based engagement model",
        advantage: "exptek"
      }
    ]
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 border border-red-100 dark:border-red-900/30 transition-colors">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 sm:mr-3"></span>
            Comparison Analysis
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
            ExpTek vs Big 4 Consulting
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed transition-colors">
            See why leading organizations choose ExpTek for their SAP Public Cloud Finance implementations
          </p>
        </div>

        {/* Comparison Table */}
        <Card className="overflow-hidden bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 shadow-lg">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700">
                    <th className="text-left py-4 sm:py-6 px-4 sm:px-6 text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                      Comparison Factors
                    </th>
                    <th className="text-center py-4 sm:py-6 px-4 sm:px-6">
                      <div className="flex flex-col items-center">
                        <div className="text-lg sm:text-xl font-bold text-[#0A6ED1] dark:text-[#60d5ff] mb-1">
                          ExpTek
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          SAP Finance Specialists
                        </div>
                      </div>
                    </th>
                    <th className="text-center py-4 sm:py-6 px-4 sm:px-6">
                      <div className="flex flex-col items-center">
                        <div className="text-lg sm:text-xl font-bold text-gray-700 dark:text-gray-300 mb-1">
                          Big 4 Firms
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          General Consulting
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {comparisonData.overview.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="py-4 sm:py-6 px-4 sm:px-6">
                        <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                          {item.category}
                        </div>
                      </td>
                      <td className="py-4 sm:py-6 px-4 sm:px-6 text-center">
                        <div className="flex flex-col items-center">
                          <div className="flex items-center mb-2">
                            <Check className="w-5 h-5 text-green-500 mr-2" />
                            <span className="font-semibold text-[#0A6ED1] dark:text-[#60d5ff] text-sm sm:text-base">
                              {item.exptek}
                            </span>
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">
                            {item.exptekDetail}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 sm:py-6 px-4 sm:px-6 text-center">
                        <div className="flex flex-col items-center">
                          <div className="flex items-center mb-2">
                            <X className="w-5 h-5 text-red-500 mr-2" />
                            <span className="font-semibold text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                              {item.bigFour}
                            </span>
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">
                            {item.bigFourDetail}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Key Benefits */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-100 dark:border-green-800">
            <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-2">50%</div>
            <div className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2">Faster Implementation</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Proven methodology and focused expertise
            </div>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-100 dark:border-blue-800">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">40%</div>
            <div className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2">Cost Reduction</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Lean team structure and specialized knowledge
            </div>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border border-purple-100 dark:border-purple-800">
            <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">95%</div>
            <div className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2">Client Retention</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Long-term partnership and ongoing support
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-[#0A6ED1] to-[#60d5ff] rounded-2xl p-8 sm:p-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Experience the ExpTek Difference?
            </h3>
            <p className="text-blue-100 mb-6 sm:mb-8 text-sm sm:text-base max-w-2xl mx-auto">
              Join the growing number of organizations that have accelerated their SAP finance transformation with our specialized approach
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-white text-[#0A6ED1] hover:bg-gray-50 hover:scale-105 px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 min-h-[44px] touch-manipulation"
            >
              <a href="/contact">See Why Clients Choose ExpTek</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTool;