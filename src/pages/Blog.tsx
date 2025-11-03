import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Search, Calendar, Clock, Tag, TrendingUp, ArrowRight } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { blogPosts } from '../data/blog-posts';
import ReviewSubmissionForm from '../components/ReviewSubmissionForm';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ['All', 'Guides', 'Trends', 'Product Guides', 'Buying Guides', 'Sustainability'];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = !selectedCategory || selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Blog - Interior Design Trimmings & Passementerie Insights | Patwa Manufacturer</title>
        <meta name="description" content="Expert insights on interior design trimmings, passementerie trends, and decorative textiles. Learn from industry professionals and discover the latest in tassels, fringes, and braids." />
        <meta name="keywords" content="interior design blog, trimmings blog, passementerie insights, decorative textiles blog, tassel guides, curtain tiebacks, lace trends, upholstery cords" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/blog" />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Design Inspiration & Insights</h1>
            <p className="text-xl opacity-90 max-w-2xl mb-8">
              Expert tips, trends, and guides for luxury passementerie and interior design
            </p>
            
            {/* Featured Posts Slider */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {featuredPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <Card className="hover:shadow-xl transition-shadow cursor-pointer h-full bg-card/90 backdrop-blur">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-accent">Featured</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-card rounded-lg shadow-sm border p-6 mb-8">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles by title, topic, or keyword..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category || (!selectedCategory && category === 'All') ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      {post.featured && (
                        <Badge className="absolute top-4 right-4 bg-accent">Featured</Badge>
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span>•</span>
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <CardTitle className="line-clamp-2 hover:text-primary transition-colors">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="secondary">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="text-primary hover:text-primary/80 font-medium flex items-center gap-2">
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg">No articles found matching your search.</p>
              </div>
            )}
          </div>

          {/* Newsletter & Reviews */}
          <div className="mt-16">
            <ReviewSubmissionForm />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
