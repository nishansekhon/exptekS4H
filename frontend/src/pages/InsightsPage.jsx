import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../components/ui/breadcrumb';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  Mail,
  BookOpen,
  TrendingUp,
  Settings,
  Shield,
  Link2,
  Download,
  Eye
} from 'lucide-react';

const InsightsPage = () => {
  const [email, setEmail] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing to our insights!');
    setEmail('');
  };

  const handleCTAClick = (ctaType) => {
    console.log(`Insights CTA clicked: ${ctaType}`);
  };

  const categories = [
    { id: 'all', name: 'All Posts', count: 10 },
    { id: 'implementation', name: 'Implementation Tips', count: 4 },
    { id: 'best-practices', name: 'Best Practices', count: 3 },
    { id: 'sap-updates', name: 'SAP Updates', count: 1 },
    { id: 'compliance', name: 'Compliance & Regulations', count: 1 },
    { id: 'integration', name: 'Integration Guides', count: 1 }
  ];

  const featuredArticles = [
    {
      id: 1,
      title: 'Top 10 Fiori Apps Every Finance User Should Know',
      category: 'best-practices',
      categoryName: 'Best Practices',
      readTime: 8,
      excerpt: 'Discover the essential SAP Fiori applications that transform finance operations with real-time insights and streamlined workflows...',
      date: 'January 2025',
      image: '📱',
      featured: true
    },
    {
      id: 2,
      title: 'Accelerating Month-End Close in SAP Public Cloud',
      category: 'implementation',
      categoryName: 'Implementation Tips',
      readTime: 6,
      excerpt: 'Learn proven strategies to reduce your financial close cycle from 10 days to 3 days using SAP S/4HANA Cloud automation...',
      date: 'January 2025',
      image: '📊',
      featured: true
    },
    {
      id: 3,
      title: 'Multi-Country Tax Compliance Automation Guide',
      category: 'compliance',
      categoryName: 'Compliance & Regulations',
      readTime: 10,
      excerpt: 'Complete guide to configuring automated tax compliance for multi-country operations in SAP S/4HANA Public Cloud...',
      date: 'December 2024',
      image: '⚖️',
      featured: false
    },
    {
      id: 4,
      title: 'EBRR Implementation: Complete Checklist for Finance Teams',
      category: 'implementation',
      categoryName: 'Implementation Tips',
      readTime: 12,
      excerpt: 'Step-by-step checklist for successful Event-Based Revenue Recognition implementation and IFRS 15 compliance...',
      date: 'December 2024',
      image: '📋',
      featured: false
    },
    {
      id: 5,
      title: 'API Integration Best Practices: Salesforce + SAP',
      category: 'integration',
      categoryName: 'Integration Guides',
      readTime: 9,
      excerpt: 'Essential best practices for seamless integration between Salesforce CRM and SAP S/4HANA Finance...',
      date: 'November 2024',
      image: '🔗',
      featured: false
    },
    {
      id: 6,
      title: 'Digital Payments Setup Guide for SAP S/4HANA Cloud',
      category: 'implementation',
      categoryName: 'Implementation Tips',
      readTime: 11,
      excerpt: 'Complete configuration guide for Digital Payments Add-On, payment service providers, and customer portals...',
      date: 'November 2024',
      image: '💳',
      featured: false
    },
    {
      id: 7,
      title: 'SAP Activate Methodology: Why It Works for Finance',
      category: 'best-practices',
      categoryName: 'Best Practices',
      readTime: 7,
      excerpt: 'Understanding how SAP Activate\'s fit-to-standard approach accelerates finance implementations and reduces customization...',
      date: 'October 2024',
      image: '🎯',
      featured: false
    },
    {
      id: 8,
      title: 'Cloud Finance Migration: 30-Day Roadmap',
      category: 'implementation',
      categoryName: 'Implementation Tips',
      readTime: 10,
      excerpt: 'Detailed 30-day roadmap for migrating from legacy finance systems to SAP S/4HANA Public Cloud...',
      date: 'October 2024',
      image: '🗺️',
      featured: false
    },
    {
      id: 9,
      title: 'Banking & Treasury Optimization in S/4HANA Cloud',
      category: 'best-practices',
      categoryName: 'Best Practices',
      readTime: 8,
      excerpt: 'Optimize cash management, bank connectivity, and treasury operations using SAP S/4HANA Cloud best practices...',
      date: 'September 2024',
      image: '🏦',
      featured: false
    },
    {
      id: 10,
      title: '2025 SAP Public Cloud Finance Feature Roadmap',
      category: 'sap-updates',
      categoryName: 'SAP Updates',
      readTime: 6,
      excerpt: 'What\'s coming in 2025 for SAP S/4HANA Public Cloud Finance - quarterly releases, new features, and innovations...',
      date: 'September 2024',
      image: '🚀',
      featured: false
    }
  ];

  const popularPosts = [
    { title: 'Top 10 Fiori Apps Every Finance User Should Know', views: '2.1K' },
    { title: 'Accelerating Month-End Close in SAP Public Cloud', views: '1.8K' },
    { title: 'EBRR Implementation: Complete Checklist for Finance Teams', views: '1.5K' },
    { title: 'Digital Payments Setup Guide for SAP S/4HANA Cloud', views: '1.2K' }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? featuredArticles 
    : featuredArticles.filter(article => article.category === selectedCategory);

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
              <BreadcrumbPage>Insights</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50 dark:text-blue-400 dark:border-blue-800 dark:bg-blue-950/50 mb-6">
            INSIGHTS & EXPERTISE
          </Badge>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight break-words">
            SAP Finance Insights & Best Practices
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed break-words px-4">
            {/* [CONTENT TO BE UPDATED] */}
            Expert guidance for SAP S/4HANA Public Cloud Finance success. Stay ahead with implementation tips, 
            best practices, and industry insights from our certified consultants.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Main Content - Left 3/4 */}
          <div className="lg:col-span-3">
            
            {/* Categories Tabs */}
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
              <TabsList className="grid grid-cols-3 lg:grid-cols-6 mb-8">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-sm">
                    {category.name}
                    <Badge variant="outline" className="ml-2 text-xs">
                      {category.count}
                    </Badge>
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={selectedCategory}>
                {/* Featured Articles Grid */}
                <div className="space-y-8">
                  {filteredArticles.slice(0, 2).map((article) => (
                    <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="grid lg:grid-cols-3 gap-0">
                        <div className="lg:col-span-1 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 flex items-center justify-center p-8">
                          <div className="text-6xl">{article.image}</div>
                        </div>
                        <div className="lg:col-span-2 p-8">
                          <div className="flex items-center space-x-4 mb-4">
                            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                              {article.categoryName}
                            </Badge>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-4">
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {article.readTime} min read
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {article.date}
                              </div>
                            </div>
                          </div>
                          
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                            {article.title}
                          </h2>
                          
                          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            {article.excerpt}
                          </p>
                          
                          <Button 
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                            onClick={() => handleCTAClick(`read-article-${article.id}`)}
                          >
                            Read Article
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}

                  {/* Regular Articles Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {filteredArticles.slice(2).map((article) => (
                      <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                        <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-950 p-6 text-center">
                          <div className="text-4xl mb-4">{article.image}</div>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <Badge variant="outline" className="text-xs">
                              {article.categoryName}
                            </Badge>
                            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                              <Clock className="h-3 w-3 mr-1" />
                              {article.readTime} min
                            </div>
                          </div>
                          
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            {article.title}
                          </h3>
                          
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                            {article.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500 dark:text-gray-400">{article.date}</span>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleCTAClick(`read-article-${article.id}`)}
                            >
                              Read More
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar - Right 1/4 */}
          <div className="space-y-8">
            
            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-blue-600" />
                  Newsletter
                </CardTitle>
                <CardDescription>
                  Get the latest SAP finance insights delivered to your inbox.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                    required
                  />
                  <Button type="submit" size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Subscribe
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                  Popular Posts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <div key={index} className="pb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-2 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">
                        {post.title}
                      </h4>
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <Eye className="h-3 w-3 mr-1" />
                        {post.views} views
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.filter(cat => cat.id !== 'all').map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-2 rounded-lg transition-colors ${
                        selectedCategory === category.id 
                          ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-900 dark:text-blue-100' 
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{category.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Download Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Download className="h-5 w-5 mr-2 text-blue-600" />
                  Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={() => handleCTAClick('download-implementation-guide')}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Implementation Guide
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={() => handleCTAClick('download-best-practices')}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Best Practices Checklist
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={() => handleCTAClick('download-api-guide')}
                >
                  <Link2 className="h-4 w-4 mr-2" />
                  API Integration Guide
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 dark:from-blue-800 dark:via-blue-900 dark:to-cyan-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Expert Guidance?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {/* [CONTENT TO BE UPDATED] */}
            Have specific questions about your SAP S/4HANA Public Cloud Finance implementation? 
            Our certified consultants are here to help with personalized guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold"
              onClick={() => handleCTAClick('schedule-consultation')}
            >
              Schedule Consultation
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
            
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg font-semibold"
              >
                Contact Our Experts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;