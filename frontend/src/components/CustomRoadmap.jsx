import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ChevronDown, ChevronRight, Search, Clipboard, Settings, Zap, Rocket, RefreshCw } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

const CustomRoadmap = () => {
  const [expandedPhase, setExpandedPhase] = useState(null);

  const phases = [
    {
      id: 'discover',
      number: 1,
      name: 'DISCOVER',
      duration: 'Weeks 1-3',
      color: '#F4B942',
      bgGradient: 'from-yellow-400 to-orange-400',
      bgLight: 'bg-yellow-50 dark:bg-yellow-950/20',
      icon: Search,
      description: 'Business Assessment & Project Initiation',
      milestones: [
        'Project Kickoff & Charter Development',
        'Current State Assessment',
        'Cloud Trial Environment Setup',
        'Stakeholder Alignment Sessions',
        'Business Case Validation',
        'Implementation Roadmap Finalization'
      ],
      activities: [
        'Business process assessment',
        'Solution scoping & sizing',
        'Project team formation',
        'Initial system access setup'
      ]
    },
    {
      id: 'prepare',
      number: 2,
      name: 'PREPARE',
      duration: 'Weeks 4-6',
      color: '#52C41A',
      bgGradient: 'from-green-400 to-emerald-400',
      bgLight: 'bg-green-50 dark:bg-green-950/20',
      icon: Clipboard,
      description: 'Foundation Setup & Configuration Design',
      milestones: [
        'Governance Structure Establishment',
        'Fit-to-Standard Workshop Series (25+ sessions)',
        'Chart of Accounts Design',
        'Integration Architecture Blueprint',
        'Data Migration Strategy',
        'Configuration Workbook Creation'
      ],
      activities: [
        'Fit-to-Standard analysis',
        'Configuration planning',
        'Integration architecture design',
        'Data strategy development'
      ]
    },
    {
      id: 'explore',
      number: 3,
      name: 'EXPLORE',
      duration: 'Weeks 8-12',
      color: '#17A2B8',
      bgGradient: 'from-teal-400 to-cyan-400',
      bgLight: 'bg-teal-50 dark:bg-teal-950/20',
      icon: Settings,
      description: 'System Build & Configuration Execution',
      milestones: [
        'Development System Configuration',
        'Finance Module Workshop Completion (40+ sessions)',
        'Integration Development & Testing',
        'Master Data Template Creation',
        'Security & Authorization Setup',
        'Initial Data Load & Validation'
      ],
      activities: [
        'Core system configuration',
        'Finance workshop execution',
        'Integration development',
        'Master data preparation'
      ]
    },
    {
      id: 'realize',
      number: 4,
      name: 'REALIZE',
      duration: 'Weeks 13-16',
      color: '#0A6ED1',
      bgGradient: 'from-blue-400 to-blue-600',
      bgLight: 'bg-blue-50 dark:bg-blue-950/20',
      icon: Zap,
      description: 'Testing, Training & Final Preparation',
      milestones: [
        'Quality System Configuration Complete',
        'End-to-End Testing Execution',
        'User Acceptance Testing (UAT)',
        'Training Program Delivery (20+ sessions)',
        'Cutover Rehearsal Execution',
        'Go-Live Readiness Assessment'
      ],
      activities: [
        'System & integration testing',
        'User training delivery',
        'Data migration execution',
        'UAT completion & sign-off'
      ]
    },
    {
      id: 'deploy',
      number: 5,
      name: 'DEPLOY',
      duration: 'Week 17',
      color: '#FF8C00',
      bgGradient: 'from-orange-400 to-red-400',
      bgLight: 'bg-orange-50 dark:bg-orange-950/20',
      icon: Rocket,
      description: 'Production Go-Live & Immediate Support',
      milestones: [
        'Production System Activation',
        'Final Data Cutover Execution',
        'Go-Live Weekend Support',
        'First Month-End Close Support',
        'Issue Resolution & Optimization',
        'Go-Live Success Confirmation'
      ],
      activities: [
        'Production system cutover',
        'Go-live execution support',
        'Hypercare support (2-4 weeks)',
        'Performance monitoring'
      ]
    },
    {
      id: 'run',
      number: 6,
      name: 'RUN',
      duration: 'Ongoing',
      color: '#9C27B0',
      bgGradient: 'from-purple-400 to-indigo-400',
      bgLight: 'bg-purple-50 dark:bg-purple-950/20',
      icon: RefreshCw,
      description: 'Continuous Support & Optimization',
      milestones: [
        'Ongoing Support Services',
        'Monthly System Health Checks',
        'Quarterly Business Reviews',
        'SAP Release Management',
        'Enhancement Backlog Management',
        'Value Realization Tracking'
      ],
      activities: [
        'Continuous system optimization',
        'Enhancement delivery',
        'Support services',
        'Value realization tracking'
      ]
    }
  ];

  const togglePhase = (phaseId) => {
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
  };

  return (
    <div className="w-full">
      {/* Desktop Timeline */}
      <div className="hidden lg:block">
        {/* Timeline Container */}
        <div className="relative">
          {/* Main Timeline Bar */}
          <div className="absolute top-24 left-8 right-8 h-2 bg-gradient-to-r from-yellow-400 via-green-400 via-teal-400 via-blue-400 via-orange-400 to-purple-400 rounded-full shadow-lg"></div>
          
          {/* Phase Cards Grid */}
          <div className="grid grid-cols-6 gap-4 relative">
            {phases.map((phase, index) => {
              const IconComponent = phase.icon;
              
              return (
                <div key={phase.id} className="relative">
                  {/* Connection Dot */}
                  <div 
                    className="absolute top-20 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-20 flex items-center justify-center"
                    style={{ backgroundColor: phase.color }}
                  >
                    <span className="text-white font-bold text-xs">{phase.number}</span>
                  </div>
                  
                  {/* Arrow Connector (except for last phase) */}
                  {index < phases.length - 1 && (
                    <div className="absolute top-24 right-0 transform translate-x-2 z-10">
                      <div 
                        className="w-4 h-4 rotate-45 border-r-2 border-t-2"
                        style={{ borderColor: phases[index + 1].color }}
                      ></div>
                    </div>
                  )}
                  
                  {/* Phase Card */}
                  <Card 
                    className={`mt-32 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${expandedPhase === phase.id ? 'shadow-2xl scale-105' : 'shadow-lg'} ${phase.bgLight} border-0`}
                    onClick={() => togglePhase(phase.id)}
                  >
                    <CardHeader className="text-center pb-3">
                      {/* Phase Icon */}
                      <div className={`mx-auto w-14 h-14 rounded-xl bg-gradient-to-br ${phase.bgGradient} flex items-center justify-center mb-3 shadow-md`}>
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      
                      {/* Duration Badge */}
                      <Badge 
                        variant="outline" 
                        className="mb-2 border-2"
                        style={{ borderColor: phase.color, color: phase.color, backgroundColor: phase.color + '10' }}
                      >
                        {phase.duration}
                      </Badge>
                      
                      {/* Phase Name */}
                      <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                        {phase.name}
                      </CardTitle>
                    </CardHeader>
                    
                    {/* Expandable Content */}
                    <Collapsible open={expandedPhase === phase.id}>
                      <CollapsibleContent>
                        <CardContent className="pt-0 space-y-4">
                          <div>
                            <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2">Key Milestones:</h4>
                            <ul className="space-y-1">
                              {phase.milestones.map((milestone, i) => (
                                <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                                  <div 
                                    className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                                    style={{ backgroundColor: phase.color }}
                                  ></div>
                                  {milestone}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2">Core Activities:</h4>
                            <ul className="space-y-1">
                              {phase.activities.map((activity, i) => (
                                <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                                  <CheckCircle2 className="h-3 w-3 mt-0.5 mr-1 text-green-500 flex-shrink-0" />
                                  {activity}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Legal Disclaimer */}
        <div className="mt-12 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
            ExpTek's implementation methodology is based on industry best practices and SAP-recommended approaches. 
            SAP Activate is a trademark of SAP SE. ExpTek is an independent consulting firm and this roadmap represents our proprietary implementation framework.
          </p>
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="lg:hidden space-y-4">
        {phases.map((phase, index) => {
          const IconComponent = phase.icon;
          
          return (
            <Card key={phase.id} className={`${phase.bgLight} border-0 shadow-lg overflow-hidden`}>
              {/* Phase Header Bar */}
              <div 
                className="h-3 w-full"
                style={{ backgroundColor: phase.color }}
              ></div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Phase Icon */}
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${phase.bgGradient} flex items-center justify-center shadow-md`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    
                    <div>
                      {/* Duration Badge */}
                      <Badge 
                        variant="outline" 
                        className="mb-1 text-xs border-2"
                        style={{ borderColor: phase.color, color: phase.color, backgroundColor: phase.color + '10' }}
                      >
                        {phase.duration}
                      </Badge>
                      
                      {/* Phase Title */}
                      <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                        Phase {phase.number}: {phase.name}
                      </CardTitle>
                    </div>
                  </div>
                  
                  {/* Expand Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => togglePhase(phase.id)}
                    className="ml-4"
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform ${expandedPhase === phase.id ? 'rotate-180' : ''}`} />
                  </Button>
                </div>
              </CardHeader>
              
              {/* Expandable Content */}
              <Collapsible open={expandedPhase === phase.id}>
                <CollapsibleContent>
                  <CardContent className="pt-0 pb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Activities:</h4>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                            <ChevronRight className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" style={{ color: phase.color }} />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
              
              {/* Connection Line to Next Phase (except last) */}
              {index < phases.length - 1 && (
                <div className="flex justify-center pb-4">
                  <div 
                    className="w-0.5 h-8 opacity-50"
                    style={{ backgroundColor: phases[index + 1].color }}
                  ></div>
                </div>
              )}
            </Card>
          );
        })}
        
        {/* Legal Disclaimer */}
        <div className="mt-8 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
            ExpTek's implementation methodology is based on industry best practices and SAP-recommended approaches. 
            SAP Activate is a trademark of SAP SE. ExpTek is an independent consulting firm and this roadmap represents our proprietary implementation framework.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomRoadmap;