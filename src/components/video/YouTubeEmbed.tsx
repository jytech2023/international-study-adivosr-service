import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  playing: boolean;
  className?: string;
}

export default function YouTubeEmbed({ videoId, title, playing, className = '' }: YouTubeEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1${
    playing ? '&autoplay=1' : ''
  }&controls=0&modestbranding=1&playsinline=1&rel=0&showinfo=0`;

  return (
    <div className={`relative ${className} bg-gray-900`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
        </div>
      )}
      <iframe
        className="w-full h-full"
        src={embedUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}