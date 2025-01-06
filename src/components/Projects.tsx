import React from 'react';
import educationImg from '../assets/images/projects/education.jpg';
import healthImg from '../assets/images/projects/health.jpg';
import communityImg from '../assets/images/projects/community.jpg';

export default function Projects() {
  const projects = [
    {
      title: "Education Empowerment",
      image: educationImg,
      description: "Providing educational support and resources to empower young students in their academic journey."
    },
    {
      title: "Menstrual Health Initiative",
      image: healthImg,
      description: "Supporting young women with menstrual health education and essential hygiene products."
    },
    {
      title: "Community Outreach",
      image: communityImg,
      description: "Building stronger communities through local engagement and sustainable development programs."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact Areas</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we're making a difference in communities through education and empowerment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-200">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}