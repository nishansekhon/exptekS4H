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
import FinanceModules from '../components/FinanceModules';
import FinanceImplementationDetail from '../components/FinanceImplementationDetail';
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
                      <div className="text-lg font-bold text-blue-600">3-8 Months</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Typical Timeline</div>
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

      {/* Finance Implementation End-to-End Detailed Section */}
      <FinanceImplementationDetail />

      {/* PHASE 3 & 4: HIGH PRIORITY SECTIONS */}

      {/* Why Choose ExpTek Section - HIGH PRIORITY #1 */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose ExpTek for Your Finance Transformation?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Unlike traditional consulting firms, ExpTek specializes exclusively in SAP S/4HANA Public Cloud Finance implementations. 
            Our focused expertise delivers superior results with faster timelines and proven success rates.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Differentiation Card 1 */}
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-0 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Exclusive Focus</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                100% dedicated to SAP S/4HANA Cloud Finance - not a side service
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Implementation Speed</span>
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">50% faster</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Success Rate</span>
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Cost Savings</span>
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">40%</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Differentiation Card 2 */}
          <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-0 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2 className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Expert Team</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                SAP-certified consultants with 15+ years average experience
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">SAP Certifications</span>
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">150+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Avg. Experience</span>
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">15+ yrs</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</span>
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">50+</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Differentiation Card 3 */}
          <Card className="p-8 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 border-0 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Proven Results</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                Consistent delivery excellence with measurable business outcomes
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">ROI Achievement</span>
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">300%+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Client Retention</span>
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">95%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Budget Adherence</span>
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">100%</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Why ExpTek vs Big 4 Comparison */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800/50 dark:to-blue-950/50 rounded-3xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            ExpTek vs Traditional Consulting Firms
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Traditional Firms</h4>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-200 dark:bg-red-900/50 rounded mr-3"></div>
                  <span className="text-sm">18-24 month implementations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-200 dark:bg-red-900/50 rounded mr-3"></div>
                  <span className="text-sm">Junior consultants on projects</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-200 dark:bg-red-900/50 rounded mr-3"></div>
                  <span className="text-sm">Multiple technology focus</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-200 dark:bg-red-900/50 rounded mr-3"></div>
                  <span className="text-sm">Higher cost structure</span>
                </div>
              </div>
            </div>

            <div className="text-center lg:border-l lg:border-r lg:border-gray-200 dark:lg:border-gray-700 lg:px-8">
              <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">ExpTek Advantage</h4>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-3" />
                  <span className="text-sm">40% faster than Big 4 firms</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-3" />
                  <span className="text-sm">Senior consultants only</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-3" />
                  <span className="text-sm">SAP Finance exclusive focus</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-3" />
                  <span className="text-sm">50% cost savings vs Big 4</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Business Impact</h4>
              <div className="space-y-3">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-3">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">$2.5M+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Avg. Annual Savings</div>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">60%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Faster Month-End Close</div>
                </div>
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-3">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">85%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Process Automation</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
              onClick={() => handleCTAClick('why-exptek-demo')}
            >
              See Why Companies Choose ExpTek
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Case Study Spotlight Section - HIGH PRIORITY #3 */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-950/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50 dark:text-blue-400 dark:border-blue-800 dark:bg-blue-950/50 mb-6">
              CLIENT SUCCESS SPOTLIGHT
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Fortune 500 Manufacturing Company Transformation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {/* [CONTENT TO BE UPDATED] */}
              See how TechFlow Manufacturing achieved 60% faster month-end close and $2.8M annual savings with ExpTek's SAP S/4HANA Cloud Finance implementation.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Case Study Header */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 text-white">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">TechFlow Manufacturing</h3>
                    <p className="text-blue-100">Global Industrial Equipment Manufacturer</p>
                    <div className="flex items-center mt-2 space-x-4">
                      <span className="text-sm bg-blue-700/50 px-3 py-1 rounded-full">$1.2B Revenue</span>
                      <span className="text-sm bg-blue-700/50 px-3 py-1 rounded-full">15 Countries</span>
                      <span className="text-sm bg-blue-700/50 px-3 py-1 rounded-full">3,500 Employees</span>
                    </div>
                  </div>
                  <div className="mt-6 lg:mt-0">
                    <div className="text-4xl font-bold">7 Months</div>
                    <div className="text-blue-200">Implementation Time</div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Challenge & Solution */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <div className="w-6 h-6 bg-red-100 dark:bg-red-900/50 rounded mr-3 flex items-center justify-center">
                        <div className="w-3 h-3 bg-red-500 rounded"></div>
                      </div>
                      The Challenge
                    </h4>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-red-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-sm">Legacy ERP system causing 18-day month-end close</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-red-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-sm">Manual processes across 15 global subsidiaries</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-red-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-sm">Inconsistent financial reporting and compliance issues</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-red-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-sm">High operational costs due to process inefficiencies</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/50 rounded mr-3 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      </div>
                      ExpTek Solution
                    </h4>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-sm">SAP S/4HANA Cloud Finance with global template</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-sm">95% fit-to-standard processes using SAP best practices</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-sm">Automated intercompany processing and consolidation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-sm">Integrated financial planning and analytics</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Results Grid */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    Measurable Business Results
                  </h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-0 hover:shadow-lg transition-all duration-300">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">60%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">Faster Month-End Close</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">From 18 days to 7 days</div>
                    </Card>

                    <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-0 hover:shadow-lg transition-all duration-300">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">$2.8M</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">Annual Cost Savings</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">ROI achieved in 8 months</div>
                    </Card>

                    <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 border-0 hover:shadow-lg transition-all duration-300">
                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">85%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">Process Automation</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Reduced manual work</div>
                    </Card>

                    <Card className="p-6 text-center bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border-0 hover:shadow-lg transition-all duration-300">
                      <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">100%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">Compliance Achievement</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">All regulatory requirements</div>
                    </Card>
                  </div>
                </div>

                {/* Quote Section */}
                <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="text-4xl text-blue-600 dark:text-blue-400 mb-4">"</div>
                    <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-6">
                      {/* [CONTENT TO BE UPDATED] */}
                      ExpTek delivered exactly what they promised - faster implementation, lower costs, and superior results. 
                      Our finance team now operates at a level we never thought possible with our previous system.
                    </p>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        JM
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-gray-900 dark:text-white">Jennifer Martinez</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">CFO, TechFlow Manufacturing</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                    onClick={() => handleCTAClick('case-study-details')}
                  >
                    View Complete Case Study
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Fit-to-Standard Workshops Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive Fit-to-Standard Workshop Program
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our structured workshop approach ensures 95% fit-to-standard outcomes through proven SAP best practices and industry expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-0">
            <div className="text-3xl mb-4">📊</div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">25+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Discovery Workshops</div>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-0">
            <div className="text-3xl mb-4">🔧</div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">40+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Configuration Sessions</div>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 border-0">
            <div className="text-3xl mb-4">✅</div>
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">35+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Testing Workshops</div>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border-0">
            <div className="text-3xl mb-4">🎓</div>
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">20+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Training Sessions</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Workshop Categories</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">Financial Accounting (FI)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">Controlling (CO)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">Asset Accounting (AA)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">Accounts Payable/Receivable</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Workshop Outcomes</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Target className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">95% Standard Functionality Coverage</span>
              </li>
              <li className="flex items-start">
                <Target className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">Validated Configuration Decisions</span>
              </li>
              <li className="flex items-start">
                <Target className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">Documented Business Requirements</span>
              </li>
              <li className="flex items-start">
                <Target className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">Stakeholder Sign-off & Approval</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-0">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Workshop Benefits</h3>
            <div className="space-y-4">
              <div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Faster Implementation</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">85%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Requirement Accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">SAP Best Practices</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Finance Modules Section - HIGH PRIORITY #2 */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Complete SAP S/4HANA Finance Module Coverage
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {/* [CONTENT TO BE UPDATED] */}
              Our implementation covers all core SAP S/4HANA Finance modules with deep configuration and integration capabilities. Click any module to explore detailed features and benefits.
            </p>
          </div>

          <FinanceModules />
        </div>
      </section>

      {/* Integration Capabilities Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Seamless Integration Capabilities
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Connect SAP S/4HANA Finance with your existing business applications through our proven integration framework.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">CRM Integration</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">SF</span>
                </div>
                <span className="text-gray-600 dark:text-gray-300">Salesforce</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">HS</span>
                </div>
                <span className="text-gray-600 dark:text-gray-300">HubSpot</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">MS</span>
                </div>
                <span className="text-gray-600 dark:text-gray-300">Microsoft Dynamics</span>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Expense Management</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 font-bold text-sm">CO</span>
                </div>
                <span className="text-gray-600 dark:text-gray-300">SAP Concur</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-red-600 dark:text-red-400 font-bold text-sm">EX</span>
                </div>
                <span className="text-gray-600 dark:text-gray-300">Expensify</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold text-sm">CO</span>
                </div>
                <span className="text-gray-600 dark:text-gray-300">Coupa Expense</span>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Business Intelligence</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold text-sm">PB</span>
                </div>
                <span className="text-gray-600 dark:text-gray-300">Power BI</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-cyan-100 dark:bg-cyan-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold text-sm">TB</span>
                </div>
                <span className="text-gray-600 dark:text-gray-300">Tableau</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-teal-600 dark:text-teal-400 font-bold text-sm">QK</span>
                </div>
                <span className="text-gray-600 dark:text-gray-300">Qlik Sense</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Integration Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Real-time data synchronization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Automated workflow processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Reduced manual data entry</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Enhanced data accuracy</span>
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">200+</div>
              <div className="text-gray-600 dark:text-gray-300">Successful Integrations Delivered</div>
              <Button 
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
                onClick={() => handleCTAClick('integration-consultation')}
              >
                Discuss Your Integration Needs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - HIGH PRIORITY #4 */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 dark:from-blue-800 dark:via-blue-900 dark:to-cyan-800 py-20">
        <div className="container mx-auto px-4">
          {/* Main CTA Content */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
              Transform Your Finance Operations Faster
            </h2>
            <p className="text-2xl text-blue-100 mb-4 max-w-4xl mx-auto leading-relaxed">
              Join 50+ companies who have achieved 60% faster month-end close and $2M+ annual savings with ExpTek's proven SAP S/4HANA Cloud Finance implementation.
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              Don't let outdated finance systems hold your business back. Get started with a free consultation today.
            </p>
          </div>

          {/* Value Propositions Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Faster Implementation</h3>
              <p className="text-blue-100">3-8 months vs 12-18+ months with traditional firms</p>
            </div>
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Proven Results</h3>
              <p className="text-blue-100">98% success rate with 300%+ ROI achievement</p>
            </div>
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Expert Team</h3>
              <p className="text-blue-100">SAP-certified consultants with 15+ years experience</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50 px-12 py-6 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={() => handleCTAClick('schedule-free-consultation')}
            >
              Schedule Free Consultation
              <Calendar className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-12 py-6 text-xl font-semibold transition-all duration-300"
              onClick={() => handleDownloadClick('implementation-blueprint')}
            >
              Download Implementation Blueprint
              <Download className="ml-3 h-6 w-6" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="border-t border-blue-500/30 pt-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="text-blue-200 text-sm">Successful Implementations</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">$2.5M+</div>
                <div className="text-blue-200 text-sm">Average Annual Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">60%</div>
                <div className="text-blue-200 text-sm">Faster Month-End Close</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">98%</div>
                <div className="text-blue-200 text-sm">Client Success Rate</div>
              </div>
            </div>
          </div>

          {/* Urgency & Guarantee */}
          <div className="text-center mt-12">
            <div className="bg-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Limited Time: Free Implementation Assessment</h3>
              <p className="text-lg text-blue-100 mb-6">
                {/* [CONTENT TO BE UPDATED] */}
                Book your consultation in the next 7 days and receive a complimentary $15,000 implementation readiness assessment including ROI projections and timeline estimates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center text-blue-100">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-400" />
                  <span>No obligation consultation</span>
                </div>
                <div className="flex items-center text-blue-100">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-400" />
                  <span>100% satisfaction guarantee</span>
                </div>
                <div className="flex items-center text-blue-100">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-400" />
                  <span>Fixed price implementation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center mt-8">
            <p className="text-blue-100 mb-2">
              Need immediate assistance? Call our SAP Finance experts directly:
            </p>
            <a 
              href="tel:+1-555-EXPTEK1" 
              className="text-2xl font-bold text-white hover:text-blue-200 transition-colors"
            >
              +1 (555) EXPTEK-1
            </a>
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