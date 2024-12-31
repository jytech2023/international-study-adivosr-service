import React from 'react';
import { PlayCircle } from 'lucide-react';

interface VideoOverlayProps {
  isPlaying: boolean;
  onPlay: () => void;
}

export default function VideoOverlay({ isPlaying, onPlay }: VideoOverlayProps) {
  if (isPlaying) return null;
  
  return (
    <>
      <button
        onClick={onPlay}
        className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors"
      >
        <div className="transform scale-100 group-hover:scale-110 transition-transform">
          <PlayCircle className="w-20 h-20 text-white" />
        </div>
      </button>

      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
        <PlayCircle className="w-5 h-5" />
        <span className="text-sm font-medium">Program Overview</span>
      </div>
    </>
  );
}