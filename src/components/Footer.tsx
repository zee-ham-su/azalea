import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-rose-600" />
              <span className="ml-2 text-2xl font-bold text-white">Azalea</span>
            </div>
            <p className="text-gray-400">
              Making a difference in communities worldwide through sustainable development and empowerment initiatives.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-rose-500 transition">Home</a></li>
              <li><a href="#mission" className="hover:text-rose-500 transition">Our Mission</a></li>
              <li><a href="#projects" className="hover:text-rose-500 transition">Projects</a></li>
              <li><a href="#impact" className="hover:text-rose-500 transition">Impact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                contact@azalea.org
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                123 Impact Street, Earth
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest projects and initiatives.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              <button className="bg-rose-600 text-white px-4 py-2 rounded-r-md hover:bg-rose-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Azalea. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}