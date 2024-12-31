import React from 'react';
import VideoPlayer from './video/VideoPlayer';
import LeadForm from './LeadForm';

export default function VideoAndForm() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="lg:sticky lg:top-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Watch Our Program Overview
              </h2>
              <p className="text-gray-600 mb-8">
                Learn about our international study programs and how we help students achieve their academic goals.
              </p>
              <VideoPlayer />
            </div>
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/75 border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Schedule Your Free Consultation
                  </h2>
                  <p className="text-gray-600">
                    Take the first step towards your international education journey. 
                    Fill out the form below to schedule a personalized consultation with our advisors.
                  </p>
                </div>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}