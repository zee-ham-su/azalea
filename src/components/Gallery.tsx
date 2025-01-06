import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

// Import all images
import communityImg from '../assets/images/projects/community.jpg';
import educationImg from '../assets/images/projects/education.jpg';
import healthImg from '../assets/images/projects/health.jpg';
import groupImg from '../assets/images/projects/group.jpg';
import group1Img from '../assets/images/projects/group_1.jpg';
import group2Img from '../assets/images/projects/group_02.jpg';
import outreachImg from '../assets/images/projects/outreach.jpg';
import outreach2Img from '../assets/images/projects/outreach_02.jpg';
import outreach3Img from '../assets/images/projects/outreach_03.jpg';
import outreach4Img from '../assets/images/projects/outreach_04.jpg';
import studentsImg from '../assets/images/projects/students.jpg';
import teachingImg from '../assets/images/projects/teaching.jpg';

const images = [
  {
    src: communityImg,
    title: 'Community Engagement',
    description: 'Working directly with communities to provide menstrual health support and resources',
    category: 'community'
  },
  {
    src: educationImg,
    title: 'Educational Workshops',
    description: 'Conducting educational sessions to raise awareness about menstrual health',
    category: 'education'
  },
  {
    src: healthImg,
    title: 'Health & Wellness',
    description: 'Promoting overall health and wellness through our comprehensive programs',
    category: 'health'
  },
  {
    src: groupImg,
    title: 'Community Gathering',
    description: 'Bringing communities together to discuss menstrual health and break stigmas',
    category: 'community'
  },
  {
    src: group1Img,
    title: 'Support Group Session',
    description: 'Creating safe spaces for open dialogue and support',
    category: 'community'
  },
  {
    src: group2Img,
    title: 'Team Meeting',
    description: 'Our dedicated team planning outreach initiatives',
    category: 'outreach'
  },
  {
    src: outreachImg,
    title: 'Distribution Drive',
    description: 'Distributing menstrual products to those in need',
    category: 'outreach'
  },
  {
    src: outreach2Img,
    title: 'School Program',
    description: 'Implementing menstrual health programs in schools',
    category: 'education'
  },
  {
    src: outreach3Img,
    title: 'Healthcare Partnership',
    description: 'Collaborating with healthcare providers for better access',
    category: 'health'
  },
  {
    src: outreach4Img,
    title: 'Youth Engagement',
    description: 'Empowering young people to become advocates',
    category: 'education'
  },
  {
    src: studentsImg,
    title: 'Student Workshop',
    description: 'Educational sessions with students about menstrual health',
    category: 'education'
  },
  {
    src: teachingImg,
    title: 'Teacher Training',
    description: 'Training educators to support menstrual health education',
    category: 'education'
  }
];

// Categories for filtering
const categories = ['all', 'community', 'education', 'health', 'outreach'];

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact in Action</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            See how we're making a difference in communities through our outreach programs
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedCategory === category
                    ? 'bg-rose-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-video overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => {
                setCurrentImageIndex(index);
                setIsModalOpen(true);
              }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full-size image view */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-rose-400 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={previousImage}
              className="absolute left-4 text-white hover:text-rose-400 transition-colors"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 text-white hover:text-rose-400 transition-colors"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <div className="max-w-5xl mx-auto px-4">
              <img
                src={filteredImages[currentImageIndex].src}
                alt={filteredImages[currentImageIndex].title}
                className="max-h-[80vh] w-auto mx-auto rounded-lg"
              />
              <div className="text-center mt-6">
                <h3 className="text-white text-2xl font-semibold">
                  {filteredImages[currentImageIndex].title}
                </h3>
                <p className="text-gray-300 mt-2 text-lg">
                  {filteredImages[currentImageIndex].description}
                </p>
                <span className="inline-block mt-2 px-3 py-1 bg-rose-600 text-white text-sm rounded-full">
                  {filteredImages[currentImageIndex].category}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
