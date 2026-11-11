import React from 'react';
import { motion } from 'framer-motion';
import {
  Flower2,
  Clock,
  MapPin,
  Calendar,
  Gift,
  UtensilsCrossed,
  CalendarPlus,
} from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

/**
 * ReceptionSection - Dedicated Wedding Reception Invitation Card & Evening Highlights
 * Replaces the multi-day wedding itinerary to focus exclusively on the Reception.
 */
export default function ReceptionSection() {
  const { reception, venue, couple } = weddingConfig;

  // Icon mapping helper
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Flower2':
        return <Flower2 className="w-5 h-5 text-[#C5A059]" />;
      case 'Gift':
        return <Gift className="w-5 h-5 text-[#B33951]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-[#9B782E]" />;
      default:
        return <Calendar className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  const handleAddToCalendar = () => {
    const title = encodeURIComponent(`Wedding Reception of ${couple.groom} & ${couple.bride}`);
    const details = encodeURIComponent(
      `Join us in celebrating the Wedding Reception of ${couple.groom} & ${couple.bride} at ${venue.name}.`
    );
    const location = encodeURIComponent(`${venue.name}, ${venue.address}`);
    // Target: 24 Nov 2026, 19:00 IST to 23:30 IST (13:30 to 18:00 UTC)
    const dates = '20261124T133000Z/20261124T180000Z';
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
    window.open(googleCalendarUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="reception" className="relative py-20 px-4 max-w-5xl mx-auto overflow-hidden">
      {/* Hidden anchor compatibility */}
      <span id="schedule" className="sr-only" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-2 text-[#9B782E] mb-2">
          <Flower2 className="w-4 h-4 text-[#C5A059]" />
          <span className="font-tenor text-xs uppercase tracking-[0.3em]">
            Cordially Invited
          </span>
          <Flower2 className="w-4 h-4 text-[#C5A059]" />
        </div>
        <h2 className="font-script text-4xl sm:text-6xl text-[#2C2420] tracking-wide leading-[1.3] pt-2 pb-1 overflow-visible">
          Wedding Reception
        </h2>
        <p className="font-cormorant italic text-lg sm:text-xl text-[#7A6F68] mt-2 max-w-2xl mx-auto leading-relaxed">
          Together with their families, <span className="whitespace-nowrap">{couple.groom}</span> &amp; <span className="whitespace-nowrap">{couple.bride}</span> invite you to an auspicious evening of celebrations, heartfelt blessings, and feast.
        </p>
      </motion.div>

      {/* Grand Reception Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative rounded-3xl p-6 sm:p-12 border-2 border-[#D4AF37] shadow-2xl bg-gradient-to-b from-[#FAF4E6] via-[#FFFDF9] to-[#F5ECE1] overflow-hidden"
        style={{
          boxShadow: '0 20px 50px -10px rgba(197, 160, 89, 0.4), 0 0 30px rgba(212, 175, 55, 0.25)',
        }}
      >
        {/* Grand Shimmering Gold Accent Top Bar */}
        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#D4AF37] via-[#FFF2B2] to-[#B8860B]" />

        {/* Grand Corner Ornaments */}
        <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-[#D4AF37]" />
        <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-[#D4AF37]" />
        <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-[#D4AF37]" />
        <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-[#D4AF37]" />

        {/* Header Banner */}
        <div className="text-center pb-8 border-b border-[#D4AF37]/40 flex flex-col items-center">
          <div className="mb-3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37]/20 via-[#FFF2B2]/40 to-[#D4AF37]/20 border border-[#D4AF37] font-cinzel text-xs font-bold tracking-[0.3em] uppercase text-[#9B782E]">
              {reception.badge}
            </span>
          </div>
          <div className="w-full text-center my-1">
            <h3 className="font-cormorant text-4xl sm:text-6xl font-bold text-[#2C2420] gold-shimmer-text">
              {reception.date}
            </h3>
          </div>
          <p className="font-cinzel text-lg sm:text-xl text-[#B33951] font-bold tracking-widest mt-1">
            {reception.weekday.toUpperCase()}
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9B782E]/10 border border-[#9B782E]/30 text-xs sm:text-sm font-sans font-semibold text-[#6B4F1A]">
              <Clock className="w-4 h-4 text-[#C5A059]" />
              <span>Guest Arrival: {reception.time}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B33951]/10 border border-[#B33951]/30 text-xs sm:text-sm font-sans font-semibold text-[#8C1D40]">
              <MapPin className="w-4 h-4 text-[#B33951]" />
              <span>Eden Garden &bull; Indore</span>
            </div>
          </div>

          <p className="font-cormorant italic text-base sm:text-lg text-[#615650] max-w-2xl mx-auto mt-4 leading-relaxed">
            {reception.invitationText}
          </p>
        </div>

        {/* Program Highlights for the Reception Evening */}
        <div className="mt-10">
          <div className="text-center mb-8">
            <h4 className="font-tenor text-xs uppercase tracking-[0.3em] text-[#9B782E] font-semibold">
              Evening Program &amp; Highlights
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {reception.highlights.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-[#FFFFFF]/90 p-6 rounded-2xl border-2 border-[#D4AF37]/60 shadow-md flex flex-col justify-between text-center hover:scale-[1.02] transition-transform group"
              >
                <div>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FFF2B2] to-[#E6CA65] flex items-center justify-center mx-auto mb-4 border border-[#D4AF37] shadow-sm group-hover:rotate-6 transition-transform">
                    {getIcon(item.icon)}
                  </div>
                  <h5 className="font-cormorant text-2xl font-bold text-[#2C2420]">
                    {item.title}
                  </h5>
                  <p className="font-sans text-xs text-[#B33951] font-semibold my-2">
                    {item.time}
                  </p>
                  <p className="font-cormorant text-base text-[#615650] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="mt-10 pt-6 border-t border-[#D4AF37]/30 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleAddToCalendar}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#9B782E] text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer group"
          >
            <CalendarPlus className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span>Add Reception to Google Calendar</span>
          </button>
        </div>

      </motion.div>
    </section>
  );
}
