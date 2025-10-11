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
      {/* Implementation Framework */}
      <div className="implementation-framework">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            ExpTek Finance Implementation Framework
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Comprehensive SAP S/4HANA Cloud Methodology
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="phase-tabs bg-slate-800/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl p-2 mb-8 overflow-x-auto">
          <div className="flex space-x-1 min-w-max">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`flex-1 min-w-[120px] px-4 py-3 rounded-xl text-center transition-all duration-300 ${
                  activePhase === phase.id
                    ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="font-bold text-sm">{phase.name}</div>
                <div className="text-xs opacity-75">{phase.duration}</div>
                {activePhase === phase.id && (
                  <div 
                    className="w-full h-1 rounded-full mt-2"
                    style={{ backgroundColor: phase.color }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Phase Content Area */}
        <Card className="phase-content bg-white dark:bg-gray-800 shadow-xl border-0 rounded-2xl mb-8">
          <CardContent className="p-8">
            {/* Phase Icon & Title */}
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
            <div className="content-grid grid md:grid-cols-2 gap-8">
              {/* Activities Column */}
              <div className="activities">
                <h4 className="flex items-center text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  <Target className="h-5 w-5 mr-2" style={{ color: currentPhase.color }} />
                  Key Activities
                </h4>
                <ul className="space-y-3">
                  {currentPhase.activities.map((activity, i) => (
                    <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                      <div 
                        className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0"
                        style={{ backgroundColor: currentPhase.color }}
                      />
                      <span className="text-base leading-relaxed">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables Column */}
              <div className="deliverables">
                <h4 className="flex items-center text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                  Deliverables
                </h4>
                <ul className="space-y-3">
                  {currentPhase.deliverables.map((deliverable, i) => (
                    <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                      <CheckCircle2 className="h-4 w-4 mt-1 mr-3 text-green-500 flex-shrink-0" />
                      <span className="text-base leading-relaxed">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <Button
                variant="outline"
                onClick={prevPhase}
                className="flex items-center space-x-2 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Previous Phase</span>
              </Button>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {currentIndex + 1} of {phases.length}
                </span>
                <div className="flex space-x-1">
                  {phases.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                onClick={nextPhase}
                className="flex items-center space-x-2 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <span>Next Phase</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Framework Stats */}
        <div className="framework-stats grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
    </div>
  );
};

export default CustomRoadmap;