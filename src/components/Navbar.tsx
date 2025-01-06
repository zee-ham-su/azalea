import { useState } from 'react';
import { Heart } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-rose-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">Azaleagit init</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-rose-600 transition">Home</a>
            <a href="#mission" className="text-gray-700 hover:text-rose-600 transition">Our Mission</a>
            <a href="#programs" className="text-gray-700 hover:text-rose-600 transition">Programs</a>
            <a href="#education" className="text-gray-700 hover:text-rose-600 transition">Education</a>
            <a href="#impact" className="text-gray-700 hover:text-rose-600 transition">Impact</a>
            <a href="#get-involved" className="text-gray-700 hover:text-rose-600 transition">Get Involved</a>
            <button 
              onClick={() => setIsDonateModalOpen(true)}
              className="bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition"
            >
              Donate Now
            </button>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-rose-600 transition">Home</a>
            <a href="#mission" className="block px-3 py-2 text-gray-700 hover:text-rose-600 transition">Our Mission</a>
            <a href="#programs" className="block px-3 py-2 text-gray-700 hover:text-rose-600 transition">Programs</a>
            <a href="#education" className="block px-3 py-2 text-gray-700 hover:text-rose-600 transition">Education</a>
            <a href="#impact" className="block px-3 py-2 text-gray-700 hover:text-rose-600 transition">Impact</a>
            <a href="#get-involved" className="block px-3 py-2 text-gray-700 hover:text-rose-600 transition">Get Involved</a>
            <button 
              onClick={() => setIsDonateModalOpen(true)}
              className="w-full text-left px-3 py-2 text-rose-600 hover:text-rose-700 transition font-semibold"
            >
              Donate Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}