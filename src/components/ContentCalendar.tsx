import React, { useState } from 'react';
import { Calendar, Clock, Target, TrendingUp, CheckCircle, AlertCircle, Plus } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  targetKeywords: string[];
  angle: string;
  cta: string;
  status: 'completed' | 'in-progress' | 'scheduled' | 'planned';
  publishDate: string;
  week: number;
  month: number;
  priority: 'high' | 'medium' | 'low';
  seoScore: number;
  expectedTraffic: number;
  category: string;
}

const ContentCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');

  // Content calendar data based on your 90-day plan
  const contentItems: ContentItem[] = [
    // Month 1: Foundation & Awareness
    {
      id: '1',
      title: 'Ultimate Guide: Tassel Trimmings for Interiors',
      targetKeywords: ['tassel trims', 'decorative tassels'],
      angle: 'Designer inspiration tips',
      cta: 'Download style guide',
      status: 'completed',
      publishDate: '2025-01-28',
      week: 1,
      month: 1,
      priority: 'high',
      seoScore: 85,
      expectedTraffic: 1200,
      category: 'Design Guides'
    },
    {
      id: '2',
      title: 'A History of Tiebacks – Timeless Utility & Style',
      targetKeywords: ['curtain tiebacks', 'tieback history'],
      angle: 'Storytelling, product showcase',
      cta: 'Get inspired',
      status: 'completed',
      publishDate: '2025-01-28',
      week: 1,
      month: 1,
      priority: 'high',
      seoScore: 78,
      expectedTraffic: 890,
      category: 'History & Heritage'
    },
    {
      id: '3',
      title: 'Lace Trends 2025: Modern & Classic Combinations',
      targetKeywords: ['lace trims', 'lace trends', 'textile trims'],
      angle: 'Trend roundup, buy now',
      cta: 'Shop trending lace',
      status: 'scheduled',
      publishDate: '2025-02-04',
      week: 2,
      month: 1,
      priority: 'high',
      seoScore: 82,
      expectedTraffic: 1100,
      category: 'Trends'
    },
    {
      id: '4',
      title: 'How to Choose the Perfect Cord for Upholstery',
      targetKeywords: ['upholstery cords', 'decorative cords'],
      angle: 'How-to guide, FAQs',
      cta: 'How-to guide',
      status: 'scheduled',
      publishDate: '2025-02-04',
      week: 2,
      month: 1,
      priority: 'medium',
      seoScore: 88,
      expectedTraffic: 950,
      category: 'How-To Guides'
    },
    {
      id: '5',
      title: 'Artisan Spotlight: Meet Our Master Craftsmen',
      targetKeywords: ['trimmings artisans', 'handmade trims'],
      angle: 'Brand story, shareable video',
      cta: 'Watch video',
      status: 'planned',
      publishDate: '2025-02-11',
      week: 3,
      month: 1,
      priority: 'medium',
      seoScore: 75,
      expectedTraffic: 800,
      category: 'Brand Story'
    },
    {
      id: '6',
      title: 'Factory Tour: Sustainable Manufacturing Methods',
      targetKeywords: ['sustainable trimmings', 'eco trims'],
      angle: 'Company values, video content',
      cta: 'Book a tour',
      status: 'planned',
      publishDate: '2025-02-11',
      week: 3,
      month: 1,
      priority: 'medium',
      seoScore: 80,
      expectedTraffic: 700,
      category: 'Sustainability'
    },
    {
      id: '7',
      title: 'Top 10 Decorative Trimmings for Drapery',
      targetKeywords: ['drapery trims', 'designer trimmings'],
      angle: 'Listicle, lead magnet',
      cta: 'Product spotlight',
      status: 'planned',
      publishDate: '2025-02-18',
      week: 4,
      month: 1,
      priority: 'high',
      seoScore: 90,
      expectedTraffic: 1500,
      category: 'Product Guides'
    },
    {
      id: '8',
      title: 'How Trimmings Can Transform Furniture',
      targetKeywords: ['furniture embellishments', 'trims'],
      angle: 'Tips, before & after photos',
      cta: 'Tips & tricks',
      status: 'planned',
      publishDate: '2025-02-18',
      week: 4,
      month: 1,
      priority: 'medium',
      seoScore: 85,
      expectedTraffic: 1000,
      category: 'Transformation'
    }
  ];

  const months = [
    { id: 1, name: 'Month 1: Foundation & Awareness', color: 'blue' },
    { id: 2, name: 'Month 2: Engagement & Education', color: 'green' },
    { id: 3, name: 'Month 3: Authority & Conversion', color: 'purple' }
  ];

  const filteredContent = contentItems.filter(item => item.month === selectedMonth);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'scheduled': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'planned': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const getSEOScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getMonthColor = (monthId: number) => {
    const month = months.find(m => m.id === monthId);
    switch (month?.color) {
      case 'blue': return 'from-blue-50 to-blue-100 border-blue-200';
      case 'green': return 'from-green-50 to-green-100 border-green-200';
      case 'purple': return 'from-purple-50 to-purple-100 border-purple-200';
      default: return 'from-gray-50 to-gray-100 border-gray-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">90-Day Content Calendar</h1>
        <p className="text-gray-600">Strategic content planning for maximum SEO impact and audience engagement</p>
      </div>

      {/* Month Selector */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4">
          {months.map((month) => (
            <button
              key={month.id}
              onClick={() => setSelectedMonth(month.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedMonth === month.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {month.name}
            </button>
          ))}
        </div>
      </div>

      {/* View Mode Toggle */}
      <div className="mb-6 flex justify-between items-center">
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('calendar')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              viewMode === 'calendar'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Calendar className="h-4 w-4 inline mr-2" />
            Calendar View
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              viewMode === 'list'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            List View
          </button>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          <Plus className="h-4 w-4" />
          Add Content
        </button>
      </div>

      {/* Content Display */}
      {viewMode === 'calendar' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((week) => (
            <div key={week} className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-4">Week {week}</h3>
              <div className="space-y-3">
                {filteredContent
                  .filter(item => item.week === week)
                  .map((item) => (
                    <div
                      key={item.id}
                      className={`p-3 rounded-lg border ${getStatusColor(item.status)}`}
                    >
                      <h4 className="font-medium text-sm mb-2 line-clamp-2">{item.title}</h4>
                      <div className="flex items-center justify-between text-xs">
                        <span className="flex items-center gap-1">
                          <Target className="h-3 w-3" />
                          {item.targetKeywords.length} keywords
                        </span>
                        <span className={`font-medium ${getSEOScoreColor(item.seoScore)}`}>
                          SEO: {item.seoScore}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-lg border ${getMonthColor(selectedMonth)}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                    <span className={`text-sm font-medium ${getPriorityColor(item.priority)}`}>
                      {item.priority} priority
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Target Keywords</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {item.targetKeywords.map((keyword, index) => (
                          <span key={index} className="px-2 py-1 bg-white text-gray-700 text-xs rounded-full">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-700">Angle/CTA</p>
                      <p className="text-sm text-gray-600 mt-1">{item.angle}</p>
                      <p className="text-sm text-blue-600 mt-1">{item.cta}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-700">Performance</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-sm font-medium ${getSEOScoreColor(item.seoScore)}`}>
                          SEO: {item.seoScore}
                        </span>
                        <span className="text-sm text-gray-600">
                          {item.expectedTraffic} views
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-700">Schedule</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{item.publishDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Content Calendar Summary */}
      <div className="mt-12 bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Content Calendar Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{contentItems.length}</div>
            <div className="text-sm text-gray-600">Total Articles</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {contentItems.filter(item => item.status === 'completed').length}
            </div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {contentItems.filter(item => item.status === 'scheduled').length}
            </div>
            <div className="text-sm text-gray-600">Scheduled</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-600">
              {contentItems.filter(item => item.status === 'planned').length}
            </div>
            <div className="text-sm text-gray-600">Planned</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCalendar;
