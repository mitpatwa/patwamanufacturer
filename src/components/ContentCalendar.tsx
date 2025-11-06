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
    // Month 1: Foundation & Awareness (Weeks 1-4)
    { id: '1', title: 'What is Passementerie? Complete Guide to Decorative Trims & Tassels', targetKeywords: ['what is passementerie', 'decorative trims', 'custom tassels'], angle: 'Comprehensive beginner\'s guide', cta: 'Download Guide', status: 'planned', publishDate: '2025-02-04', week: 1, month: 1, priority: 'high', seoScore: 85, expectedTraffic: 1200, category: 'Educational' },
    { id: '2', title: '20 Types of Decorative Trims: From Gimp to Bullion Fringe', targetKeywords: ['types of decorative trims', 'furniture trims', 'upholstery trim'], angle: 'Visual encyclopedia', cta: 'Explore Types', status: 'planned', publishDate: '2025-02-04', week: 1, month: 1, priority: 'high', seoScore: 82, expectedTraffic: 900, category: 'Educational' },
    
    { id: '3', title: 'How to Apply Decorative Trim to Furniture: Step-by-Step Guide', targetKeywords: ['how to apply decorative trim', 'DIY upholstery trim'], angle: 'Tutorial with photos', cta: 'Start Project', status: 'planned', publishDate: '2025-02-11', week: 2, month: 1, priority: 'medium', seoScore: 80, expectedTraffic: 750, category: 'How-To' },
    { id: '4', title: 'Custom Tassel Design: 10 Ways to Personalize Your Window Treatments', targetKeywords: ['custom tassel design', 'personalized tassels'], angle: 'Customization showcase', cta: 'Get Custom Quote', status: 'planned', publishDate: '2025-02-11', week: 2, month: 1, priority: 'medium', seoScore: 78, expectedTraffic: 600, category: 'Design' },
    
    { id: '5', title: '2025 Interior Design Trends: Passementerie Makes a Comeback', targetKeywords: ['interior design trends 2025', 'passementerie trends'], angle: 'Trend forecasting', cta: 'See Trends', status: 'planned', publishDate: '2025-02-18', week: 3, month: 1, priority: 'high', seoScore: 88, expectedTraffic: 2000, category: 'Trends' },
    { id: '6', title: 'Maximalist vs. Minimalist: How to Use Decorative Trims in Both Styles', targetKeywords: ['maximalist interior design', 'minimalist decor'], angle: 'Comparison guide', cta: 'Find Your Style', status: 'planned', publishDate: '2025-02-18', week: 3, month: 1, priority: 'medium', seoScore: 81, expectedTraffic: 1200, category: 'Style Guide' },
    
    { id: '7', title: 'How to Clean and Maintain Luxury Tassels and Decorative Trims', targetKeywords: ['how to clean tassels', 'trim maintenance'], angle: 'Maintenance guide', cta: 'Care Tips', status: 'planned', publishDate: '2025-02-25', week: 4, month: 1, priority: 'low', seoScore: 76, expectedTraffic: 600, category: 'Maintenance' },
    { id: '8', title: 'Understanding Trim Materials: Silk vs. Polyester vs. Rayon', targetKeywords: ['types of trim materials', 'silk trim', 'polyester fringe'], angle: 'Material comparison', cta: 'Compare Materials', status: 'planned', publishDate: '2025-02-25', week: 4, month: 1, priority: 'medium', seoScore: 79, expectedTraffic: 550, category: 'Technical' },
    
    // Month 2: Engagement & Education (Weeks 5-8)
    { id: '9', title: '10 Ways to Use Decorative Trims in Your Living Room', targetKeywords: ['living room decorating ideas', 'living room trim'], angle: 'Room-specific applications', cta: 'Get Ideas', status: 'planned', publishDate: '2025-03-04', week: 5, month: 2, priority: 'high', seoScore: 84, expectedTraffic: 1800, category: 'Room Guides' },
    { id: '10', title: 'Luxury Bedroom Design: Elevate with Custom Tassels and Trims', targetKeywords: ['luxury bedroom design', 'bedroom trim ideas'], angle: 'Luxury focus showcase', cta: 'Shop Luxury', status: 'planned', publishDate: '2025-03-04', week: 5, month: 2, priority: 'high', seoScore: 83, expectedTraffic: 1400, category: 'Room Guides' },
    
    { id: '11', title: 'The History of Passementerie: From French Courts to Modern Interiors', targetKeywords: ['history of passementerie', 'French decorative arts'], angle: 'Historical narrative', cta: 'Learn History', status: 'planned', publishDate: '2025-03-11', week: 6, month: 2, priority: 'low', seoScore: 77, expectedTraffic: 400, category: 'History' },
    { id: '12', title: 'Indian Passementerie Craftsmanship: Traditional Techniques', targetKeywords: ['Indian textile craftsmanship', 'handmade trims India'], angle: 'Brand story', cta: 'Meet Artisans', status: 'planned', publishDate: '2025-03-11', week: 6, month: 2, priority: 'medium', seoScore: 75, expectedTraffic: 500, category: 'Heritage' },
    
    { id: '13', title: 'Hospitality Design: Specifying Trims for Hotels and Restaurants', targetKeywords: ['hospitality interior design', 'hotel furniture trim'], angle: 'B2B focus', cta: 'Trade Program', status: 'planned', publishDate: '2025-03-18', week: 7, month: 2, priority: 'high', seoScore: 82, expectedTraffic: 1000, category: 'Commercial' },
    { id: '14', title: 'Cost vs. Value: Investing in Custom Passementerie', targetKeywords: ['custom trim pricing', 'passementerie cost'], angle: 'ROI analysis', cta: 'Get Pricing', status: 'planned', publishDate: '2025-03-18', week: 7, month: 2, priority: 'medium', seoScore: 74, expectedTraffic: 400, category: 'Business' },
    
    { id: '15', title: 'DIY Curtain Tiebacks: 5 Easy Projects Using Decorative Cord', targetKeywords: ['DIY curtain tiebacks', 'decorative cord projects'], angle: 'Step-by-step projects', cta: 'Try DIY', status: 'planned', publishDate: '2025-03-25', week: 8, month: 2, priority: 'medium', seoScore: 81, expectedTraffic: 950, category: 'DIY' },
    { id: '16', title: 'How to Choose the Perfect Fringe for Your Upholstery Project', targetKeywords: ['choosing upholstery trim', 'fringe selection'], angle: 'Decision framework', cta: 'Choose Fringe', status: 'planned', publishDate: '2025-03-25', week: 8, month: 2, priority: 'medium', seoScore: 78, expectedTraffic: 700, category: 'How-To' },
    
    // Month 3: Authority & Conversion (Weeks 9-12)
    { id: '17', title: 'Color Psychology in Interior Design: Choosing Trim Colors', targetKeywords: ['color psychology interior design', 'trim color selection'], angle: 'Psychology-backed guidance', cta: 'Find Colors', status: 'planned', publishDate: '2025-04-01', week: 9, month: 3, priority: 'high', seoScore: 86, expectedTraffic: 1600, category: 'Color Theory' },
    { id: '18', title: 'Metallic Trims Guide: Gold, Silver, and Bronze in Interior Design', targetKeywords: ['metallic interior design', 'gold trim', 'silver fringe'], angle: 'Metal finish guide', cta: 'Shop Metallic', status: 'planned', publishDate: '2025-04-01', week: 9, month: 3, priority: 'medium', seoScore: 80, expectedTraffic: 900, category: 'Style Guide' },
    
    { id: '19', title: 'Sustainable Passementerie: Eco-Friendly Trims for Conscious Design', targetKeywords: ['sustainable interior design', 'eco-friendly trims'], angle: 'Sustainability credentials', cta: 'Shop Sustainable', status: 'planned', publishDate: '2025-04-08', week: 10, month: 3, priority: 'high', seoScore: 85, expectedTraffic: 1700, category: 'Sustainability' },
    { id: '20', title: 'Fair Trade Textiles: The Story Behind Patwa\'s Artisan Network', targetKeywords: ['fair trade textiles', 'ethical manufacturing'], angle: 'Brand transparency', cta: 'Our Story', status: 'planned', publishDate: '2025-04-08', week: 10, month: 3, priority: 'medium', seoScore: 76, expectedTraffic: 800, category: 'Ethics' },
    
    { id: '21', title: 'Flame Retardant Trims: Meeting Commercial Fire Safety Standards', targetKeywords: ['flame retardant upholstery', 'fire rated trims'], angle: 'Technical compliance', cta: 'See Certifications', status: 'planned', publishDate: '2025-04-15', week: 11, month: 3, priority: 'medium', seoScore: 77, expectedTraffic: 700, category: 'Technical' },
    { id: '22', title: 'Outdoor Fabric Trims: UV-Resistant Passementerie for Patios', targetKeywords: ['outdoor furniture trim', 'UV resistant trim'], angle: 'Outdoor-specific guide', cta: 'Shop Outdoor', status: 'planned', publishDate: '2025-04-15', week: 11, month: 3, priority: 'medium', seoScore: 79, expectedTraffic: 650, category: 'Outdoor' },
    
    { id: '23', title: '5 Stunning Passementerie Projects That Transformed Luxury Homes', targetKeywords: ['luxury home design', 'home transformation'], angle: 'Visual case studies', cta: 'View Projects', status: 'planned', publishDate: '2025-04-22', week: 12, month: 3, priority: 'high', seoScore: 84, expectedTraffic: 1400, category: 'Case Studies' },
    { id: '24', title: 'Designer\'s Secret: How Top Interior Designers Use Trim for Luxury', targetKeywords: ['interior design tips', 'designer secrets'], angle: 'Expert interviews', cta: 'Learn Secrets', status: 'planned', publishDate: '2025-04-22', week: 12, month: 3, priority: 'high', seoScore: 87, expectedTraffic: 2200, category: 'Pro Tips' },
    
    // Bonus Evergreen Content
    { id: '25', title: 'Ultimate Passementerie Glossary: 100+ Terms Every Designer Should Know', targetKeywords: ['passementerie terms', 'trim glossary'], angle: 'Comprehensive reference', cta: 'View Glossary', status: 'planned', publishDate: '2025-04-29', week: 13, month: 3, priority: 'low', seoScore: 73, expectedTraffic: 350, category: 'Reference' },
    { id: '26', title: 'Window Treatment Hardware Guide: Coordinating Finials with Trims', targetKeywords: ['window treatment hardware', 'curtain finials'], angle: 'Hardware coordination', cta: 'Shop Hardware', status: 'planned', publishDate: '2025-04-29', week: 13, month: 3, priority: 'medium', seoScore: 81, expectedTraffic: 1100, category: 'Window Treatments' },
  ];

  const months = [
    { id: 1, name: 'Month 1: Foundation & Awareness', color: 'blue' },
    { id: 2, name: 'Month 2: Engagement & Education', color: 'green' },
    { id: 3, name: 'Month 3: Authority & Conversion', color: 'purple' }
  ];

  const filteredContent = contentItems.filter(item => item.month === selectedMonth);

  const getMaxWeeksForMonth = (monthId: number) => {
    if (monthId === 3) return 5; // Month 3 has weeks 9-13 (5 weeks)
    return 4; // Months 1 and 2 have 4 weeks each
  };

  const getWeekOffset = (monthId: number) => {
    if (monthId === 1) return 0;
    if (monthId === 2) return 4;
    return 8; // Month 3 starts at week 9
  };

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
          {Array.from({ length: getMaxWeeksForMonth(selectedMonth) }, (_, i) => {
            const weekNumber = i + 1 + getWeekOffset(selectedMonth);
            return (
              <div key={weekNumber} className="bg-white rounded-lg border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-900 mb-4">Week {weekNumber}</h3>
                <div className="space-y-3">
                  {filteredContent
                    .filter(item => item.week === weekNumber)
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
            );
          })}
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
