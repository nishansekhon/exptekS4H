import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../components/ui/breadcrumb';
import { 
  ArrowRight, 
  Calendar,
  CheckCircle2,
  TrendingUp,
  CreditCard,
  Link2,
  BarChart3,
  Building2,
  Scale,
  PieChart,
  Wrench
} from 'lucide-react';

const ServicesOverviewPage = () => {
  const services = [
    {
      id: 1,
      title: "Finance Implementation End-to-End",
      icon: <TrendingUp className="h-8 w-8" />,
      iconEmoji: "📊",
      description: "Complete SAP S/4HANA Public Cloud Finance implementation with proven methodologies and best practices.",
      link: "/services/finance-implementation",
      features: ["16-20 week implementation", "100+ Fit-to-Standard workshops", "SAP Activate methodology"],
      status: "Available",
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 2,
      title: "Digital Payments & Customer Payment",
      icon: <CreditCard className="h-8 w-8" />,
      iconEmoji: "💳",
      description: "Streamlined payment processes with integrated digital payment solutions and customer portals.",
      link: "/services/digital-payments",
      features: ["PCI-DSS compliance", "Multi-PSP integration", "Real-time processing"],
      status: "Available",
      color: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "API & External System Integration",
      icon: <Link2 className="h-8 w-8" />,
      iconEmoji: "🔗",
      description: "Seamless integration with Salesforce, Concur, Worldpay and other enterprise systems.",
      link: "/services/api-integration",
      features: ["Salesforce connectivity", "Concur integration", "Worldpay & PSP links"],
      status: "Available",
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 4,
      title: "Revenue Recognition & Compliance (EBRR)",
      icon: <BarChart3 className="h-8 w-8" />,
      iconEmoji: "📈",
      description: "Event-Based Revenue Recognition implementation and IFRS 15/ASC 606 compliance automation.",
      link: "/services/revenue-recognition",
      features: ["EBRR configuration", "IFRS 15 compliance", "ASC 606 implementation"],
      status: "Coming Soon",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      title: "Banking & Treasury Optimization",
      icon: <Building2 className="h-8 w-8" />,
      iconEmoji: "🏦",
      description: "Optimize cash management, bank connectivity, and treasury operations.",
      link: "/services/banking-treasury",
      features: ["Multi-bank connectivity", "Cash positioning", "Treasury workflows"],
      status: "Coming Soon",
      color: "from-teal-500 to-cyan-600"
    },
    {
      id: 6,
      title: "Tax & Compliance Automation",
      icon: <Scale className="h-8 w-8" />,
      iconEmoji: "⚖️",
      description: "Multi-country tax compliance and automated reporting solutions.",
      link: "/services/tax-compliance",
      features: ["Tax determination", "SOX compliance", "Regulatory reporting"],
      status: "Coming Soon",
      color: "from-violet-500 to-purple-600"
    },
    {
      id: 7,
      title: "Analytics & Reporting",
      icon: <PieChart className="h-8 w-8" />,
      iconEmoji: "📊",
      description: "SAP Fiori apps, custom dashboards, and financial analytics solutions.",
      link: "/services/analytics-reporting",
      features: ["Financial statements", "Management reporting", "Embedded analytics"],
      status: "Coming Soon",
      color: "from-pink-500 to-rose-600"
    },
    {
      id: 8,
      title: "Post-Go-Live Support & Optimization",
      icon: <Wrench className="h-8 w-8" />,
      iconEmoji: "🔧",
      description: "24/7 support, continuous improvement, and system optimization services.",
      link: "/services/support-optimization",
      features: ["24/7 support", "Performance tuning", "Continuous optimization"],
      status: "Coming Soon",
      color: "from-gray-500 to-slate-600"
    }
  ];

  const handleCTAClick = (ctaType) => {
    console.log(`Services Overview CTA clicked: ${ctaType}`);
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
              <BreadcrumbPage>Services</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center w-full max-w-5xl mx-auto">
          <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50 dark:text-blue-400 dark:border-blue-800 dark:bg-blue-950/50 mb-6">
            ExpTek Services Portfolio
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight break-words">
            Our Services
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-6 break-words px-4">
            Comprehensive SAP S/4HANA Public Cloud Finance Solutions
          </p>
          
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed w-full max-w-4xl mx-auto break-words px-2">
            {/* [CONTENT TO BE UPDATED] */}
            ExpTek specializes in end-to-end SAP Public Cloud Finance consulting, from implementation to optimization. 
            Explore our expert services designed to transform your finance operations with proven methodologies and industry best practices.
          </p>
        </div>

        {/* Statistics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">98%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">20+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">24/7</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Support Available</div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Complete Finance Transformation Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From initial implementation to ongoing optimization, we cover every aspect of your SAP S/4HANA Public Cloud Finance journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link key={service.id} to={service.link} className="block group">
              <Card className="h-full overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-0 bg-white dark:bg-gray-800">
                {/* Color Header */}
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                
                {/* Status Badge */}
                <div className="p-4 pb-0">
                  {service.status === 'Available' ? (
                    <Badge className="bg-green-500 text-white text-xs">
                      ✅ Available Now
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-50 dark:text-orange-400 dark:border-orange-800 dark:bg-orange-950/50 text-xs">
                      🚧 Coming Soon
                    </Badge>
                  )}
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{service.iconEmoji}</div>
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <Button 
                      variant={service.status === 'Available' ? 'default' : 'outline'}
                      size="sm" 
                      className={service.status === 'Available' 
                        ? "bg-blue-600 hover:bg-blue-700 text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600" 
                        : "text-gray-600 dark:text-gray-400"
                      }
                    >
                      {service.status === 'Available' ? 'Learn More' : 'View Details'}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Services Highlight */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our most popular services are available now with immediate implementation support.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Finance Implementation Highlight */}
            <Card className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white text-2xl">
                  📊
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Finance Implementation</h3>
                  <p className="text-green-600 dark:text-green-400 font-semibold">Available Now</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Complete end-to-end implementation with our proven SAP Activate methodology and 100+ workshops.
              </p>
              <Link to="/services/finance-implementation">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                  View Finance Implementation Details
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </Card>

            {/* Digital Payments Highlight */}
            <Card className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center text-white text-2xl">
                  💳
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Digital Payments</h3>
                  <p className="text-green-600 dark:text-green-400 font-semibold">Available Now</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Modern payment processing with Cloud for Customer Payment Portal and multi-PSP integration.
              </p>
              <Link to="/services/digital-payments">
                <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                  View Digital Payments Details
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Services CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-gray-900 to-blue-900 dark:from-gray-800 dark:to-blue-800 border-0 text-white overflow-hidden">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              {/* [CONTENT TO BE UPDATED] */}
              Let's discuss your specific requirements and recommend the right solution. Our SAP finance experts 
              will analyze your current setup and provide a customized implementation roadmap.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg"
                onClick={() => handleCTAClick('schedule-consultation')}
              >
                Schedule Free Consultation
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
              
              <Link to="/services/finance-implementation">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg"
                >
                  View Our Most Popular Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-blue-400/30">
              <p className="text-blue-200 mb-2">
                Have questions? Contact our SAP Finance experts:
              </p>
              <a 
                href="mailto:hr@exptek.com" 
                className="text-xl font-bold text-white hover:text-blue-200 transition-colors"
              >
                Email: hr@exptek.com
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default ServicesOverviewPage;