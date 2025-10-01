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
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-white pt-20 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(10,110,209,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.03),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-[#0A6ED1] text-sm font-medium mb-8 border border-blue-100">
              <span className="w-2 h-2 bg-[#0A6ED1] rounded-full mr-2 animate-pulse"></span>
              Leading SAP Public Cloud Finance Experts
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                SAP S/4HANA
              </span>
              <br />
              <span className="text-[#0A6ED1]">Public Cloud Finance</span>
              <br />
              <span className="text-gray-700">Experts</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Transform your financial operations with 100+ Fit-to-Standard workshops delivered using proven SAP Activate methodology
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                asChild
                size="lg"
                className="bg-[#0A6ED1] hover:bg-[#085bb5] text-white px-10 py-5 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 group"
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
                className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-[#0A6ED1] hover:text-[#0A6ED1] px-10 py-5 text-lg font-semibold rounded-2xl transition-all duration-300 backdrop-blur-sm"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100/50 group">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#0A6ED1] to-blue-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">100+</div>
              <div className="text-gray-600 font-medium text-sm lg:text-base">Fit-to-Standard Workshops</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100/50 group">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">50%</div>
              <div className="text-gray-600 font-medium text-sm lg:text-base">Faster Implementation</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100/50 group">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">10+</div>
              <div className="text-gray-600 font-medium text-sm lg:text-base">Years SAP Experience</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100/50 group">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-gray-600 font-medium text-sm lg:text-base">Post-Go-Live Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our SAP Public Cloud Finance Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              const isRevenueRecognition = service.id === 'revenue-recognition';
              const isBankingTreasury = service.id === 'banking-treasury';
              
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
                  {isRevenueRecognition && (
                    <div className="h-48 bg-gradient-to-br from-purple-50 to-indigo-50 relative overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
                        alt="Revenue Recognition & Compliance - SAP Fiori Interface"
                        className="w-full h-full object-cover opacity-85 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
                    </div>
                  )}
                  {isBankingTreasury && (
                    <div className="h-48 bg-gradient-to-br from-emerald-50 to-teal-50 relative overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1748439435495-722cc1728b7e?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
                        alt="Banking & Treasury Optimization - Modern Financial Interface"
                        className="w-full h-full object-cover opacity-85 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#0A6ED1] group-hover:to-blue-600 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-[#0A6ED1] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0A6ED1] transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
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
            <Button asChild variant="outline" size="lg" className="border-2 border-gray-200 text-gray-700 hover:bg-[#0A6ED1] hover:border-[#0A6ED1] hover:text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm">
              <Link to="/services">View All Services <ArrowRight className="ml-3 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-blue-50/20 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Proven Results
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Real results from our SAP Public Cloud Finance implementations across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {caseStudies.slice(0, 2).map((caseStudy, index) => (
              <Card key={caseStudy.id} className="bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 rounded-3xl border-0 overflow-hidden group">
                <CardContent className="p-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-gradient-to-r from-[#0A6ED1] to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {caseStudy.industry}
                    </div>
                    <div className="flex items-center text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{caseStudy.timeline}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0A6ED1] transition-colors">{caseStudy.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{caseStudy.challenge}</p>
                  <div className="space-y-3 mb-8">
                    {caseStudy.results.slice(0, 3).map((result, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-4 mt-0.5">
                          <Star className="w-3 h-3 text-yellow-600" />
                        </div>
                        <span className="text-gray-700 font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={`/case-studies#${caseStudy.id}`}
                    className="inline-flex items-center text-[#0A6ED1] hover:text-[#085bb5] font-semibold hover:underline transition-all duration-200 text-lg group"
                  >
                    Read Full Case Study <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-2 border-[#0A6ED1] text-[#0A6ED1] hover:bg-[#0A6ED1] hover:text-white px-8 py-3">
              <Link to="/case-studies">View All Case Studies <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Insights Preview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest SAP Public Cloud Finance trends and best practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.slice(0, 3).map((insight) => (
              <Card key={insight.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-50 text-[#0A6ED1] px-3 py-1 rounded-full text-sm font-medium">
                      {insight.category}
                    </span>
                    <span className="text-xs text-gray-500">{insight.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#0A6ED1] transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{insight.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{insight.publishDate}</span>
                    <Link 
                      to={`/insights/${insight.id}`}
                      className="inline-flex items-center text-[#0A6ED1] hover:text-[#085bb5] font-medium text-sm group-hover:underline transition-colors"
                    >
                      Read Article <ArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-2 border-[#0A6ED1] text-[#0A6ED1] hover:bg-[#0A6ED1] hover:text-white px-8 py-3">
              <Link to="/insights">View All Insights <ArrowRight className="ml-2 w-5 h-5" /></Link>
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