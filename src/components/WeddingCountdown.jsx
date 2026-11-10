import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Heart } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

/**
 * WeddingCountdown - Live countdown to 24 November 2026
 * Updates every second with luxury gold cards and celebration message fallback
 */
export default function WeddingCountdown() {
  const targetDate = new Date(weddingConfig.weddingDate.countdownTarget).getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPast: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-16 px-4 max-w-4xl mx-auto text-center">
      
      {/* Header Accent */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <div className="flex items-center justify-center gap-2 text-[#9B782E] mb-2">
          <Clock className="w-4 h-4 text-[#C5A059]" />
          <span className="font-tenor text-xs uppercase tracking-[0.3em]">
            THE WAIT IS ALMOST OVER
          </span>
          <Clock className="w-4 h-4 text-[#C5A059]" />
        </div>
        <h2 className="font-script text-4xl sm:text-5xl text-[#2C2420] tracking-wide">
          Until We Say &ldquo;I Do&rdquo;
        </h2>
        <p className="font-cormorant italic text-lg sm:text-xl text-[#7A6F68] mt-1">
          {weddingConfig.weddingDate.fullDateString} &bull; {weddingConfig.weddingDate.weekday}
        </p>
      </motion.div>

      {/* Countdown Grid or Celebration Message */}
      {timeLeft.isPast ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 rounded-3xl bg-gradient-to-r from-[#FAF6F0] via-[#FFFDF9] to-[#FAF6F0] border-2 border-[#D4AF37] shadow-xl"
        >
          <Heart className="w-8 h-8 text-[#B33951] fill-[#B33951] mx-auto mb-2 animate-bounce" />
          <h3 className="font-script text-4xl sm:text-5xl text-[#B33951] font-bold">
            Today is Our Wedding Day!
          </h3>
          <p className="font-cormorant italic text-xl text-[#7A6F68] mt-2 max-w-md mx-auto">
            Jay &amp; Nimisha are celebrating their wedding reception at Eden Garden. Thank you for showering your heartfelt love and blessings!
          </p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
          {units.map((unit, idx) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative rounded-2xl bg-gradient-to-b from-[#FFFDF9] to-[#FAF6F0] border border-[#D4AF37]/50 p-5 shadow-lg group hover:border-[#D4AF37] hover:shadow-xl transition-all"
            >
              {/* Corner Accents */}
              <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t border-l border-[#C5A059]/60" />
              <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t border-r border-[#C5A059]/60" />
              <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b border-l border-[#C5A059]/60" />
              <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b border-r border-[#C5A059]/60" />

              {/* Number Value */}
              <div className="font-cinzel text-3xl sm:text-5xl font-bold gold-text-gradient tracking-tight">
                {String(unit.value).padStart(2, '0')}
              </div>

              {/* Unit Label */}
              <div className="font-tenor text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#7A6F68] mt-2 group-hover:text-[#9B782E] transition-colors">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Decorative Footnote */}
      <div className="mt-8 flex items-center justify-center gap-3 text-[#D4AF37]">
        <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
        <Heart className="w-3.5 h-3.5 fill-[#B33951] text-[#B33951]" />
        <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
      </div>
    </section>
  );
}
