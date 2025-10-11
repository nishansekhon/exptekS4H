import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, Users, CheckCircle, TrendingDown, Download, Calendar, ChevronRight, ArrowDown, CheckCircle2, MapPin, Users2, Target, Lightbulb } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/ui/collapsible';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../components/ui/breadcrumb';
import CustomRoadmap from '../components/CustomRoadmap';
import financeData from '../data/finance-implementation.json';

// Icon mapping for statistics
const iconMap = {
  Clock: Clock,
  Users: Users,
  CheckCircle: CheckCircle,
  TrendingDown: TrendingDown
};

const FinanceImplementationPage = () => {
  const [animatedStats, setAnimatedStats] = useState({});
  const { financeImplementation } = financeData;

  // Animate statistics counters on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      financeImplementation.overview.statistics.forEach((stat, index) => {
        setTimeout(() => {
          setAnimatedStats(prev => ({
            ...prev,
            [index]: true
          }));
        }, index * 200);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleCTAClick = (ctaType) => {
    console.log(`CTA clicked: ${ctaType}`);
    // GA4 Event tracking placeholder
    // gtag('event', 'cta_click', { cta_type: ctaType, page: 'finance-implementation' });
  };

  const handleDownloadClick = (resource) => {
    console.log(`Download requested: ${resource}`);
    // GA4 Event tracking placeholder
    // gtag('event', 'resource_download', { resource_name: resource, page: 'finance-implementation' });
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
              <BreadcrumbPage>Finance Implementation</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50 dark:text-blue-400 dark:border-blue-800 dark:bg-blue-950/50">
              {financeImplementation.hero.badge}
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              {financeImplementation.hero.title}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {financeImplementation.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
                onClick={() => handleCTAClick('schedule-discovery')}
              >
                {financeImplementation.hero.primaryCTA}
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/50 px-8 py-6 text-lg"
                onClick={() => handleDownloadClick('implementation-guide')}
              >
                {financeImplementation.hero.secondaryCTA}
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* ExpTek Comprehensive Implementation Roadmap */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-xl p-6 overflow-auto">
                {/* Roadmap Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">ExpTek Finance Implementation Framework</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Comprehensive SAP S/4HANA Cloud Methodology with Detailed Milestones</p>
                </div>
                
                {/* Swimlane Roadmap */}
                <div className="min-w-[1000px]">
                  {/* Phase Timeline Header */}
                  <div className="grid grid-cols-6 gap-2 mb-4">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-3 rounded-lg text-center">
                      <div className="font-bold text-sm">DISCOVER</div>
                      <div className="text-xs opacity-90">Weeks 1-3</div>
                    </div>
                    <div className="bg-gradient-to-r from-green-400 to-emerald-400 text-white p-3 rounded-lg text-center">
                      <div className="font-bold text-sm">PREPARE</div>
                      <div className="text-xs opacity-90">Weeks 4-6</div>
                    </div>
                    <div className="bg-gradient-to-r from-teal-400 to-cyan-400 text-white p-3 rounded-lg text-center">
                      <div className="font-bold text-sm">EXPLORE</div>
                      <div className="text-xs opacity-90">Weeks 8-12</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-3 rounded-lg text-center">
                      <div className="font-bold text-sm">REALIZE</div>
                      <div className="text-xs opacity-90">Weeks 13-16</div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-400 to-red-400 text-white p-3 rounded-lg text-center">
                      <div className="font-bold text-sm">DEPLOY</div>
                      <div className="text-xs opacity-90">Week 17</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-400 to-indigo-400 text-white p-3 rounded-lg text-center">
                      <div className="font-bold text-sm">RUN</div>
                      <div className="text-xs opacity-90">Ongoing</div>
                    </div>
                  </div>

                  {/* Workstream Rows */}
                  <div className="space-y-2">
                    {/* Project Management Row */}
                    <div className="grid grid-cols-7 gap-2 items-center">
                      <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 p-2">Project Management</div>
                      <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded text-xs text-center">Project Kickoff & Charter</div>
                      <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded text-xs text-center">Governance Setup</div>
                      <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded text-xs text-center">Sprint Planning & Execution</div>
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded text-xs text-center">Quality Assurance</div>
                      <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded text-xs text-center">Go-Live Management</div>
                      <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded text-xs text-center">Continuous Support</div>
                    </div>

                    {/* Business Process Row */}
                    <div className="grid grid-cols-7 gap-2 items-center">
                      <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 p-2">Business Process</div>
                      <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded text-xs text-center">As-Is Analysis</div>
                      <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded text-xs text-center">Fit-to-Standard Analysis</div>
                      <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded text-xs text-center">Process Configuration</div>
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded text-xs text-center">Testing & Validation</div>
                      <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded text-xs text-center">Process Cutover</div>
                      <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded text-xs text-center">Process Optimization</div>
                    </div>

                    {/* Technical Setup Row */}
                    <div className="grid grid-cols-7 gap-2 items-center">
                      <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 p-2">Technical Setup</div>
                      <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded text-xs text-center">Cloud Trial Setup</div>
                      <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded text-xs text-center">Development System</div>
                      <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded text-xs text-center">Configuration Build</div>
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded text-xs text-center">Quality System Setup</div>
                      <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded text-xs text-center">Production Activation</div>
                      <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded text-xs text-center">System Maintenance</div>
                    </div>

                    {/* Finance Configuration Row */}
                    <div className="grid grid-cols-7 gap-2 items-center">
                      <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 p-2">Finance Config</div>
                      <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded text-xs text-center">Chart of Accounts</div>
                      <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded text-xs text-center">GL Configuration</div>
                      <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded text-xs text-center">AP/AR Setup</div>
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded text-xs text-center">Asset Accounting</div>
                      <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded text-xs text-center">Period Close Setup</div>
                      <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded text-xs text-center">Financial Reporting</div>
                    </div>

                    {/* Data Migration Row */}
                    <div className="grid grid-cols-7 gap-2 items-center">
                      <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 p-2">Data Migration</div>
                      <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded text-xs text-center">Data Assessment</div>
                      <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded text-xs text-center">Migration Strategy</div>
                      <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded text-xs text-center">Data Preparation</div>
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded text-xs text-center">Migration Testing</div>
                      <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded text-xs text-center">Production Load</div>
                      <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded text-xs text-center">Data Quality</div>
                    </div>

                    {/* Testing & Training Row */}
                    <div className="grid grid-cols-7 gap-2 items-center">
                      <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 p-2">Testing & Training</div>
                      <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded text-xs text-center">Test Planning</div>
                      <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded text-xs text-center">Test Case Design</div>
                      <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded text-xs text-center">System Testing</div>
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded text-xs text-center">UAT & Training</div>
                      <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded text-xs text-center">Go-Live Support</div>
                      <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded text-xs text-center">Knowledge Transfer</div>
                    </div>
                  </div>

                  {/* Key Milestones */}
                  <div className="mt-6 grid grid-cols-4 gap-4 text-center">
                    <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-3">
                      <div className="text-lg font-bold text-blue-600">17 Weeks</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Total Implementation</div>
                    </div>
                    <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-3">
                      <div className="text-lg font-bold text-green-600">100+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Fit-to-Standard Workshops</div>
                    </div>
                    <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-3">
                      <div className="text-lg font-bold text-purple-600">6</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Parallel Workstreams</div>
                    </div>
                    <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-3">
                      <div className="text-lg font-bold text-orange-600">95%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">On-Time Delivery</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                ExpTek Proprietary Implementation Framework - Comprehensive 6-Phase Methodology with Detailed Workstream Breakdown
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {financeImplementation.overview.statistics.map((stat, index) => {
            const IconComponent = iconMap[stat.icon];
            return (
              <Card key={index} className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                      <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className={`text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-all duration-1000 ${animatedStats[index] ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                    {stat.value}{stat.suffix}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose ExpTek for SAP S/4HANA Finance Implementation?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {financeImplementation.overview.introduction}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 border-0">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
                    <Target className="mr-2 h-5 w-5" />
                    Proven Methodology
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    SAP Activate framework with 100+ standardized workshops ensuring consistent, high-quality implementations.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border-0">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-green-600 dark:text-green-400">
                    <Users2 className="mr-2 h-5 w-5" />
                    Expert Team
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    SAP-certified consultants with 15+ years average experience in finance transformation projects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-white dark:bg-gray-800 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">
                  Implementation Includes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {financeImplementation.overview.included.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                onClick={() => handleCTAClick('schedule-consultation')}
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300 py-3"
                onClick={() => handleDownloadClick('implementation-checklist')}
              >
                Download Checklist
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ExpTek Finance Implementation Roadmap - Custom Design */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            ExpTek Finance Implementation Roadmap
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our proven 6-phase methodology ensures systematic, risk-free implementation of your SAP S/4HANA Cloud Finance solution using industry best practices.
          </p>
        </div>

        {/* Custom Roadmap Component */}
        <CustomRoadmap />
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Finance Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 500+ companies who have successfully implemented SAP S/4HANA Cloud Finance with ExpTek.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg"
              onClick={() => handleCTAClick('get-started')}
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg"
              onClick={() => handleCTAClick('speak-expert')}
            >
              Speak with an Expert
              <Users className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Schema Markup (commented for now) */}
      {/*
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "SAP S/4HANA Public Cloud Finance Implementation",
          "description": financeImplementation.meta.description,
          "provider": {
            "@type": "Organization",
            "name": "ExpTek",
            "url": "https://exptek.com"
          },
          "serviceType": "SAP Implementation",
          "areaServed": "Global"
        })}
      </script>
      */}
    </div>
  );
};

export default FinanceImplementationPage;