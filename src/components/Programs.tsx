import React from 'react';
import { Package, BookOpen, Users, School } from 'lucide-react';

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We take a holistic approach to addressing period poverty through these key initiatives
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-rose-50 p-8 rounded-xl">
            <Package className="h-12 w-12 text-rose-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Product Distribution</h3>
            <p className="text-gray-600 mb-4">
              Providing sustainable and quality menstrual products to those in need through our distribution network.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Monthly dignity kits</li>
              <li>• Sustainable period products</li>
              <li>• Emergency supplies</li>
            </ul>
          </div>
          
          <div className="bg-rose-50 p-8 rounded-xl">
            <BookOpen className="h-12 w-12 text-rose-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Educational Workshops</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive education programs on menstrual health, hygiene, and body literacy.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Health education sessions</li>
              <li>• Menstrual hygiene management</li>
              <li>• Body awareness workshops</li>
            </ul>
          </div>
          
          <div className="bg-rose-50 p-8 rounded-xl">
            <Users className="h-12 w-12 text-rose-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Community Outreach</h3>
            <p className="text-gray-600 mb-4">
              Breaking stigma through community engagement and awareness programs.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Community discussions</li>
              <li>• Awareness campaigns</li>
              <li>• Support groups</li>
            </ul>
          </div>
          
          <div className="bg-rose-50 p-8 rounded-xl">
            <School className="h-12 w-12 text-rose-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">School Partnerships</h3>
            <p className="text-gray-600 mb-4">
              Collaborating with schools to ensure students have access to products and education.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• School supply programs</li>
              <li>• Teacher training</li>
              <li>• Student ambassadors</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
