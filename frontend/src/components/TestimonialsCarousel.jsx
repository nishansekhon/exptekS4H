import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Star, ExternalLink } from 'lucide-react';
import testimonials from '../data/testimonials.json';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % testimonials.testimonials.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials.testimonials[currentIndex];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 border border-yellow-100 dark:border-yellow-900/30 transition-colors">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2 fill-current" />
            Client Success Stories
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed transition-colors">
            Hear from finance leaders who have transformed their operations with ExpTek
          </p>
        </div>

        {/* Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <Card className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-8 sm:p-12 text-center">
              {/* Stars Rating */}
              <div className="flex justify-center mb-6 sm:mb-8">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current mx-0.5" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 sm:mb-10 leading-relaxed font-medium transition-colors">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Client Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-8">
                {/* Client Photo */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-[#0A6ED1] to-[#60d5ff] flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                  {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                {/* Client Details */}
                <div className="text-center sm:text-left">
                  <div className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white transition-colors">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-1 transition-colors">
                    {currentTestimonial.title}
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-[#0A6ED1] dark:text-[#60d5ff] mb-1 transition-colors">
                    {currentTestimonial.company}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 transition-colors">
                    {currentTestimonial.industry}
                  </div>
                </div>
              </div>

              {/* Case Study Link */}
              <Button 
                asChild
                variant="outline" 
                size="sm"
                className="border-[#0A6ED1] dark:border-[#60d5ff] text-[#0A6ED1] dark:text-[#60d5ff] hover:bg-[#0A6ED1] dark:hover:bg-[#60d5ff] hover:text-white dark:hover:text-black min-h-[44px] touch-manipulation"
              >
                <a href={currentTestimonial.caseStudyLink}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Read Full Case Study
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#0A6ED1] dark:hover:text-[#60d5ff] transition-all duration-200 hover:shadow-xl min-h-[44px] touch-manipulation"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#0A6ED1] dark:hover:text-[#60d5ff] transition-all duration-200 hover:shadow-xl min-h-[44px] touch-manipulation"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-8 sm:mt-12">
          {testimonials.testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation ${
                index === currentIndex
                  ? 'bg-[#0A6ED1] dark:bg-[#60d5ff]'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            >
              <span className="sr-only">Testimonial {index + 1}</span>
            </button>
          ))}
        </div>

        {/* Auto-play Indicator */}
        <div className="text-center mt-4">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors min-h-[44px] touch-manipulation"
          >
            {isAutoPlay ? 'Pause auto-play' : 'Resume auto-play'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;