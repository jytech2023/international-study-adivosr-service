import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  autoplay?: boolean;
}

export default function YouTubeEmbed({ videoId, title, autoplay = false }: YouTubeEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
        </div>
      )}
      <iframe
        className="w-full h-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}${autoplay ? '?autoplay=1' : ''}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}