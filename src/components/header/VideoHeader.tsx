import React from 'react';
import { GraduationCap } from 'lucide-react';
import VideoThumbnail from '../video/VideoThumbnail';

export default function VideoHeader() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-emerald-400 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm mb-6">
              <GraduationCap className="w-5 h-5" />
              <span className="font-medium">Experience Global Education</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Journey to International Education Starts Here
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Watch our program overview and discover how we're transforming education through global perspectives and cultural exchange.
            </p>
          </div>
          
          <VideoThumbnail />
        </div>
      </div>
    </section>
  );
}