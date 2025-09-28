import React from 'react';
import { BarChart3, AlertTriangle, CheckCircle, TrendingUp, Search, Globe } from 'lucide-react';

const SEOAnalysis = () => {
  const seoMetrics = [
    {
      category: 'Technical SEO',
      score: 72,
      status: 'warning',
      issues: [
        'Missing meta descriptions on 3 pages',
        'Image alt tags need optimization',
        'Internal linking could be improved'
      ],
      improvements: [
        'Add meta descriptions to all pages',
        'Optimize image alt attributes',
        'Implement breadcrumb navigation'
      ]
    },
    {
      category: 'Content SEO',
      score: 85,
      status: 'good',
      issues: [
        'Some pages lack sufficient content depth'
      ],
      improvements: [
        'Add more detailed product descriptions',
        'Create comprehensive FAQ section',
        'Expand about page content'
      ]
    },
    {
      category: 'On-Page SEO',
      score: 78,
      status: 'warning',
      issues: [
        'Header tag structure needs optimization',
        'Some pages missing H1 tags'
      ],
      improvements: [
        'Optimize heading hierarchy',
        'Ensure every page has unique H1',
        'Improve keyword density'
      ]
    },
    {
      category: 'Performance',
      score: 65,
      status: 'error',
      issues: [
        'Page load speed needs improvement',
        'Large image files not optimized',
        'JavaScript bundle size is large'
      ],
      improvements: [
        'Optimize and compress images',
        'Implement lazy loading',
        'Minify CSS and JavaScript'
      ]
    }
  ];

  const keywordAnalysis = [
    { keyword: 'passementerie manufacturer', position: 12, volume: 1200, difficulty: 'Medium' },
    { keyword: 'luxury curtain tiebacks', position: 8, volume: 800, difficulty: 'Low' },
    { keyword: 'decorative cords and piping', position: 15, volume: 1500, difficulty: 'High' },
    { keyword: 'interior décor manufacturers India', position: 5, volume: 1000, difficulty: 'Medium' },
    { keyword: 'custom tassels supplier', position: 20, volume: 600, difficulty: 'Low' }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'error':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      default:
        return <CheckCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'text-green-600 bg-green-50';
      case 'warning':
        return 'text-yellow-600 bg-yellow-50';
      case 'error':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* SEO Metrics Overview */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-6">
            <BarChart3 className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">SEO Health Overview</h2>
          </div>
          
          <div className="space-y-6">
            {seoMetrics.map((metric, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-gray-900">{metric.category}</h3>
                  <div className="flex items-center">
                    {getStatusIcon(metric.status)}
                    <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.status)}`}>
                      {metric.score}/100
                    </span>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div 
                    className={`h-2 rounded-full ${
                      metric.score >= 80 ? 'bg-green-500' : 
                      metric.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${metric.score}%` }}
                  ></div>
                </div>

                <div className="space-y-2">
                  <div>
                    <h4 className="text-sm font-medium text-red-600 mb-1">Issues Found:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {metric.issues.map((issue, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-red-400 mr-2">•</span>
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-blue-600 mb-1">Recommended Actions:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {metric.improvements.map((improvement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {improvement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Keyword Analysis */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-6">
            <Search className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">Keyword Performance</h2>
          </div>
          
          <div className="space-y-4">
            {keywordAnalysis.map((keyword, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">{keyword.keyword}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    keyword.difficulty === 'Low' ? 'bg-green-100 text-green-800' :
                    keyword.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {keyword.difficulty}
                  </span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Position:</span>
                    <span className="ml-1 font-medium">{keyword.position}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Volume:</span>
                    <span className="ml-1 font-medium">{keyword.volume.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Trend:</span>
                    <span className="ml-1 text-green-600 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +5
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Items */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center mb-4">
          <Globe className="h-6 w-6 text-purple-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-900">Priority Action Items</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Immediate Actions (This Week)</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Optimize page load speed by compressing images
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Add meta descriptions to all product pages
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Fix missing H1 tags on collection pages
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Medium-term Goals (This Month)</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Implement structured data markup
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Create comprehensive FAQ section
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Optimize internal linking structure
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOAnalysis;
