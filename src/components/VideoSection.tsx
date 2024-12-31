import React, { useState } from 'react';
import { PlayCircle } from 'lucide-react';
import YouTubeEmbed from './YouTubeEmbed';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative group">
      <YouTubeEmbed 
        videoId="fhDR8tiLhdU"
        title="Program Overview"
        autoplay={isPlaying}
      />
      
      {!isPlaying && (
        <button
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors"
        >
          <div className="transform scale-100 group-hover:scale-110 transition-transform">
            <PlayCircle className="w-20 h-20 text-white" />
          </div>
        </button>
      )}

      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
        <PlayCircle className="w-5 h-5" />
        <span className="text-sm font-medium">Program Overview</span>
      </div>
    </div>
  );
}