import React from 'react';
import { Heart, HandHeart, Building2, Share2 } from 'lucide-react';

export default function GetInvolved() {
  const handleDonate = (amount?: number) => {
    // In a real application, this would integrate with a payment processor
    const donateUrl = amount 
      ? `https://donate.example.com/period-power?amount=${amount}`
      : 'https://donate.example.com/period-power';
    window.open(donateUrl, '_blank');
  };

  const handleVolunteer = () => {
    window.open('https://forms.example.com/volunteer-signup', '_blank');
  };

  const handlePartnership = () => {
    window.open('https://forms.example.com/partnership-inquiry', '_blank');
  };

  const handleShare = () => {
    const text = 'Join me in supporting Period Power Ghana in their mission to break the stigma and create lasting change in menstrual health equity.';
    const url = window.location.href;

    // Open a share dialog if supported, otherwise open social media links
    if (navigator.share) {
      navigator.share({
        title: 'Support Period Power Ghana',
        text: text,
        url: url,
      });
    } else {
      const socialLinks = {
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`
      };
      window.open(socialLinks.whatsapp, '_blank');
    }
  };

  return (
    <section id="get-involved" className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Involved</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our mission to break the stigma and create lasting change in menstrual health equity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <Heart className="h-12 w-12 text-rose-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Donate</h3>
            <p className="text-gray-600 mb-6">
              Your donation helps provide menstrual products and education to those in need.
            </p>
            <button 
              onClick={() => handleDonate()}
              className="bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition-colors"
            >
              Donate Now
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <HandHeart className="h-12 w-12 text-rose-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Volunteer</h3>
            <p className="text-gray-600 mb-6">
              Join our network of volunteers and make a direct impact in your community.
            </p>
            <button 
              onClick={handleVolunteer}
              className="bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition-colors"
            >
              Join Us
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <Building2 className="h-12 w-12 text-rose-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Partner With Us</h3>
            <p className="text-gray-600 mb-6">
              Create lasting impact through corporate partnerships and sponsorships.
            </p>
            <button 
              onClick={handlePartnership}
              className="bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition-colors"
            >
              Partner Up
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <Share2 className="h-12 w-12 text-rose-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Spread the Word</h3>
            <p className="text-gray-600 mb-6">
              Help break the stigma by sharing our mission with your network.
            </p>
            <button 
              onClick={handleShare}
              className="bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition-colors"
            >
              Share Now
            </button>
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-2xl font-semibold mb-6 text-center">Monthly Giving Program</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-lg hover:border-rose-200 transition-colors cursor-pointer" onClick={() => handleDonate(100)}>
              <h4 className="text-xl font-semibold mb-2">Supporter</h4>
              <p className="text-3xl font-bold text-rose-600 mb-4">GH₵100<span className="text-sm text-gray-600">/month</span></p>
              <p className="text-gray-600">Provides monthly supplies for one student</p>
            </div>
            <div className="text-center p-6 border rounded-lg bg-rose-50 hover:border-rose-300 transition-colors cursor-pointer" onClick={() => handleDonate(250)}>
              <h4 className="text-xl font-semibold mb-2">Champion</h4>
              <p className="text-3xl font-bold text-rose-600 mb-4">GH₵250<span className="text-sm text-gray-600">/month</span></p>
              <p className="text-gray-600">Supports a classroom with education and supplies</p>
            </div>
            <div className="text-center p-6 border rounded-lg hover:border-rose-200 transition-colors cursor-pointer" onClick={() => handleDonate(500)}>
              <h4 className="text-xl font-semibold mb-2">Guardian</h4>
              <p className="text-3xl font-bold text-rose-600 mb-4">GH₵500<span className="text-sm text-gray-600">/month</span></p>
              <p className="text-gray-600">Enables community-wide impact programs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
