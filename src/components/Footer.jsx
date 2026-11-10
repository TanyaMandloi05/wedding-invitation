import React from 'react';
import { motion } from 'framer-motion';
import { Flower2, RotateCcw } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

/**
 * Footer & Closing Section - Heartfelt blessings and closing signature
 * Styled in warm champagne ivory and gold matching the royal celebration theme.
 */
export default function Footer({ onReopenEnvelope }) {
  const { couple, invitationMessage } = weddingConfig;

  return (
    <footer className="relative pt-24 pb-20 px-4 bg-gradient-to-b from-[#FAF6F0] via-[#FFFDF9] to-[#F5ECE1] border-t-2 border-[#D4AF37]/50 text-[#2C2420] overflow-hidden mt-16 shadow-[0_-15px_40px_rgba(212,175,55,0.08)]">
      
      {/* Background Soft Warm Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-gradient-to-r from-[#D4AF37]/15 to-[#E2959D]/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center space-y-6">
        
        {/* Decorative Top Flourish */}
        <div className="flex items-center justify-center gap-3 text-[#C5A059]">
          <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
          <Flower2 className="w-5 h-5 text-[#C5A059]" />
          <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
        </div>

        {/* Exact Prompt Closing Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-cormorant text-2xl sm:text-4xl text-[#2C2420] font-medium leading-snug"
        >
          {invitationMessage.closing}
        </motion.h2>

        {/* Exact Prompt Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-cormorant italic text-lg sm:text-xl text-[#615650] max-w-xl mx-auto leading-relaxed"
        >
          &ldquo;{invitationMessage.closingSub}&rdquo;
        </motion.p>

        {/* Couple Signature Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="py-4"
        >
          <p className="font-script text-5xl sm:text-7xl text-[#2C2420] font-bold">
            <span className="gold-text-gradient font-bold drop-shadow-[0_4px_12px_rgba(197,160,89,0.25)]">
              {couple.groom}
            </span>{' '}
            <span className="font-cormorant italic text-3xl sm:text-4xl text-[#B33951] font-normal mx-2 align-middle">
              &amp;
            </span>{' '}
            <span className="gold-text-gradient font-bold drop-shadow-[0_4px_12px_rgba(197,160,89,0.25)]">
              {couple.bride}
            </span>
          </p>
          <p className="font-tenor text-xs uppercase tracking-[0.3em] text-[#9B782E] mt-3 font-semibold">
            {invitationMessage.signoff}
          </p>
        </motion.div>

        {/* Exact Prompt Final Thank You */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="pt-6 border-t border-[#D4AF37]/30"
        >
          <p className="font-cormorant text-xl sm:text-2xl text-[#2C2420] font-medium">
            {invitationMessage.thankYou}
          </p>
          <p className="font-sans text-xs tracking-[0.25em] text-[#B33951] uppercase font-semibold mt-2.5">
            {couple.hashtag}
          </p>
        </motion.div>

        {/* Interactive Experience Actions */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-sans">
          <button
            onClick={onReopenEnvelope}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 hover:bg-white border border-[#D4AF37] text-[#2C2420] shadow-sm hover:shadow-md transition-all cursor-pointer font-medium"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#9B782E]" />
            <span>Replay Opening Envelope Animation</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
