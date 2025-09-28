import React, { useState } from 'react';
import { Target, Search, TrendingUp, Lightbulb, CheckCircle, AlertCircle } from 'lucide-react';

const SEOOptimizer = () => {
  const [selectedKeyword, setSelectedKeyword] = useState('');
  const [optimizationLevel, setOptimizationLevel] = useState('beginner');

  const keywords = [
    { keyword: 'passementerie manufacturer', volume: 1200, difficulty: 'Medium', opportunity: 'High' },
    { keyword: 'luxury curtain tiebacks', volume: 800, difficulty: 'Low', opportunity: 'High' },
    { keyword: 'decorative cords and piping', volume: 1500, difficulty: 'High', opportunity: 'Medium' },
    { keyword: 'interior décor manufacturers India', volume: 1000, difficulty: 'Medium', opportunity: 'High' },
    { keyword: 'custom tassels supplier', volume: 600, difficulty: 'Low', opportunity: 'High' },
    { keyword: 'handcrafted braids wholesale', volume: 400, difficulty: 'Low', opportunity: 'High' },
    { keyword: 'textile trims manufacturer', volume: 800, difficulty: 'Medium', opportunity: 'Medium' },
    { keyword: 'curtain accessories India', volume: 500, difficulty: 'Low', opportunity: 'High' }
  ];

  const optimizationTips = {
    beginner: [
      {
        title: 'Use Target Keywords in Page Titles',
        description: 'Include your primary keyword in the page title (H1 tag)',
        example: 'Luxury Passementerie Manufacturer | Patwa Manufacturer',
        priority: 'High'
      },
      {
        title: 'Optimize Meta Descriptions',
        description: 'Write compelling meta descriptions with target keywords',
        example: 'Leading manufacturer of luxury passementerie, custom tassels, fringes & decorative trims. Handcrafted quality for interior designers worldwide.',
        priority: 'High'
      },
      {
        title: 'Add Alt Text to Images',
        description: 'Describe images with relevant keywords for better accessibility and SEO',
        example: 'Handcrafted silk tassels for luxury curtains',
        priority: 'Medium'
      }
    ],
    intermediate: [
      {
        title: 'Create Keyword-Rich Content',
        description: 'Develop comprehensive content around your target keywords',
        example: 'Write detailed product descriptions, blog posts, and FAQ sections',
        priority: 'High'
      },
      {
        title: 'Implement Internal Linking',
        description: 'Link related pages and products to improve site structure',
        example: 'Link from product pages to related collections and categories',
        priority: 'Medium'
      },
      {
        title: 'Optimize URL Structure',
        description: 'Use descriptive, keyword-rich URLs',
        example: '/collections/luxury-tassels instead of /products/123',
        priority: 'Medium'
      }
    ],
    advanced: [
      {
        title: 'Implement Schema Markup',
        description: 'Add structured data to help search engines understand your content',
        example: 'Product schema, Organization schema, LocalBusiness schema',
        priority: 'High'
      },
      {
        title: 'Optimize Core Web Vitals',
        description: 'Improve page speed, interactivity, and visual stability',
        example: 'Optimize images, minimize JavaScript, improve server response time',
        priority: 'High'
      },
      {
        title: 'Build Quality Backlinks',
        description: 'Get links from reputable websites in your industry',
        example: 'Partner with interior design blogs, trade publications, and industry directories',
        priority: 'Medium'
      }
    ]
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Low':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'High':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getOpportunityColor = (opportunity: string) => {
    switch (opportunity) {
      case 'High':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'text-red-600';
      case 'Medium':
        return 'text-yellow-600';
      case 'Low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Keyword Research */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-6">
            <Search className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">Keyword Research & Analysis</h2>
          </div>
          
          <div className="space-y-4">
            {keywords.map((kw, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-gray-900">{kw.keyword}</h3>
                  <div className="flex space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(kw.difficulty)}`}>
                      {kw.difficulty}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getOpportunityColor(kw.opportunity)}`}>
                      {kw.opportunity}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                  <div>
                    <span className="text-gray-500">Search Volume:</span>
                    <span className="ml-1 font-medium">{kw.volume.toLocaleString()}/month</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Competition:</span>
                    <span className="ml-1 font-medium">{kw.difficulty}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedKeyword(kw.keyword)}
                  className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                    selectedKeyword === kw.keyword
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedKeyword === kw.keyword ? 'Selected' : 'Select for Optimization'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Optimization Tips */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-6">
            <Target className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">Optimization Strategies</h2>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Optimization Level</label>
            <select
              value={optimizationLevel}
              onChange={(e) => setOptimizationLevel(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          
          <div className="space-y-4">
            {optimizationTips[optimizationLevel as keyof typeof optimizationTips].map((tip, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-gray-900">{tip.title}</h3>
                  <span className={`text-xs font-medium ${getPriorityColor(tip.priority)}`}>
                    {tip.priority} Priority
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-3">{tip.description}</p>
                
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center mb-1">
                    <Lightbulb className="h-4 w-4 text-yellow-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700">Example:</span>
                  </div>
                  <p className="text-sm text-gray-600 italic">{tip.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Keyword Optimization */}
      {selectedKeyword && (
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">Optimization Plan for: "{selectedKeyword}"</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-medium text-blue-900 mb-2">On-Page Optimization</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Include in page title
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Use in H1 tag
                </li>
                <li className="flex items-center">
                  <AlertCircle className="h-4 w-4 text-yellow-500 mr-2" />
                  Add to meta description
                </li>
                <li className="flex items-center">
                  <AlertCircle className="h-4 w-4 text-yellow-500 mr-2" />
                  Include in content naturally
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-medium text-green-900 mb-2">Content Strategy</h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Create product descriptions
                </li>
                <li className="flex items-center">
                  <AlertCircle className="h-4 w-4 text-yellow-500 mr-2" />
                  Write blog posts
                </li>
                <li className="flex items-center">
                  <AlertCircle className="h-4 w-4 text-yellow-500 mr-2" />
                  Add FAQ section
                </li>
                <li className="flex items-center">
                  <AlertCircle className="h-4 w-4 text-yellow-500 mr-2" />
                  Create landing pages
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-medium text-purple-900 mb-2">Technical Implementation</h3>
              <ul className="text-sm text-purple-800 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Optimize URL structure
                </li>
                <li className="flex items-center">
                  <AlertCircle className="h-4 w-4 text-yellow-500 mr-2" />
                  Add schema markup
                </li>
                <li className="flex items-center">
                  <AlertCircle className="h-4 w-4 text-yellow-500 mr-2" />
                  Improve page speed
                </li>
                <li className="flex items-center">
                  <AlertCircle className="h-4 w-4 text-yellow-500 mr-2" />
                  Mobile optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SEOOptimizer;
