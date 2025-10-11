import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../components/ui/breadcrumb';
import { ArrowRight, Calendar, Clock, TrendingUp, Users, Building2, Globe } from 'lucide-react';

const CaseStudiesPage = () => {
  const handleCTAClick = (ctaType) => {
    console.log(`Case Studies CTA clicked: ${ctaType}`);
  };

  const caseStudies = [
    {
      id: 1,
      title: 'Manufacturing Finance Transformation',
      client: 'Global Manufacturing Company',
      industry: 'Manufacturing',
      icon: <Building2 className="h-8 w-8" />,
      challenge: 'Legacy ERP replacement across 15 legal entities with complex intercompany processes',
      solution: 'SAP S/4HANA Public Cloud Finance - 12 week implementation using SAP Activate methodology',
      results: [
        { metric: '60%', description: 'Faster month-end close (10 days → 4 days)' },
        { metric: '40%', description: 'Reduction in finance headcount needs' },
        { metric: '100%', description: 'Real-time financial visibility across all entities' },
        { metric: '99.9%', description: 'System uptime since go-live' }
      ],
      timeline: '12 weeks',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 2,
      title: 'Retail Digital Payments Integration',
      client: 'Leading E-Commerce Retailer',
      industry: 'Retail/E-Commerce',
      icon: <Globe className="h-8 w-8" />,
      challenge: 'Manual payment processing with high failure rates and reconciliation delays',
      solution: 'Digital Payments Add-On with Stripe integration and Customer Payment Portal',
      results: [
        { metric: '98%', description: 'Payment authorization success rate' },
        { metric: '45%', description: 'Reduction in processing time' },
        { metric: '$500K', description: 'Annual cost savings achieved' },
        { metric: 'Same-day', description: 'Payment reconciliation process' }
      ],
      timeline: '8 weeks',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'Professional Services EBRR Implementation',
      client: 'Global Consulting Firm',
      industry: 'Professional Services',
      icon: <Users className="h-8 w-8" />,
      challenge: 'Complex revenue recognition requirements and IFRS 15 compliance across multiple service lines',
      solution: 'Event-Based Revenue Recognition (EBRR) with automated compliance reporting',
      results: [
        { metric: '100%', description: 'IFRS 15 compliance achievement' },
        { metric: '75%', description: 'Faster revenue recognition process' },
        { metric: 'Automated', description: 'Compliance reporting workflow' },
        { metric: 'Real-time', description: 'Revenue visibility dashboard' }
      ],
      timeline: '10 weeks',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 4,
      title: 'Multi-Country Tax Automation',
      client: 'International Technology Company',
      industry: 'Technology/SaaS',
      icon: <TrendingUp className="h-8 w-8" />,
      challenge: 'Tax compliance complexity across 20 countries with varying regulations',
      solution: 'SAP Tax Engine with Vertex integration for automated multi-jurisdiction compliance',
      results: [
        { metric: '100%', description: 'Tax compliance across all jurisdictions' },
        { metric: '80%', description: 'Reduction in manual tax calculations' },
        { metric: 'Real-time', description: 'Tax determination capability' },
        { metric: '20 countries', description: 'Automated reporting coverage' }
      ],
      timeline: '14 weeks',
      color: 'from-orange-500 to-red-600'
    }
  ];

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
              <BreadcrumbPage>Case Studies</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50 dark:text-blue-400 dark:border-blue-800 dark:bg-blue-950/50 mb-6">
            SUCCESS STORIES
          </Badge>
          
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Client Success Stories
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {/* [CONTENT TO BE UPDATED] */}
            Real results from SAP S/4HANA Public Cloud Finance implementations. See how our clients achieved 
            measurable business outcomes with ExpTek's proven methodology and expertise.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Successful Implementations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">98%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Client Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">60%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Average Time Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">15+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Industries Served</div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <Card key={study.id} className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className={`h-2 bg-gradient-to-r ${study.color}`}></div>
              
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left Column - Overview */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${study.color} rounded-lg flex items-center justify-center text-white`}>
                        {study.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {study.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                          {study.client}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          {study.industry}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span>Implementation: {study.timeline}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Challenge:</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solution:</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Results */}
                  <div className="lg:col-span-2">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                      Measurable Results
                    </h4>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {study.results.map((result, resultIndex) => (
                        <Card key={resultIndex} className="p-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-950/30 border-0">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                              {result.metric}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">
                              {result.description}
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>

                    <div className="mt-6 flex justify-center">
                      <Button 
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                        onClick={() => handleCTAClick(`read-case-study-${study.id}`)}
                      >
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 dark:from-blue-800 dark:via-blue-900 dark:to-cyan-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Your Success Story Starts Here
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {/* [CONTENT TO BE UPDATED] */}
            Ready to achieve similar results for your organization? Let's discuss how ExpTek can transform 
            your finance operations with proven SAP S/4HANA Public Cloud expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold"
              onClick={() => handleCTAClick('schedule-consultation')}
            >
              Schedule Free Consultation
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
            
            <Link to="/services">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg font-semibold"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-blue-500/30">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">50+</div>
                <div className="text-blue-200 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">98%</div>
                <div className="text-blue-200 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">15+</div>
                <div className="text-blue-200 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-blue-200 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;