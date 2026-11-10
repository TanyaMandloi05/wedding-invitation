import React from 'react';
import { motion } from 'framer-motion';
import { Camera, MapPin, Heart } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

/**
 * SpecialMoments - Editorial layout for "Little Moments, Forever Memories"
 * Showcases the couple's journey with warm polaroid/editorial photo frames
 */
export default function SpecialMoments() {
  const { moments, photos } = weddingConfig;

  return (
    <section className="relative py-20 px-4 max-w-6xl mx-auto overflow-hidden">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-2 text-[#9B782E] mb-2">
          <Camera className="w-4 h-4 text-[#C5A059]" />
          <span className="font-tenor text-xs uppercase tracking-[0.3em]">
            Visual Chronicle
          </span>
          <Camera className="w-4 h-4 text-[#C5A059]" />
        </div>
        <h2 className="font-script text-4xl sm:text-6xl text-[#2C2420] tracking-wide">
          Little Moments, Forever Memories
        </h2>
        <p className="font-cormorant italic text-lg sm:text-xl text-[#7A6F68] mt-2 max-w-lg mx-auto">
          Every snapshot holds a heartbeat, a whispered laugh, and a quiet promise kept.
        </p>
      </motion.div>

      {/* Editorial Grid Arrangement */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
        {moments.map((item, idx) => {
          const photo = photos[item.photoKey] || photos.natureSmile;
          const isLarge = idx === 0 || idx === 3;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.12 }}
              className={`relative bg-[#FFFDF9] p-4 pb-6 rounded-2xl border border-[#D4AF37]/40 shadow-lg hover:shadow-2xl hover:border-[#D4AF37] transition-all duration-500 group ${
                isLarge ? 'md:row-span-1' : ''
              }`}
            >
              {/* Image Frame */}
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-[#F5ECE1]">
                <img
                  src={photo.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                
                {/* Floating Location Tag */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6F0]/85 backdrop-blur-sm text-[11px] font-sans text-[#2C2420] border border-[#D4AF37]/40 shadow-sm">
                  <MapPin className="w-3 h-3 text-[#B33951]" />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Caption & Details Underneath */}
              <div className="pt-4 px-2 text-center">
                <h3 className="font-cormorant text-2xl font-bold text-[#2C2420]">
                  {item.title}
                </h3>
                <p className="font-cormorant italic text-base text-[#7A6F68] mt-1 leading-snug">
                  &ldquo;{item.caption}&rdquo;
                </p>
              </div>

              {/* Decorative Corner Filigree */}
              <div className="absolute bottom-2 right-2 text-[#C5A059]/40 group-hover:text-[#C5A059] transition-colors">
                <Heart className="w-4 h-4" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
