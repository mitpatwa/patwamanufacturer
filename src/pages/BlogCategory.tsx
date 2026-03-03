import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, Clock, Tag, ArrowRight, ArrowLeft } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { blogPosts, blogCategories, type BlogCategory as BlogCategoryType } from '../data/blog-posts';

const BlogCategory = () => {
  const { category } = useParams<{ category: string }>();
  
  const categoryInfo = blogCategories.find(
    c => c.slug === category
  );

  if (!categoryInfo) {
    return <Navigate to="/blog" replace />;
  }

  const categoryPosts = blogPosts.filter(
    post => post.category === categoryInfo.name
  );

  const featuredPosts = categoryPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{categoryInfo.name} Articles - Passementerie Blog | Patwa Manufacturer</title>
        <meta name="description" content={categoryInfo.description} />
        <link rel="canonical" href={`https://patwamanufacturer.lovable.app/blog/category/${categoryInfo.slug}`} />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">{categoryInfo.name}</h1>
            <p className="text-xl opacity-90 max-w-2xl">{categoryInfo.description}</p>
            <p className="mt-4 opacity-70">{categoryPosts.length} article{categoryPosts.length !== 1 ? 's' : ''}</p>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-2">
            <Link to="/blog">
              <Button variant="outline" size="sm">All</Button>
            </Link>
            {blogCategories.map((cat) => (
              <Link key={cat.slug} to={`/blog/category/${cat.slug}`}>
                <Button
                  variant={cat.slug === category ? 'default' : 'outline'}
                  size="sm"
                >
                  {cat.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 pb-8">
            <h2 className="text-2xl font-bold mb-6">Featured in {categoryInfo.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <Card className="hover:shadow-xl transition-shadow cursor-pointer h-full">
                    <div className="relative h-56 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                      <Badge className="absolute top-4 left-4 bg-accent">Featured</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All Posts Grid */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <h2 className="text-2xl font-bold mb-6">All {categoryInfo.name} Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    {post.featured && <Badge className="absolute top-4 right-4 bg-accent">Featured</Badge>}
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
                          <Tag className="h-3 w-3 mr-1" />{tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-primary hover:text-primary/80 font-medium flex items-center gap-2">
                      Read More <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {categoryPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No articles in this category yet.</p>
              <Link to="/blog">
                <Button className="mt-4">Browse All Articles</Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogCategory;
