import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, Database, Mail, Phone, Calendar, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  const lastUpdated = "January 28, 2025";

  const sections = [
    {
      title: "Information We Collect",
      icon: <Database className="h-6 w-6 text-blue-500" />,
      content: [
        {
          subtitle: "Personal Information",
          details: [
            "Name, email address, phone number, and mailing address",
            "Business information for trade program applications",
            "Payment information (processed securely through third-party providers)",
            "Communication preferences and marketing consent"
          ]
        },
        {
          subtitle: "Usage Information",
          details: [
            "Website usage data and analytics",
            "Device information and browser type",
            "IP address and location data",
            "Cookies and similar tracking technologies"
          ]
        },
        {
          subtitle: "Order Information",
          details: [
            "Purchase history and order details",
            "Product preferences and specifications",
            "Custom order requirements and specifications",
            "Shipping and delivery information"
          ]
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: <Eye className="h-6 w-6 text-green-500" />,
      content: [
        {
          subtitle: "Service Delivery",
          details: [
            "Process and fulfill your orders",
            "Provide customer support and assistance",
            "Communicate about your orders and account",
            "Customize products and services to your needs"
          ]
        },
        {
          subtitle: "Business Operations",
          details: [
            "Improve our products and services",
            "Conduct market research and analytics",
            "Develop new products and features",
            "Ensure website security and functionality"
          ]
        },
        {
          subtitle: "Marketing and Communications",
          details: [
            "Send promotional materials and newsletters (with consent)",
            "Notify you about new products and services",
            "Conduct surveys and gather feedback",
            "Personalize your experience on our website"
          ]
        }
      ]
    },
    {
      title: "Information Sharing",
      icon: <Shield className="h-6 w-6 text-purple-500" />,
      content: [
        {
          subtitle: "We Do Not Sell Your Information",
          details: [
            "We never sell, rent, or trade your personal information to third parties",
            "We do not share your information for marketing purposes without consent",
            "Your data is used only for legitimate business purposes"
          ]
        },
        {
          subtitle: "Limited Sharing Scenarios",
          details: [
            "Service providers who assist in our operations (under strict confidentiality)",
            "Legal requirements or law enforcement requests",
            "Business transfers (merger, acquisition, or sale of assets)",
            "Protection of rights and safety of our business and users"
          ]
        }
      ]
    },
    {
      title: "Data Security",
      icon: <Lock className="h-6 w-6 text-red-500" />,
      content: [
        {
          subtitle: "Security Measures",
          details: [
            "SSL encryption for all data transmission",
            "Secure servers and databases",
            "Regular security audits and updates",
            "Access controls and authentication protocols"
          ]
        },
        {
          subtitle: "Data Retention",
          details: [
            "We retain your information only as long as necessary",
            "Order information is kept for accounting and legal purposes",
            "Marketing data is retained until you opt out",
            "You can request deletion of your personal data at any time"
          ]
        }
      ]
    },
    {
      title: "Your Rights and Choices",
      icon: <FileText className="h-6 w-6 text-orange-500" />,
      content: [
        {
          subtitle: "Access and Control",
          details: [
            "Request access to your personal information",
            "Update or correct your information",
            "Delete your account and personal data",
            "Opt out of marketing communications"
          ]
        },
        {
          subtitle: "Data Portability",
          details: [
            "Export your data in a machine-readable format",
            "Transfer your information to another service",
            "Request a copy of your personal information",
            "Understand how your data is being used"
          ]
        }
      ]
    },
    {
      title: "Cookies and Tracking",
      icon: <Eye className="h-6 w-6 text-indigo-500" />,
      content: [
        {
          subtitle: "Types of Cookies",
          details: [
            "Essential cookies for website functionality",
            "Analytics cookies to understand usage patterns",
            "Marketing cookies for personalized content",
            "Preference cookies to remember your settings"
          ]
        },
        {
          subtitle: "Cookie Management",
          details: [
            "You can control cookies through your browser settings",
            "Disabling cookies may affect website functionality",
            "We use cookies to improve your experience",
            "Third-party cookies are used for analytics and marketing"
          ]
        }
      ]
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-blue-500" />,
      method: "Email",
      contact: "privacy@patwamanufacturer.com",
      description: "For privacy-related inquiries and data requests"
    },
    {
      icon: <Phone className="h-5 w-5 text-green-500" />,
      method: "Phone",
      contact: "+91-9322140480",
      description: "Speak with our privacy officer directly"
    },
    {
      icon: <FileText className="h-5 w-5 text-purple-500" />,
      method: "Mail",
      contact: "Patwa Manufacturer Privacy Officer",
      description: "Send written requests to our registered address"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Privacy Policy - Data Protection & Privacy Rights | Patwa Manufacturer</title>
        <meta name="description" content="Learn how Patwa Manufacturer protects your personal information. Our comprehensive privacy policy covers data collection, usage, security, and your rights." />
        <meta name="keywords" content="privacy policy, data protection, personal information, GDPR compliance, data security, privacy rights" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/privacy-policy" />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, 
                use, and protect your personal information.
              </p>
              <div className="flex items-center justify-center gap-2 text-indigo-200">
                <Calendar className="h-5 w-5" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="space-y-16">
              {sections.map((section, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8">
                  <div className="flex items-center mb-6">
                    {section.icon}
                    <h2 className="text-2xl font-bold text-gray-900 ml-3">{section.title}</h2>
                  </div>
                  
                  <div className="space-y-8">
                    {section.content.map((subsection, subIndex) => (
                      <div key={subIndex}>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{subsection.subtitle}</h3>
                        <ul className="space-y-3">
                          {subsection.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Principles */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Privacy Principles</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are committed to protecting your privacy and maintaining the highest standards of data protection
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Shield className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparency</h3>
                <p className="text-gray-600">We clearly explain how we collect and use your information</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Lock className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Security</h3>
                <p className="text-gray-600">Your data is protected with industry-standard security measures</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Eye className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Control</h3>
                <p className="text-gray-600">You have control over your personal information and preferences</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Database className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Minimization</h3>
                <p className="text-gray-600">We collect only the information necessary for our services</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Privacy Questions?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Contact our privacy team for any questions about your personal information
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((contact, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {contact.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{contact.method}</h3>
                  <p className="text-gray-600 mb-2">{contact.contact}</p>
                  <p className="text-sm text-gray-500">{contact.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="py-20 bg-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Legal Notice</h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-4xl mx-auto">
                This privacy policy is governed by applicable data protection laws and regulations. 
                We reserve the right to update this policy as needed to comply with legal requirements 
                and improve our privacy practices.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Policy Updates</h3>
                  <p className="text-indigo-100">
                    We will notify you of any material changes to this privacy policy via email 
                    or prominent notice on our website.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Compliance</h3>
                  <p className="text-indigo-100">
                    This policy complies with applicable data protection laws including GDPR, 
                    CCPA, and other relevant privacy regulations.
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

export default PrivacyPolicy;
