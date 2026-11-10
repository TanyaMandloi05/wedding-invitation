import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

/**
 * PhotoGallery - Luxury asymmetric masonry photo gallery with interactive Lightbox
 * Features all 5 user-uploaded photographs with titles, tags, and full-screen view
 */
export default function PhotoGallery() {
  const { photos } = weddingConfig;
  const photoList = Object.values(photos);

  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  const openLightbox = (index) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const prevPhoto = useCallback(() => {
    setActivePhotoIndex((prev) => (prev > 0 ? prev - 1 : photoList.length - 1));
  }, [photoList.length]);

  const nextPhoto = useCallback(() => {
    setActivePhotoIndex((prev) => (prev < photoList.length - 1 ? prev + 1 : 0));
  }, [photoList.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, prevPhoto, nextPhoto]);

  return (
    <section id="gallery" className="relative py-20 px-4 max-w-6xl mx-auto overflow-hidden">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-2 text-[#9B782E] mb-2">
          <ImageIcon className="w-4 h-4 text-[#C5A059]" />
          <span className="font-tenor text-xs uppercase tracking-[0.3em]">
            Captured Moments
          </span>
          <ImageIcon className="w-4 h-4 text-[#C5A059]" />
        </div>
        <h2 className="font-script text-4xl sm:text-6xl text-[#2C2420] tracking-wide">
          Wedding Memories &amp; Gallery
        </h2>
        <p className="font-cormorant italic text-lg sm:text-xl text-[#7A6F68] mt-2">
          Glimpses of love, radiant smiles, and unforgettable shared journeys
        </p>
      </motion.div>

      {/* Asymmetric / Masonry Editorial Gallery Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 items-start">
        
        {/* Photo 1: Large Featured Traditional Wedding Attire (Span 7) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onClick={() => openLightbox(0)}
          className="lg:col-span-7 relative group cursor-pointer overflow-hidden rounded-3xl border border-[#D4AF37]/50 shadow-xl bg-[#FAF6F0]"
        >
          <div className="aspect-[4/5] sm:aspect-[4/4.5] overflow-hidden">
            <img
              src={photoList[0].src}
              alt={photoList[0].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
            <span className="text-[10px] uppercase font-sans tracking-[0.3em] text-[#F3E5AB]">
              {photoList[0].tag}
            </span>
            <h3 className="font-cormorant text-2xl font-bold mt-1">
              {photoList[0].title}
            </h3>
            <p className="font-cormorant italic text-sm text-[#FAF6F0]/80">
              {photoList[0].subtitle}
            </p>
          </div>
          <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-[#2C2420] opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
            <Maximize2 className="w-4 h-4" />
          </div>
        </motion.div>

        {/* Photo 2: Sunset Hug (Span 5) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          onClick={() => openLightbox(1)}
          className="lg:col-span-5 relative group cursor-pointer overflow-hidden rounded-3xl border border-[#D4AF37]/50 shadow-xl bg-[#FAF6F0]"
        >
          <div className="aspect-[4/5] sm:aspect-[4/4.5] overflow-hidden">
            <img
              src={photoList[1].src}
              alt={photoList[1].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
            <span className="text-[10px] uppercase font-sans tracking-[0.3em] text-[#F3E5AB]">
              {photoList[1].tag}
            </span>
            <h3 className="font-cormorant text-2xl font-bold mt-1">
              {photoList[1].title}
            </h3>
            <p className="font-cormorant italic text-sm text-[#FAF6F0]/80">
              {photoList[1].subtitle}
            </p>
          </div>
          <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-[#2C2420] opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
            <Maximize2 className="w-4 h-4" />
          </div>
        </motion.div>

        {/* Photo 3: Nature Smile (Span 4) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onClick={() => openLightbox(2)}
          className="lg:col-span-4 relative group cursor-pointer overflow-hidden rounded-3xl border border-[#D4AF37]/50 shadow-xl bg-[#FAF6F0]"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={photoList[2].src}
              alt={photoList[2].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
            <span className="text-[10px] uppercase font-sans tracking-[0.3em] text-[#F3E5AB]">
              {photoList[2].tag}
            </span>
            <h3 className="font-cormorant text-xl font-bold mt-1">
              {photoList[2].title}
            </h3>
          </div>
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-[#2C2420] opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
            <Maximize2 className="w-3.5 h-3.5" />
          </div>
        </motion.div>

        {/* Photo 4: Evening Celebration (Span 4) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          onClick={() => openLightbox(3)}
          className="lg:col-span-4 relative group cursor-pointer overflow-hidden rounded-3xl border border-[#D4AF37]/50 shadow-xl bg-[#FAF6F0]"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={photoList[3].src}
              alt={photoList[3].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
            <span className="text-[10px] uppercase font-sans tracking-[0.3em] text-[#F3E5AB]">
              {photoList[3].tag}
            </span>
            <h3 className="font-cormorant text-xl font-bold mt-1">
              {photoList[3].title}
            </h3>
          </div>
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-[#2C2420] opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
            <Maximize2 className="w-3.5 h-3.5" />
          </div>
        </motion.div>

        {/* Photo 5: Ocean Sunset (Span 4) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          onClick={() => openLightbox(4)}
          className="lg:col-span-4 relative group cursor-pointer overflow-hidden rounded-3xl border border-[#D4AF37]/50 shadow-xl bg-[#FAF6F0]"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={photoList[4].src}
              alt={photoList[4].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
            <span className="text-[10px] uppercase font-sans tracking-[0.3em] text-[#F3E5AB]">
              {photoList[4].tag}
            </span>
            <h3 className="font-cormorant text-xl font-bold mt-1">
              {photoList[4].title}
            </h3>
          </div>
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-[#2C2420] opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
            <Maximize2 className="w-3.5 h-3.5" />
          </div>
        </motion.div>

      </div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              className="absolute left-4 sm:left-8 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              className="absolute right-4 sm:right-8 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Active Lightbox Image & Caption */}
            <div
              className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photoList[activePhotoIndex].src}
                alt={photoList[activePhotoIndex].alt}
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl border border-[#D4AF37]/40"
              />
              <div className="text-center mt-4 text-white">
                <p className="font-tenor text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                  {photoList[activePhotoIndex].tag} &bull; {activePhotoIndex + 1} of {photoList.length}
                </p>
                <h4 className="font-cormorant text-2xl font-bold mt-1">
                  {photoList[activePhotoIndex].title}
                </h4>
                <p className="font-cormorant italic text-sm text-gray-300">
                  {photoList[activePhotoIndex].subtitle}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
