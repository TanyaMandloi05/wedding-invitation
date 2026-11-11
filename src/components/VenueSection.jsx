import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Calendar, ExternalLink } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

/**
 * VenueSection - Eden Garden Marriage Garden & Resort location details
 * Includes address, timing, reliable map embed with MR-10 coordinates, and "Get Directions" action.
 */
export default function VenueSection() {
  const { venue } = weddingConfig;

  return (
    <section id="venue" className="relative py-20 px-4 max-w-5xl mx-auto overflow-hidden">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-2 text-[#9B782E] mb-2">
          <MapPin className="w-4 h-4 text-[#C5A059]" />
          <span className="font-tenor text-xs uppercase tracking-[0.3em]">
            Destination of Celebration
          </span>
          <MapPin className="w-4 h-4 text-[#C5A059]" />
        </div>
        <h2 className="font-script text-4xl sm:text-6xl text-[#2C2420] tracking-wide leading-[1.3] pt-2 pb-1 overflow-visible">
          Wedding Venue
        </h2>
        <p className="font-cormorant italic text-lg sm:text-xl text-[#7A6F68] mt-2">
          Where our auspicious union begins, surrounded by love and blessings.
        </p>
      </motion.div>

      {/* Main Venue Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative bg-gradient-to-br from-[#FFFDF9] via-[#FAF6F0] to-[#F5ECE1] rounded-3xl p-6 sm:p-12 border-2 border-[#D4AF37]/60 shadow-2xl overflow-hidden"
      >
        {/* Filigree Corner Accents */}
        <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]" />
        <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]" />
        <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]" />
        <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Venue Information Column */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div>
              <span className="font-cinzel text-xs text-[#9B782E] font-semibold tracking-[0.3em] uppercase block mb-1">
                Royal Venue
              </span>
              <h3 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2420]">
                {venue.name}
              </h3>
            </div>

            {/* Address with standard lining numbers for MR-10 */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#FAF0F2] flex items-center justify-center shrink-0 border border-[#F4D3D7]">
                <MapPin className="w-5 h-5 text-[#B33951]" />
              </div>
              <div>
                <p className="font-tenor text-xs uppercase tracking-wider text-[#9B782E] font-semibold">
                  Complete Address
                </p>
                <p className="font-sans text-base sm:text-lg text-[#2C2420] font-medium leading-snug mt-1">
                  <span className="font-semibold tracking-wide">MR-10</span>, Near Bridge, New Bus Stand, Indore, Madhya Pradesh, India
                </p>
              </div>
            </div>

            {/* Date & Time Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 bg-[#FFFFFF]/70 p-3.5 rounded-xl border border-[#D4AF37]/30">
                <Calendar className="w-5 h-5 text-[#C5A059]" />
                <div>
                  <p className="font-tenor text-[10px] uppercase tracking-wider text-[#7A6F68]">
                    Wedding Date
                  </p>
                  <p className="font-cinzel text-sm font-semibold text-[#2C2420]">
                    {venue.weddingDate}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#FFFFFF]/70 p-3.5 rounded-xl border border-[#D4AF37]/30">
                <Clock className="w-5 h-5 text-[#C5A059]" />
                <div>
                  <p className="font-tenor text-[10px] uppercase tracking-wider text-[#7A6F68]">
                    Arrival Time
                  </p>
                  <p className="font-sans text-xs font-semibold text-[#2C2420]">
                    {venue.arrivalTime}
                  </p>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <div className="pt-2">
              <a
                href={venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#9B782E] text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer group"
              >
                <Navigation className="w-4 h-4 fill-current group-hover:rotate-12 transition-transform" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* Interactive Map Preview Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-lg aspect-[4/3] bg-[#E8DEC9] group">
              <iframe
                title="Eden Garden Indore Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=75.8450%2C22.7520%2C75.8850%2C22.7820&layer=mapnik&marker=22.7695%2C75.8642"
                className="w-full h-full border-0 pointer-events-auto"
                loading="lazy"
              />

              {/* Floating Map Label with direct Google Maps link */}
              <a
                href={venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2.5 right-2.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[11px] font-sans font-semibold text-[#2C2420] shadow-md hover:bg-white hover:text-[#B33951] transition-colors flex items-center gap-1.5 cursor-pointer z-10"
                title="Open in Google Maps"
              >
                <MapPin className="w-3.5 h-3.5 text-[#B33951]" />
                <span>Eden Garden &bull; <strong className="font-bold">MR-10</strong></span>
              </a>

              {/* Bottom Quick-action Helper */}
              <div className="absolute bottom-2.5 left-2.5 pointer-events-none z-10">
                <a
                  href={venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto px-3 py-1 rounded-full bg-[#17120F]/90 backdrop-blur-sm text-[11px] font-sans font-medium text-[#FAF6F0] hover:text-[#E6CA65] shadow transition-colors flex items-center gap-1.5"
                  title="Open live navigation in Google Maps"
                >
                  <Navigation className="w-3 h-3 text-[#E6CA65]" />
                  <span>Open Live Navigation</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
