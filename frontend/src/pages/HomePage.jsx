import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight, CheckCircle, TrendingUp, Users, Clock, Star } from 'lucide-react';
import { mockData } from '../data/mock';

const HomePage = () => {
  const { company, services, caseStudies, insights } = mockData;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 pt-20 pb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(59,130,246,0.03)_25%,transparent_25%,transparent_75%,rgba(59,130,246,0.03)_75%)] bg-[length:60px_60px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/20 text-blue-300 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 animate-pulse"></span>
              Leading SAP Public Cloud Finance Experts
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-bold mb-8 tracking-tight leading-none">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                SAP S/4HANA
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Public Cloud Finance
              </span>
              <br />
              <span className="text-gray-300 text-6xl lg:text-7xl">Experts</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Transform your financial operations with <span className="text-blue-400 font-medium">100+ Fit-to-Standard workshops</span> delivered using proven SAP Activate methodology
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-6 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 border-0 group"
              >
                <Link to="/contact">
                  Book a Consultation 
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-2 border-gray-600 text-gray-300 hover:bg-white/5 hover:border-blue-400 hover:text-blue-400 px-12 py-6 text-lg font-bold rounded-2xl transition-all duration-300 backdrop-blur-sm"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">100+</div>
              <div className="text-gray-300 font-medium text-sm lg:text-base">Fit-to-Standard Workshops</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">50%</div>
              <div className="text-gray-300 font-medium text-sm lg:text-base">Faster Implementation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">10+</div>
              <div className="text-gray-300 font-medium text-sm lg:text-base">Years SAP Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-gray-300 font-medium text-sm lg:text-base">Post-Go-Live Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* SAP Connect Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(168,85,247,0.08),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/20 text-blue-300 text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 animate-pulse"></span>
                Connect with SAP Experts
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Transform Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Finance Journey
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
                Join hundreds of finance leaders who have transformed their operations with our <span className="text-blue-400 font-medium">proven SAP expertise</span> and industry-leading methodologies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-5 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                >
                  <Link to="/contact">Start Your Journey</Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="border-2 border-gray-600 text-gray-300 hover:bg-white/5 hover:border-blue-400 hover:text-blue-400 px-10 py-5 text-lg font-bold rounded-2xl transition-all duration-300 backdrop-blur-sm"
                >
                  <Link to="/case-studies">View Success Stories</Link>
                </Button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1758691736975-9f7f643d178e"
                  alt="Diverse Business Team Collaboration - Transform Your Finance Journey"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-15 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 text-slate-700 text-sm font-semibold mb-8 border border-blue-100">
              <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></span>
              Our Expertise
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 bg-clip-text text-transparent">
                SAP Public Cloud Finance
              </span>
              <br />
              <span className="text-[#0A6ED1]">Services</span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Comprehensive SAP S/4HANA Public Cloud Finance consulting services to transform your financial operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => {
              const IconComponent = {
                calculator: TrendingUp,
                'credit-card': CheckCircle,
                link: Users,
                'trending-up': TrendingUp,
                building: CheckCircle,
                'file-text': Users,
                'bar-chart': TrendingUp
              }[service.icon] || TrendingUp;
              
              const isPaymentService = service.id === 'digital-payments';
              const isFinanceImplementation = service.id === 'finance-implementation';
              const isApiIntegration = service.id === 'api-integration';
              
              return (
                <Card key={service.id} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-sm hover:-translate-y-2 bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden">
                  {isPaymentService && (
                    <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
                      <img 
                        src="https://customer-assets.emergentagent.com/job_sapcloudfin/artifacts/0frb3bcz_Digital%20Payment%20and%20Customer%20Payment%20image.png"
                        alt="Digital Payment Services"
                        className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
                    </div>
                  )}
                  {isFinanceImplementation && (
                    <div className="h-48 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
                      <img 
                        src="https://customer-assets.emergentagent.com/job_sapcloudfin/artifacts/x7ywqunq_Finance%20Implementation%20SAP.png"
                        alt="Finance Implementation SAP"
                        className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
                    </div>
                  )}
                  {isApiIntegration && (
                    <div className="h-48 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
                      <img 
                        src="https://customer-assets.emergentagent.com/job_sapcloudfin/artifacts/4ttxf48d_API%20Image.png"
                        alt="API & External System Integration"
                        className="w-full h-full object-cover opacity-85 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#0A6ED1] group-hover:to-blue-600 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-[#0A6ED1] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#0A6ED1] transition-colors">{service.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to={`/services/${service.id}`}
                      className="inline-flex items-center text-[#0A6ED1] hover:text-[#085bb5] font-semibold group-hover:underline transition-all duration-200 text-sm"
                    >
                      Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-16">
            <Button asChild variant="outline" size="lg" className="border-2 border-slate-300 text-slate-700 hover:bg-[#0A6ED1] hover:border-[#0A6ED1] hover:text-white px-12 py-4 rounded-2xl font-bold transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-blue-500/25">
              <Link to="/services">View All Services <ArrowRight className="ml-3 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-[#0A6ED1] via-blue-600 to-[#0A6ED1] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-blue-100 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            Ready to Transform?
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Transform Your Finance
            <br />
            <span className="text-blue-200">Operations Today</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-blue-100 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
            Let's discuss how our SAP Public Cloud Finance expertise can accelerate your digital transformation journey
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-[#0A6ED1] hover:bg-gray-50 hover:scale-105 px-10 py-5 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0 group"
            >
              <Link to="/contact">
                Schedule Your Consultation 
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-5 text-lg font-semibold rounded-2xl transition-all duration-300 backdrop-blur-sm"
            >
              <Link to="/case-studies">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;