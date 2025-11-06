import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MessageCircle, Clock, MapPin, Send, CheckCircle, AlertCircle, HelpCircle, FileText, Download, ExternalLink } from 'lucide-react';

const Support = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: '',
    priority: 'medium'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Support Request:', formData);
    alert('Thank you for your message! We will respond within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      category: '',
      message: '',
      priority: 'medium'
    });
  };

  const supportOptions = [
    {
      icon: <Phone className="h-8 w-8 text-blue-500" />,
      title: "Phone Support",
      description: "Speak directly with our support team",
      contact: "+91-9322140480",
      hours: "Mon-Fri: 9AM-6PM IST",
      action: "Call Now"
    },
    {
      icon: <Mail className="h-8 w-8 text-green-500" />,
      title: "Email Support",
      description: "Send us a detailed message",
      contact: "support@patwamanufacturer.com",
      hours: "Response within 24 hours",
      action: "Send Email"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-purple-500" />,
      title: "WhatsApp Support",
      description: "Quick assistance via WhatsApp",
      contact: "+91-9322140480",
      hours: "Available 24/7",
      action: "Chat Now"
    },
    {
      icon: <MapPin className="h-8 w-8 text-orange-500" />,
      title: "Visit Our Showroom",
      description: "See our products in person",
      contact: "Patwa Manufacturer Showroom",
      hours: "Mon-Sat: 10AM-7PM",
      action: "Get Directions"
    }
  ];

  const faqCategories = [
    {
      title: "General Questions",
      questions: [
        {
          question: "What is passementerie?",
          answer: "Passementerie refers to decorative trimmings and embellishments used in interior design, including tassels, fringes, braids, cords, and other ornamental elements."
        },
        {
          question: "Do you offer custom manufacturing?",
          answer: "Yes, we specialize in custom passementerie and decorative trimmings tailored to your specific design requirements and project needs."
        },
        {
          question: "What is your minimum order quantity?",
          answer: "Our minimum order varies by product type. For standard items, the minimum is typically 10 pieces, while custom orders may have different requirements."
        }
      ]
    },
    {
      title: "Orders & Shipping",
      questions: [
        {
          question: "How long does production take?",
          answer: "Standard items typically ship within 7-10 business days. Custom orders may take 2-4 weeks depending on complexity and current production schedule."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we ship worldwide. International shipping times vary by destination, typically 7-21 business days."
        },
        {
          question: "Can I track my order?",
          answer: "Yes, you will receive a tracking number once your order ships, allowing you to monitor its progress."
        }
      ]
    },
    {
      title: "Trade Program",
      questions: [
        {
          question: "How do I apply for the trade program?",
          answer: "You can apply online through our trade program page. We require business credentials, trade qualifications, and minimum volume requirements."
        },
        {
          question: "What benefits do trade members receive?",
          answer: "Trade members get exclusive pricing, priority shipping, custom manufacturing, dedicated support, and access to our designer network."
        },
        {
          question: "Is there a minimum purchase requirement?",
          answer: "Yes, trade members must maintain a minimum annual purchase volume of $10,000 to retain their trade status."
        }
      ]
    }
  ];

  const resources = [
    {
      title: "Product Catalog",
      description: "Download our complete product catalog with specifications and pricing",
      icon: <FileText className="h-6 w-6 text-blue-500" />,
      action: "Download PDF",
      size: "2.5 MB"
    },
    {
      title: "Installation Guide",
      description: "Step-by-step guide for installing various types of trimmings",
      icon: <Download className="h-6 w-6 text-green-500" />,
      action: "Download Guide",
      size: "1.8 MB"
    },
    {
      title: "Care Instructions",
      description: "Proper care and maintenance for your passementerie products",
      icon: <FileText className="h-6 w-6 text-purple-500" />,
      action: "View Instructions",
      size: "1.2 MB"
    },
    {
      title: "Design Inspiration",
      description: "Browse our gallery of completed projects and design ideas",
      icon: <ExternalLink className="h-6 w-6 text-orange-500" />,
      action: "View Gallery",
      size: "Online"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Support - Get Help with Your Passementerie Needs | Patwa Manufacturer</title>
        <meta name="description" content="Get expert support for your passementerie and decorative trimmings needs. Contact our team via phone, email, WhatsApp, or visit our showroom for personalized assistance." />
        <meta name="keywords" content="passementerie support, decorative trimmings help, custom manufacturing support, trade program assistance, design consultation, customer service, technical support, product inquiries" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/support" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://patwamanufacturer.lovable.app/support" />
        <meta property="og:title" content="Expert Support for Passementerie & Decorative Trimmings" />
        <meta property="og:description" content="24/7 support via phone, email, WhatsApp. Expert guidance for all your passementerie needs." />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://patwamanufacturer.lovable.app/support" />
        <meta name="twitter:title" content="Expert Support for Passementerie" />
        <meta name="twitter:description" content="24/7 support via phone, email, WhatsApp." />
        
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Support & Contact",
            "description": "Expert support for passementerie and decorative trimmings needs",
            "url": "https://patwamanufacturer.lovable.app/support",
            "mainEntity": {
              "@type": "Organization",
              "name": "Patwa Manufacturer",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-9322140480",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Hindi"],
                  "areaServed": "Worldwide"
                },
                {
                  "@type": "ContactPoint",
                  "email": "support@patwamanufacturer.com",
                  "contactType": "customer service",
                  "availableLanguage": ["English"]
                }
              ]
            }
          }`}
        </script>
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is passementerie?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Passementerie refers to decorative trimmings and embellishments used in interior design, including tassels, fringes, braids, cords, and other ornamental elements."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer custom manufacturing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we specialize in custom passementerie and decorative trimmings tailored to your specific design requirements and project needs."
                }
              },
              {
                "@type": "Question",
                "name": "How long does production take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Standard items typically ship within 7-10 business days. Custom orders may take 2-4 weeks depending on complexity and current production schedule."
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
                "name": "Support",
                "item": "https://patwamanufacturer.lovable.app/support"
              }
            ]
          }`}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">How Can We Help?</h1>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Our expert team is here to assist you with all your passementerie and 
                decorative trimmings needs. Get personalized support and guidance.
              </p>
            </div>
          </div>
        </div>

        {/* Support Options */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the best way to reach us based on your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportOptions.map((option, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.title}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <div className="mb-4">
                    <p className="font-medium text-gray-900">{option.contact}</p>
                    <p className="text-sm text-gray-500">{option.hours}</p>
                  </div>
                  <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                    {option.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form and FAQ Tabs */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-1 shadow-sm">
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === 'contact'
                      ? 'bg-green-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Contact Form
                </button>
                <button
                  onClick={() => setActiveTab('faq')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === 'faq'
                      ? 'bg-green-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  FAQ
                </button>
                <button
                  onClick={() => setActiveTab('resources')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === 'resources'
                      ? 'bg-green-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Resources
                </button>
              </div>
            </div>

            {/* Contact Form */}
            {activeTab === 'contact' && (
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Priority
                      </label>
                      <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select Category</option>
                      <option value="general">General Inquiry</option>
                      <option value="product">Product Information</option>
                      <option value="order">Order Support</option>
                      <option value="trade">Trade Program</option>
                      <option value="custom">Custom Manufacturing</option>
                      <option value="technical">Technical Support</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                    >
                      <Send className="h-5 w-5" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* FAQ */}
            {activeTab === 'faq' && (
              <div className="space-y-8">
                {faqCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="bg-white rounded-lg shadow-sm p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
                    <div className="space-y-6">
                      {category.questions.map((faq, faqIndex) => (
                        <div key={faqIndex} className="border-b border-gray-200 pb-6 last:border-b-0">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                            <HelpCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {faq.question}
                          </h4>
                          <p className="text-gray-700 ml-7">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Resources */}
            {activeTab === 'resources' && (
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Helpful Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {resources.map((resource, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          {resource.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h4>
                          <p className="text-gray-600 mb-3">{resource.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">{resource.size}</span>
                            <button className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-1">
                              {resource.action}
                              <ExternalLink className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-50 border border-red-200 py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-red-900 mb-2">Emergency Support</h3>
            <p className="text-red-700 mb-4">
              For urgent production issues or critical order problems, contact us immediately
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919322140480"
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call Emergency Line
              </a>
              <a
                href="https://wa.me/919322140480"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Emergency
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Support;
