import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/ui/collapsible';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../components/ui/breadcrumb';
import { 
  ArrowRight, 
  Calendar, 
  Download, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Phone,
  Globe,
  FileText,
  Users
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    currentERP: '',
    timeline: '',
    message: '',
    newsletter: false
  });

  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Form submission logic will be implemented later
    alert('Thank you for your message! We\'ll respond within 24 hours.');
  };

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const handleCTAClick = (ctaType) => {
    console.log(`Contact CTA clicked: ${ctaType}`);
  };

  const industries = [
    'Manufacturing',
    'Retail/E-Commerce',
    'Professional Services', 
    'Technology/SaaS',
    'Financial Services',
    'Healthcare',
    'Public Sector',
    'Energy & Utilities',
    'Other'
  ];

  const timelines = [
    'Immediate (0-1 month)',
    '1-3 months',
    '3-6 months', 
    '6-12 months',
    'Exploring options'
  ];

  const faqData = [
    {
      question: 'How quickly can you respond?',
      answer: 'We respond to all inquiries within 24 hours during business days. For urgent requests, we often respond the same day.'
    },
    {
      question: 'Do you offer free consultations?',
      answer: 'Yes, we offer a complimentary 1-hour consultation to discuss your specific needs and how we can help with your SAP S/4HANA Public Cloud Finance implementation.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve Manufacturing, Retail, Professional Services, Technology, Financial Services, Healthcare, Public Sector, and Energy & Utilities industries.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Our implementations typically range from 3-8 months depending on scope and complexity. Small focused projects can be completed in 3-4 months, while large global implementations take 6-8 months. We deliver 40% faster than traditional Big 4 consulting firms.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we provide 24/7 post-go-live support, system optimization, and continuous improvement services to ensure long-term success.'
    }
  ];

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
              <BreadcrumbPage>Contact</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50 dark:text-blue-400 dark:border-blue-800 dark:bg-blue-950/50 mb-6">
            GET IN TOUCH
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight break-words">
            Get in Touch
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {/* [CONTENT TO BE UPDATED] */}
            Let's discuss how we can help transform your finance operations with SAP S/4HANA Public Cloud expertise.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          
          {/* Contact Form - Left 2/3 */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="john.smith@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Industry
                      </label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      >
                        <option value="">Select Industry</option>
                        {industries.map((industry) => (
                          <option key={industry} value={industry}>{industry}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Current ERP System
                      </label>
                      <input
                        type="text"
                        name="currentERP"
                        value={formData.currentERP}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="e.g., SAP ECC, Oracle, QuickBooks"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="">Select Timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      How can we help? *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Tell us about your specific requirements, challenges, or questions..."
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="newsletter"
                      id="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-600 dark:text-gray-400">
                      Subscribe to our newsletter for SAP insights and updates
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Send Message
                    <Mail className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information - Right 1/3 */}
          <div className="space-y-6">
            {/* Contact Info Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ExpTek LLC</h4>
                  <div className="text-gray-600 dark:text-gray-400 space-y-1">
                    <p>28345 Beck Road, Suite 406</p>
                    <p>Wixom, Michigan, 48393</p>
                    <p>United States</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:hr@exptek.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                    hr@exptek.com
                  </a>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-2">
                    <Clock className="h-4 w-4" />
                    <span className="font-medium">Business Hours:</span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-6">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleCTAClick('schedule-consultation')}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Free Consultation
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleCTAClick('download-guide')}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Implementation Guide
                </Button>
                
                <Link to="/case-studies">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    View Case Studies
                  </Button>
                </Link>
                
                <Link to="/services">
                  <Button variant="outline" className="w-full justify-start">
                    <Globe className="h-4 w-4 mr-2" />
                    Explore Services
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Common questions about working with ExpTek and our SAP S/4HANA Public Cloud services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <Collapsible open={expandedFAQ === index} onOpenChange={() => toggleFAQ(index)}>
                  <CollapsibleTrigger asChild>
                    <button className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                        {faq.question}
                      </h3>
                      {expandedFAQ === index ? (
                        <ChevronUp className="h-5 w-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700">
                    <div className="pt-4">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;