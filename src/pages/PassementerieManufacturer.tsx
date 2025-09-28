import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Award, Globe, Users, Truck, Shield } from 'lucide-react';

const PassementerieManufacturer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Handcrafted passementerie using finest materials and traditional techniques"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving interior designers and manufacturers worldwide"
    },
    {
      icon: Users,
      title: "Expert Craftsmanship",
      description: "Skilled artisans with decades of experience in passementerie"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick turnaround times for custom orders and bulk shipments"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control ensuring perfect finish on every product"
    },
    {
      icon: Star,
      title: "Custom Solutions",
      description: "Tailored designs to meet specific client requirements"
    }
  ];

  const products = [
    {
      name: "Custom Tassels",
      description: "Handcrafted tassels in various sizes, colors, and materials including silk, cotton, and metallic threads",
      keywords: "custom tassels manufacturer, luxury tassels, handcrafted tassels"
    },
    {
      name: "Decorative Fringes",
      description: "Premium fringes for curtains, upholstery, and decorative applications with intricate patterns",
      keywords: "fringes manufacturer, decorative fringes, curtain fringes"
    },
    {
      name: "Textile Braids",
      description: "High-quality braids for furniture, curtains, and interior design applications",
      keywords: "braids manufacturer, textile braids, decorative braids"
    },
    {
      name: "Passementerie Trimmings",
      description: "Complete range of passementerie including cords, piping, and decorative trimmings",
      keywords: "passementerie manufacturer, decorative trimmings, luxury passementerie"
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Manufacturer of Passementerie, Custom Tassels, Fringes, Braids & Decorative Trimmings | Patwa Manufacturer</title>
        <meta name="description" content="Leading manufacturer of passementerie, custom tassels, fringes, braids & decorative trimmings in India. Premium handcrafted quality for interior designers worldwide. Custom orders available." />
        <meta name="keywords" content="manufacturer of passementerie, custom tassels manufacturer, fringes manufacturer, braids manufacturer, decorative trimmings manufacturer, passementerie supplier, custom tassels supplier, luxury passementerie, handcrafted tassels, decorative fringes, textile braids, curtain trimmings, interior design accessories, passementerie India, tassels India, fringes India, braids India" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/passementerie-manufacturer" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Manufacturer of Passementerie, Custom Tassels, Fringes, Braids & Decorative Trimmings",
            "description": "Leading manufacturer of passementerie, custom tassels, fringes, braids & decorative trimmings in India",
            "url": "https://patwamanufacturer.lovable.app/passementerie-manufacturer",
            "mainEntity": {
              "@type": "ManufacturingBusiness",
              "name": "Patwa Manufacturer",
              "specialty": "Passementerie, Custom Tassels, Fringes, Braids & Decorative Trimmings",
              "description": "Leading manufacturer of passementerie, custom tassels, fringes, braids & decorative trimmings in India",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "India"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9322140480",
                "contactType": "sales"
              }
            }
          }`}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-50 via-white to-amber-50 py-20">
          <div className="container-custom">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial="initial"
              animate="animate"
              variants={staggerChildren}
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6"
                variants={fadeInUp}
              >
                Manufacturer of <span className="text-amber-600">Passementerie</span>, Custom Tassels, Fringes, Braids & Decorative Trimmings
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-700 mb-8 leading-relaxed"
                variants={fadeInUp}
              >
                Leading manufacturer of passementerie, custom tassels, fringes, braids & decorative trimmings in India. 
                Premium handcrafted quality for interior designers worldwide. Custom orders available.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={fadeInUp}
              >
                <a 
                  href="https://wa.me/919322140480?text=Hello! I'm interested in your passementerie products and would like to make an inquiry."
                  className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                >
                  Get Custom Quote
                </a>
                <a 
                  href="/collections/tassels"
                  className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
                >
                  View Products
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Why Choose Patwa Manufacturer for Passementerie?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                As a leading manufacturer of passementerie, custom tassels, fringes, braids & decorative trimmings, 
                we deliver exceptional quality and craftsmanship to interior designers worldwide.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
                  variants={fadeInUp}
                >
                  <feature.icon className="h-12 w-12 text-amber-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Our Passementerie Products
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive range of passementerie including custom tassels, fringes, braids & decorative trimmings 
                manufactured to the highest standards.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              {products.map((product, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  variants={fadeInUp}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="text-sm text-amber-600 font-medium">
                    Keywords: {product.keywords}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
                Leading Manufacturer of Passementerie, Custom Tassels, Fringes, Braids & Decorative Trimmings
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl mb-6">
                  <strong>Patwa Manufacturer</strong> is India's premier manufacturer of passementerie, custom tassels, fringes, braids & decorative trimmings. 
                  With decades of experience in traditional craftsmanship, we deliver exceptional quality products to interior designers, 
                  furniture manufacturers, and luxury home decor brands worldwide.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Manufacturing Expertise</h3>
                <p className="mb-6">
                  As a specialized manufacturer of passementerie, we offer comprehensive solutions including custom tassels, 
                  decorative fringes, textile braids, and luxury trimmings. Our skilled artisans combine traditional techniques 
                  with modern quality standards to create products that meet the highest international standards.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Custom Tassels Manufacturer</h3>
                <p className="mb-6">
                  Our custom tassels are handcrafted using premium materials including silk, cotton, metallic threads, and specialty yarns. 
                  We offer various sizes, colors, and finishes to match your specific design requirements. Each tassel is carefully 
                  crafted to ensure durability and aesthetic appeal.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fringes & Braids Manufacturing</h3>
                <p className="mb-6">
                  Our fringes and braids manufacturing capabilities include decorative fringes for curtains and upholstery, 
                  as well as textile braids for furniture and interior design applications. We use high-quality materials 
                  and precise manufacturing processes to ensure consistent quality and finish.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Global Reach & Quality Assurance</h3>
                <p className="mb-6">
                  As a leading manufacturer of passementerie, we serve clients across India and internationally. Our quality 
                  assurance processes ensure that every product meets our high standards before shipment. We offer competitive 
                  pricing, fast delivery, and excellent customer service to all our clients.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-amber-600">
          <div className="container-custom">
            <motion.div 
              className="text-center text-white"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-serif font-bold mb-6">
                Ready to Order Custom Passementerie?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Contact us today for custom quotes on passementerie, tassels, fringes, braids & decorative trimmings
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/919322140480?text=Hello! I'm interested in your passementerie products and would like to make an inquiry."
                  className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  WhatsApp Us
                </a>
                <a 
                  href="tel:+919322140480"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PassementerieManufacturer;
