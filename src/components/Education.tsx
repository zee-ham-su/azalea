import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, FileText, MessageCircle, Heart, Download, FileType2, Info, List, Image } from 'lucide-react';

// Resource metadata
const resources = {
  menstrualGuide: {
    title: 'Menstrual Health Guide',
    description: 'A comprehensive guide to understanding your menstrual cycle and health.',
    filename: 'menstrual-health-guide.pdf',
    fileSize: '2.4 MB',
    formats: ['PDF', 'EPUB'],
    usageGuide: [
      'Open the PDF in your preferred reader',
      'Use the table of contents to navigate',
      'Print specific chapters as needed',
      'Share with your community'
    ],
    icon: FileText,
    color: 'rose'
  },
  teacherToolkit: {
    title: 'Teacher\'s Toolkit',
    description: 'Resources for educators to teach menstrual health in schools.',
    filename: 'teacher-toolkit.zip',
    fileSize: '15.8 MB',
    formats: ['ZIP', 'PDF', 'PPTX'],
    usageGuide: [
      'Extract the ZIP file',
      'Review the getting started guide',
      'Customize presentations for your class',
      'Use provided worksheets and activities'
    ],
    icon: FileType2,
    color: 'purple'
  },
  workshopKit: {
    title: 'Community Workshop Kit',
    description: 'Materials for running educational workshops in your community.',
    filename: 'workshop-kit.zip',
    fileSize: '18.2 MB',
    formats: ['ZIP', 'PDF', 'DOCX'],
    usageGuide: [
      'Unzip the workshop materials',
      'Follow the facilitator\'s guide',
      'Print handouts for participants',
      'Use provided presentation slides'
    ],
    icon: List,
    color: 'pink'
  }
};

export default function Education() {
  const [activeGuide, setActiveGuide] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState({});

  const handleResourceAccess = (resource, format) => {
    const extension = format.toLowerCase();
    const filename = resource.filename.replace(/\.[^/.]+$/, `.${extension}`);
    window.open(`/resources/${filename}`, '_blank');
  };

  const toggleGuide = (resourceKey) => {
    setActiveGuide(activeGuide === resourceKey ? null : resourceKey);
  };

  return (
    <>
      <Helmet>
        <title>Educational Resources | Period Power Ghana</title>
        <meta name="description" content="Access our comprehensive educational resources about menstrual health, including guides, toolkits, and workshop materials." />
      </Helmet>
      
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education Hub</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Knowledge is power. We provide comprehensive resources to educate and empower.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-6">
                <BookOpen className="h-8 w-8 text-rose-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Menstrual Health Resources</h3>
                  <p className="text-gray-600">
                    Comprehensive guides about menstrual health, hygiene practices, and self-care during periods.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <FileText className="h-8 w-8 text-rose-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Educational Materials</h3>
                  <p className="text-gray-600">
                    Download free educational materials, worksheets, and guides for students and educators.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <MessageCircle className="h-8 w-8 text-rose-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Myth Busting</h3>
                  <p className="text-gray-600">
                    Breaking down common misconceptions and taboos surrounding menstruation.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <Heart className="h-8 w-8 text-rose-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Health & Wellness</h3>
                  <p className="text-gray-600">
                    Guidelines for maintaining good health and wellness during menstruation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Featured Resources</h3>
              <div className="space-y-8">
                {Object.entries(resources).map(([key, resource]) => (
                  <div key={key} className={`bg-${resource.color}-50 rounded-lg overflow-hidden`}>
                    {/* Resource Header with Icon */}
                    <div className={`p-6 flex items-center justify-between border-b border-${resource.color}-100`}>
                      <div className="flex items-center gap-3">
                        <resource.icon className={`h-8 w-8 text-${resource.color}-600`} />
                        <div>
                          <h4 className="font-semibold text-lg">{resource.title}</h4>
                          <p className="text-sm text-gray-600">
                            {resource.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      {/* File Information */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="inline-flex items-center gap-1">
                          <Download className="h-4 w-4" />
                          {resource.fileSize}
                        </span>
                        <span>|</span>
                        <span>Available formats: {resource.formats.join(', ')}</span>
                      </div>

                      {/* Format Selection and Download */}
                      <div className="flex flex-wrap gap-3 mb-4">
                        {resource.formats.map((format) => (
                          <button
                            key={format}
                            onClick={() => handleResourceAccess(resource, format)}
                            className={`px-4 py-2 text-sm font-medium rounded-full
                              ${selectedFormat[key] === format 
                                ? `bg-${resource.color}-600 text-white` 
                                : `bg-white text-${resource.color}-600 border border-${resource.color}-600 hover:bg-${resource.color}-50`
                              } transition-colors`}
                          >
                            Download {format}
                          </button>
                        ))}
                      </div>

                      {/* Usage Guide Toggle */}
                      <button
                        onClick={() => toggleGuide(key)}
                        className={`inline-flex items-center gap-2 text-${resource.color}-600 hover:text-${resource.color}-700 text-sm font-medium`}
                      >
                        <Info className="h-4 w-4" />
                        {activeGuide === key ? 'Hide Usage Guide' : 'Show Usage Guide'}
                      </button>

                      {/* Usage Guide */}
                      {activeGuide === key && (
                        <div className={`mt-4 bg-white rounded-lg p-4 border border-${resource.color}-100`}>
                          <h5 className="font-medium mb-2">How to use this resource:</h5>
                          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                            {resource.usageGuide.map((step, index) => (
                              <li key={index}>{step}</li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
