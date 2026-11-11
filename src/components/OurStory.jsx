import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Crown, BookOpen } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

/**
 * OurStory - Couple Introduction (The Groom Jay & The Bride Nimisha)
 * Displays Jay's new portrait (green corduroy jacket & sunglasses) and Nimisha's portrait
 * in royal champagne ivory styling with prominent capital N.
 */
export default function OurStory() {
  const { couple, photos } = weddingConfig;

  return (
    <section className="relative py-20 px-4 max-w-5xl mx-auto overflow-hidden">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <div className="flex items-center justify-center gap-2 text-[#9B782E] mb-2">
          <BookOpen className="w-4 h-4 text-[#C5A059]" />
          <span className="font-tenor text-xs uppercase tracking-[0.3em]">
            The Beginning of Forever
          </span>
          <BookOpen className="w-4 h-4 text-[#C5A059]" />
        </div>
        
        <h2 className="font-cormorant text-3xl sm:text-5xl text-[#2C2420] font-medium tracking-wide">
          Our Story: Two Hearts, One Beautiful Journey
        </h2>
        
        <p className="font-script text-2xl sm:text-3xl text-[#B33951] mt-2">
          From first hello to forever after
        </p>
      </motion.div>

      {/* Couple Introductions: The Groom (Jay) FIRST, then The Bride (Nimisha) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
        
        {/* 1. Jay - The Groom */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative bg-gradient-to-b from-[#FFFDF9] to-[#FAF6F0] p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/50 shadow-xl flex flex-col items-center text-center group hover:border-[#D4AF37] transition-all"
        >
          {/* Ornamental Crown */}
          <div className="w-10 h-10 rounded-full bg-[#FAF5E8] flex items-center justify-center text-[#9B782E] mb-4 shadow-sm border border-[#E8DEC9]">
            <Crown className="w-5 h-5 fill-current" />
          </div>

          {/* Groom Dedicated Arch Avatar */}
          <div className="relative w-44 h-52 rounded-t-full rounded-b-xl overflow-hidden border-2 border-[#D4AF37] p-1.5 bg-[#FAF6F0] shadow-md mb-5">
            <img
              src={photos.groomPortrait?.src || photos.weddingAttire.src}
              alt="Jay - The Groom"
              className="w-full h-full object-cover rounded-t-full rounded-b-lg transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <p className="font-tenor text-xs tracking-[0.3em] uppercase text-[#9B782E] mb-1">
            {couple.groomTitle}
          </p>
          <h3 className="font-script text-4xl sm:text-5xl text-[#2C2420] font-bold leading-[1.35] pt-3 pb-2 px-2 overflow-visible">
            {couple.groom}
          </h3>
          <p className="font-cormorant text-base sm:text-lg text-[#615650] mt-3 leading-relaxed">
            {couple.groomBio}
          </p>
        </motion.div>

        {/* 2. Nimisha - The Bride (Prominent Capital N) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative bg-gradient-to-b from-[#FFFDF9] to-[#FAF6F0] p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/50 shadow-xl flex flex-col items-center text-center group hover:border-[#D4AF37] transition-all"
        >
          {/* Ornamental Heart */}
          <div className="w-10 h-10 rounded-full bg-[#FAF0F2] flex items-center justify-center text-[#B33951] mb-4 shadow-sm border border-[#F4D3D7]">
            <Heart className="w-5 h-5 fill-current" />
          </div>

          {/* Bride Dedicated Arch Avatar */}
          <div className="relative w-44 h-52 rounded-t-full rounded-b-xl overflow-hidden border-2 border-[#D4AF37] p-1.5 bg-[#FAF6F0] shadow-md mb-5">
            <img
              src={photos.bridePortrait?.src || photos.weddingAttire.src}
              alt="Nimisha - The Bride"
              className="w-full h-full object-cover rounded-t-full rounded-b-lg transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <p className="font-tenor text-xs tracking-[0.3em] uppercase text-[#9B782E] mb-1">
            {couple.brideTitle}
          </p>
          <h3 className="font-script text-4xl sm:text-5xl text-[#2C2420] font-bold leading-tight pt-2 pb-1 px-1 overflow-visible">
            <span className="whitespace-nowrap">{couple.bride}</span>
          </h3>
          <p className="font-cormorant text-base sm:text-lg text-[#615650] mt-3 leading-relaxed">
            {couple.brideBio}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
