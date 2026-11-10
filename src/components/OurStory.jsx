import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Crown, BookOpen } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

/**
 * OurStory - Couple Introduction (Groom Jay first, then Bride Nimisha) and editorial story milestones
 */
export default function OurStory() {
  const { couple, storyMilestones, photos } = weddingConfig;

  return (
    <section className="relative py-20 px-4 max-w-5xl mx-auto overflow-hidden">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-2 text-[#9B782E] mb-2">
          <BookOpen className="w-4 h-4 text-[#C5A059]" />
          <span className="font-tenor text-xs uppercase tracking-[0.3em]">
            A Love Written In Destiny
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

      {/* Couple Introductions: Groom Jay FIRST, then Bride Nimisha */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20 max-w-4xl mx-auto">
        
        {/* 1. Jay - The Groom (Rendered First) */}
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
          <h3 className="font-script text-4xl sm:text-5xl text-[#2C2420] font-bold">
            {couple.groom}
          </h3>
          <p className="font-cormorant text-base sm:text-lg text-[#615650] mt-3 leading-relaxed">
            {couple.groomBio}
          </p>
        </motion.div>

        {/* 2. Nimisha - The Bride (Rendered Second) */}
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
          <h3 className="font-script text-4xl sm:text-5xl text-[#2C2420] font-bold">
            {couple.bride}
          </h3>
          <p className="font-cormorant text-base sm:text-lg text-[#615650] mt-3 leading-relaxed">
            {couple.brideBio}
          </p>
        </motion.div>

      </div>

      {/* Clean Editorial Story Milestones (Text & Gold Timeline without photo clutter) */}
      <div className="relative max-w-2xl mx-auto">
        
        {/* Central Vertical Gold Line */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-[#C5A059] to-transparent sm:-translate-x-1/2" />

        <div className="space-y-10">
          {storyMilestones.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className={`relative flex items-center gap-6 ${
                  isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Central Milestone Badge */}
                <div className="absolute left-4 sm:left-1/2 top-6 -translate-y-1/2 sm:-translate-x-1/2 z-10 w-8 h-8 rounded-full bg-[#FAF6F0] border-2 border-[#C5A059] flex items-center justify-center shadow-md">
                  <span className="font-cinzel text-[10px] font-bold text-[#9B782E]">
                    {item.number}
                  </span>
                </div>

                {/* Milestone Text Card */}
                <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FFFDF9] to-[#FAF6F0] border border-[#D4AF37]/40 shadow-md hover:border-[#D4AF37] hover:shadow-lg transition-all text-left">
                    <span className="font-tenor text-[10px] tracking-[0.25em] uppercase text-[#9B782E] block mb-1">
                      Chapter {item.number}
                    </span>
                    <h4 className="font-cormorant text-2xl font-bold text-[#2C2420]">
                      {item.title}
                    </h4>
                    <p className="font-script text-lg text-[#B33951] mb-2">
                      {item.subtitle}
                    </p>
                    <p className="font-cormorant text-base text-[#615650] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Empty side for balanced spacing */}
                <div className="hidden sm:block sm:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
