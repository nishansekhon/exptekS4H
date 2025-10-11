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
  const [expandedPhase, setExpandedPhase] = useState(null);
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

  const togglePhaseExpansion = (phaseId) => {
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
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
            {/* ExpTek Custom Implementation Roadmap */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 rounded-xl p-6 flex items-center justify-center overflow-hidden">
                {/* Mini Preview of Custom Roadmap */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="grid grid-cols-6 gap-2 w-full max-w-md">
                    <div className="h-8 bg-yellow-400 rounded flex items-center justify-center text-xs font-bold text-white">1</div>
                    <div className="h-8 bg-green-400 rounded flex items-center justify-center text-xs font-bold text-white">2</div>
                    <div className="h-8 bg-teal-400 rounded flex items-center justify-center text-xs font-bold text-white">3</div>
                    <div className="h-8 bg-blue-400 rounded flex items-center justify-center text-xs font-bold text-white">4</div>
                    <div className="h-8 bg-orange-400 rounded flex items-center justify-center text-xs font-bold text-white">5</div>
                    <div className="h-8 bg-purple-400 rounded flex items-center justify-center text-xs font-bold text-white">6</div>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                ExpTek Finance Implementation Methodology - 6 Phase Roadmap
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

      {/* SAP Activate Phases Timeline - Interactive */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            SAP Activate Implementation Roadmap
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our proven 6-phase methodology ensures systematic, risk-free implementation of your SAP S/4HANA Cloud Finance solution.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 via-green-500 via-yellow-500 via-red-500 to-indigo-500 rounded-full"></div>
          
          {/* Phase Cards */}
          <div className="grid grid-cols-6 gap-4 relative">
            {financeImplementation.sapActivatePhases.map((phase, index) => (
              <div key={phase.id} className="relative">
                {/* Phase Connector Dot */}
                <div 
                  className="absolute top-20 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 z-10"
                  style={{ backgroundColor: phase.color }}
                ></div>
                
                {/* Phase Card */}
                <Card 
                  className={`mt-32 cursor-pointer transition-all duration-300 hover:shadow-xl ${expandedPhase === phase.id ? 'shadow-2xl scale-105' : ''}`}
                  onClick={() => togglePhaseExpansion(phase.id)}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-12 h-12 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: phase.color + '20' }}>
                      <span className="text-xl font-bold" style={{ color: phase.color }}>
                        {index + 1}
                      </span>
                    </div>
                    <Badge variant="outline" style={{ borderColor: phase.color, color: phase.color }} className="mb-2">
                      {phase.duration}
                    </Badge>
                    <CardTitle className="text-sm font-bold text-gray-900 dark:text-white">
                      {phase.name}
                    </CardTitle>
                    <CardDescription className="text-xs text-gray-600 dark:text-gray-400">
                      {phase.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <Collapsible open={expandedPhase === phase.id}>
                    <CollapsibleContent>
                      <CardContent className="pt-0 space-y-4">
                        <div>
                          <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2">Key Activities:</h4>
                          <ul className="space-y-1">
                            {phase.activities.map((activity, i) => (
                              <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                                <ChevronRight className="h-3 w-3 mt-0.5 mr-1 flex-shrink-0" />
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {phase.deliverables && (
                          <div>
                            <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2">Deliverables:</h4>
                            <ul className="space-y-1">
                              {phase.deliverables.map((deliverable, i) => (
                                <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                                  <CheckCircle2 className="h-3 w-3 mt-0.5 mr-1 text-green-500 flex-shrink-0" />
                                  {deliverable}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {financeImplementation.sapActivatePhases.map((phase, index) => (
            <Card key={phase.id} className="overflow-hidden">
              <div 
                className="h-2 w-full"
                style={{ backgroundColor: phase.color }}
              ></div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <Badge variant="outline" style={{ borderColor: phase.color, color: phase.color }} className="mb-2">
                      {phase.duration}
                    </Badge>
                    <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                      Phase {index + 1}: {phase.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      {phase.description}
                    </CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => togglePhaseExpansion(phase.id)}
                    className="ml-4"
                  >
                    <ArrowDown className={`h-4 w-4 transition-transform ${expandedPhase === phase.id ? 'rotate-180' : ''}`} />
                  </Button>
                </div>
              </CardHeader>
              
              <Collapsible open={expandedPhase === phase.id}>
                <CollapsibleContent>
                  <CardContent className="pt-0 space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Activities:</h4>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <ChevronRight className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {phase.deliverables && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Deliverables:</h4>
                        <ul className="space-y-2">
                          {phase.deliverables.map((deliverable, i) => (
                            <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                              <CheckCircle2 className="h-4 w-4 mt-0.5 mr-2 text-green-500 flex-shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>
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