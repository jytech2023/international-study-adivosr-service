import React from 'react';
import { GraduationCap, ArrowRight } from 'lucide-react';

export default function IntroSection() {
  return (
    <header className="relative h-[600px] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-emerald-400 mb-4">
            <GraduationCap className="w-6 h-6" />
            <span className="font-medium">Global Education Initiative</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transform Your Future Through Global Education
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Join our prestigious international study program and gain world-class education, 
            cross-cultural experience, and lifetime opportunities.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
            Apply Now <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}