
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";

const SiteAnalysis = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20 md:py-28">
          <div className="container-custom">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-8 text-center">
                Website <span className="text-gold-600">Analysis</span>
              </h1>
              
              <div className="max-w-3xl mx-auto mb-16 text-center">
                <p className="text-lg text-muted-foreground">
                  A comprehensive analysis of the website performance, design, and business aspects 
                  to identify strengths and areas for improvement.
                </p>
              </div>
            </motion.div>

            <Tabs defaultValue="technical" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="technical">Technical Assessment</TabsTrigger>
                <TabsTrigger value="design">Design & UX</TabsTrigger>
                <TabsTrigger value="business">Business Analysis</TabsTrigger>
              </TabsList>

              {/* Technical Assessment Tab */}
              <TabsContent value="technical">
                <div className="space-y-8">
                  <div className="bg-card p-8 rounded-lg border shadow-sm">
                    <h2 className="text-2xl font-serif font-medium mb-6">Performance Metrics</h2>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Page Load Speed</span>
                          <span>72/100</span>
                        </div>
                        <Progress value={72} className="h-2" />
                        <p className="text-sm text-muted-foreground">Image optimization needed for faster loading</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Mobile Responsiveness</span>
                          <span>85/100</span>
                        </div>
                        <Progress value={85} className="h-2" />
                        <p className="text-sm text-muted-foreground">Layout works well on mobile but some tap targets are too small</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Code Quality</span>
                          <span>90/100</span>
                        </div>
                        <Progress value={90} className="h-2" />
                        <p className="text-sm text-muted-foreground">Well structured with modern React patterns</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card p-8 rounded-lg border shadow-sm">
                    <h2 className="text-2xl font-serif font-medium mb-6">SEO Status</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">On-Page SEO</h3>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span>Proper heading structure</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span>Responsive design</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <XCircle className="h-5 w-5 text-red-500" />
                            <span>Missing meta descriptions</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <AlertCircle className="h-5 w-5 text-amber-500" />
                            <span>Some images missing alt text</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Technical SEO</h3>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span>Fast load times on desktop</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <AlertCircle className="h-5 w-5 text-amber-500" />
                            <span>Mobile speed needs improvement</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <XCircle className="h-5 w-5 text-red-500" />
                            <span>Missing schema markup</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <XCircle className="h-5 w-5 text-red-500" />
                            <span>No XML sitemap</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card p-8 rounded-lg border shadow-sm">
                    <h2 className="text-2xl font-serif font-medium mb-6">Accessibility</h2>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">WCAG Compliance</span>
                        <span>65/100</span>
                      </div>
                      <Progress value={65} className="h-2" />
                      <p className="text-sm text-muted-foreground">Several areas need improvement for better accessibility</p>
                    </div>
                    
                    <div className="mt-6 space-y-3">
                      <h3 className="text-lg font-medium">Key Issues:</h3>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Some color contrast issues in text elements</li>
                        <li>Missing alt text on decorative images</li>
                        <li>Form inputs lack proper labels and ARIA attributes</li>
                        <li>Keyboard navigation needs improvement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Design & UX Tab */}
              <TabsContent value="design">
                <div className="space-y-8">
                  <div className="bg-card p-8 rounded-lg border shadow-sm">
                    <h2 className="text-2xl font-serif font-medium mb-6">Visual Design Assessment</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Strengths</h3>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                            <span>Clean, elegant aesthetic that aligns with luxury brand positioning</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                            <span>Consistent use of typography across the site</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                            <span>High-quality product photography</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                            <span>Subtle animations that enhance the user experience</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-4">Improvement Areas</h3>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <XCircle className="h-5 w-5 text-red-500 shrink-0" />
                            <span>Mobile layout needs refinement for smaller screens</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <XCircle className="h-5 w-5 text-red-500 shrink-0" />
                            <span>Inconsistent spacing in some sections</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <XCircle className="h-5 w-5 text-red-500 shrink-0" />
                            <span>Call-to-action buttons could be more prominent</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <XCircle className="h-5 w-5 text-red-500 shrink-0" />
                            <span>Product category differentiation needs visual hierarchy</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card p-8 rounded-lg border shadow-sm">
                    <h2 className="text-2xl font-serif font-medium mb-6">User Experience Flow</h2>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Navigation Clarity</span>
                          <span>75/100</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">User Journey Coherence</span>
                          <span>80/100</span>
                        </div>
                        <Progress value={80} className="h-2" />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Mobile Usability</span>
                          <span>65/100</span>
                        </div>
                        <Progress value={65} className="h-2" />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Call-to-Action Effectiveness</span>
                          <span>60/100</span>
                        </div>
                        <Progress value={60} className="h-2" />
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-lg font-medium mb-4">Key Recommendations:</h3>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Streamline the product inquiry process</li>
                        <li>Add clearer visual indicators for current page in navigation</li>
                        <li>Improve filter functionality in collection pages</li>
                        <li>Add progress indicators for multi-step processes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Business Analysis Tab */}
              <TabsContent value="business">
                <div className="space-y-8">
                  <div className="bg-card p-8 rounded-lg border shadow-sm">
                    <h2 className="text-2xl font-serif font-medium mb-6">Business Positioning</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-3">Value Proposition Clarity</h3>
                        <div className="space-y-2">
                          <Progress value={70} className="h-2" />
                          <p className="text-sm text-muted-foreground">The luxury positioning is clear, but unique selling points need more emphasis</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-3">Competitive Differentiation</h3>
                        <div className="space-y-2">
                          <Progress value={65} className="h-2" />
                          <p className="text-sm text-muted-foreground">More explicit comparison with industry alternatives needed</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-3">Target Audience Alignment</h3>
                        <div className="space-y-2">
                          <Progress value={80} className="h-2" />
                          <p className="text-sm text-muted-foreground">Visual design and messaging well-aligned with luxury interior market</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card p-8 rounded-lg border shadow-sm">
                    <h2 className="text-2xl font-serif font-medium mb-6">Business Information Completeness</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Present Information</h3>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span>Basic contact information</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span>Product categories</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span>Company story and background</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span>Sustainability information</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-4">Missing Information</h3>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <XCircle className="h-5 w-5 text-red-500" />
                            <span>Detailed pricing information</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <XCircle className="h-5 w-5 text-red-500" />
                            <span>Client testimonials and case studies</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <XCircle className="h-5 w-5 text-red-500" />
                            <span>Lead time and production process details</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <XCircle className="h-5 w-5 text-red-500" />
                            <span>Industry certifications and awards</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card p-8 rounded-lg border shadow-sm">
                    <h2 className="text-2xl font-serif font-medium mb-6">Lead Generation Effectiveness</h2>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Contact Form Accessibility</span>
                          <span>85/100</span>
                        </div>
                        <Progress value={85} className="h-2" />
                        <p className="text-sm text-muted-foreground">Forms are well-designed but could be more strategically placed</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Call-to-Action Clarity</span>
                          <span>70/100</span>
                        </div>
                        <Progress value={70} className="h-2" />
                        <p className="text-sm text-muted-foreground">Main CTAs are clear but secondary conversion paths need improvement</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Trust Signal Presence</span>
                          <span>55/100</span>
                        </div>
                        <Progress value={55} className="h-2" />
                        <p className="text-sm text-muted-foreground">Lacking client testimonials and trust indicators</p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-lg font-medium mb-4">Priority Improvements:</h3>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Add client testimonials and case studies</li>
                        <li>Include industry certifications and credentials</li>
                        <li>Add more specific CTAs throughout the product showcase sections</li>
                        <li>Implement lead magnets for newsletter signup</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-16 max-w-5xl mx-auto">
              <Separator className="my-8" />

              <h2 className="text-3xl font-serif font-medium mb-6">Implementation Plan</h2>
              
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg border shadow-sm">
                  <h3 className="text-xl font-medium mb-4">Phase 1: Technical Optimization</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Optimize all images for faster loading</li>
                    <li>Implement proper meta tags and schema markup</li>
                    <li>Add alt text to all images</li>
                    <li>Fix accessibility issues (color contrast, ARIA attributes)</li>
                    <li>Implement responsive design improvements</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-lg border shadow-sm">
                  <h3 className="text-xl font-medium mb-4">Phase 2: UX and Design Enhancements</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Improve call-to-action prominence</li>
                    <li>Enhance mobile navigation experience</li>
                    <li>Refine visual hierarchy in product listings</li>
                    <li>Add micro-interactions for improved engagement</li>
                    <li>Implement consistent spacing and alignment</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-lg border shadow-sm">
                  <h3 className="text-xl font-medium mb-4">Phase 3: Business Content Enhancement</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Add client testimonials and case studies</li>
                    <li>Create detailed service/product information</li>
                    <li>Implement industry certifications display</li>
                    <li>Add trust signals throughout conversion paths</li>
                    <li>Enhance lead generation forms with better user flow</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SiteAnalysis;
