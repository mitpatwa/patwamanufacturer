import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import ScrollToTop from '../components/ScrollToTop';
import { Search, MapPin, Star, Filter, Users, Award, Phone, Mail, Globe, CheckCircle } from 'lucide-react';

interface Designer {
  id: string;
  name: string;
  title: string;
  company: string;
  location: string;
  specialties: string[];
  rating: number;
  projects: number;
  experience: string;
  phone: string;
  email: string;
  website: string;
  bio: string;
  certifications: string[];
  portfolio: string[];
  verified: boolean;
}

const FindDesigner = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  const designers: Designer[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      title: 'Principal Designer',
      company: 'Chen Design Studio',
      location: 'Mumbai, India',
      specialties: ['Residential Design', 'Luxury Interiors', 'Passementerie Specialist'],
      rating: 4.9,
      projects: 150,
      experience: '12 years',
      phone: '+91-9876543210',
      email: 'sarah@chendesign.com',
      website: 'www.chendesign.com',
      bio: 'Specializing in luxury residential interiors with expertise in custom trimmings and passementerie. Known for creating elegant, timeless spaces.',
      certifications: ['NCIDQ Certified', 'ASID Member'],
      portfolio: ['/lovable-uploads/hero-1-trimmings.png'],
      verified: true
    },
    {
      id: '2',
      name: 'Michael Rodriguez',
      title: 'Interior Architect',
      company: 'Rodriguez & Associates',
      location: 'Delhi, India',
      specialties: ['Commercial Design', 'Hospitality', 'Custom Trimmings'],
      rating: 4.8,
      projects: 200,
      experience: '15 years',
      phone: '+91-9876543211',
      email: 'michael@rodriguezassociates.com',
      website: 'www.rodriguezassociates.com',
      bio: 'Award-winning architect and interior designer with extensive experience in hospitality and commercial projects.',
      certifications: ['AIA Member', 'LEED Certified'],
      portfolio: ['/lovable-uploads/hero-2-textiles.png'],
      verified: true
    },
    {
      id: '3',
      name: 'Emma Thompson',
      title: 'Design Director',
      company: 'Thompson Interiors',
      location: 'Bangalore, India',
      specialties: ['Residential Design', 'Textile Design', 'Passementerie'],
      rating: 4.9,
      projects: 120,
      experience: '10 years',
      phone: '+91-9876543212',
      email: 'emma@thompsoninteriors.com',
      website: 'www.thompsoninteriors.com',
      bio: 'Passionate about creating beautiful, functional spaces with a focus on custom textiles and decorative trimmings.',
      certifications: ['ASID Member', 'Textile Design Certificate'],
      portfolio: ['/lovable-uploads/hero-3-craftsmanship.png'],
      verified: true
    },
    {
      id: '4',
      name: 'David Kumar',
      title: 'Senior Interior Designer',
      company: 'Kumar Design Group',
      location: 'Chennai, India',
      specialties: ['Residential Design', 'Luxury Interiors', 'Custom Manufacturing'],
      rating: 4.7,
      projects: 180,
      experience: '14 years',
      phone: '+91-9876543213',
      email: 'david@kumardesign.com',
      website: 'www.kumardesign.com',
      bio: 'Expert in luxury residential design with specialization in custom passementerie and decorative trims.',
      certifications: ['NCIDQ Certified', 'IIDA Member'],
      portfolio: ['/lovable-uploads/hero-1-trimmings.png'],
      verified: true
    },
    {
      id: '5',
      name: 'Lisa Patel',
      title: 'Interior Designer',
      company: 'Patel Design Studio',
      location: 'Pune, India',
      specialties: ['Residential Design', 'Textile Specialist', 'Passementerie'],
      rating: 4.8,
      projects: 95,
      experience: '8 years',
      phone: '+91-9876543214',
      email: 'lisa@pateldesign.com',
      website: 'www.pateldesign.com',
      bio: 'Creative designer with expertise in textile design and custom passementerie for residential projects.',
      certifications: ['ASID Member', 'Textile Design Certificate'],
      portfolio: ['/lovable-uploads/hero-2-textiles.png'],
      verified: true
    },
    {
      id: '6',
      name: 'James Wilson',
      title: 'Principal Designer',
      company: 'Wilson Interiors',
      location: 'Hyderabad, India',
      specialties: ['Commercial Design', 'Hospitality', 'Custom Trimmings'],
      rating: 4.9,
      projects: 220,
      experience: '16 years',
      phone: '+91-9876543215',
      email: 'james@wilsoninteriors.com',
      website: 'www.wilsoninteriors.com',
      bio: 'Award-winning designer specializing in hospitality and commercial projects with custom passementerie solutions.',
      certifications: ['AIA Member', 'ASID Member'],
      portfolio: ['/lovable-uploads/hero-3-craftsmanship.png'],
      verified: true
    }
  ];

  const locations = ['all', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Pune', 'Hyderabad'];
  const specialties = ['all', 'Residential Design', 'Commercial Design', 'Hospitality', 'Luxury Interiors', 'Textile Design', 'Passementerie Specialist'];

  const filteredDesigners = designers.filter(designer => {
    const matchesSearch = designer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         designer.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         designer.specialties.some(specialty => specialty.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLocation = selectedLocation === 'all' || designer.location.includes(selectedLocation);
    const matchesSpecialty = selectedSpecialty === 'all' || designer.specialties.includes(selectedSpecialty);
    return matchesSearch && matchesLocation && matchesSpecialty;
  });

  const sortedDesigners = [...filteredDesigners].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'experience':
        return parseInt(b.experience) - parseInt(a.experience);
      case 'projects':
        return b.projects - a.projects;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Find a Designer - Verified Interior Design Professionals | Patwa Manufacturer</title>
        <meta name="description" content="Connect with verified interior designers and architects who specialize in passementerie and decorative trimmings. Find the perfect design professional for your project." />
        <meta name="keywords" content="find interior designer, verified designers, passementerie specialists, interior design professionals, design directory, custom trimmings designers" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/find-designer" />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Find a Designer</h1>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Connect with verified interior designers and architects who specialize in 
                passementerie and decorative trimmings for your next project.
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white border-b border-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search designers by name, company, or specialty..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-purple-500"
                  >
                    {locations.map(location => (
                      <option key={location} value={location}>
                        {location === 'all' ? 'All Locations' : location}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-gray-500" />
                  <select
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-purple-500"
                  >
                    {specialties.map(specialty => (
                      <option key={specialty} value={specialty}>
                        {specialty === 'all' ? 'All Specialties' : specialty}
                      </option>
                    ))}
                  </select>
                </div>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-purple-500"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="experience">Sort by Experience</option>
                  <option value="projects">Sort by Projects</option>
                  <option value="name">Sort by Name</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Designers Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {sortedDesigners.length} Verified Designers Found
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>All designers are verified professionals</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedDesigners.map((designer, index) => (
              <motion.div
                key={designer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -20px rgba(0,0,0,0.15)" }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{designer.name}</h3>
                        {designer.verified && (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        )}
                      </div>
                      <p className="text-gray-600 font-medium">{designer.title}</p>
                      <p className="text-gray-500">{designer.company}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-gray-900">{designer.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-4">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{designer.location}</span>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{designer.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {designer.specialties.slice(0, 2).map((specialty, index) => (
                        <span key={index} className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                          {specialty}
                        </span>
                      ))}
                      {designer.specialties.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{designer.specialties.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{designer.projects} projects</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="h-4 w-4" />
                      <span>{designer.experience} experience</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <motion.a
                      href={`tel:${designer.phone}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-purple-600 text-white text-center py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                    >
                      <Phone className="h-4 w-4 inline mr-1" />
                      Call
                    </motion.a>
                    <motion.a
                      href={`mailto:${designer.email}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gray-100 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                    >
                      <Mail className="h-4 w-4 inline mr-1" />
                      Email
                    </motion.a>
                  </div>
                  
                  {designer.website && (
                    <div className="mt-3">
                      <a
                        href={`https://${designer.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-purple-600 hover:text-purple-700"
                      >
                        <Globe className="h-4 w-4" />
                        Visit Website
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Are You a Design Professional?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join our network of verified designers and get access to exclusive trade benefits, 
              custom manufacturing, and priority support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/trade-program"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Join Trade Program
              </a>
              <a
                href="/support"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </div>
  );
};

export default FindDesigner;
