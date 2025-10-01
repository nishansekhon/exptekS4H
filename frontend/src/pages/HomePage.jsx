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
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              {company.tagline}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {company.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-[#0A6ED1] hover:bg-[#085bb5] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Link to="/contact">Book a Consultation <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-2 border-[#0A6ED1] text-[#0A6ED1] hover:bg-[#0A6ED1] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-[#0A6ED1] mb-2">100+</div>
              <div className="text-gray-600 font-medium">Fit-to-Standard Workshops</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-[#0A6ED1] mb-2">50%</div>
              <div className="text-gray-600 font-medium">Faster Implementation</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-[#0A6ED1] mb-2">10+</div>
              <div className="text-gray-600 font-medium">Years SAP Experience</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-[#0A6ED1] mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Post-Go-Live Support</div>
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
              
              return (
                <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0A6ED1] group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6 text-[#0A6ED1] group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to={`/services/${service.id}`}
                      className="inline-flex items-center text-[#0A6ED1] hover:text-[#085bb5] font-medium group-hover:underline transition-colors"
                    >
                      Learn More <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-2 border-[#0A6ED1] text-[#0A6ED1] hover:bg-[#0A6ED1] hover:text-white px-8 py-3">
              <Link to="/services">View All Services <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our SAP Public Cloud Finance implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.slice(0, 2).map((caseStudy, index) => (
              <Card key={caseStudy.id} className="bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#0A6ED1] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {caseStudy.industry}
                    </div>
                    <div className="ml-auto flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="text-sm">{caseStudy.timeline}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{caseStudy.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{caseStudy.challenge}</p>
                  <div className="space-y-2 mb-6">
                    {caseStudy.results.slice(0, 3).map((result, idx) => (
                      <div key={idx} className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-2" />
                        <span className="text-sm text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={`/case-studies#${caseStudy.id}`}
                    className="inline-flex items-center text-[#0A6ED1] hover:text-[#085bb5] font-medium hover:underline transition-colors"
                  >
                    Read Full Case Study <ArrowRight className="ml-1 w-4 h-4" />
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
      <section className="py-16 lg:py-24 bg-[#0A6ED1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Finance Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's discuss how our SAP Public Cloud Finance expertise can accelerate your digital transformation
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-white text-[#0A6ED1] hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Link to="/contact">Schedule Your Consultation <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;