import React from 'react';
import { Calendar, Clock, User, Tag, Share2, Bookmark, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostTemplateProps {
  post: {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    author: string;
    publishDate: string;
    readTime: string;
    category: string;
    tags: string[];
    featuredImage: string;
    targetKeywords: string[];
    seoScore: number;
    views: number;
    shares: number;
  };
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({ post }) => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Back to Blog */}
      <div className="mb-6">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-8">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
            {post.category}
          </span>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{new Date(post.publishDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{post.views} views</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Article Meta */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Target Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {post.targetKeywords.map((keyword, index) => (
                  <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">SEO Performance</h3>
              <div className="flex items-center gap-4">
                <span className={`text-lg font-bold ${
                  post.seoScore >= 80 ? 'text-green-600' : 
                  post.seoScore >= 60 ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  SEO: {post.seoScore}
                </span>
                <span className="text-sm text-gray-600">{post.shares} shares</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <div className="text-xl text-gray-600 mb-8 leading-relaxed">
          {post.excerpt}
        </div>
        
        {/* This would be replaced with actual blog content */}
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Benefits of Quality Trimmings</h2>
          <p className="text-gray-700 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Professional Tips</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Choose trimmings that complement your existing color scheme</li>
            <li>Consider the weight and drape of your fabric when selecting trims</li>
            <li>Always order samples before making large purchases</li>
            <li>Work with experienced installers for best results</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Trending Styles for 2025</h2>
          <p className="text-gray-700 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-blue-800 font-medium">
              Pro Tip: When selecting decorative trimmings, always consider the overall design aesthetic and ensure the trim enhances rather than overwhelms your space.
            </p>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <Tag className="h-5 w-5 text-gray-500" />
          <span className="font-medium text-gray-900">Tags:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Social Sharing */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-medium text-gray-900">Share this article:</span>
            <div className="flex gap-2">
              <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Share2 className="h-4 w-4" />
              </button>
              <button className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <Bookmark className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="text-sm text-gray-600">
            {post.shares} shares • {post.views} views
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">How to Choose the Perfect Cord for Upholstery</h3>
            <p className="text-gray-600 text-sm mb-3">Master the art of selecting the right decorative cords for your upholstery projects.</p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Clock className="h-3 w-3" />
              <span>9 min read</span>
              <span>•</span>
              <span>Feb 4, 2025</span>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Lace Trends 2025: Modern & Classic Combinations</h3>
            <p className="text-gray-600 text-sm mb-3">Stay ahead with the latest lace trends for 2025. Discover how to blend modern and classic styles.</p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Clock className="h-3 w-3" />
              <span>7 min read</span>
              <span>•</span>
              <span>Feb 4, 2025</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostTemplate;
