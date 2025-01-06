import React from 'react';
import heroBg from '../assets/images/hero/hero-bg.jpg';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Period Power community impact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 min-h-screen flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Breaking Stigmas, Building Confidence
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Join us in our mission to eradicate period poverty and empower communities through menstrual health education, ensuring every girl can thrive with dignity and confidence.
          </p>
          <div className="space-x-4">
            <button 
              onClick={() => scrollToSection('get-involved')}
              className="bg-rose-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-rose-700 transition-colors"
            >
              Get Involved
            </button>
            <button 
              onClick={() => scrollToSection('mission')}
              className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}