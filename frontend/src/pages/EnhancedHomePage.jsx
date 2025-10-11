import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight, TrendingUp, CheckCircle, Users } from 'lucide-react';
import LiveMetrics from '../components/LiveMetrics';
import ComparisonTool from '../components/ComparisonTool';
import IndustryShowcase from '../components/IndustryShowcase';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import ROICalculator from '../components/ROICalculator';

const EnhancedHomePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] dark:from-[#0f1b2d] dark:to-[#1a2332] pt-20 pb-8 sm:pb-12 lg:pb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(96,213,255,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(10,110,209,0.06),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 bg-white rounded-full mr-2 sm:mr-3 opacity-60"></span>
              Leading SAP Public Cloud Finance Experts
            </div>
          </div>

          {/* Hero Content - Responsive Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              {/* Main Heading - Responsive Typography */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="text-white">SAP S/4HANA</span>
                <br />
                <span className="text-[#60d5ff]">Public Cloud Finance</span>
                <br />
                <span className="text-white">Experts</span>
              </h1>
              
              {/* Subheading - Responsive */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Transform your financial operations with 100+ Fit-to-Standard workshops delivered using proven SAP Activate methodology
              </p>
              
              {/* Action Buttons - Responsive Stacking */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <Button 
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-[#0A6ED1] hover:bg-[#085bb5] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 min-h-[44px] touch-manipulation"
                >
                  <Link to="/contact">
                    Book a Consultation <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#1e3a5f] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-200 min-h-[44px] touch-manipulation"
                >
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            
            {/* Right Column - Stats Grid - Responsive Layout */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mt-8 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center min-h-[120px] sm:min-h-[140px] flex flex-col justify-center touch-manipulation">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#60d5ff] mb-1 sm:mb-2">100+</div>
                <div className="text-white text-xs sm:text-sm font-medium leading-tight">Fit-to-Standard Workshops</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center min-h-[120px] sm:min-h-[140px] flex flex-col justify-center touch-manipulation">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#60d5ff] mb-1 sm:mb-2">50%</div>
                <div className="text-white text-xs sm:text-sm font-medium leading-tight">Faster Implementation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center min-h-[120px] sm:min-h-[140px] flex flex-col justify-center touch-manipulation">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#60d5ff] mb-1 sm:mb-2">10+</div>
                <div className="text-white text-xs sm:text-sm font-medium leading-tight">Years SAP Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center min-h-[120px] sm:min-h-[140px] flex flex-col justify-center touch-manipulation">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#60d5ff] mb-1 sm:mb-2">24/7</div>
                <div className="text-white text-xs sm:text-sm font-medium leading-tight">Post-Go-Live Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Metrics Section */}
      <LiveMetrics />

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-blue-50 dark:bg-blue-900/20 text-[#0A6ED1] dark:text-[#60d5ff] text-xs sm:text-sm font-semibold mb-6 sm:mb-8 border border-blue-100 dark:border-blue-900/30 transition-colors">
              <span className="w-2 h-2 bg-[#0A6ED1] dark:bg-[#60d5ff] rounded-full mr-2 sm:mr-3"></span>
              Our Expertise
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 tracking-tight text-gray-900 dark:text-white transition-colors">
              <span>SAP Public Cloud Finance</span>
              <br />
              <span className="text-[#0A6ED1] dark:text-[#60d5ff]">Services</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed transition-colors">
              Comprehensive SAP S/4HANA Public Cloud Finance consulting services to transform your financial operations
            </p>
          </div>
          
          {/* Showcase Cards Row - Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Finance Implementation */}
            <Card className="group hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] dark:from-[#0f1b2d] dark:to-[#1a2332] border-0 text-white overflow-hidden touch-manipulation">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
                <img 
                  src="https://customer-assets.emergentagent.com/job_sapcloudfin/artifacts/x7ywqunq_Finance%20Implementation%20SAP.png"
                  alt="Finance Implementation"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 to-transparent"></div>
              </div>
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4">Finance Implementation</h3>
                <p className="text-sm sm:text-base lg:text-lg mb-2 sm:mb-4 text-gray-300">End-to-End</p>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">Complete SAP S/4HANA Public Cloud Finance implementation with proven methodologies and best practices.</p>
              </CardContent>
            </Card>

            {/* Digital Payment */}
            <Card className="group hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] dark:from-[#0f1b2d] dark:to-[#1a2332] border-0 text-white overflow-hidden touch-manipulation">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
                <img 
                  src="https://customer-assets.emergentagent.com/job_sapcloudfin/artifacts/0frb3bcz_Digital%20Payment%20and%20Customer%20Payment%20image.png"
                  alt="Digital Payment Services"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 to-transparent"></div>
              </div>
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4">Digital Payment &</h3>
                <p className="text-sm sm:text-base lg:text-lg mb-2 sm:mb-4 text-gray-300">Customer Payment</p>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">Streamlined payment processes with integrated digital payment solutions and customer portals.</p>
              </CardContent>
            </Card>

            {/* API Integration */}
            <Card className="group hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] dark:from-[#0f1b2d] dark:to-[#1a2332] border-0 text-white overflow-hidden touch-manipulation md:col-span-2 lg:col-span-1">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
                <img 
                  src="https://customer-assets.emergentagent.com/job_sapcloudfin/artifacts/4ttxf48d_API%20Image.png"
                  alt="API Integration"
                  className="w-full h-full object-cover opacity-85 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 to-transparent"></div>
              </div>
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4">API & System</h3>
                <p className="text-sm sm:text-base lg:text-lg mb-2 sm:mb-4 text-gray-300">Integration</p>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">Seamless integration with Salesforce, Concur, Worldpay and other enterprise systems.</p>
              </CardContent>
            </Card>
          </div>

          {/* Detail Cards Row - Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 touch-manipulation">
              <CardContent className="p-6 sm:p-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#0A6ED1] dark:group-hover:bg-[#60d5ff] transition-colors">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#0A6ED1] dark:text-[#60d5ff] group-hover:text-white dark:group-hover:text-black" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">Revenue Recognition & Compliance</h3>
                <ul className="space-y-2 mb-4 sm:mb-6 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0A6ED1] dark:bg-[#60d5ff] rounded-full mr-3"></span>EBRR Configuration</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0A6ED1] dark:bg-[#60d5ff] rounded-full mr-3"></span>IFRS 15 Compliance</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0A6ED1] dark:bg-[#60d5ff] rounded-full mr-3"></span>ASC 606 Implementation</li>
                </ul>
                <Link to="/services/revenue-recognition" className="inline-flex items-center text-[#0A6ED1] dark:text-[#60d5ff] hover:text-[#085bb5] dark:hover:text-[#4dc3ff] font-semibold text-sm sm:text-base touch-manipulation min-h-[44px]">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 touch-manipulation">
              <CardContent className="p-6 sm:p-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-50 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-green-500 transition-colors">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 group-hover:text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">Banking & Treasury Optimization</h3>
                <ul className="space-y-2 mb-4 sm:mb-6 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>Bank Connectivity</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>Cash Management</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>Treasury Workstation</li>
                </ul>
                <Link to="/services/banking-treasury" className="inline-flex items-center text-green-500 hover:text-green-600 font-semibold text-sm sm:text-base touch-manipulation min-h-[44px]">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 touch-manipulation md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 sm:p-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-50 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-purple-500 transition-colors">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 group-hover:text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">Tax & Compliance Automation</h3>
                <ul className="space-y-2 mb-4 sm:mb-6 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>Multi-Country Tax</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>VAT Configuration</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>Tax Reporting</li>
                </ul>
                <Link to="/services/tax-compliance" className="inline-flex items-center text-purple-500 hover:text-purple-600 font-semibold text-sm sm:text-base touch-manipulation min-h-[44px]">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Tool */}
      <ComparisonTool />

      {/* Industry Showcase */}
      <IndustryShowcase />

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#0A6ED1] to-[#60d5ff] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-xs sm:text-sm font-medium mb-6 sm:mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-white rounded-full mr-2 opacity-60"></span>
            Ready to Transform?
          </div>
          
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Transform Your Finance
            <br />
            <span className="text-blue-100">Operations Today</span>
          </h2>
          
          {/* Subheading */}
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto">
            Let's discuss how our SAP Public Cloud Finance expertise can accelerate your digital transformation journey
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button 
              asChild
              size="lg"
              className="w-full sm:w-auto bg-white text-[#0A6ED1] hover:bg-gray-50 hover:scale-105 px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[44px] touch-manipulation"
            >
              <Link to="/contact">
                Schedule Your Consultation <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#0A6ED1] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 min-h-[44px] touch-manipulation"
            >
              <Link to="/case-studies">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedHomePage;