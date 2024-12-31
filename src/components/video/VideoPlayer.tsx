import React from 'react';
import VideoOverlay from './VideoOverlay';
import YouTubeEmbed from './YouTubeEmbed';
import useVideoState from './useVideoState';

export default function VideoPlayer() {
  const { isPlaying, startPlaying } = useVideoState();

  return (
    <div className="relative w-full h-full group">
      <YouTubeEmbed 
        videoId="fhDR8tiLhdU"
        title="Program Overview"
        playing={isPlaying}
        className="w-full h-full object-cover"
      />
      <VideoOverlay 
        isPlaying={isPlaying} 
        onPlay={startPlaying} 
      />
    </div>
  );
}