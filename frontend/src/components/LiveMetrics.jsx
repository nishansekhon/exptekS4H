import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Building, Globe } from 'lucide-react';

const AnimatedCounter = ({ value, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = parseInt(value);
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return (
    <span ref={counterRef} className="inline-block">
      {prefix}{count}{suffix}
    </span>
  );
};

const LiveMetrics = () => {
  const iconMap = {
    TrendingUp,
    Users,
    Building,
    Globe
  };

  const metrics = [
    { value: 50, suffix: 'M+', label: 'Revenue Managed', prefix: '$', icon: 'TrendingUp' },
    { value: 95, suffix: '%', label: 'Client Retention Rate', icon: 'Users' },
    { value: 30, suffix: '+', label: 'Industries Served', icon: 'Building' },
    { value: 15, suffix: '+', label: 'Countries Deployed', icon: 'Globe' }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Trusted by Leading Organizations
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
            Our proven track record speaks for itself
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((metric, index) => {
            const IconComponent = iconMap[metric.icon];
            
            return (
              <div 
                key={index}
                className="text-center p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#0A6ED1] to-[#60d5ff] rounded-full mb-4 sm:mb-6">
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">
                  <AnimatedCounter 
                    value={metric.value}
                    suffix={metric.suffix}
                    prefix={metric.prefix}
                    duration={2000}
                  />
                </div>
                
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium transition-colors">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LiveMetrics;