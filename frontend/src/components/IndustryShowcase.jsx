import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Factory, ShoppingBag, Briefcase, Building2, Download } from 'lucide-react';
import content from '../data/content.json';

const IndustryShowcase = () => {
  const [activeTab, setActiveTab] = useState('manufacturing');

  const iconMap = {
    Factory,
    ShoppingBag, 
    Briefcase,
    Building2
  };

  const getIndustryData = (id) => {
    return content.industries.find(industry => industry.id === id);
  };

  const activeIndustry = getIndustryData(activeTab);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 border border-purple-100 dark:border-purple-900/30 transition-colors">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 sm:mr-3"></span>
            Industry Solutions
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
            Tailored SAP Solutions by Industry
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed transition-colors">
            Deep industry expertise with specialized configurations for your sector's unique requirements
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {content.industries.map((industry) => {
            const IconComponent = iconMap[industry.icon];
            const isActive = activeTab === industry.id;
            
            return (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-200 min-h-[44px] touch-manipulation text-sm sm:text-base ${
                  isActive
                    ? 'bg-[#0A6ED1] dark:bg-[#60d5ff] text-white dark:text-black shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                }`}
              >
                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="hidden sm:inline">{industry.name}</span>
                <span className="sm:hidden">{industry.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Industry Content */}
        {activeIndustry && (
          <div className="space-y-8 sm:space-y-12">
            {/* Pain Points */}
            <Card className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
                  {activeIndustry.name} Challenges We Solve
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  {activeIndustry.painPoints.map((point, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors">{point}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* SAP Modules */}
            <Card className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
                  Specialized SAP Modules & Configuration
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  {activeIndustry.modules.map((module, index) => (
                    <div key={index} className="text-center p-3 sm:p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30">
                      <div className="text-xs sm:text-sm font-semibold text-[#0A6ED1] dark:text-[#60d5ff] transition-colors">
                        {module}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Case Studies */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {activeIndustry.caseStudies.map((caseStudy, index) => (
                <Card key={index} className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 sm:p-8">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
                      {caseStudy.title}
                    </h4>
                    <div className="flex items-start space-x-3 mb-4 sm:mb-6">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-1 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 transition-colors">
                        <strong className="text-green-600 dark:text-green-400">Result:</strong> {caseStudy.result}
                      </span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full sm:w-auto border-[#0A6ED1] dark:border-[#60d5ff] text-[#0A6ED1] dark:text-[#60d5ff] hover:bg-[#0A6ED1] dark:hover:bg-[#60d5ff] hover:text-white dark:hover:text-black min-h-[44px] touch-manipulation"
                    >
                      Read Full Case Study
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Download CTA */}
            <div className="text-center">
              <Card className="bg-gradient-to-r from-[#0A6ED1] to-[#60d5ff] border-0 shadow-xl">
                <CardContent className="p-8 sm:p-12">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
                    Get Your {activeIndustry.name} Solution Brief
                  </h3>
                  <p className="text-blue-100 mb-6 sm:mb-8 text-sm sm:text-base max-w-2xl mx-auto">
                    Download our comprehensive guide covering industry-specific challenges, SAP configurations, and implementation best practices
                  </p>
                  <Button 
                    asChild
                    size="lg"
                    className="bg-white text-[#0A6ED1] hover:bg-gray-50 hover:scale-105 px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 min-h-[44px] touch-manipulation"
                  >
                    <a href={`/downloads/${activeIndustry.id}-solution-brief.pdf`}>
                      <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Download Industry Brief
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default IndustryShowcase;