import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import YouTubeEmbed from './YouTubeEmbed';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

export default function VideoModal({ isOpen, onClose, videoId }: VideoModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl aspect-video">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>
        
        <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl">
          <YouTubeEmbed
            videoId={videoId}
            title="Program Overview"
            playing={true}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}