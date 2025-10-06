import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Bot, Database, FileJson, Code, CheckCircle } from 'lucide-react';

const AIAccess = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI Access & Machine-Readable Product Catalog | Patwa Manufacturer</title>
        <meta name="description" content="AI-accessible product catalog and machine-readable data for Patwa Manufacturer's luxury passementerie products. Structured data for AI agents, chatbots, and automated systems." />
        <meta name="keywords" content="AI access, machine-readable catalog, structured data, API, product catalog, AI agents, chatbot integration" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/ai-access" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "AI Access & Product Catalog",
            "description": "Machine-readable product catalog for AI agents and automated systems",
            "url": "https://patwamanufacturer.lovable.app/ai-access",
            "mainEntity": {
              "@type": "DataCatalog",
              "name": "Patwa Manufacturer Product Catalog",
              "description": "Comprehensive machine-readable catalog of luxury passementerie products"
            }
          }`}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Bot className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI-Accessible Product Catalog
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Our complete product catalog is available in machine-readable format for AI agents, chatbots, and automated systems.
              </p>
            </div>
          </div>
        </section>

        {/* Data Access Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Access Our Data</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border rounded-lg p-8">
                  <FileJson className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Product Catalog JSON</h3>
                  <p className="text-muted-foreground mb-4">
                    Complete structured catalog with all products, services, and business information.
                  </p>
                  <a 
                    href="/ai-product-catalog.json" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    View Catalog →
                  </a>
                </div>

                <div className="bg-card border rounded-lg p-8">
                  <Database className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Structured Data</h3>
                  <p className="text-muted-foreground mb-4">
                    Schema.org compliant structured data embedded across all pages.
                  </p>
                  <a 
                    href="/sitemap.xml" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    View Sitemap →
                  </a>
                </div>
              </div>

              {/* Features */}
              <div className="bg-card border rounded-lg p-8 mb-12">
                <h3 className="text-2xl font-semibold mb-6">What's Included</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Complete Product Categories</p>
                      <p className="text-sm text-muted-foreground">All product lines with descriptions and features</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Services & Capabilities</p>
                      <p className="text-sm text-muted-foreground">Custom services and trade programs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Business Information</p>
                      <p className="text-sm text-muted-foreground">Contact details and capabilities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Customization Options</p>
                      <p className="text-sm text-muted-foreground">Custom manufacturing details</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* For Developers */}
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8">
                <Code className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">For Developers & AI Systems</h3>
                <p className="text-muted-foreground mb-6">
                  Our catalog uses JSON-LD with Schema.org vocabulary for maximum compatibility with AI agents and automated systems.
                </p>
                <div className="bg-background/50 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                  <div className="text-muted-foreground mb-2">// Example: Fetch product catalog</div>
                  <code className="text-foreground">
                    fetch('https://patwamanufacturer.lovable.app/ai-product-catalog.json')<br/>
                    &nbsp;&nbsp;.then(res =&gt; res.json())<br/>
                    &nbsp;&nbsp;.then(data =&gt; console.log(data.products));
                  </code>
                </div>
              </div>

              {/* AI Agents Supported */}
              <div className="mt-12 text-center">
                <h3 className="text-xl font-semibold mb-4">Accessible to All Major AI Agents</h3>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-8">
                  <span className="px-4 py-2 bg-card border rounded-full">ChatGPT</span>
                  <span className="px-4 py-2 bg-card border rounded-full">Claude</span>
                  <span className="px-4 py-2 bg-card border rounded-full">Gemini</span>
                  <span className="px-4 py-2 bg-card border rounded-full">Perplexity</span>
                  <span className="px-4 py-2 bg-card border rounded-full">You.com</span>
                  <span className="px-4 py-2 bg-card border rounded-full">Bing AI</span>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  When AI agents access our catalog, they can help potential customers understand our products, 
                  capabilities, and guide them to the right contact method based on their specific needs.
                </p>
              </div>

              {/* Lead Generation Info */}
              <div className="mt-12 bg-primary/5 rounded-lg p-8 border border-primary/20">
                <h3 className="text-2xl font-semibold mb-4 text-center">AI-Powered Lead Generation</h3>
                <p className="text-muted-foreground text-center mb-6">
                  Our AI-accessible catalog is optimized to convert inquiries into qualified leads by providing 
                  comprehensive product information and clear paths to contact our team.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <p className="text-sm text-muted-foreground">AI agents can access product info anytime</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <p className="text-sm text-muted-foreground">Complete product catalog coverage</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">Direct</div>
                    <p className="text-sm text-muted-foreground">Clear paths to WhatsApp & inquiry form</p>
                  </div>
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

export default AIAccess;
