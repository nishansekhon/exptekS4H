import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Calculator, TrendingUp, DollarSign, Clock } from 'lucide-react';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    teamSize: '',
    closeDays: '',
    entities: '',
    email: ''
  });

  const [results, setResults] = useState(null);
  const [showEmailCapture, setShowEmailCapture] = useState(false);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({ ...prev, [field]: value }));
    
    // Calculate results if all required fields are filled
    if (field !== 'email') {
      const newInputs = { ...inputs, [field]: value };
      if (newInputs.teamSize && newInputs.closeDays && newInputs.entities) {
        calculateROI(newInputs);
      }
    }
  };

  const calculateROI = (data) => {
    const teamSize = parseInt(data.teamSize) || 0;
    const closeDays = parseInt(data.closeDays) || 0;
    const entities = parseInt(data.entities) || 0;

    // ROI calculation logic (simplified)
    const avgSalary = 85000; // Average finance professional salary
    const hourlyRate = avgSalary / 2080; // Annual hours
    const hoursPerCloseDay = 8;
    
    // Current costs
    const currentMonthlyCost = teamSize * (closeDays * hoursPerCloseDay * hourlyRate);
    
    // Improved metrics with ExpTek
    const improvedCloseDays = Math.max(1, Math.ceil(closeDays * 0.5)); // 50% improvement
    const efficiency = Math.min(30, entities * 2); // Efficiency percentage
    
    // Savings calculations
    const newMonthlyCost = currentMonthlyCost * (1 - (efficiency / 100));
    const monthlySavings = currentMonthlyCost - newMonthlyCost;
    const annualSavings = monthlySavings * 12;
    const timeSavings = closeDays - improvedCloseDays;
    const roi = ((annualSavings / 150000) * 100); // Assuming 150k implementation cost

    setResults({
      currentCost: Math.round(currentMonthlyCost),
      newCost: Math.round(newMonthlyCost),
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      timeSavings: timeSavings,
      roi: Math.round(roi),
      efficiency: efficiency
    });
  };

  const handleGetAssessment = () => {
    if (!inputs.email) {
      setShowEmailCapture(true);
      return;
    }
    
    // Here you would typically send the data to your backend
    alert('Thank you! We\'ll send you a detailed assessment within 24 hours.');
    setShowEmailCapture(false);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 border border-green-100 dark:border-green-900/30 transition-colors">
            <Calculator className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            ROI Calculator
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
            Calculate Your Potential ROI
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed transition-colors">
            Discover how much time and money you could save with ExpTek's SAP Public Cloud Finance implementation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Input Form */}
          <Card className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
                Tell Us About Your Current State
              </h3>
              
              <div className="space-y-6">
                {/* Team Size */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                    Finance Team Size
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={inputs.teamSize}
                    onChange={(e) => handleInputChange('teamSize', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#0A6ED1] focus:border-transparent transition-colors min-h-[44px]"
                    placeholder="e.g., 8"
                  />
                </div>

                {/* Close Days */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                    Monthly Finance Close Days
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={inputs.closeDays}
                    onChange={(e) => handleInputChange('closeDays', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#0A6ED1] focus:border-transparent transition-colors min-h-[44px]"
                    placeholder="e.g., 10"
                  />
                </div>

                {/* Legal Entities */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                    Number of Legal Entities
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={inputs.entities}
                    onChange={(e) => handleInputChange('entities', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#0A6ED1] focus:border-transparent transition-colors min-h-[44px]"
                    placeholder="e.g., 3"
                  />
                </div>

                {/* Email Capture (conditional) */}
                {showEmailCapture && (
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                      Email Address (for detailed assessment)
                    </label>
                    <input
                      type="email"
                      value={inputs.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#0A6ED1] focus:border-transparent transition-colors min-h-[44px]"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="bg-gradient-to-br from-[#0A6ED1] to-[#60d5ff] border-0 text-white shadow-xl">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6">
                Your Potential Savings with ExpTek
              </h3>

              {results ? (
                <div className="space-y-6">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm">
                      <DollarSign className="w-6 h-6 mx-auto mb-2" />
                      <div className="text-2xl font-bold">${results.monthlySavings.toLocaleString()}</div>
                      <div className="text-sm opacity-90">Monthly Savings</div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm">
                      <Clock className="w-6 h-6 mx-auto mb-2" />
                      <div className="text-2xl font-bold">{results.timeSavings}</div>
                      <div className="text-sm opacity-90">Days Saved/Month</div>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2 text-sm">
                        <span>Time Savings</span>
                        <span>{results.timeSavings} days</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-3">
                        <div 
                          className="bg-white h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min(100, (results.timeSavings / 10) * 100)}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2 text-sm">
                        <span>Efficiency Improvement</span>
                        <span>{results.efficiency}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-3">
                        <div 
                          className="bg-white h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${results.efficiency}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2 text-sm">
                        <span>Annual ROI</span>
                        <span>{results.roi}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-3">
                        <div 
                          className="bg-white h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min(100, results.roi)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Annual Summary */}
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-center">
                      <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                      <div className="text-3xl font-bold">${results.annualSavings.toLocaleString()}</div>
                      <div className="text-sm opacity-90">Annual Savings Potential</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center opacity-75 py-12">
                  <Calculator className="w-12 h-12 mx-auto mb-4" />
                  <p>Fill in your details to see potential savings</p>
                </div>
              )}

              {/* CTA Button */}
              <div className="mt-8">
                <Button 
                  onClick={handleGetAssessment}
                  size="lg"
                  className="w-full bg-white text-[#0A6ED1] hover:bg-gray-50 font-bold min-h-[44px] touch-manipulation"
                >
                  Get Detailed Assessment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
            * Results are estimates based on industry averages and ExpTek's historical performance. 
            Actual savings may vary based on your specific implementation requirements and current processes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;