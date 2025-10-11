import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Search, Clipboard, Settings, Zap, Rocket, RefreshCw, CheckCircle2, Target } from 'lucide-react';

const CustomRoadmap = () => {
  const [activePhase, setActivePhase] = useState('discover');

  const phases = [
    {
      id: 'discover',
      name: 'DISCOVER',
      duration: 'Weeks 1-4',
      color: '#F4B942',
      bgGradient: 'from-yellow-400 to-orange-400',
      icon: '🔍',
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
        'Initial system access setup',
        'Workshop schedule planning',
        'Risk & dependency identification'
      ]
    },
    {
      id: 'prepare',
      name: 'PREPARE',
      duration: 'Weeks 4-8',
      color: '#52C41A',
      bgGradient: 'from-green-400 to-emerald-400',
      icon: '📋',
      description: 'Foundation Setup & Configuration Design',
      milestones: [
        'Fit-to-Standard Analysis Completion',
        'Configuration Workbook Development',
        'Integration Architecture Design',
        'Data Migration Strategy Approval',
        'Test Plan Creation',
        'Training Approach Finalized'
      ],
      activities: [
        'Business process mapping',
        'Gap analysis documentation',
        'Solution design workshops',
        'Technical architecture planning',
        'Security & authorization design',
        'Change management planning'
      ]
    },
    {
      id: 'explore',
      name: 'EXPLORE',
      duration: 'Weeks 9-12',
      color: '#17A2B8',
      bgGradient: 'from-teal-400 to-cyan-400',
      icon: '🔧',
      description: 'System Build & Configuration Execution',
      milestones: [
        'Development System Configuration',
        'Master Data Templates Created',
        'Integration Prototypes Built',
        'Data Extraction Completed',
        'Test Case Library Developed',
        'Training Materials Drafted'
      ],
      activities: [
        'Finance module configuration',
        'GL, AP, AR setup',
        'Asset accounting configuration',
        'Integration development',
        'Data cleansing & validation',
        'User training preparation'
      ]
    },
    {
      id: 'realize',
      name: 'REALIZE',
      duration: 'Weeks 12-16',
      color: '#0A6ED1',
      bgGradient: 'from-blue-400 to-blue-600',
      icon: '⚡',
      description: 'Testing, Training & Final Preparation',
      milestones: [
        'Quality System Configuration Complete',
        'End-to-End Testing Executed',
        'User Training Delivered',
        'UAT Sign-off Obtained',
        'Cutover Plan Approved',
        'Production Readiness Confirmed'
      ],
      activities: [
        'System testing & validation',
        'Integration testing',
        'Performance testing',
        'User acceptance testing',
        'Training delivery',
        'Documentation finalization'
      ]
    },
    {
      id: 'deploy',
      name: 'DEPLOY',
      duration: 'Weeks 16-20',
      color: '#FF8C00',
      bgGradient: 'from-orange-400 to-red-400',
      icon: '🚀',
      description: 'Production Go-Live & Immediate Support',
      milestones: [
        'Production System Provisioned',
        'Final Data Migration Completed',
        'Go-Live Cutover Executed',
        'Production Validation Passed',
        'Hypercare Support Activated',
        'Go-Live Sign-off Received'
      ],
      activities: [
        'Cutover execution',
        'Production data load',
        'System validation',
        'User support & issue resolution',
        'Performance monitoring',
        'Stabilization activities'
      ]
    },
    {
      id: 'run',
      name: 'RUN',
      duration: 'Ongoing',
      color: '#9C27B0',
      bgGradient: 'from-purple-400 to-indigo-400',
      icon: '🔄',
      description: 'Continuous Support & Optimization',
      milestones: [
        'Month-End Close Support',
        'Enhancement Backlog Prioritized',
        'System Health Checks Completed',
        'Quarterly Business Reviews',
        'Release Updates Managed',
        'Continuous Improvement Initiatives'
      ],
      activities: [
        'Ongoing support & maintenance',
        'Issue resolution & troubleshooting',
        'Enhancement delivery',
        'SAP release management',
        'Performance optimization',
        'User adoption monitoring'
      ]
    }
  ];

  const currentPhase = phases.find(phase => phase.id === activePhase) || phases[0];

  return (
    <div className="w-full">
      {/* Desktop Timeline */}
      <div className="hidden lg:block relative">
        {/* Timeline Line */}
        <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-green-400 via-teal-400 via-blue-400 via-orange-400 to-purple-400 rounded-full"></div>
        
        {/* Phase Cards Grid */}
        <div className="grid grid-cols-6 gap-4 relative">
          {phases.map((phase, index) => (
            <div key={phase.id} className="relative">
              {/* Connection Dot */}
              <div 
                className="absolute top-20 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 z-10"
                style={{ backgroundColor: phase.color }}
              ></div>
              
              {/* Phase Card - Clickable */}
              <Card 
                className={`mt-32 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  activePhase === phase.id 
                    ? 'shadow-2xl scale-105 ring-2' 
                    : 'hover:scale-102'
                }`}
                style={{
                  ...(activePhase === phase.id && { 
                    ringColor: phase.color + '80',
                    boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 2px ${phase.color}40`
                  })
                }}
                onClick={() => setActivePhase(activePhase === phase.id ? null : phase.id)}
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
                  <CardTitle className="text-sm font-bold text-gray-900 dark:text-white flex items-center justify-center">
                    {phase.name}
                    <span className="ml-2 text-gray-400 transition-transform duration-300" style={{ 
                      transform: activePhase === phase.id ? 'rotate(90deg)' : 'rotate(0deg)' 
                    }}>
                      ▶
                    </span>
                  </CardTitle>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {phase.description}
                  </p>
                </CardHeader>
              </Card>
              
              {/* Expanded Phase Details - Compact Layout */}
              {activePhase === phase.id && (
                <div className="mt-8 mx-4 rounded-xl transition-all duration-300 ease-in-out bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-t-4 shadow-lg animate-in slide-in-from-top-2" 
                     style={{ 
                       borderTopColor: phase.color,
                       padding: '16px'
                     }}>
                  
                  {/* Key Milestones Section - Compact */}
                  <div className="milestones-section" style={{ marginBottom: '16px' }}>
                    <h4 style={{ 
                      color: phase.color,
                      fontSize: '14px',
                      fontWeight: '600',
                      marginBottom: '10px',
                      textTransform: 'none'
                    }}>
                      Key Milestones:
                    </h4>
                    <ul>
                      {phase.milestones.map((milestone, i) => (
                        <li key={i} className="flex items-start" style={{ marginBottom: '6px' }}>
                          <div 
                            className="rounded-full mt-1 mr-2 flex-shrink-0"
                            style={{ 
                              backgroundColor: phase.color,
                              width: '4px',
                              height: '4px'
                            }}
                          />
                          <span style={{ 
                            fontSize: '12px',
                            lineHeight: '1.5',
                            color: '#a8a8a8'
                          }}>
                            {milestone}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Core Activities Section - Compact */}
                  <div className="activities-section">
                    <h4 style={{ 
                      color: '#52C41A',
                      fontSize: '14px',
                      fontWeight: '600',
                      marginBottom: '10px',
                      textTransform: 'none'
                    }}>
                      Core Activities:
                    </h4>
                    <ul>
                      {phase.activities.map((activity, i) => (
                        <li key={i} className="flex items-start" style={{ marginBottom: '6px' }}>
                          <CheckCircle2 className="flex-shrink-0" style={{ 
                            width: '11px',
                            height: '11px',
                            marginTop: '2px',
                            marginRight: '8px',
                            color: '#52C41A'
                          }} />
                          <span style={{ 
                            fontSize: '12px',
                            lineHeight: '1.5',
                            color: '#a8a8a8'
                          }}>
                            {activity}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="lg:hidden space-y-6">
        {phases.map((phase, index) => (
          <div key={phase.id}>
            <Card className="overflow-hidden cursor-pointer transition-all duration-300" onClick={() => setActivePhase(activePhase === phase.id ? null : phase.id)}>
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
                    <p className="text-gray-600 dark:text-gray-400">
                      {phase.description}
                    </p>
                  </div>
                  <div className="ml-4 transition-transform duration-300" style={{ 
                    transform: activePhase === phase.id ? 'rotate(90deg)' : 'rotate(0deg)' 
                  }}>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </CardHeader>
            </Card>
            
            {/* Mobile Expanded Content - Compact Layout */}
            {activePhase === phase.id && (
              <div className="mt-4 rounded-xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-t-4 shadow-lg animate-in slide-in-from-top-2" 
                   style={{ 
                     borderTopColor: phase.color,
                     padding: '16px'
                   }}>
                
                {/* Key Milestones Section - Compact */}
                <div className="milestones-section" style={{ marginBottom: '16px' }}>
                  <h4 style={{ 
                    color: phase.color,
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '10px',
                    textTransform: 'none'
                  }}>
                    Key Milestones:
                  </h4>
                  <ul>
                    {phase.milestones.map((milestone, i) => (
                      <li key={i} className="flex items-start" style={{ marginBottom: '6px' }}>
                        <div 
                          className="rounded-full mt-1 mr-2 flex-shrink-0"
                          style={{ 
                            backgroundColor: phase.color,
                            width: '4px',
                            height: '4px'
                          }}
                        />
                        <span style={{ 
                          fontSize: '12px',
                          lineHeight: '1.5',
                          color: '#a8a8a8'
                        }}>
                          {milestone}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Core Activities Section - Compact */}
                <div className="activities-section">
                  <h4 style={{ 
                    color: '#52C41A',
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '10px',
                    textTransform: 'none'
                  }}>
                    Core Activities:
                  </h4>
                  <ul>
                    {phase.activities.map((activity, i) => (
                      <li key={i} className="flex items-start" style={{ marginBottom: '6px' }}>
                        <CheckCircle2 className="flex-shrink-0" style={{ 
                          width: '11px',
                          height: '11px',
                          marginTop: '2px',
                          marginRight: '8px',
                          color: '#52C41A'
                        }} />
                        <span style={{ 
                          fontSize: '12px',
                          lineHeight: '1.5',
                          color: '#a8a8a8'
                        }}>
                          {activity}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Framework Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mb-8">
        <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 border-0">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">17 Weeks</div>
          <div className="text-gray-600 dark:text-gray-300">Total Implementation</div>
        </Card>
        
        <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 border-0">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">100+</div>
          <div className="text-gray-600 dark:text-gray-300">Fit-to-Standard Workshops</div>
        </Card>
        
        <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 border-0">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">6 Phases</div>
          <div className="text-gray-600 dark:text-gray-300">Comprehensive Methodology</div>
        </Card>
      </div>

      {/* Legal Disclaimer */}
      <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
          ExpTek's implementation methodology is based on industry best practices and SAP-recommended approaches. 
          SAP Activate is a trademark of SAP SE. ExpTek is an independent consulting firm and this roadmap represents our proprietary implementation framework.
        </p>
      </div>
    </div>
  );
};

export default CustomRoadmap;