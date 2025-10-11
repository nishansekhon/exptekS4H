import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './ui/breadcrumb';
import { ArrowLeft, Calendar, Mail, Phone } from 'lucide-react';

const ComingSoonPage = ({ 
  title, 
  description = "This service page is currently under development.", 
  expectedLaunch = "Coming Soon",
  features = []
}) => {
  
  const handleContactClick = (type) => {
    console.log(`Coming Soon page contact clicked: ${type} for ${title}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-950">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 pt-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/services">Services</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Coming Soon Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-50 dark:text-orange-400 dark:border-orange-800 dark:bg-orange-950/50 mb-6">
            🚧 {expectedLaunch}
          </Badge>
          
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {title}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {/* [CONTENT TO BE UPDATED] */}
            {description} We're working hard to bring you comprehensive {title.toLowerCase()} solutions. 
            In the meantime, our experts are available to discuss your specific requirements.
          </p>

          {/* Construction Visual */}
          <div className="mb-12">
            <div className="w-32 h-32 bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30 rounded-full flex items-center justify-center mx-auto">
              <span className="text-6xl">🚧</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Information */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                What We're Building
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Service Overview</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Our {title} service will provide comprehensive solutions designed to optimize your SAP S/4HANA 
                    Public Cloud Finance operations with industry best practices and proven methodologies.
                  </p>
                  
                  {features.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Planned Features:</h4>
                      <ul className="space-y-2">
                        {features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Why Wait?</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Our SAP Finance experts have extensive experience in {title.toLowerCase()} and can 
                    provide immediate consultation and guidance for your specific requirements.
                  </p>
                  
                  <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Available Now:</h4>
                    <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
                      <li>• Expert consultation and assessment</li>
                      <li>• Requirements gathering and planning</li>
                      <li>• Custom solution design</li>
                      <li>• Implementation roadmap development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Schedule Consultation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Book a free consultation to discuss your {title.toLowerCase()} needs.
                </p>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                  onClick={() => handleContactClick('schedule-consultation')}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Call Our Experts</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Speak directly with our SAP Finance specialists.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleContactClick('call-experts')}
                >
                  +1 (555) EXPTEK-1
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Send Requirements</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Email us your specific requirements and timeline.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleContactClick('send-requirements')}
                >
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Back to Services */}
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="px-8 py-3">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Available Services */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Available Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore our ready-to-implement services while we finish building {title}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link to="/services/finance-implementation">
              <Card className="hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-2xl">📊</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        Finance Implementation End-to-End
                      </h3>
                      <Badge className="bg-green-500 text-white text-xs">Available Now</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Complete SAP S/4HANA Public Cloud Finance implementation with proven methodologies.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/digital-payments">
              <Card className="hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-2xl">💳</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        Digital Payments & Customer Payment
                      </h3>
                      <Badge className="bg-green-500 text-white text-xs">Available Now</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Streamlined payment processes with integrated digital payment solutions.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComingSoonPage;