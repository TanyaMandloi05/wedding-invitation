import React from 'react';
import { motion } from 'framer-motion';
import { Flower2, RotateCcw } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

/**
 * Footer & Closing Section - Exact required heartfelt blessings and closing signature
 */
export default function Footer({ onReopenEnvelope }) {
  const { couple, invitationMessage } = weddingConfig;

  return (
    <footer className="relative pt-20 pb-16 px-4 bg-gradient-to-t from-[#271E19] via-[#33251E] to-transparent text-white overflow-hidden mt-12">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center space-y-6">
        
        {/* Decorative Top Flourish */}
        <div className="flex items-center justify-center gap-3 text-[#D4AF37]">
          <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <Flower2 className="w-5 h-5 text-[#E6CA65]" />
          <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>

        {/* Exact Prompt Closing Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-cormorant text-2xl sm:text-4xl text-[#FAF6F0] font-medium leading-snug"
        >
          {invitationMessage.closing}
        </motion.h2>

        {/* Exact Prompt Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-cormorant italic text-lg sm:text-xl text-[#D8CFB5] max-w-xl mx-auto leading-relaxed"
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
          <p className="font-script text-5xl sm:text-7xl text-[#F3E5AB] font-bold">
            {couple.groom} <span className="font-cormorant italic text-3xl sm:text-4xl text-[#E2959D] font-normal">&amp;</span> {couple.bride}
          </p>
          <p className="font-tenor text-xs uppercase tracking-[0.3em] text-[#C5A059] mt-2">
            {invitationMessage.signoff}
          </p>
        </motion.div>

        {/* Exact Prompt Final Thank You */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="pt-4 border-t border-[#D4AF37]/20"
        >
          <p className="font-cormorant text-xl text-[#FAF6F0]/90">
            {invitationMessage.thankYou}
          </p>
          <p className="font-sans text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-semibold mt-2">
            {couple.hashtag}
          </p>
        </motion.div>

        {/* Interactive Experience Actions */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-sans text-[#A89F95]">
          <button
            onClick={onReopenEnvelope}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-[#D4AF37]/40 text-[#F3E5AB] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Replay Opening Envelope Animation</span>
          </button>
        </div>

        {/* Central Configuration Note for the User */}
        <div className="pt-8 text-[11px] font-sans text-[#7A6F68] max-w-md mx-auto leading-relaxed border-t border-white/5">
          <p>
            Central Configuration: All photographs, timings, dates, and audio can be customized in <code className="text-[#C5A059] font-mono">src/data/weddingConfig.js</code>.
          </p>
        </div>

      </div>
    </footer>
  );
}
