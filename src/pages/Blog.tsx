import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, Search, Filter, TrendingUp, Clock, User, Tag } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featuredImage: string;
  slug: string;
  targetKeywords: string[];
  status: 'published' | 'draft' | 'scheduled';
  seoScore: number;
  views: number;
  shares: number;
}

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  // Sample blog posts based on your content calendar
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Ultimate Guide: Tassel Trimmings for Interiors',
      excerpt: 'Discover the art of using tassel trimmings to elevate your interior design projects. From classic elegance to modern sophistication.',
      content: 'Full blog content here...',
      author: 'Patwa Team',
      publishDate: '2025-01-28',
      readTime: '8 min read',
      category: 'Design Guides',
      tags: ['tassel trims', 'decorative tassels', 'interior design'],
      featuredImage: '/lovable-uploads/hero-1-trimmings.png',
      slug: 'ultimate-guide-tassel-trimmings-interiors',
      targetKeywords: ['tassel trims', 'decorative tassels'],
      status: 'published',
      seoScore: 85,
      views: 1250,
      shares: 45
    },
    {
      id: '2',
      title: 'A History of Tiebacks – Timeless Utility & Style',
      excerpt: 'Explore the rich history of curtain tiebacks from ancient times to modern design trends.',
      content: 'Full blog content here...',
      author: 'Patwa Team',
      publishDate: '2025-01-28',
      readTime: '6 min read',
      category: 'History & Heritage',
      tags: ['curtain tiebacks', 'tieback history', 'window treatments'],
      featuredImage: '/lovable-uploads/hero-2-textiles.png',
      slug: 'history-tiebacks-timeless-utility-style',
      targetKeywords: ['curtain tiebacks', 'tieback history'],
      status: 'published',
      seoScore: 78,
      views: 890,
      shares: 32
    },
    {
      id: '3',
      title: 'Lace Trends 2025: Modern & Classic Combinations',
      excerpt: 'Stay ahead with the latest lace trends for 2025. Discover how to blend modern and classic styles.',
      content: 'Full blog content here...',
      author: 'Patwa Team',
      publishDate: '2025-02-04',
      readTime: '7 min read',
      category: 'Trends',
      tags: ['lace trims', 'lace trends', 'textile trims'],
      featuredImage: '/lovable-uploads/hero-3-craftsmanship.png',
      slug: 'lace-trends-2025-modern-classic-combinations',
      targetKeywords: ['lace trims', 'lace trends', 'textile trims'],
      status: 'scheduled',
      seoScore: 82,
      views: 0,
      shares: 0
    },
    {
      id: '4',
      title: 'How to Choose the Perfect Cord for Upholstery',
      excerpt: 'Master the art of selecting the right decorative cords for your upholstery projects.',
      content: 'Full blog content here...',
      author: 'Patwa Team',
      publishDate: '2025-02-04',
      readTime: '9 min read',
      category: 'How-To Guides',
      tags: ['upholstery cords', 'decorative cords', 'upholstery guide'],
      featuredImage: '/lovable-uploads/hero-1-trimmings.png',
      slug: 'choose-perfect-cord-upholstery',
      targetKeywords: ['upholstery cords', 'decorative cords'],
      status: 'scheduled',
      seoScore: 88,
      views: 0,
      shares: 0
    }
  ];

  const categories = ['all', 'Design Guides', 'History & Heritage', 'Trends', 'How-To Guides', 'Case Studies', 'Industry News'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      case 'oldest':
        return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
      case 'popular':
        return b.views - a.views;
      case 'seo':
        return b.seoScore - a.seoScore;
      default:
        return 0;
    }
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSEOScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Blog - Interior Design Trimmings & Passementerie Insights | Patwa Manufacturer</title>
        <meta name="description" content="Expert insights on interior design trimmings, passementerie trends, and decorative textiles. Learn from industry professionals and discover the latest in tassels, fringes, and braids." />
        <meta name="keywords" content="interior design blog, trimmings blog, passementerie insights, decorative textiles blog, tassel guides, curtain tiebacks, lace trends, upholstery cords" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/blog" />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Blog Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Interior Design Trimmings Blog</h1>
              <p className="text-xl text-purple-100 mb-8">
                Expert insights, trends, and guides for interior designers and decorative textile enthusiasts
              </p>
              
              {/* Blog Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <TrendingUp className="h-8 w-8 text-purple-300 mx-auto mb-2" />
                  <div className="text-2xl font-bold">24</div>
                  <div className="text-sm text-purple-200">Articles Published</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <User className="h-8 w-8 text-green-300 mx-auto mb-2" />
                  <div className="text-2xl font-bold">2.1K</div>
                  <div className="text-sm text-purple-200">Monthly Readers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Tag className="h-8 w-8 text-yellow-300 mx-auto mb-2" />
                  <div className="text-2xl font-bold">45</div>
                  <div className="text-sm text-purple-200">Target Keywords</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Clock className="h-8 w-8 text-blue-300 mx-auto mb-2" />
                  <div className="text-2xl font-bold">7</div>
                  <div className="text-sm text-purple-200">Min Avg Read</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white border-b border-gray-200 py-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-gray-500" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="popular">Most Popular</option>
                  <option value="seo">Best SEO Score</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(post.status)}`}>
                      {post.status}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium ${getSEOScoreColor(post.seoScore)}`}>
                        SEO: {post.seoScore}
                      </span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{post.views} views</span>
                      <span>{post.shares} shares</span>
                    </div>
                    <a
                      href={`/blog/${post.slug}`}
                      className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Content Calendar Preview */}
        <div className="bg-white border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">90-Day Content Calendar</h2>
              <p className="text-gray-600">Strategic content planning for maximum SEO impact and audience engagement</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Month 1: Foundation</h3>
                <ul className="text-sm text-blue-800 space-y-2">
                  <li>• Ultimate Guide to Tassel Trimmings</li>
                  <li>• History of Tiebacks</li>
                  <li>• Trending Lace Patterns 2025</li>
                  <li>• Choosing Right Cord for Upholstery</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Month 2: Engagement</h3>
                <ul className="text-sm text-green-800 space-y-2">
                  <li>• Metallic Trimmings Trends</li>
                  <li>• FAQ for Designers</li>
                  <li>• Quality Hallmarks of Premium Lace</li>
                  <li>• DIY Home Decor Projects</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">Month 3: Authority</h3>
                <ul className="text-sm text-purple-800 space-y-2">
                  <li>• Client Showcase Projects</li>
                  <li>• Top Trimming Colors 2025</li>
                  <li>• Ordering Mistakes & Solutions</li>
                  <li>• Trimming Buyer's Guide 2025</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
