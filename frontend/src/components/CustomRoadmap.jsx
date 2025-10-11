import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Search, Clipboard, Settings, Zap, Rocket, RefreshCw, CheckCircle2, Target } from 'lucide-react';

const CustomRoadmap = () => {
  const [activePhase, setActivePhase] = useState('discover');

  const currentPhase = phases.find(phase => phase.id === activePhase) || phases[0];

  const phases = [
    {
      id: 'discover',
      name: 'DISCOVER',
      duration: 'Weeks 1-2',
      color: '#F4B942',
      bgGradient: 'from-yellow-400 to-orange-400',
      icon: '🔍',
      description: 'Business Assessment & Project Initiation',
      activities: [
        'Business process assessment',
        'Solution scoping & definition',
        'Project kickoff & governance',
        'Team enablement & access setup'
      ],
      deliverables: [
        'Project charter',
        'Scope document',
        'Initial system access',
        'Workshop schedule'
      ]
    },
    {
      id: 'prepare',
      name: 'PREPARE',
      duration: 'Weeks 3-4',
      color: '#52C41A',
      bgGradient: 'from-green-400 to-emerald-400',
      icon: '📋',
      description: 'Foundation Setup & Configuration Design',
      activities: [
        'Fit-to-Standard analysis',
        'Configuration planning',
        'Integration architecture design',
        'Data migration strategy'
      ],
      deliverables: [
        'Fit-Gap analysis report',
        'Configuration workbook',
        'Integration design doc',
        'Data migration plan'
      ]
    },
    {
      id: 'explore',
      name: 'EXPLORE',
      duration: 'Weeks 5-8',
      color: '#17A2B8',
      bgGradient: 'from-teal-400 to-cyan-400',
      icon: '🔧',
      description: 'System Build & Configuration Execution',
      activities: [
        'System configuration workshops',
        'Development system build',
        'Integration development',
        'Data extraction & cleansing'
      ],
      deliverables: [
        'Configured DEV system',
        'Integration prototypes',
        'Cleansed data sets',
        'Test case library'
      ]
    },
    {
      id: 'realize',
      name: 'REALIZE',
      duration: 'Weeks 9-11',
      color: '#0A6ED1',
      bgGradient: 'from-blue-400 to-blue-600',
      icon: '⚡',
      description: 'Testing, Training & Final Preparation',
      activities: [
        'Quality system configuration',
        'End-to-end testing',
        'User training delivery',
        'UAT execution'
      ],
      deliverables: [
        'Configured QA system',
        'Test results & sign-off',
        'Training materials',
        'UAT approval'
      ]
    },
    {
      id: 'deploy',
      name: 'DEPLOY',
      duration: 'Week 12',
      color: '#FF8C00',
      bgGradient: 'from-orange-400 to-red-400',
      icon: '🚀',
      description: 'Production Go-Live & Immediate Support',
      activities: [
        'Production cutover',
        'Go-live execution',
        'Hypercare support',
        'Issue resolution'
      ],
      deliverables: [
        'Live production system',
        'Cutover completion report',
        'Support documentation',
        'Go-live sign-off'
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
      activities: [
        'Continuous optimization',
        'Enhancement delivery',
        'Monthly health checks',
        'Release management'
      ],
      deliverables: [
        'Support SLA reports',
        'Enhancement roadmap',
        'Performance analytics',
        'Quarterly reviews'
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
              
              {/* Phase Card */}
              <div className="mt-20 text-center">
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
              </div>
            </div>
          ))}
        </div>
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