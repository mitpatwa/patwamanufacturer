import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle, Star, Users, Award, Truck, Shield, Clock, Mail, Phone, MapPin } from 'lucide-react';

const TradeProgram = () => {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    website: '',
    yearsInBusiness: '',
    annualVolume: '',
    specialties: '',
    references: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Trade Program Application:', formData);
    alert('Thank you for your application! We will review it and contact you within 2-3 business days.');
    setIsApplicationOpen(false);
  };

  const benefits = [
    {
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      title: "Exclusive Trade Pricing",
      description: "Access to special trade rates with discounts up to 40% off retail prices for qualified professionals."
    },
    {
      icon: <Truck className="h-8 w-8 text-blue-500" />,
      title: "Priority Shipping",
      description: "Expedited processing and shipping for trade orders with dedicated account management support."
    },
    {
      icon: <Award className="h-8 w-8 text-green-500" />,
      title: "Custom Manufacturing",
      description: "Bespoke trimmings and passementerie designed specifically for your projects and client needs."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Designer Network",
      description: "Connect with our network of interior designers, architects, and trade professionals."
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: "Quality Guarantee",
      description: "Premium quality assurance with comprehensive warranties on all trade orders."
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "Dedicated Support",
      description: "Direct access to our trade specialists for technical support and project consultation."
    }
  ];

  const requirements = [
    {
      title: "Business Credentials",
      items: [
        "Valid business license or registration",
        "Tax identification number",
        "Business insurance certificate",
        "Minimum 2 years in business"
      ]
    },
    {
      title: "Trade Qualifications",
      items: [
        "Interior design certification or license",
        "Architecture license (for architects)",
        "Contractor license (for contractors)",
        "Trade association membership"
      ]
    },
    {
      title: "Volume Requirements",
      items: [
        "Minimum annual purchase volume of $10,000",
        "Regular project activity",
        "Professional references",
        "Portfolio of completed projects"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Interior Designer",
      company: "Chen Design Studio",
      content: "The trade program has been invaluable for our high-end residential projects. The custom trimmings and exclusive pricing help us deliver exceptional results to our clients.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      title: "Architect",
      company: "Rodriguez & Associates",
      content: "Patwa's trade program offers the perfect balance of quality, customization, and value. Their team understands the needs of design professionals.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      title: "Design Director",
      company: "Thompson Interiors",
      content: "The dedicated support and custom manufacturing capabilities have elevated our design offerings. Highly recommended for serious design professionals.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Trade Program - Exclusive Benefits for Design Professionals | Patwa Manufacturer</title>
        <meta name="description" content="Join our exclusive trade program for interior designers, architects, and contractors. Get special pricing, priority shipping, custom manufacturing, and dedicated support for your projects." />
        <meta name="keywords" content="trade program, interior designer discounts, trade pricing, custom trimmings, passementerie trade, design professional benefits, trade account, wholesale passementerie, decorator discount program" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/trade-program" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://patwamanufacturer.lovable.app/trade-program" />
        <meta property="og:title" content="Exclusive Trade Program for Design Professionals" />
        <meta property="og:description" content="Up to 40% trade discounts, priority shipping, custom manufacturing for interior designers and architects." />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://patwamanufacturer.lovable.app/trade-program" />
        <meta name="twitter:title" content="Exclusive Trade Program for Design Professionals" />
        <meta name="twitter:description" content="Up to 40% trade discounts, priority shipping, custom manufacturing." />
        
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Patwa Manufacturer Trade Program",
            "description": "Exclusive trade program offering special pricing, custom manufacturing, and dedicated support for interior designers, architects, and contractors",
            "url": "https://patwamanufacturer.lovable.app/trade-program",
            "provider": {
              "@type": "Organization",
              "name": "Patwa Manufacturer"
            },
            "areaServed": "Worldwide",
            "audience": {
              "@type": "Audience",
              "audienceType": ["Interior Designers", "Architects", "Contractors", "Decorators"]
            },
            "offers": {
              "@type": "Offer",
              "description": "Trade pricing up to 40% off, priority shipping, custom manufacturing, dedicated support",
              "eligibleCustomerType": "Business"
            }
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
                "name": "Trade Program",
                "item": "https://patwamanufacturer.lovable.app/trade-program"
              }
            ]
          }`}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Exclusive Trade Program</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Join our exclusive network of design professionals and unlock special pricing, 
                custom manufacturing, and dedicated support for your projects.
              </p>
              <button
                onClick={() => setIsApplicationOpen(true)}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
              >
                Apply for Trade Program
              </button>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Exclusive Benefits</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unlock special privileges designed specifically for design professionals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Requirements Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Requirements</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                To ensure the highest quality service for our trade partners
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {requirements.map((requirement, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">{requirement.title}</h3>
                  <ul className="space-y-3">
                    {requirement.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Trade Partners Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from design professionals who have experienced the benefits of our trade program
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.title}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Join Our Trade Program?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Contact our trade specialists to learn more about the program and start your application
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="flex items-center justify-center">
                  <Mail className="h-6 w-6 mr-3" />
                  <span>trade@patwamanufacturer.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="h-6 w-6 mr-3" />
                  <span>+91-9322140480</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="h-6 w-6 mr-3" />
                  <span>India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Application Modal */}
      {isApplicationOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Trade Program Application</h3>
                <button
                  onClick={() => setIsApplicationOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Type *
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Business Type</option>
                      <option value="interior-designer">Interior Designer</option>
                      <option value="architect">Architect</option>
                      <option value="contractor">Contractor</option>
                      <option value="decorator">Decorator</option>
                      <option value="retailer">Retailer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Years in Business *
                    </label>
                    <select
                      name="yearsInBusiness"
                      value={formData.yearsInBusiness}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Years</option>
                      <option value="1-2">1-2 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Annual Purchase Volume *
                    </label>
                    <select
                      name="annualVolume"
                      value={formData.annualVolume}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Volume</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specialties & Services
                  </label>
                  <textarea
                    name="specialties"
                    value={formData.specialties}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your design specialties and services..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Professional References
                  </label>
                  <textarea
                    name="references"
                    value={formData.references}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="List 2-3 professional references with contact information..."
                  />
                </div>
                
                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setIsApplicationOpen(false)}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default TradeProgram;
