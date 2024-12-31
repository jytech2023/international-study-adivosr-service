import { useState, useCallback } from 'react';

export default function useVideoState() {
  const [isPlaying, setIsPlaying] = useState(false);

  const startPlaying = useCallback(() => {
    setIsPlaying(true);
  }, []);

  return {
    isPlaying,
    startPlaying
  };
}