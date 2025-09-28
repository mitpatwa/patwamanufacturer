import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOAnalysis from '../components/SEOAnalysis';
import SEOOptimizer from '../components/SEOOptimizer';
import SEOMonitor from '../components/SEOMonitor';
import { BarChart3, Target, TrendingUp, Search, Globe, Zap } from 'lucide-react';

const SEO = () => {
  const [activeTab, setActiveTab] = useState('analysis');

  const tabs = [
    { id: 'analysis', label: 'SEO Analysis', icon: BarChart3 },
    { id: 'optimizer', label: 'Keyword Optimizer', icon: Target },
    { id: 'monitor', label: 'Performance Monitor', icon: TrendingUp }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'analysis':
        return <SEOAnalysis />;
      case 'optimizer':
        return <SEOOptimizer />;
      case 'monitor':
        return <SEOMonitor />;
      default:
        return <SEOAnalysis />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>SEO Analysis & Optimization | Patwa Manufacturer - Interior Décor Manufacturers India</title>
        <meta name="description" content="Comprehensive SEO analysis and optimization tools for Patwa Manufacturer. Track keyword rankings, page performance, and implement SEO best practices for better search visibility." />
        <meta name="keywords" content="SEO analysis, keyword optimization, search engine optimization, SEO tools, website performance, keyword rankings, SEO monitoring, Patwa Manufacturer SEO" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/seo" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "SEO Analysis & Optimization",
            "description": "Comprehensive SEO analysis and optimization tools for Patwa Manufacturer",
            "url": "https://patwamanufacturer.lovable.app/seo",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "SEO Analysis Tools",
              "applicationCategory": "SEO Software",
              "description": "SEO analysis and optimization tools for website performance"
            }
          }`}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* SEO Dashboard Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">SEO Analysis & Optimization</h1>
              <p className="text-xl text-blue-100 mb-8">
                Comprehensive SEO tools and analysis for Patwa Manufacturer
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Search className="h-8 w-8 text-blue-300 mx-auto mb-2" />
                  <div className="text-2xl font-bold">45</div>
                  <div className="text-sm text-blue-200">Keywords Ranked</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Globe className="h-8 w-8 text-green-300 mx-auto mb-2" />
                  <div className="text-2xl font-bold">12.5K</div>
                  <div className="text-sm text-blue-200">Monthly Traffic</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Zap className="h-8 w-8 text-yellow-300 mx-auto mb-2" />
                  <div className="text-2xl font-bold">78</div>
                  <div className="text-sm text-blue-200">Page Speed Score</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <TrendingUp className="h-8 w-8 text-purple-300 mx-auto mb-2" />
                  <div className="text-2xl font-bold">+12%</div>
                  <div className="text-sm text-blue-200">Traffic Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex space-x-8">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <IconComponent className="h-5 w-5 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="py-8">
          {renderContent()}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SEO;
