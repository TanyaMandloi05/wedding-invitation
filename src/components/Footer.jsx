import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Flower2, RotateCcw } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

/**
 * Footer - Auspicious blessing signoff and interactive envelope replay
 * Styled in warm champagne ivory and gold matching the royal celebration theme.
 */
export default function Footer({ onReopenEnvelope }) {
  const { couple, invitationMessage } = weddingConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#FBF7F0] text-[#2C2420] pt-16 pb-12 px-4 border-t-2 border-[#D4AF37]/40 overflow-visible">
      
      {/* Background Subtle Watermark Ornaments */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] flex items-center justify-center overflow-hidden">
        <Flower2 className="w-[600px] h-[600px] text-[#C5A059]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        
        {/* Decorative Top Flourish */}
        <div className="flex items-center justify-center gap-3 text-[#C5A059]">
          <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
          <Flower2 className="w-4 h-4 text-[#C5A059]" />
          <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
        </div>

        {/* Closing Blessings */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <h4 className="font-cinzel text-lg sm:text-2xl text-[#9B782E] font-semibold tracking-wide">
            {invitationMessage.closing}
          </h4>
          <p className="font-cormorant italic text-base sm:text-lg text-[#615650] max-w-xl mx-auto leading-relaxed">
            {invitationMessage.closingSub}
          </p>
        </motion.div>

        {/* Signoff Names (Prominent Capital N, No Clipping) */}
        <div className="pt-2 overflow-visible">
          <p className="font-tenor text-xs uppercase tracking-[0.3em] text-[#9B782E] mb-2 font-semibold">
            {invitationMessage.signoff}
          </p>
          <h3 className="font-script text-5xl sm:text-7xl text-[#2C2420] font-bold leading-[1.35] pt-6 pb-3 px-3 overflow-visible">
            <span className="gold-text-gradient inline-block">{couple.groom}</span>
            <span className="font-cormorant italic text-3xl sm:text-4xl text-[#B33951] mx-3">&amp;</span>
            <span className="gold-text-gradient inline-block"><span className="inline-block text-[1.12em]">N</span>imisha</span>
          </h3>
          <p className="font-cinzel text-xs text-[#B33951] tracking-widest mt-2 font-semibold">
            {couple.hashtag}
          </p>
        </div>

        {/* Replay Envelope Animation Action */}
        <div className="pt-4">
          <button
            onClick={onReopenEnvelope}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF0F2] hover:bg-[#F4D3D7] text-[#B33951] text-xs font-sans uppercase tracking-wider font-semibold border border-[#F4D3D7] shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer group"
          >
            <RotateCcw className="w-3.5 h-3.5 group-hover:-rotate-90 transition-transform" />
            <span>Replay Opening Envelope</span>
          </button>
        </div>

        {/* Divider */}
        <div className="pt-6 border-t border-[#D4AF37]/30 text-xs font-sans text-[#7A6F68] space-y-2">
          <p className="font-cormorant italic text-sm text-[#9B782E]">
            {invitationMessage.thankYou}
          </p>
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#7A6F68]">
            <span>Crafted with love for</span>
            <Heart className="w-3 h-3 text-[#B33951] fill-current inline" />
            <span className="font-semibold text-[#2C2420]">{couple.groom} &amp; <span className="inline-block text-[1.08em]">N</span>imisha</span>
            <span>&bull; {currentYear}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
