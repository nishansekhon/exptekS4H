import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight, TrendingUp, CheckCircle, Users } from 'lucide-react';

const NewHomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] pt-20 pb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(96,213,255,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(10,110,209,0.06),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-white rounded-full mr-3 opacity-60"></span>
                Leading SAP Public Cloud Finance Experts
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-none">
                <span className="text-white">SAP S/4HANA</span>
                <br />
                <span className="text-[#60d5ff]">Public Cloud Finance</span>
                <br />
                <span className="text-white">Experts</span>
              </h1>
              
              {/* Subheading */}
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Transform your financial operations with 100+ Fit-to-Standard workshops delivered using proven SAP Activate methodology
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-[#0A6ED1] hover:bg-[#085bb5] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                >
                  <Link to="/contact">
                    Book a Consultation <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a5f] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200"
                >
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            
            {/* Right Column - Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl font-bold text-[#60d5ff] mb-2">100+</div>
                <div className="text-white text-sm font-medium">Fit-to-Standard Workshops</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl font-bold text-[#60d5ff] mb-2">50%</div>
                <div className="text-white text-sm font-medium">Faster Implementation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl font-bold text-[#60d5ff] mb-2">10+</div>
                <div className="text-white text-sm font-medium">Years SAP Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl font-bold text-[#60d5ff] mb-2">24/7</div>
                <div className="text-white text-sm font-medium">Post-Go-Live Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 text-[#0A6ED1] text-sm font-semibold mb-8 border border-blue-100">
              <span className="w-2 h-2 bg-[#0A6ED1] rounded-full mr-3"></span>
              Our Expertise
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-gray-900">SAP Public Cloud Finance</span>
              <br />
              <span className="text-[#0A6ED1]">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive SAP S/4HANA Public Cloud Finance consulting services to transform your financial operations
            </p>
          </div>
          
          {/* Showcase Cards Row */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Finance Implementation */}
            <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] border-0 text-white overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
                <img 
                  src="https://customer-assets.emergentagent.com/job_sapcloudfin/artifacts/x7ywqunq_Finance%20Implementation%20SAP.png"
                  alt="Finance Implementation"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 to-transparent"></div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Finance Implementation</h3>
                <p className="text-lg mb-4 text-gray-300">End-to-End</p>
                <p className="text-gray-300 leading-relaxed">Complete SAP S/4HANA Public Cloud Finance implementation with proven methodologies and best practices.</p>
              </CardContent>
            </Card>

            {/* Digital Payment */}
            <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] border-0 text-white overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
                <img 
                  src="https://customer-assets.emergentagent.com/job_sapcloudfin/artifacts/0frb3bcz_Digital%20Payment%20and%20Customer%20Payment%20image.png"
                  alt="Digital Payment Services"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 to-transparent"></div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Digital Payment &</h3>
                <p className="text-lg mb-4 text-gray-300">Customer Payment</p>
                <p className="text-gray-300 leading-relaxed">Streamlined payment processes with integrated digital payment solutions and customer portals.</p>
              </CardContent>
            </Card>

            {/* API Integration */}
            <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] border-0 text-white overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
                <img 
                  src="https://customer-assets.emergentagent.com/job_sapcloudfin/artifacts/4ttxf48d_API%20Image.png"
                  alt="API Integration"
                  className="w-full h-full object-cover opacity-85 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 to-transparent"></div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">API & System</h3>
                <p className="text-lg mb-4 text-gray-300">Integration</p>
                <p className="text-gray-300 leading-relaxed">Seamless integration with Salesforce, Concur, Worldpay and other enterprise systems.</p>
              </CardContent>
            </Card>
          </div>

          {/* Detail Cards Row */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white border border-gray-200">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0A6ED1] transition-colors">
                  <TrendingUp className="w-6 h-6 text-[#0A6ED1] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Revenue Recognition & Compliance</h3>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0A6ED1] rounded-full mr-3"></span>EBRR Configuration</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0A6ED1] rounded-full mr-3"></span>IFRS 15 Compliance</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0A6ED1] rounded-full mr-3"></span>ASC 606 Implementation</li>
                </ul>
                <Link to="/services/revenue-recognition" className="inline-flex items-center text-[#0A6ED1] hover:text-[#085bb5] font-semibold">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white border border-gray-200">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                  <CheckCircle className="w-6 h-6 text-green-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Banking & Treasury Optimization</h3>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>Bank Connectivity</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>Cash Management</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>Treasury Workstation</li>
                </ul>
                <Link to="/services/banking-treasury" className="inline-flex items-center text-green-500 hover:text-green-600 font-semibold">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white border border-gray-200">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors">
                  <Users className="w-6 h-6 text-purple-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tax & Compliance Automation</h3>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>Multi-Country Tax</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>VAT Configuration</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>Tax Reporting</li>
                </ul>
                <Link to="/services/tax-compliance" className="inline-flex items-center text-purple-500 hover:text-purple-600 font-semibold">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0A6ED1] to-[#60d5ff] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-white rounded-full mr-2 opacity-60"></span>
            Ready to Transform?
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Finance
            <br />
            <span className="text-blue-100">Operations Today</span>
          </h2>
          
          {/* Subheading */}
          <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto">
            Let's discuss how our SAP Public Cloud Finance expertise can accelerate your digital transformation journey
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-[#0A6ED1] hover:bg-gray-50 hover:scale-105 px-10 py-4 text-lg font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Link to="/contact">
                Schedule Your Consultation <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0A6ED1] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              <Link to="/case-studies">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewHomePage;