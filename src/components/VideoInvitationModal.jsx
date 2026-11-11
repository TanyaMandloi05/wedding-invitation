import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  MapPin,
  Clock,
  Heart,
} from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

/**
 * VideoInvitationModal - Cinematic Animated Video Invitation Reel
 * Exactly like the original presentation before, now updated with Jay & Nimisha's new photos.
 * Auto-plays smoothly with celebration music, Ken-Burns background transitions, and sleek controls.
 */
export default function VideoInvitationModal({ isOpen, onClose, onVideoPlay, onVideoClose }) {
  const { couple, reception, venue, photos } = weddingConfig;

  const [reelStep, setReelStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const modalRef = useRef(null);
  const audioRef = useRef(null);

  // Close handler
  const handleClose = useCallback(() => {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (onVideoClose) onVideoClose();
    onClose();
  }, [onClose, onVideoClose]);

  // Keydown Escape listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  // Lifecycle when modal opens
  useEffect(() => {
    if (isOpen) {
      if (onVideoPlay) onVideoPlay();
      setReelStep(0);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }
    }
  }, [isOpen, onVideoPlay]);

  // Auto-advancing cinematic video reel (every 5 seconds)
  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const timer = setInterval(() => {
      setReelStep((prev) => (prev + 1) % 4);
    }, 5000);

    return () => clearInterval(timer);
  }, [isOpen, isPlaying]);

  // Audio mute/unmute and playback sync
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, isMuted]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    setReelStep(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(true);
  };

  const toggleFullscreen = () => {
    if (!modalRef.current) return;
    if (!document.fullscreenElement) {
      modalRef.current.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  if (!isOpen) return null;

  // Background together photo mapped to each slide:
  // Slide 0: First couple together photo (Pink kurti & striped shirt)
  // Slide 1: Second couple together photo (Blue t-shirt & pink dress)
  // Slide 2: Third couple together photo (Patterned shirt & maroon dress)
  // Slide 3: First couple together photo (Pink kurti & striped shirt)
  const activeBgPhoto =
    reelStep === 0
      ? photos.coupleMain.src
      : reelStep === 1
      ? photos.videoExtra1?.src || photos.coupleMain.src
      : reelStep === 2
      ? photos.videoExtra2?.src || photos.coupleMain.src
      : photos.coupleMain.src;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl"
        onClick={handleClose}
      >
        {/* Background celebration audio for video reel */}
        <audio
          ref={audioRef}
          src={weddingConfig.audio.src}
          preload="auto"
          loop
        />

        {/* Modal Outer Container */}
        <motion.div
          ref={modalRef}
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#1C1613] border border-[#D4AF37]/50 shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar Header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#D4AF37]/30 bg-[#271E19]/80 backdrop-blur-md z-20">
            <div className="flex items-center gap-2.5">
              <Heart className="w-4 h-4 text-[#B33951] fill-[#B33951]" />
              <div>
                <p className="font-cinzel text-xs text-[#E6CA65] tracking-[0.25em] uppercase font-bold">
                  We Are Getting Married
                </p>
                <p className="font-sans text-[11px] text-[#D8CFB5]/80">
                  {couple.groom} &amp; {couple.bride} &bull; Reception
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="p-2 rounded-full text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-all cursor-pointer"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Player Screen Area */}
          <div className="relative w-full aspect-[4/3] sm:aspect-video max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
            
            {/* Cinematic Animated Invitation Reel (Original design updated with Jay & Nimisha's new photos) */}
            <div className="relative w-full h-full flex flex-col items-center justify-center p-6 sm:p-10 text-center overflow-hidden select-none">
              
              {/* Background Couple Photo with Ken-Burns zoom; object-top ensures faces are clearly visible */}
              <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeBgPhoto}
                    src={activeBgPhoto}
                    alt="Jay and Nimisha"
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 0.42, scale: 1.02 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="w-full h-full object-cover object-top"
                  />
                </AnimatePresence>
                {/* Atmospheric gradient overlay matching original style */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1613] via-[#1C1613]/70 to-[#1C1613]/85 pointer-events-none" />
              </div>

              {/* Animated Gold Corner Accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/70 z-10 pointer-events-none" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/70 z-10 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]/70 z-10 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/70 z-10 pointer-events-none" />

              {/* Centered Content Slides */}
              <div className="relative z-10 max-w-xl mx-auto px-4">
                
                {/* SLIDE 0: We are getting married & Names */}
                {reelStep === 0 && (
                  <motion.div
                    key="slide-0"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-center gap-2 text-[#E6CA65]">
                      <Heart className="w-3.5 h-3.5 text-[#B33951] fill-[#B33951]" />
                      <p className="font-cinzel text-xs sm:text-sm text-[#E6CA65] tracking-[0.35em] uppercase font-bold">
                        We are getting married
                      </p>
                      <Heart className="w-3.5 h-3.5 text-[#B33951] fill-[#B33951]" />
                    </div>
                    <h2 className="font-script text-5xl sm:text-7xl text-[#FAF6F0] gold-text-gradient font-bold leading-[1.35] pt-3 pb-2 px-2 overflow-visible">
                      {couple.groom} &amp; <span className="inline-block text-[1.12em]">N</span>imisha
                    </h2>
                    <p className="font-cormorant italic text-lg sm:text-2xl text-[#D8CFB5]">
                      Two hearts, one beautiful journey, and a lifetime of togetherness.
                    </p>
                  </motion.div>
                )}

                {/* SLIDE 1: Date & Time */}
                {reelStep === 1 && (
                  <motion.div
                    key="slide-1"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4"
                  >
                    <span className="inline-block px-4 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] font-cinzel text-xs text-[#E6CA65] tracking-widest uppercase font-semibold">
                      Save The Auspicious Date
                    </span>
                    <h3 className="font-cormorant text-4xl sm:text-6xl font-bold text-[#FAF6F0] gold-shimmer-text">
                      {reception.date}
                    </h3>
                    <p className="font-cinzel text-base sm:text-lg text-[#E2959D] tracking-widest font-semibold">
                      {reception.weekday.toUpperCase()} &bull; 7:00 PM ONWARDS
                    </p>
                  </motion.div>
                )}

                {/* SLIDE 2: Venue with MR-10 */}
                {reelStep === 2 && (
                  <motion.div
                    key="slide-2"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#FAF5E8]/10 mx-auto flex items-center justify-center border border-[#D4AF37] shadow-md">
                      <MapPin className="w-6 h-6 text-[#E6CA65]" />
                    </div>
                    <h3 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#FAF6F0]">
                      {venue.name}
                    </h3>
                    <p className="font-sans text-base sm:text-lg text-[#D8CFB5] max-w-md mx-auto">
                      <span className="font-bold text-white font-sans">MR-10</span>, Near Bridge, New Bus Stand, Indore, Madhya Pradesh
                    </p>
                  </motion.div>
                )}

                {/* SLIDE 3: Blessings */}
                {reelStep === 3 && (
                  <motion.div
                    key="slide-3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4"
                  >
                    <Heart className="w-10 h-10 text-[#E2959D] fill-[#E2959D] mx-auto animate-pulse" />
                    <h3 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#FAF6F0]">
                      Your Presence is Our Greatest Blessing
                    </h3>
                    <p className="font-cormorant italic text-lg sm:text-xl text-[#E6CA65]">
                      With Love &amp; Regards &bull; {couple.groom} &amp; <span className="inline-block text-[1.08em]">N</span>imisha
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Reel Step Dots Progress Indicator */}
              <div className="absolute bottom-5 inset-x-0 flex items-center justify-center gap-2.5 z-20">
                {[0, 1, 2, 3].map((step) => (
                  <button
                    key={step}
                    onClick={() => setReelStep(step)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      reelStep === step ? 'w-8 bg-[#E6CA65]' : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${step + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Minimal Controls Bar */}
          <div className="px-5 py-3 bg-[#271E19] border-t border-[#D4AF37]/30 flex items-center justify-between text-xs text-[#D8CFB5] z-20">
            {/* Left Controls: Play/Pause, Restart */}
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#E6CA65] transition-colors cursor-pointer"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-current" />
                ) : (
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                )}
              </button>

              <button
                onClick={handleRestart}
                className="p-1.5 rounded-full text-white/70 hover:text-white transition-colors cursor-pointer"
                title="Restart from beginning"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <span className="font-sans text-[11px] text-[#D8CFB5]/80">
                Slide {reelStep + 1} of 4
              </span>
            </div>

            {/* Right Controls: Mute/Unmute, Fullscreen */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-1.5 rounded-full text-white/70 hover:text-white transition-colors cursor-pointer"
                aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-[#B33951]" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>

              <button
                onClick={toggleFullscreen}
                className="p-1.5 rounded-full text-white/70 hover:text-white transition-colors cursor-pointer"
                title="Toggle fullscreen"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
