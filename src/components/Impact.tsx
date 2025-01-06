import React from 'react';

export default function Impact() {
  return (
    <section id="impact" className="py-20 bg-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Through the support of our donors and volunteers, we've achieved significant milestones in our mission.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 text-center mb-16">
          <div className="bg-rose-50 p-6 rounded-xl">
            <div className="text-5xl font-bold text-rose-600 mb-2">500+</div>
            <div className="text-gray-700">Students Supported</div>
          </div>
          <div className="bg-rose-50 p-6 rounded-xl">
            <div className="text-5xl font-bold text-rose-600 mb-2">10+</div>
            <div className="text-gray-700">Schools Reached</div>
          </div>
          <div className="bg-rose-50 p-6 rounded-xl">
            <div className="text-5xl font-bold text-rose-600 mb-2">1k+</div>
            <div className="text-gray-700">Products Distributed</div>
          </div>
          <div className="bg-rose-50 p-6 rounded-xl">
            <div className="text-5xl font-bold text-rose-600 mb-2">5+</div>
            <div className="text-gray-700">Communities Served</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Success Stories</h3>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-gray-600 italic mb-4">
                  "Thanks to the menstrual health education program, I now feel confident discussing these topics with my peers and family. The stigma is finally breaking in our community."
                </p>
                <div className="font-semibold">Sarah M.</div>
                <div className="text-sm text-gray-500">Student Ambassador</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-gray-600 italic mb-4">
                  "The monthly dignity kits have made such a difference in our school. Girls no longer miss classes during their periods, and their confidence has improved significantly."
                </p>
                <div className="font-semibold">Jane D.</div>
                <div className="text-sm text-gray-500">School Principal</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Recent Achievements</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold mb-2">Community Education Initiative</h4>
                <p className="text-gray-600">
                  Launched 5 new educational workshops reaching over 500 community members
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold mb-2">School Partnership Program</h4>
                <p className="text-gray-600">
                  Established partnerships with 5 new schools to provide sustainable menstrual products
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold mb-2">Advocacy Campaign</h4>
                <p className="text-gray-600">
                  Successfully advocated for menstrual products in 5 school districts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}