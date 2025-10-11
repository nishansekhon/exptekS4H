import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Search, Clipboard, Settings, Zap, Rocket, RefreshCw, CheckCircle2, Target } from 'lucide-react';

const CustomRoadmap = () => {
  const [activePhase, setActivePhase] = useState('discover');

  const phases = [
    {
      id: 'discover',
      name: 'DISCOVER',
      duration: 'Weeks 1-3',
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
        'Initial system access setup'
      ]
    },
    {
      id: 'prepare',
      name: 'PREPARE',
      duration: 'Weeks 4-6',
      color: '#52C41A',
      bgGradient: 'from-green-400 to-emerald-400',
      icon: '📋',
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
      name: 'EXPLORE',
      duration: 'Weeks 8-12',
      color: '#17A2B8',
      bgGradient: 'from-teal-400 to-cyan-400',
      icon: '🔧',
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
      name: 'REALIZE',
      duration: 'Weeks 13-16',
      color: '#0A6ED1',
      bgGradient: 'from-blue-400 to-blue-600',
      icon: '⚡',
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
      name: 'DEPLOY',
      duration: 'Week 17',
      color: '#FF8C00',
      bgGradient: 'from-orange-400 to-red-400',
      icon: '🚀',
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
      name: 'RUN',
      duration: 'Ongoing',
      color: '#9C27B0',
      bgGradient: 'from-purple-400 to-indigo-400',
      icon: '🔄',
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

  const currentPhase = phases.find(phase => phase.id === activePhase);
  const currentIndex = phases.findIndex(phase => phase.id === activePhase);

  const nextPhase = () => {
    const nextIndex = (currentIndex + 1) % phases.length;
    setActivePhase(phases[nextIndex].id);
  };

  const prevPhase = () => {
    const prevIndex = currentIndex === 0 ? phases.length - 1 : currentIndex - 1;
    setActivePhase(phases[prevIndex].id);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          ExpTek Finance Implementation Framework
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Comprehensive SAP S/4HANA Cloud Methodology
        </p>
      </div>

      {/* Horizontal Timeline */}
      <div className="relative mb-16 px-4">
        {/* Timeline Line */}
        <div className="absolute top-12 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-green-400 via-teal-400 via-blue-400 via-orange-400 to-purple-400 rounded-full shadow-lg"></div>
        
        {/* Phase Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
          {phases.map((phase, index) => (
            <div key={phase.id} className="relative">
              {/* Connection Dot */}
              <div 
                className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-20 flex items-center justify-center"
                style={{ backgroundColor: phase.color }}
              >
                <span className="text-white font-bold text-xs">{index + 1}</span>
              </div>
              
              {/* Phase Card - Clickable */}
              <div 
                className={`mt-20 text-center cursor-pointer transition-all duration-300 p-4 rounded-2xl ${
                  activePhase === phase.id 
                    ? 'bg-white dark:bg-gray-800 shadow-xl scale-105' 
                    : 'hover:bg-white/50 dark:hover:bg-gray-800/50 hover:shadow-lg'
                }`}
                onClick={() => setActivePhase(phase.id)}
              >
                {/* Icon */}
                <div 
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.bgGradient} flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg`}
                >
                  {phase.icon}
                </div>
                
                {/* Duration Badge */}
                <div 
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3"
                  style={{ backgroundColor: phase.color }}
                >
                  {phase.duration}
                </div>
                
                {/* Phase Name */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {phase.name}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-tight">
                  {phase.description}
                </p>
                
                {/* Active Indicator */}
                {activePhase === phase.id && (
                  <div 
                    className="w-full h-1 rounded-full mt-4"
                    style={{ backgroundColor: phase.color }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Phase Details */}
      {currentPhase && (
        <Card className="mb-16 bg-white dark:bg-gray-800 shadow-xl border-0 rounded-2xl overflow-hidden">
          {/* Phase Header */}
          <div 
            className="h-2 w-full"
            style={{ backgroundColor: currentPhase.color }}
          />
          
          <CardContent className="p-8">
            {/* Phase Title */}
            <div className="text-center mb-8">
              <div 
                className={`w-20 h-20 rounded-full bg-gradient-to-br ${currentPhase.bgGradient} flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg`}
              >
                {currentPhase.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {currentPhase.name}
              </h3>
              <Badge 
                variant="outline" 
                className="text-sm px-4 py-1 border-2"
                style={{ 
                  borderColor: currentPhase.color, 
                  color: currentPhase.color, 
                  backgroundColor: currentPhase.color + '15' 
                }}
              >
                {currentPhase.duration}
              </Badge>
              <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg">
                {currentPhase.description}
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Key Milestones */}
              <div>
                <h4 className="flex items-center text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  <Target className="h-5 w-5 mr-2" style={{ color: currentPhase.color }} />
                  Key Milestones
                </h4>
                <ul className="space-y-3">
                  {currentPhase.milestones.map((milestone, i) => (
                    <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                      <div 
                        className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0"
                        style={{ backgroundColor: currentPhase.color }}
                      />
                      <span className="text-base leading-relaxed">{milestone}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Core Activities */}
              <div>
                <h4 className="flex items-center text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                  Core Activities
                </h4>
                <ul className="space-y-3">
                  {currentPhase.activities.map((activity, i) => (
                    <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                      <CheckCircle2 className="h-4 w-4 mt-1 mr-3 text-green-500 flex-shrink-0" />
                      <span className="text-base leading-relaxed">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      </div>

      {/* Framework Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
      <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed">
          ExpTek Proprietary Implementation Framework - Comprehensive 6-Phase Methodology with Detailed Workstream Breakdown. 
          Based on industry best practices and SAP-recommended approaches. SAP Activate is a trademark of SAP SE. 
          ExpTek is an independent consulting firm and this roadmap represents our proprietary implementation framework.
        </p>
      </div>
    </div>
  );
};

export default CustomRoadmap;