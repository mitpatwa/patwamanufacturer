import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Clock, Mail, Phone } from 'lucide-react';

const TermsOfService = () => {
  const lastUpdated = "January 28, 2025";

  const sections = [
    {
      title: "Acceptance of Terms",
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      content: [
        "By accessing and using our website, you accept and agree to be bound by these terms and conditions",
        "If you do not agree to these terms, please do not use our website or services",
        "We reserve the right to modify these terms at any time without prior notice",
        "Your continued use of our services constitutes acceptance of any changes"
      ]
    },
    {
      title: "Use of Website",
      icon: <FileText className="h-6 w-6 text-blue-500" />,
      content: [
        "You may use our website for lawful purposes only",
        "You agree not to use our website in any way that could damage, disable, or impair our services",
        "You may not attempt to gain unauthorized access to any part of our website",
        "You agree to provide accurate and complete information when using our services"
      ]
    },
    {
      title: "Product Information",
      icon: <Shield className="h-6 w-6 text-purple-500" />,
      content: [
        "We strive to provide accurate product descriptions and images",
        "Product colors may vary slightly due to monitor settings and lighting conditions",
        "Custom orders are subject to approval and may require additional specifications",
        "We reserve the right to modify product specifications without prior notice"
      ]
    },
    {
      title: "Orders and Payment",
      icon: <Scale className="h-6 w-6 text-orange-500" />,
      content: [
        "All orders are subject to acceptance and availability",
        "Prices are subject to change without notice",
        "Payment is required before order processing begins",
        "We accept various payment methods as displayed during checkout"
      ]
    },
    {
      title: "Shipping and Delivery",
      icon: <Clock className="h-6 w-6 text-red-500" />,
      content: [
        "Shipping times are estimates and may vary based on location and circumstances",
        "We are not responsible for delays caused by shipping carriers",
        "Risk of loss transfers to you upon delivery",
        "International shipping may be subject to customs duties and taxes"
      ]
    },
    {
      title: "Returns and Exchanges",
      icon: <AlertTriangle className="h-6 w-6 text-yellow-500" />,
      content: [
        "Returns are accepted within 30 days of delivery for standard items",
        "Custom orders are not eligible for returns",
        "Items must be in original condition with tags attached",
        "Return shipping costs are the customer's responsibility unless due to our error"
      ]
    },
    {
      title: "Intellectual Property",
      icon: <FileText className="h-6 w-6 text-indigo-500" />,
      content: [
        "All content on our website is protected by copyright and other intellectual property laws",
        "You may not reproduce, distribute, or modify our content without permission",
        "Our trademarks and logos are protected and may not be used without authorization",
        "Any unauthorized use of our intellectual property is strictly prohibited"
      ]
    },
    {
      title: "Limitation of Liability",
      icon: <Shield className="h-6 w-6 text-gray-500" />,
      content: [
        "Our liability is limited to the maximum extent permitted by law",
        "We are not liable for indirect, incidental, or consequential damages",
        "Our total liability shall not exceed the amount paid for the products or services",
        "Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you"
      ]
    },
    {
      title: "Privacy and Data Protection",
      icon: <Shield className="h-6 w-6 text-teal-500" />,
      content: [
        "Your privacy is important to us and is governed by our Privacy Policy",
        "We collect and use your information in accordance with applicable data protection laws",
        "You have rights regarding your personal information as outlined in our Privacy Policy",
        "We implement appropriate security measures to protect your data"
      ]
    },
    {
      title: "Termination",
      icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
      content: [
        "We may terminate your access to our services at any time for violation of these terms",
        "You may stop using our services at any time",
        "Upon termination, your right to use our services ceases immediately",
        "Provisions that by their nature should survive termination shall remain in effect"
      ]
    }
  ];

  const keyPoints = [
    {
      title: "Order Processing",
      description: "Orders are processed within 2-3 business days for standard items",
      icon: <Clock className="h-8 w-8 text-blue-500" />
    },
    {
      title: "Quality Guarantee",
      description: "We guarantee the quality of all our products and offer replacements for defects",
      icon: <Shield className="h-8 w-8 text-green-500" />
    },
    {
      title: "Customer Support",
      description: "Our team is available to assist you with any questions or concerns",
      icon: <Mail className="h-8 w-8 text-purple-500" />
    },
    {
      title: "Secure Payments",
      description: "All payments are processed securely through encrypted channels",
      icon: <FileText className="h-8 w-8 text-orange-500" />
    }
  ];

  const contactInfo = [
    {
      method: "Email",
      contact: "legal@patwamanufacturer.com",
      description: "For legal inquiries and terms-related questions"
    },
    {
      method: "Phone",
      contact: "+91-9322140480",
      description: "Speak with our legal team directly"
    },
    {
      method: "Mail",
      contact: "Patwa Manufacturer Legal Department",
      description: "Send written correspondence to our registered address"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Terms of Service - Legal Terms & Conditions | Patwa Manufacturer</title>
        <meta name="description" content="Read our terms of service and legal conditions for using Patwa Manufacturer's website and services. Understand your rights and responsibilities." />
        <meta name="keywords" content="terms of service, legal terms, conditions, user agreement, website terms, service terms" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/terms-of-service" />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                These terms and conditions govern your use of our website and services. 
                Please read them carefully before using our services.
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <Clock className="h-5 w-5" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Points</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Important information about our services and your rights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyPoints.map((point, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {point.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="space-y-16">
              {sections.map((section, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-8">
                  <div className="flex items-center mb-6">
                    {section.icon}
                    <h2 className="text-2xl font-bold text-gray-900 ml-3">{section.title}</h2>
                  </div>
                  
                  <ul className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Governing Law */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law and Jurisdiction</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of India. 
                  Any disputes arising from these terms or your use of our services will be subject to the 
                  exclusive jurisdiction of the courts in India.
                </p>
                <p>
                  If any provision of these terms is found to be invalid or unenforceable, the remaining 
                  provisions will continue to be valid and enforceable.
                </p>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective 
                  immediately upon posting on our website. Your continued use of our services constitutes 
                  acceptance of any changes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Questions About These Terms?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Contact our legal team for any questions about these terms and conditions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((contact, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{contact.method}</h3>
                  <p className="text-gray-600 mb-2">{contact.contact}</p>
                  <p className="text-sm text-gray-500">{contact.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="py-20 bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Legal Notice</h2>
              <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
                This website and its contents are provided for informational purposes only. 
                While we strive to provide accurate information, we make no warranties or 
                representations about the completeness or accuracy of the information.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Disclaimer</h3>
                  <p className="text-gray-200">
                    The information on this website is provided on an "as is" basis. 
                    We disclaim all warranties, express or implied, including but not 
                    limited to warranties of merchantability and fitness for a particular purpose.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Indemnification</h3>
                  <p className="text-gray-200">
                    You agree to indemnify and hold us harmless from any claims, damages, 
                    or expenses arising from your use of our website or violation of these terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
