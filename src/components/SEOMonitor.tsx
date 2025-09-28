import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Search, Globe, Smartphone, Zap, Target, AlertCircle, CheckCircle } from 'lucide-react';

interface SEOMetrics {
  organicTraffic: number;
  keywordRankings: number;
  pageSpeed: number;
  mobileUsability: number;
  coreWebVitals: number;
  backlinks: number;
  domainAuthority: number;
}

interface KeywordRanking {
  keyword: string;
  position: number;
  change: number;
  searchVolume: number;
  difficulty: number;
}

interface PagePerformance {
  page: string;
  loadTime: number;
  coreWebVitals: {
    lcp: number;
    fid: number;
    cls: number;
  };
  mobileScore: number;
  desktopScore: number;
}

const SEOMonitor = () => {
  const [metrics, setMetrics] = useState<SEOMetrics>({
    organicTraffic: 0,
    keywordRankings: 0,
    pageSpeed: 0,
    mobileUsability: 0,
    coreWebVitals: 0,
    backlinks: 0,
    domainAuthority: 0
  });

  const [keywordRankings, setKeywordRankings] = useState<KeywordRanking[]>([]);
  const [pagePerformance, setPagePerformance] = useState<PagePerformance[]>([]);
  const [timeRange, setTimeRange] = useState('30d');

  useEffect(() => {
    // Simulate SEO metrics data
    const mockMetrics: SEOMetrics = {
      organicTraffic: 12500,
      keywordRankings: 45,
      pageSpeed: 78,
      mobileUsability: 92,
      coreWebVitals: 85,
      backlinks: 156,
      domainAuthority: 42
    };

    const mockKeywordRankings: KeywordRanking[] = [
      { keyword: 'tassel trim manufacturer', position: 3, change: 2, searchVolume: 1200, difficulty: 45 },
      { keyword: 'luxury curtain tiebacks supplier', position: 5, change: -1, searchVolume: 800, difficulty: 35 },
      { keyword: 'decorative cords and piping', position: 8, change: 3, searchVolume: 1500, difficulty: 55 },
      { keyword: 'custom lace and trimmings for interiors', position: 12, change: 0, searchVolume: 600, difficulty: 65 },
      { keyword: 'beaded fringe trim wholesale', position: 4, change: 1, searchVolume: 400, difficulty: 25 },
      { keyword: 'artisan curtain accessories', position: 7, change: -2, searchVolume: 900, difficulty: 40 },
      { keyword: 'designer textile embellishments', position: 15, change: 1, searchVolume: 300, difficulty: 70 },
      { keyword: 'export quality decorative trims', position: 6, change: 2, searchVolume: 200, difficulty: 30 },
      { keyword: 'premium trimmings for upholstery', position: 9, change: -1, searchVolume: 700, difficulty: 50 },
      { keyword: 'interior décor manufacturers India', position: 2, change: 1, searchVolume: 1000, difficulty: 40 }
    ];

    const mockPagePerformance: PagePerformance[] = [
      {
        page: 'Home',
        loadTime: 2.3,
        coreWebVitals: { lcp: 2.1, fid: 45, cls: 0.05 },
        mobileScore: 85,
        desktopScore: 92
      },
      {
        page: 'Tassels Collection',
        loadTime: 2.8,
        coreWebVitals: { lcp: 2.5, fid: 52, cls: 0.08 },
        mobileScore: 78,
        desktopScore: 88
      },
      {
        page: 'About',
        loadTime: 2.1,
        coreWebVitals: { lcp: 1.9, fid: 38, cls: 0.03 },
        mobileScore: 90,
        desktopScore: 95
      },
      {
        page: 'Custom Services',
        loadTime: 3.2,
        coreWebVitals: { lcp: 2.9, fid: 65, cls: 0.12 },
        mobileScore: 72,
        desktopScore: 82
      }
    ];

    setMetrics(mockMetrics);
    setKeywordRankings(mockKeywordRankings);
    setPagePerformance(mockPagePerformance);
  }, [timeRange]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const getPositionColor = (position: number) => {
    if (position <= 3) return 'text-green-600';
    if (position <= 10) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getChangeColor = (change: number) => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const getChangeIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (change < 0) return <TrendingUp className="h-4 w-4 text-red-600 rotate-180" />;
    return <div className="h-4 w-4" />;
  };

  const trafficData = [
    { month: 'Jan', organic: 8500, direct: 3200, referral: 1800 },
    { month: 'Feb', organic: 9200, direct: 3800, referral: 2100 },
    { month: 'Mar', organic: 10800, direct: 4200, referral: 2400 },
    { month: 'Apr', organic: 12500, direct: 4800, referral: 2800 },
    { month: 'May', organic: 11800, direct: 4500, referral: 2600 },
    { month: 'Jun', organic: 12500, direct: 4800, referral: 2800 }
  ];

  const coreWebVitalsData = [
    { metric: 'LCP', score: 85, target: 90 },
    { metric: 'FID', score: 78, target: 80 },
    { metric: 'CLS', score: 92, target: 90 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">SEO Performance Monitor</h1>
        <p className="text-gray-600">Real-time SEO metrics and performance tracking for Patwa Manufacturer</p>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Organic Traffic</p>
              <p className="text-2xl font-bold text-gray-900">{metrics.organicTraffic.toLocaleString()}</p>
              <p className="text-sm text-green-600">+12.5% vs last month</p>
            </div>
            <Globe className="h-8 w-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Keyword Rankings</p>
              <p className="text-2xl font-bold text-gray-900">{metrics.keywordRankings}</p>
              <p className="text-sm text-green-600">+8 new rankings</p>
            </div>
            <Search className="h-8 w-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Page Speed</p>
              <p className={`text-2xl font-bold ${getScoreColor(metrics.pageSpeed)}`}>{metrics.pageSpeed}</p>
              <p className="text-sm text-yellow-600">Needs improvement</p>
            </div>
            <Zap className="h-8 w-8 text-yellow-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Mobile Usability</p>
              <p className={`text-2xl font-bold ${getScoreColor(metrics.mobileUsability)}`}>{metrics.mobileUsability}</p>
              <p className="text-sm text-green-600">Excellent</p>
            </div>
            <Smartphone className="h-8 w-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Traffic Analytics */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Traffic Analytics</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={trafficData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="organic" fill="#3B82F6" name="Organic" />
            <Bar dataKey="direct" fill="#10B981" name="Direct" />
            <Bar dataKey="referral" fill="#F59E0B" name="Referral" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Keyword Rankings */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Keyword Rankings</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Keyword
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Position
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Change
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Search Volume
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Difficulty
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {keywordRankings.map((keyword, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {keyword.keyword}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${getPositionColor(keyword.position)}`}>
                      #{keyword.position}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getChangeIcon(keyword.change)}
                      <span className={`ml-1 text-sm ${getChangeColor(keyword.change)}`}>
                        {keyword.change > 0 ? `+${keyword.change}` : keyword.change}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {keyword.searchVolume.toLocaleString()}/month
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${keyword.difficulty}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">{keyword.difficulty}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Core Web Vitals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Core Web Vitals</h2>
          <div className="space-y-4">
            {coreWebVitalsData.map((vital, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{vital.metric}</p>
                  <p className="text-xs text-gray-500">Target: {vital.target}</p>
                </div>
                <div className="flex items-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${getScoreBgColor(vital.score)}`}>
                    <span className={`text-lg font-bold ${getScoreColor(vital.score)}`}>
                      {vital.score}
                    </span>
                  </div>
                  {vital.score >= vital.target ? (
                    <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-500 ml-2" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Page Performance</h2>
          <div className="space-y-4">
            {pagePerformance.map((page, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-900">{page.page}</h3>
                  <span className="text-xs text-gray-500">{page.loadTime}s</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500">Mobile Score</p>
                    <p className={`text-sm font-medium ${getScoreColor(page.mobileScore)}`}>
                      {page.mobileScore}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Desktop Score</p>
                    <p className={`text-sm font-medium ${getScoreColor(page.desktopScore)}`}>
                      {page.desktopScore}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SEO Alerts */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">SEO Alerts & Recommendations</h2>
        <div className="space-y-4">
          <div className="flex items-start p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
            <div>
              <h3 className="text-sm font-medium text-yellow-800">Page Speed Optimization Needed</h3>
              <p className="text-sm text-yellow-700 mt-1">
                Several pages are loading slower than recommended. Consider optimizing images and implementing lazy loading.
              </p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-green-50 border border-green-200 rounded-lg">
            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
            <div>
              <h3 className="text-sm font-medium text-green-800">Mobile Usability Excellent</h3>
              <p className="text-sm text-green-700 mt-1">
                Your website performs well on mobile devices with a score of 92/100.
              </p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <Target className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
            <div>
              <h3 className="text-sm font-medium text-blue-800">Keyword Ranking Opportunities</h3>
              <p className="text-sm text-blue-700 mt-1">
                Focus on improving rankings for "decorative cords and piping" and "custom lace and trimmings for interiors".
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOMonitor;
