import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flower2, Heart } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';
import confetti from 'canvas-confetti';

/**
 * OpeningEnvelope - Fullscreen luxury 3D opening wedding envelope experience
 * Features 3D opening flap, wax seal break, card emergence, petal explosion,
 * and immediate music playback trigger.
 */
export default function OpeningEnvelope({ onOpenInvitation, isOpened }) {
  const [isOpening, setIsOpening] = useState(false);
  const [flapOpened, setFlapOpened] = useState(false);
  const [cardEmerged, setCardEmerged] = useState(false);

  const handleOpen = () => {
    if (isOpening || isOpened) return;
    setIsOpening(true);

    // 1. Immediately trigger music and callback on visitor click
    onOpenInvitation();

    // 2. Confetti / flower petals burst
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F4D3D7', '#E2959D', '#D4AF37', '#FAF6F0'],
      disableForReducedMotion: true,
    });

    // 3. Open envelope flap in 3D
    setTimeout(() => {
      setFlapOpened(true);
    }, 400);

    // 4. Emerge card from inside the envelope
    setTimeout(() => {
      setCardEmerged(true);
    }, 1100);

    // 5. Final transition into full invitation view
    setTimeout(() => {
      // Completed opening sequence
    }, 2800);
  };

  if (isOpened) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden bg-gradient-to-br from-[#271E19] via-[#3B2B24] to-[#1C1613]"
      >
        {/* Ambient Warm Golden Glow Behind Envelope */}
        <div className="absolute w-[320px] sm:w-[540px] h-[320px] sm:h-[540px] rounded-full bg-gradient-to-r from-[#D4AF37]/20 to-[#E2959D]/15 blur-3xl pointer-events-none animate-pulse" />

        {/* Main Envelope Container with 3D Perspective */}
        <div className="relative w-full max-w-[480px] perspective-1000 flex flex-col items-center">
          
          {/* Top Instruction Pill */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: isOpening ? 0 : 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-5 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF6F0]/15 backdrop-blur-md border border-[#D4AF37]/40 text-[#FAF6F0] text-xs font-sans tracking-[0.25em] uppercase shadow-lg cursor-pointer"
            onClick={handleOpen}
          >
            <Flower2 className="w-3.5 h-3.5 text-[#E6CA65]" />
            <span>Tap to Open Your Invitation</span>
            <Flower2 className="w-3.5 h-3.5 text-[#E6CA65]" />
          </motion.div>

          {/* Realistic Envelope Shell */}
          <div
            onClick={handleOpen}
            className={`relative w-full aspect-[4/3] rounded-2xl cursor-pointer transition-transform duration-500 select-none ${
              !isOpening ? 'hover:scale-[1.02] active:scale-[0.99]' : ''
            }`}
            style={{
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.6), 0 0 40px rgba(212, 175, 55, 0.25)',
            }}
          >
            {/* Envelope Back Plate (Base Ivory/Champagne Paper) */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FAF5EE] via-[#F3E9DA] to-[#E8DEC9] border-2 border-[#D4AF37]/60 overflow-hidden">
              {/* Subtle Ornamental Watermark */}
              <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                <svg className="w-48 h-48 text-[#9B782E]" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 0 C60 30 70 40 100 50 C70 60 60 70 50 100 C40 70 30 60 0 50 C30 40 40 30 50 0 Z" />
                </svg>
              </div>
            </div>

            {/* Emerging Luxury Invitation Card */}
            <motion.div
              initial={{ y: 0, scale: 0.96 }}
              animate={
                cardEmerged
                  ? { y: -140, scale: 1.02, zIndex: 30 }
                  : flapOpened
                  ? { y: -40, scale: 0.98, zIndex: 15 }
                  : { y: 0, scale: 0.96, zIndex: 5 }
              }
              transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-x-4 inset-y-3 rounded-xl bg-[#FFFDF9] border border-[#D4AF37] p-5 sm:p-7 flex flex-col justify-between text-center shadow-2xl deckle-edge overflow-hidden"
            >
              {/* Card Corner Filigree Ornaments */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/80 rounded-tl-sm pointer-events-none" />
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/80 rounded-tr-sm pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]/80 rounded-bl-sm pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/80 rounded-br-sm pointer-events-none" />

              {/* Inner Card Top Header */}
              <div>
                <p className="font-cinzel text-[10px] sm:text-xs text-[#9B782E] tracking-[0.3em] uppercase font-semibold">
                  We Are Getting Married
                </p>
                <div className="flex items-center justify-center gap-2 my-1 text-[#C5A059]">
                  <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
                  <Heart className="w-3.5 h-3.5 fill-[#B33951] text-[#B33951]" />
                  <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
                </div>
              </div>

              {/* Card Center Couple Names (Groom First: Jay & Nimisha) */}
              <div className="my-auto py-2 overflow-visible">
                <h1 className="font-script text-4xl sm:text-5xl text-[#2C2420] tracking-wide leading-[1.35] pt-4 pb-2 px-2 overflow-visible">
                  <span className="gold-text-gradient font-bold inline-block">{weddingConfig.couple.groom}</span>
                  <span className="font-cormorant italic text-2xl sm:text-3xl text-[#B33951] mx-2 font-normal">&amp;</span>
                  <span className="gold-text-gradient font-bold inline-block"><span className="inline-block text-[1.12em]">N</span>imisha</span>
                </h1>
                <p className="font-cormorant italic text-sm sm:text-base text-[#7A6F68] mt-2 max-w-[280px] mx-auto leading-tight">
                  Two hearts, one beautiful journey, and a lifetime of togetherness.
                </p>
              </div>

              {/* Card Bottom Hint (Keeps Date Secret for the Scratch Card Reveal) */}
              <div className="border-t border-[#D4AF37]/30 pt-2.5">
                <p className="font-cinzel text-xs sm:text-sm font-semibold text-[#9B782E] tracking-[0.2em] uppercase">
                  Wedding Reception Invitation
                </p>
                <p className="font-sans text-[9px] sm:text-[10px] text-[#7A6F68] tracking-widest uppercase mt-0.5">
                  Tap to unveil our celebration
                </p>
              </div>
            </motion.div>

            {/* Envelope Left & Right Side Triangular Folds */}
            <div
              className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-2xl"
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              }}
            >
              {/* Left Wing Flap */}
              <div
                className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#F5EBDD] to-[#E8DEC9] border-r border-[#D4AF37]/40 shadow-lg"
                style={{
                  clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                }}
              />
              {/* Right Wing Flap */}
              <div
                className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#F5EBDD] to-[#E8DEC9] border-l border-[#D4AF37]/40 shadow-lg"
                style={{
                  clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
                }}
              />
              {/* Bottom Pocket Flap */}
              <div
                className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-[#E4D8C2] via-[#EFE5D4] to-[#FAF5EE] border-t border-[#D4AF37]/60 shadow-[0_-8px_20px_rgba(0,0,0,0.06)]"
                style={{
                  clipPath: 'polygon(0 100%, 50% 12%, 100% 100%)',
                }}
              >
                {/* Decorative Gold Filigree on Bottom Pocket */}
                <div className="absolute bottom-4 inset-x-0 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mb-1" />
                  <p className="font-cinzel text-[9px] sm:text-[10px] text-[#9B782E] tracking-[0.3em] uppercase">
                    You Are Cordially Invited
                  </p>
                </div>
              </div>
            </div>

            {/* 3D Envelope Top Triangular Flap */}
            <motion.div
              initial={false}
              animate={
                flapOpened
                  ? { rotateX: 180, zIndex: 1 }
                  : { rotateX: 0, zIndex: 20 }
              }
              transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
              style={{
                transformOrigin: 'top center',
                transformStyle: 'preserve-3d',
              }}
              className="absolute inset-x-0 top-0 h-[58%] rounded-t-2xl pointer-events-none"
            >
              {/* Top Flap Geometry */}
              <div
                className="w-full h-full bg-gradient-to-b from-[#F5EBDD] via-[#EDE0CD] to-[#DCCEB5] border-b-2 border-[#D4AF37] shadow-md flex items-center justify-center"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                }}
              >
                {/* Flap Corner Gold Filigree Lines */}
                <div className="absolute top-2 inset-x-6 flex justify-between opacity-50">
                  <div className="w-10 h-[1px] bg-[#9B782E]" />
                  <div className="w-10 h-[1px] bg-[#9B782E]" />
                </div>
              </div>
            </motion.div>

            {/* Luxury Royal Wax Seal with Golden JN Monogram */}
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={
                isOpening
                  ? { scale: 1.4, opacity: 0, filter: 'blur(8px)', rotate: 20 }
                  : { scale: [1, 1.04, 1], opacity: 1 }
              }
              transition={
                isOpening
                  ? { duration: 0.5 }
                  : { repeat: Infinity, duration: 2.8, ease: 'easeInOut' }
              }
              className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-25 cursor-pointer"
            >
              <div className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-full p-1 bg-gradient-to-br from-[#E6CA65] via-[#C5A059] to-[#8C6B28] shadow-2xl seal-pulse flex items-center justify-center">
                {/* Wax Core */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#C2456A] via-[#942643] to-[#5C1324] flex flex-col items-center justify-center border-2 border-[#E6CA65]/80 shadow-inner text-white">
                  {/* Embossed Monogram */}
                  <span className="font-cormorant font-bold text-xl sm:text-2xl tracking-widest text-[#FAF6F0] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    {weddingConfig.couple.monogram}
                  </span>
                  <span className="text-[7px] font-sans uppercase tracking-[0.2em] text-[#E6CA65] -mt-0.5">
                    Royal Seal
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Subtitle Under Envelope (Removed date/venue since they are revealed inside) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpening ? 0 : 0.85 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-center text-[#D8CFB5]"
          >
            <p className="font-cormorant italic text-xl sm:text-2xl tracking-wide text-[#FAF6F0]">
              {weddingConfig.couple.groom} &amp; {weddingConfig.couple.bride}
            </p>
          </motion.div>

          {/* Action Trigger Button for Clarity */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isOpening ? 0 : 1, y: 0 }}
            transition={{ delay: 0.7 }}
            onClick={handleOpen}
            className="mt-5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B8860B] text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold shadow-lg hover:shadow-[#D4AF37]/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Open Invitation</span>
            <Heart className="w-3.5 h-3.5 fill-current" />
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
