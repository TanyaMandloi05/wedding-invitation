import React, { useState, useRef } from 'react';
import OpeningEnvelope from './components/OpeningEnvelope';
import MainInvitation from './components/MainInvitation';
import WeddingCountdown from './components/WeddingCountdown';
import ScratchReveal from './components/ScratchReveal';
import OurStory from './components/OurStory';
import ReceptionSection from './components/ReceptionSection';
import VenueSection from './components/VenueSection';
import MusicPlayer from './components/MusicPlayer';
import FallingPetals from './components/FallingPetals';
import Footer from './components/Footer';
import VideoInvitationModal from './components/VideoInvitationModal';
import { weddingConfig } from './data/weddingConfig';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [petalsBurst, setPetalsBurst] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [wasPlayingBeforeVideo, setWasPlayingBeforeVideo] = useState(false);

  const audioRef = useRef(null);
  const mainContentRef = useRef(null);

  // Directly start audio playback on user click
  const handleOpenInvitation = async () => {
    // 1. Start audio immediately to satisfy browser autoplay restrictions
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn('Audio play request handled:', err);
      }
    }

    // 2. Trigger petals burst
    setPetalsBurst(true);

    // 3. Complete envelope opening after animation sequence
    setTimeout(() => {
      setIsEnvelopeOpen(true);
      setPetalsBurst(false);
    }, 2400);
  };

  const handleReopenEnvelope = () => {
    setIsEnvelopeOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollDown = () => {
    const el = document.getElementById('reception') || document.getElementById('schedule');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Video modal audio handling
  const handleOpenVideo = () => {
    setWasPlayingBeforeVideo(isPlaying);
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    setIsVideoModalOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoModalOpen(false);
    if (wasPlayingBeforeVideo && audioRef.current) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FAF6F0] text-[#2C2420] selection:bg-[#E2959D]/30 selection:text-[#5E192B] overflow-x-hidden">
      
      {/* Background Persistent Audio Element */}
      <audio
        ref={audioRef}
        src={weddingConfig.audio.src}
        preload="auto"
        loop
        playsInline
      />

      {/* Floating Realistic Falling Flower Petals */}
      <FallingPetals
        intensity={petalsBurst ? 'burst' : 'normal'}
        active={true}
      />

      {/* Fullscreen Luxury 3D Opening Envelope Experience */}
      {!isEnvelopeOpen && (
        <OpeningEnvelope
          onOpenInvitation={handleOpenInvitation}
          isOpened={isEnvelopeOpen}
        />
      )}

      {/* Floating Luxury Audio Player */}
      <MusicPlayer
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />

      {/* Video Invitation Modal Dialog */}
      <VideoInvitationModal
        isOpen={isVideoModalOpen}
        onClose={handleCloseVideo}
        onVideoPlay={() => {}}
        onVideoClose={() => {}}
      />

      {/* Main Wedding Invitation Website (Shown after envelope opens) */}
      <main
        ref={mainContentRef}
        className={`transition-opacity duration-1000 ${
          isEnvelopeOpen ? 'opacity-100' : 'opacity-0 pointer-events-none max-h-screen overflow-hidden'
        }`}
      >
        {/* 1. Main Welcome & Royal Card Reveal (Groom Jay first, top video action, couple arch frame) */}
        <MainInvitation
          onScrollDown={handleScrollDown}
          onOpenVideo={handleOpenVideo}
        />

        {/* 2. Interactive Canvas Scratch-to-Reveal Date */}
        <ScratchReveal />

        {/* 3. Live Countdown to 24 November 2026 */}
        <WeddingCountdown />

        {/* 4. Our Story: Two Hearts, One Journey & 5 Milestones (Groom Jay first, Bride Nimisha second) */}
        <OurStory />

        {/* 5. Wedding Reception Celebration & Evening Program (Exclusively inviting to the Reception) */}
        <ReceptionSection />

        {/* 6. Wedding Venue (Eden Garden Indore) & Google Directions */}
        <VenueSection />

        {/* 7. Final Blessings & Footer */}
        <Footer onReopenEnvelope={handleReopenEnvelope} />
      </main>

    </div>
  );
}
