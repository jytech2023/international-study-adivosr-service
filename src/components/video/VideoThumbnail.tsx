import React, { useState } from 'react';
import { PlayCircle } from 'lucide-react';
import VideoModal from './VideoModal';

export default function VideoThumbnail() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer shadow-xl" onClick={() => setIsModalOpen(true)}>
        {/* Thumbnail Image */}
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Video Thumbnail"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
          <div className="transform group-hover:scale-110 transition-transform">
            <PlayCircle className="w-20 h-20 text-white" />
          </div>
        </div>
        
        {/* Video Info */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4">
            <h3 className="text-white font-semibold mb-1">Program Overview</h3>
            <p className="text-gray-200 text-sm">Learn about our international study programs and opportunities</p>
          </div>
        </div>
      </div>

      <VideoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        videoId="fhDR8tiLhdU"
      />
    </>
  );
}