
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Collections from "../components/Collections";
import ProductShowcase from "../components/ProductShowcase";
import Story from "../components/Story";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


import CustomizationHighlight from "../components/CustomizationHighlight";
import WhatsAppFloat from "../components/WhatsAppFloat";
import ScrollToTop from "../components/ScrollToTop";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import InteractiveSearch from "../components/InteractiveSearch";
import StatsSection from "../components/StatsSection";
import ParallaxSection from "../components/ParallaxSection";
import FloatingOrbs from "../components/FloatingOrbs";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Floating background orbs */}
      <FloatingOrbs />
      
      <Helmet>
        <title>Patwa Manufacturer - Leading Passementerie, Tassel, Fringe & Braid Manufacturer India</title>
        <meta name="description" content="Premier manufacturer & supplier of luxury passementerie, custom tassels, decorative fringes, braids & trimmings. Direct from manufacturer in India. Wholesale & custom orders. MOQ flexible. Export worldwide." />
        <meta name="keywords" content="passementerie manufacturer, tassel manufacturer India, fringe manufacturer, braid manufacturer, decorative trim manufacturer, curtain tassel supplier, wholesale passementerie, custom tassel manufacturer, upholstery trim manufacturer, bulk tassel supplier, passementerie factory India, decorative trimmings manufacturer, curtain accessories manufacturer, luxury trim manufacturer, handcrafted tassel manufacturer, custom fringe manufacturer, wholesale decorative trims, passementerie supplier India, tassel factory, trim manufacturer exporter" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://patwamanufacturer.lovable.app/" />
        <meta property="og:title" content="Patwa Manufacturer - Leading Passementerie & Tassel Manufacturer India" />
        <meta property="og:description" content="Direct manufacturer of luxury passementerie, custom tassels, fringes & decorative trims. Wholesale & custom orders. Export worldwide." />
        <meta property="og:image" content="https://patwamanufacturer.lovable.app/lovable-uploads/hero-1-new.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://patwamanufacturer.lovable.app/" />
        <meta name="twitter:title" content="Patwa Manufacturer - Passementerie & Tassel Manufacturer India" />
        <meta name="twitter:description" content="Direct manufacturer of luxury passementerie, custom tassels, fringes & decorative trims." />
        <meta name="twitter:image" content="https://patwamanufacturer.lovable.app/lovable-uploads/hero-1-new.png" />
        
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Patwa Manufacturer",
            "alternateName": ["Patwa Passementerie", "Patwa Trims & Tassels"],
            "url": "https://patwamanufacturer.lovable.app",
            "logo": "https://patwamanufacturer.lovable.app/images/patwa-logo.png",
            "description": "Leading manufacturer of luxury passementerie, custom tassels, fringes, braids & decorative trimmings in India. Direct factory supplier with custom manufacturing capabilities.",
            "foundingDate": "1990",
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+91-9322140480",
              "contactType": "Sales",
              "availableLanguage": ["English", "Hindi"],
              "areaServed": ["Worldwide", "US", "UK", "EU", "Asia", "Middle East"],
              "contactOption": "TollFree"
            }],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "India",
              "addressRegion": "India"
            },
            "sameAs": [
              "https://patwamanufacturer.lovable.app/ai-access",
              "https://patwamanufacturer.lovable.app/passementerie-manufacturer"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127",
              "bestRating": "5",
              "worstRating": "1"
            },
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "value": "50"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Passementerie Products",
              "itemListElement": [
                {
                  "@type": "OfferCatalog",
                  "name": "Tassels",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "Custom Decorative Tassels",
                        "description": "Handcrafted luxury tassels for curtains, upholstery, and home decor"
                      }
                    }
                  ]
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Fringes",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "Decorative Fringes",
                        "description": "Premium fringe trim for furniture, curtains, and textiles"
                      }
                    }
                  ]
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Braids",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "Upholstery Braids",
                        "description": "Custom woven braids and gimp for upholstery and trim"
                      }
                    }
                  ]
                }
              ]
            },
            "makesOffer": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Custom Passementerie Manufacturing",
                  "description": "Bespoke design and manufacturing of luxury decorative trims, tassels, fringes, and braids",
                  "provider": {
                    "@type": "Organization",
                    "name": "Patwa Manufacturer"
                  },
                  "serviceType": "Manufacturing",
                  "areaServed": "Worldwide"
                },
                "availability": "https://schema.org/InStock",
                "acceptedPaymentMethod": ["PaymentCard", "BankTransfer", "Invoice"]
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Wholesale Passementerie Supply",
                  "description": "Bulk wholesale supply of decorative trims and passementerie products",
                  "provider": {
                    "@type": "Organization",
                    "name": "Patwa Manufacturer"
                  }
                }
              }
            ]
          }`}
        </script>
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is passementerie and what products do you manufacture?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Passementerie refers to decorative trimmings used in interior design. We manufacture luxury tassels, fringes, braids, cords, tie-backs, and decorative embellishments for curtains, upholstery, furniture, and home accessories. All our products are handcrafted with premium materials."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer custom manufacturing and what is the minimum order quantity?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we specialize in custom manufacturing with flexible MOQ (Minimum Order Quantity). We can create bespoke designs in custom colors, materials, and sizes to match your specific project requirements. Contact us to discuss your custom needs."
                }
              },
              {
                "@type": "Question",
                "name": "What countries do you export to and what is the lead time?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We export worldwide including USA, UK, Europe, Middle East, and Asia. Standard lead time is 4-6 weeks for stock items and 6-8 weeks for custom orders. Express manufacturing available for urgent projects."
                }
              },
              {
                "@type": "Question",
                "name": "Are you a direct manufacturer or distributor?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We are a direct manufacturer with our own production facility in India. This allows us to offer competitive wholesale pricing, quality control, and custom manufacturing capabilities without intermediaries."
                }
              },
              {
                "@type": "Question",
                "name": "Can I order samples before placing a bulk order?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide sample ordering services. You can order physical samples to evaluate quality, colors, and design before committing to larger orders. Visit our Order Samples page or contact us directly."
                }
              }
            ]
          }`}
        </script>
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://patwamanufacturer.lovable.app/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Collections",
                "item": "https://patwamanufacturer.lovable.app/#collections"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "About",
                "item": "https://patwamanufacturer.lovable.app/about"
              }
            ]
          }`}
        </script>
      </Helmet>
      <Header />
      <main role="main" className="relative z-10">
        <article itemScope itemType="https://schema.org/WebPage">
          <meta itemProp="name" content="Patwa Manufacturer - Passementerie Manufacturer India" />
          <meta itemProp="description" content="Leading manufacturer of luxury passementerie, custom tassels, fringes, braids & decorative trimmings" />
        <Hero />
        <Collections />
        <ProductShowcase />
        
        {/* Enhanced Stats Section */}
        <ParallaxSection speed={0.3}>
          <StatsSection />
        </ParallaxSection>
        
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <CustomizationHighlight />
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Story />
        </motion.div>
        <TestimonialsCarousel />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Newsletter />
        </motion.div>
        </article>
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
      <InteractiveSearch />
    </div>
  );
};

export default Index;
