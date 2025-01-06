import React from 'react';
import { Package, BookOpen, Heart, Camera } from 'lucide-react';

export default function Mission() {
  return (
    <section id="mission" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            To eradicate period poverty by ensuring equitable access to menstrual hygiene products, advancing menstrual health education, and empowering communities to break the stigma surrounding menstruation, enabling every girl to thrive with dignity and confidence
          </p>
          <a 
            href="#gallery" 
            className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-semibold"
          >
            <Camera className="h-5 w-5" />
            View Our Outreach Gallery
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <Package className="h-12 w-12 text-rose-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Access & Distribution</h3>
            <p className="text-gray-600">
              Ensuring every person has reliable access to quality menstrual products through our distribution networks and partnerships with schools and community organizations.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <BookOpen className="h-12 w-12 text-rose-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Education & Awareness</h3>
            <p className="text-gray-600">
              Providing comprehensive menstrual health education and breaking down stigmas through workshops, resources, and community engagement programs.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <Heart className="h-12 w-12 text-rose-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Support & Empowerment</h3>
            <p className="text-gray-600">
              Creating safe spaces for dialogue, providing emotional support, and empowering individuals to advocate for menstrual equity in their communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}