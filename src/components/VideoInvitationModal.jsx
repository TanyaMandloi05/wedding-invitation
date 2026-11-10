import React, { useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Flower2 } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

/**
 * VideoInvitationModal - Elegant video player modal
 * Plays the wedding reception invitation video directly with native player controls.
 */
export default function VideoInvitationModal({ isOpen, onClose, onVideoPlay, onVideoClose }) {
  const { couple, video } = weddingConfig;
  const videoElementRef = useRef(null);

  const videoSrc = video?.src || '/assets/video/invitation-video.mp4';

  const handleClose = useCallback(() => {
    if (videoElementRef.current) {
      videoElementRef.current.pause();
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

  // Handle modal open lifecycle
  useEffect(() => {
    if (isOpen) {
      if (onVideoPlay) onVideoPlay();
      if (videoElementRef.current) {
        videoElementRef.current.currentTime = 0;
        videoElementRef.current.play().catch(() => {});
      }
    }
  }, [isOpen, onVideoPlay]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl"
        onClick={handleClose}
      >
        {/* Modal Outer Container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl rounded-3xl bg-[#1C1613] border border-[#D4AF37]/50 shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar Header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#D4AF37]/30 bg-[#271E19]/90 backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <Flower2 className="w-4 h-4 text-[#E6CA65]" />
              <div>
                <p className="font-cinzel text-xs text-[#E6CA65] tracking-[0.25em] uppercase font-bold">
                  Video Invitation
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

          {/* Main Video Player Screen */}
          <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
            <video
              ref={videoElementRef}
              src={videoSrc}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
