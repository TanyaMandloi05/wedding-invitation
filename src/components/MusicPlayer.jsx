import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Music, Flower2 } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

/**
 * MusicPlayer - Luxury floating audio player with visualizer
 * Auto-starts on opening envelope click and stays persistent throughout the site.
 */
export default function MusicPlayer({ audioRef, isPlaying, setIsPlaying }) {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(weddingConfig.audio.defaultVolume || 0.75);
  const [showControls, setShowControls] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Sync volume with audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted, audioRef]);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setHasError(false);
      } catch (err) {
        console.warn('Audio play request prevented:', err);
        setHasError(true);
      }
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (newVol > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Controls Card on Hover/Click */}
      {showControls && (
        <div className="mb-3 p-4 bg-[#FAF6F0]/95 backdrop-blur-md border border-[#D4AF37]/50 rounded-2xl shadow-xl shadow-[#2C2420]/10 flex flex-col gap-3 min-w-[240px] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center gap-2 border-b border-[#D4AF37]/20 pb-2">
            <Music className="w-4 h-4 text-[#C5A059] animate-bounce" />
            <div className="text-left">
              <p className="text-xs font-semibold text-[#2C2420] tracking-wide font-sans line-clamp-1">
                {weddingConfig.audio.title}
              </p>
              <p className="text-[10px] text-[#7A6F68] font-sans">
                {weddingConfig.audio.artist}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <button
              onClick={toggleMute}
              className="text-[#7A6F68] hover:text-[#C5A059] transition-colors p-1"
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4 text-[#B33951]" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-full h-1.5 bg-[#E8DEC8] accent-[#C5A059] rounded-lg cursor-pointer"
              aria-label="Volume slider"
            />
            <span className="text-[10px] text-[#7A6F68] font-mono min-w-[28px] text-right">
              {Math.round((isMuted ? 0 : volume) * 100)}%
            </span>
          </div>

          {hasError && (
            <p className="text-[10px] text-[#B33951] italic text-center">
              Tap play button to start sound
            </p>
          )}
        </div>
      )}

      {/* Floating Pill Player Button */}
      <div className="flex items-center gap-2 bg-[#FAF6F0]/90 backdrop-blur-md border border-[#D4AF37] px-3.5 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:border-[#AA771C] transition-all group">
        {/* Equalizer Waveform Bars */}
        <div
          onClick={() => setShowControls(!showControls)}
          className="flex items-center gap-[3px] h-4 cursor-pointer px-1"
          title="Click to adjust volume & song info"
        >
          <span
            className={`w-[3px] bg-[#C5A059] rounded-full transition-all duration-300 ${
              isPlaying
                ? 'h-4 animate-[pulse_0.7s_infinite_ease-in-out]'
                : 'h-1.5 opacity-60'
            }`}
          />
          <span
            className={`w-[3px] bg-[#C5A059] rounded-full transition-all duration-300 ${
              isPlaying
                ? 'h-3 animate-[pulse_0.9s_infinite_ease-in-out_0.2s]'
                : 'h-2 opacity-60'
            }`}
          />
          <span
            className={`w-[3px] bg-[#C5A059] rounded-full transition-all duration-300 ${
              isPlaying
                ? 'h-5 animate-[pulse_0.6s_infinite_ease-in-out_0.4s]'
                : 'h-1.5 opacity-60'
            }`}
          />
          <span
            className={`w-[3px] bg-[#C5A059] rounded-full transition-all duration-300 ${
              isPlaying
                ? 'h-2.5 animate-[pulse_0.8s_infinite_ease-in-out_0.1s]'
                : 'h-1 opacity-60'
            }`}
          />
        </div>

        {/* Play / Pause Toggle Button */}
        <button
          onClick={togglePlay}
          className="w-8 h-8 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-transform"
          aria-label={isPlaying ? 'Pause wedding music' : 'Play wedding music'}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-current" />
          ) : (
            <Play className="w-4 h-4 fill-current ml-0.5" />
          )}
        </button>

        {/* Track Label */}
        <button
          onClick={() => setShowControls(!showControls)}
          className="hidden sm:flex items-center gap-1.5 text-xs text-[#2C2420] font-sans font-medium tracking-wide pr-1"
        >
          <span>{isPlaying ? 'Playing Wedding Song' : 'Music Paused'}</span>
          <Flower2 className="w-3 h-3 text-[#C5A059]" />
        </button>
      </div>
    </div>
  );
}
