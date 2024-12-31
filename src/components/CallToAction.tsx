import React from 'react';
import { Calendar, Mail } from 'lucide-react';

export default function CallToAction() {
  const handleScheduleConsultation = () => {
    window.open('http://calendly.com/weijingjaylin', '_blank');
  };

  const handleRequestInformation = () => {
    window.location.href = 'mailto:info@example.com?subject=Request%20Information%20About%20International%20Study%20Program';
  };

  return (
    <section className="py-20 bg-emerald-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Begin Your Global Journey Today
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Applications are now open for the upcoming academic year. 
            Take the first step towards your international education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleScheduleConsultation}
              className="bg-white text-emerald-900 px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-emerald-50 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Schedule Consultation
            </button>
            <button 
              onClick={handleRequestInformation}
              className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Request Information
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}