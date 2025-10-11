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
  Target,
  Users,
  Award,
  Globe,
  TrendingUp,
  Shield,
  Lightbulb,
  MessageCircle,
  BookOpen,
  MapPin,
  Mail
} from 'lucide-react';

const AboutPage = () => {
  const handleCTAClick = (ctaType) => {
    console.log(`About CTA clicked: ${ctaType}`);
  };

  const whyChooseExpTek = [
    {
      title: 'Exclusive Public Cloud Finance Focus',
      description: '100% dedicated to SAP S/4HANA Public Cloud Finance implementations',
      icon: <Target className="h-6 w-6" />
    },
    {
      title: '50+ Successful Implementations',
      description: 'Proven track record across multiple industries and business sizes',
      icon: <CheckCircle2 className="h-6 w-6" />
    },
    {
      title: '100+ Fit-to-Standard Workshops Delivered',
      description: 'Extensive experience in SAP best practices and process optimization',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: 'SAP Activate Certified Methodology',
      description: 'Structured, phased delivery approach for predictable success',
      icon: <Award className="h-6 w-6" />
    },
    {
      title: '15+ Years Average Team Experience',
      description: 'Deep SAP expertise combined with real-world finance knowledge',
      icon: <Users className="h-6 w-6" />
    },
    {
      title: '98% Client Success Rate',
      description: 'Consistent delivery excellence with measurable business outcomes',
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: '24/7 Post-Go-Live Support',
      description: 'Continuous support and optimization for long-term success',
      icon: <Shield className="h-6 w-6" />
    }
  ];

  const expertise = [
    'Finance Implementation',
    'Digital Payments & Portals',
    'API & System Integration', 
    'Revenue Recognition (EBRR)',
    'Banking & Treasury',
    'Tax & Compliance',
    'Analytics & Reporting'
  ];

  const coreValues = [
    {
      title: 'Client Success First',
      description: 'Every decision is made with our clients\' success as the primary consideration',
      icon: <Target className="h-8 w-8" />,
      color: 'blue'
    },
    {
      title: 'Quality Over Quantity',
      description: 'We focus on delivering exceptional results rather than maximizing project volume',
      icon: <Award className="h-8 w-8" />,
      color: 'green'
    },
    {
      title: 'Continuous Innovation',
      description: 'Staying ahead of SAP developments to provide cutting-edge solutions',
      icon: <Lightbulb className="h-8 w-8" />,
      color: 'purple'
    },
    {
      title: 'Transparent Communication',
      description: 'Open, honest communication throughout every phase of our engagements',
      icon: <MessageCircle className="h-8 w-8" />,
      color: 'orange'
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
              <BreadcrumbPage>About</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50 dark:text-blue-400 dark:border-blue-800 dark:bg-blue-950/50 mb-6">
            ABOUT EXPTEK
          </Badge>
          
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            About ExpTek
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {/* [CONTENT TO BE UPDATED] */}
            Your trusted partner for SAP S/4HANA Public Cloud Finance excellence. Delivering faster, more 
            efficient implementations with proven expertise and methodology.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Company Overview
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  {/* [CONTENT TO BE UPDATED] */}
                  ExpTek is a specialized SAP consulting firm focused exclusively on SAP S/4HANA Public Cloud Finance. 
                  Founded by seasoned SAP professionals, we deliver faster, more efficient implementations than 
                  traditional Big 4 consulting firms.
                </p>
                <p>
                  Our exclusive focus on Public Cloud Finance means deeper expertise, proven methodologies, and 
                  better outcomes for our clients. We understand the unique challenges of finance transformation 
                  and provide tailored solutions that drive real business value.
                </p>
                <p>
                  With 50+ successful implementations across multiple industries, ExpTek has established itself 
                  as a trusted partner for organizations seeking to modernize their finance operations with 
                  SAP S/4HANA Public Cloud.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Implementations</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">98%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">15+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
              Our Mission
            </h2>
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-0">
              <blockquote className="text-2xl text-gray-700 dark:text-gray-300 italic mb-4">
                "To empower finance organizations with world-class SAP S/4HANA Public Cloud implementations 
                that drive real business value."
              </blockquote>
              <p className="text-gray-600 dark:text-gray-400">
                We believe that every organization deserves access to best-in-class finance technology and expertise, 
                delivered efficiently and effectively.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose ExpTek */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose ExpTek
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our focused expertise and proven methodology deliver superior results with faster timelines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {whyChooseExpTek.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive SAP S/4HANA Public Cloud Finance services across all functional areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {expertise.map((area, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-md transition-all duration-300">
                <CheckCircle2 className="h-6 w-6 text-green-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                  {area}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Team
            </h2>
          </div>

          <Card className="p-8 text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              SAP-Certified Finance Experts
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              {/* [CONTENT TO BE UPDATED] */}
              Our team consists of SAP-certified consultants with 15+ years of experience in finance transformation. 
              We combine deep SAP product knowledge with real-world finance expertise to deliver solutions that work 
              in practice, not just in theory.
            </p>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 bg-${value.color}-100 dark:bg-${value.color}-900/50 rounded-full flex items-center justify-center mx-auto mb-4 text-${value.color}-600 dark:text-${value.color}-400`}>
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Location */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Certifications */}
          <Card className="p-8">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center">
                <Award className="h-6 w-6 mr-2 text-blue-600" />
                Certifications & Partners
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">SAP Certified Application Consultant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">SAP Activate Methodology Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">SAP S/4HANA Public Cloud Finance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Industry Partnership Program</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="p-8">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center">
                <MapPin className="h-6 w-6 mr-2 text-blue-600" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ExpTek LLC</h4>
                  <div className="text-gray-600 dark:text-gray-400 space-y-1">
                    <p>28345 Beck Road, Suite 406</p>
                    <p>Wixom, Michigan, 48393</p>
                    <p>United States</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:hr@exptek.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                    hr@exptek.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 dark:from-blue-800 dark:via-blue-900 dark:to-cyan-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Finance Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {/* [CONTENT TO BE UPDATED] */}
            Partner with ExpTek for your SAP S/4HANA Public Cloud Finance journey. Our expertise, 
            methodology, and commitment to success will drive measurable results for your organization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold"
              onClick={() => handleCTAClick('schedule-consultation')}
            >
              Schedule Consultation
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
            
            <Link to="/case-studies">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg font-semibold"
              >
                View Our Success Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;