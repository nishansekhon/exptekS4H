import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { CheckCircle2, Database, Globe, Shield, Zap } from 'lucide-react';

const APICapabilitiesSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          API Technologies & Standards
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Supporting multiple API protocols and standards for maximum compatibility and integration flexibility.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Tabs defaultValue="odata-v4" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            <TabsTrigger value="odata-v4" className="text-sm">OData V4 APIs</TabsTrigger>
            <TabsTrigger value="odata-v2" className="text-sm">OData V2 APIs</TabsTrigger>
            <TabsTrigger value="rest-apis" className="text-sm">REST APIs</TabsTrigger>
            <TabsTrigger value="soap-apis" className="text-sm">SOAP APIs</TabsTrigger>
          </TabsList>

          <TabsContent value="odata-v4">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <CardTitle>OData V4 APIs</CardTitle>
                    <CardDescription>Modern RESTful standard for real-time operations</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {[
                        'Modern RESTful standard',
                        'Full CRUD operations',
                        'Advanced filtering & sorting',
                        'Batch processing support',
                        'JSON format support'
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Best Used For:</h4>
                    <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4">
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                        <strong className="text-blue-600 dark:text-blue-400">Real-time finance operations</strong>
                      </p>
                      <ul className="space-y-1 text-xs text-gray-500 dark:text-gray-400">
                        <li>• Live payment processing</li>
                        <li>• Instant invoice creation</li>
                        <li>• Real-time GL posting</li>
                        <li>• Dynamic reporting queries</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="odata-v2">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                    <Database className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <CardTitle>OData V2 APIs</CardTitle>
                    <CardDescription>Legacy SAP standard with proven reliability</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {[
                        'Legacy SAP standard',
                        'Broad compatibility',
                        'Stable and proven',
                        'XML format support',
                        'Enterprise-ready'
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Best Used For:</h4>
                    <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-4">
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                        <strong className="text-green-600 dark:text-green-400">Existing integrations</strong>
                      </p>
                      <ul className="space-y-1 text-xs text-gray-500 dark:text-gray-400">
                        <li>• Legacy system connectivity</li>
                        <li>• Established workflows</li>
                        <li>• SAP GUI integrations</li>
                        <li>• Batch processing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rest-apis">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <CardTitle>REST APIs</CardTitle>
                    <CardDescription>Industry standard for modern integrations</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {[
                        'Industry standard',
                        'JSON/XML support',
                        'OAuth 2.0 security',
                        'Stateless architecture',
                        'HTTP methods (GET, POST, PUT, DELETE)'
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Best Used For:</h4>
                    <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-4">
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                        <strong className="text-purple-600 dark:text-purple-400">Custom applications</strong>
                      </p>
                      <ul className="space-y-1 text-xs text-gray-500 dark:text-gray-400">
                        <li>• Mobile applications</li>
                        <li>• Web portals</li>
                        <li>• Third-party integrations</li>
                        <li>• Microservices architecture</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="soap-apis">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <CardTitle>SOAP APIs</CardTitle>
                    <CardDescription>Enterprise messaging for complex transactions</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {[
                        'Enterprise messaging',
                        'WS-Security',
                        'Transaction support',
                        'WSDL contracts',
                        'Error handling'
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Best Used For:</h4>
                    <div className="bg-orange-50 dark:bg-orange-950/30 rounded-lg p-4">
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                        <strong className="text-orange-600 dark:text-orange-400">Legacy system integration</strong>
                      </p>
                      <ul className="space-y-1 text-xs text-gray-500 dark:text-gray-400">
                        <li>• Mainframe connectivity</li>
                        <li>• Complex transactions</li>
                        <li>• Enterprise service bus</li>
                        <li>• High security requirements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default APICapabilitiesSection;