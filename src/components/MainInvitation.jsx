import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronDown, Play } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

/**
 * MainInvitation - Royal Hero section revealed after envelope opening
 * Features groom Jay first, bride Nimisha, and prominent top video button.
 */
export default function MainInvitation({ onScrollDown, onOpenVideo }) {
  const { couple, invitationMessage, photos } = weddingConfig;

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 pt-10 pb-20 overflow-visible">
      
      {/* Background Subtle Floral & Mandala Watermarks */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.035] overflow-hidden">
        <svg className="w-[800px] h-[800px] animate-[spin_120s_linear_infinite]" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M50 5 Q60 30 75 25 Q60 40 95 50 Q70 60 75 75 Q60 70 50 95 Q40 70 25 75 Q30 60 5 50 Q40 40 25 25 Q40 30 50 5 Z" />
        </svg>
      </div>

      {/* Top Banner: We are getting married with heart above */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col items-center justify-center mb-4"
      >
        <Heart className="w-4 h-4 text-[#B33951] fill-current mb-1.5" />
        <div className="flex items-center justify-center gap-3">
          <span className="w-12 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
          <span className="font-tenor text-xs sm:text-sm tracking-[0.35em] uppercase text-[#9B782E] font-medium">
            We are getting married
          </span>
          <span className="w-12 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
        </div>
      </motion.div>

      {/* Top Video Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mb-5"
      >
        <button
          onClick={onOpenVideo}
          className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-[#8C1D40] via-[#B33951] to-[#8C1D40] text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold shadow-lg hover:shadow-[#B33951]/40 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-[#F4D3D7]/60 group"
          title="Watch video invitation"
        >
          <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
          </span>
          <span>Watch Video Invitation</span>
        </button>
      </motion.div>

      {/* Invitation Header Message with Highlighted Tanwar & Sabarwal Family */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-3xl mx-auto px-4 my-2 text-center"
      >
        <div className="inline-block px-5 py-3 sm:px-8 sm:py-4 rounded-2xl bg-gradient-to-r from-[#FFFDF9]/95 via-[#FAF3E6]/90 to-[#FFFDF9]/95 border border-[#D4AF37]/60 shadow-[0_4px_20px_rgba(197,160,89,0.18)]">
          <p className="font-cormorant text-base sm:text-xl text-[#5A4D45] leading-relaxed">
            Together with love and blessings,
          </p>
          <p className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-[#8C1D40] tracking-wider my-1 drop-shadow-[0_1px_2px_rgba(140,29,64,0.12)]">
            Tanwar &amp; Sabarwal Family
          </p>
          <p className="font-cormorant text-base sm:text-xl text-[#5A4D45] leading-relaxed">
            invites you to celebrate the wedding reception of
          </p>
        </div>
      </motion.div>

      {/* Couple's Names: Groom Jay FIRST, then Bride Nimisha (With Prominent Capital N, No Clipping) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.35 }}
        className="my-3 sm:my-5 relative overflow-visible"
      >
        <h1 className="font-script text-6xl sm:text-8xl md:text-9xl text-[#2C2420] tracking-wide leading-tight pt-4 pb-2 px-2 overflow-visible">
          <span className="gold-text-gradient font-bold drop-shadow-[0_4px_12px_rgba(197,160,89,0.25)] whitespace-nowrap inline-block">
            {couple.groom}
          </span>
          <span className="font-cormorant italic text-3xl sm:text-5xl md:text-6xl text-[#B33951] mx-3 sm:mx-5 font-normal align-middle">
            &amp;
          </span>
          <span className="gold-text-gradient font-bold drop-shadow-[0_4px_12px_rgba(197,160,89,0.25)] whitespace-nowrap inline-block">
            {couple.bride}
          </span>
        </h1>

        {/* Golden Underline Flourish */}
        <div className="flex items-center justify-center gap-3 mt-1 text-[#C5A059]">
          <span className="w-16 sm:w-32 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
          <Heart className="w-4 h-4 fill-[#B33951] text-[#B33951]" />
          <span className="w-16 sm:w-32 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
        </div>
      </motion.div>

      {/* Quotations */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="space-y-2 mb-8 max-w-xl mx-auto px-4"
      >
        <p className="font-cormorant italic text-lg sm:text-2xl text-[#9B782E] font-medium">
          &ldquo;{invitationMessage.subheading}&rdquo;
        </p>
        <p className="font-cormorant text-base sm:text-lg text-[#615650] leading-relaxed">
          {invitationMessage.body}
        </p>
      </motion.div>

      {/* Featured Couple Portrait in Royal Arch Frame */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.65 }}
        className="relative max-w-xs sm:max-w-sm mx-auto my-2 group"
      >
        {/* Arch Frame Outer Glow & Gold Borders */}
        <div className="relative p-2.5 sm:p-3 rounded-t-[180px] rounded-b-2xl bg-gradient-to-b from-[#C5A059] via-[#FAF6F0] to-[#9B782E] shadow-2xl gold-shadow">
          <div className="relative overflow-hidden rounded-t-[172px] rounded-b-xl aspect-[3/4] bg-[#F5ECE1]">
            <img
              src={photos.weddingAttire.src}
              alt={photos.weddingAttire.alt}
              className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C2420]/20 via-transparent to-transparent opacity-40" />
          </div>
        </div>

        {/* Decorative Golden Floral Corner Accents */}
        <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37] pointer-events-none" />
        <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37] pointer-events-none" />
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-12 flex flex-col items-center"
      >
        <button
          onClick={onScrollDown}
          className="flex flex-col items-center text-[#7A6F68] hover:text-[#9B782E] transition-colors cursor-pointer group"
          aria-label="Scroll to Wedding Reception Details"
        >
          <span className="font-tenor text-[11px] uppercase tracking-[0.25em] mb-2 font-medium">
            Explore Celebration
          </span>
          <div className="w-8 h-8 rounded-full border border-[#D4AF37] flex items-center justify-center group-hover:translate-y-1 transition-transform">
            <ChevronDown className="w-4 h-4 text-[#C5A059]" />
          </div>
        </button>
      </motion.div>

    </section>
  );
}
