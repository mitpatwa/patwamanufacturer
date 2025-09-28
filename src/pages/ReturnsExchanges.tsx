import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { RotateCcw, Package, Clock, CheckCircle, AlertTriangle, Truck, Shield, Mail, Phone, FileText, Download } from 'lucide-react';

const ReturnsExchanges = () => {
  const [activeTab, setActiveTab] = useState('policy');
  const [formData, setFormData] = useState({
    orderNumber: '',
    name: '',
    email: '',
    phone: '',
    reason: '',
    description: '',
    returnType: 'return'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Return/Exchange Request:', formData);
    alert('Thank you for your request! We will process it and send you a return label within 24 hours.');
  };

  const returnReasons = [
    'Defective product',
    'Wrong item received',
    'Damaged during shipping',
    'Not as described',
    'Changed mind',
    'Size/color not suitable',
    'Other'
  ];

  const policySections = [
    {
      title: "Return Policy",
      icon: <RotateCcw className="h-6 w-6 text-blue-500" />,
      content: [
        "Returns are accepted within 30 days of delivery",
        "Items must be in original condition with tags attached",
        "Custom orders are not eligible for returns",
        "Return shipping costs are the customer's responsibility unless the return is due to our error"
      ]
    },
    {
      title: "Exchange Policy",
      icon: <Package className="h-6 w-6 text-green-500" />,
      content: [
        "Exchanges are available for size, color, or style changes",
        "Exchange requests must be made within 14 days of delivery",
        "Customer is responsible for return shipping costs",
        "We will ship the replacement item once the original is received"
      ]
    },
    {
      title: "Defective Products",
      icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
      content: [
        "Defective products are covered under our quality guarantee",
        "We will provide a full refund or replacement at no cost",
        "Return shipping is free for defective items",
        "Please contact us immediately upon discovering any defects"
      ]
    },
    {
      title: "Custom Orders",
      icon: <Shield className="h-6 w-6 text-purple-500" />,
      content: [
        "Custom orders are final and cannot be returned",
        "We provide detailed specifications before production",
        "Minor adjustments may be possible during production",
        "Quality issues with custom orders will be addressed individually"
      ]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Submit Request",
      description: "Fill out our return/exchange form or contact customer service",
      icon: <FileText className="h-6 w-6 text-blue-500" />
    },
    {
      step: 2,
      title: "Get Approval",
      description: "We'll review your request and send approval within 24 hours",
      icon: <CheckCircle className="h-6 w-6 text-green-500" />
    },
    {
      step: 3,
      title: "Return Item",
      description: "Package the item securely and send it back using our return label",
      icon: <Package className="h-6 w-6 text-orange-500" />
    },
    {
      step: 4,
      title: "Receive Refund/Exchange",
      description: "We'll process your refund or ship your exchange within 5-7 business days",
      icon: <Truck className="h-6 w-6 text-purple-500" />
    }
  ];

  const faqItems = [
    {
      question: "How long do I have to return an item?",
      answer: "You have 30 days from the delivery date to return standard items. Custom orders are not eligible for returns."
    },
    {
      question: "What if my item is damaged during shipping?",
      answer: "We're sorry to hear that! Please contact us immediately with photos of the damage. We'll arrange for a replacement or full refund at no cost to you."
    },
    {
      question: "Can I exchange a custom order?",
      answer: "Custom orders are final and cannot be exchanged. We provide detailed specifications before production to ensure you're satisfied with your order."
    },
    {
      question: "How long does it take to process a return?",
      answer: "Once we receive your returned item, we'll process your refund or exchange within 5-7 business days."
    },
    {
      question: "Do I have to pay for return shipping?",
      answer: "Return shipping is free if the return is due to our error (wrong item, defective product, etc.). Otherwise, return shipping costs are the customer's responsibility."
    },
    {
      question: "What if I'm not satisfied with my exchange?",
      answer: "If you're not satisfied with your exchange, you can return it for a full refund within the original return period."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Returns & Exchanges - Easy Return Policy | Patwa Manufacturer</title>
        <meta name="description" content="Learn about our flexible return and exchange policy. 30-day returns, easy exchanges, and quality guarantee on all passementerie and decorative trimmings." />
        <meta name="keywords" content="returns policy, exchanges, passementerie returns, decorative trimmings returns, quality guarantee, return shipping" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/returns-exchanges" />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Returns & Exchanges</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                We want you to be completely satisfied with your purchase. 
                Our flexible return and exchange policy makes it easy to get exactly what you need.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Overview */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Return Policy</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple, fair, and customer-friendly return and exchange policies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {policySections.map((section, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    {section.icon}
                    <h3 className="text-lg font-semibold text-gray-900 ml-3">{section.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple 4-step process for returns and exchanges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                    {step.icon}
                  </div>
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs for Request Form and FAQ */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('policy')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === 'policy'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Request Return/Exchange
                </button>
                <button
                  onClick={() => setActiveTab('faq')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === 'faq'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  FAQ
                </button>
              </div>
            </div>

            {/* Request Form */}
            {activeTab === 'policy' && (
              <div className="max-w-2xl mx-auto">
                <div className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Return or Exchange</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Order Number *
                        </label>
                        <input
                          type="text"
                          name="orderNumber"
                          value={formData.orderNumber}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Return Type *
                        </label>
                        <select
                          name="returnType"
                          value={formData.returnType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="return">Return for Refund</option>
                          <option value="exchange">Exchange for Different Item</option>
                        </select>
                      </div>
                      
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
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Reason *
                        </label>
                        <select
                          name="reason"
                          value={formData.reason}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select Reason</option>
                          {returnReasons.map((reason, index) => (
                            <option key={index} value={reason}>{reason}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Details
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Please provide any additional details about your return or exchange request..."
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                      >
                        <RotateCcw className="h-5 w-5" />
                        Submit Request
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* FAQ */}
            {activeTab === 'faq' && (
              <div className="max-w-4xl mx-auto">
                <div className="space-y-6">
                  {faqItems.map((faq, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Support */}
        <div className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help with Your Return?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our customer service team is here to help with any questions about returns or exchanges
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex items-center justify-center">
                <Mail className="h-6 w-6 mr-3" />
                <span>support@patwamanufacturer.com</span>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="h-6 w-6 mr-3" />
                <span>+91-9322140480</span>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="h-6 w-6 mr-3" />
                <span>Mon-Fri: 9AM-6PM IST</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ReturnsExchanges;
