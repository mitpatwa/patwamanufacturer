import React from 'react';

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Commitment to Sustainability</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            We are committed to sustainable practices in our passementerie craftsmanship, 
            ensuring that our artisanal traditions respect both our heritage and our environment.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sustainable Materials</h2>
              <p className="text-gray-600">
                We carefully source our materials from sustainable suppliers, 
                prioritizing natural fibers and eco-friendly production methods.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Waste Reduction</h2>
              <p className="text-gray-600">
                Our workshop implements comprehensive waste reduction practices, 
                recycling materials whenever possible and minimizing our environmental impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;