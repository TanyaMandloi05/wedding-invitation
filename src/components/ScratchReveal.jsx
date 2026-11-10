import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Flower2, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';
import { weddingConfig } from '../data/weddingConfig';

/**
 * ScratchReveal - Real Canvas-based scratch-to-reveal wedding date interaction
 * Supports mouse & touch, clears at ~50% with confetti burst and smooth fade
 */
export default function ScratchReveal() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isScratched, setIsScratched] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);

  // Initialize Canvas Scratch Surface
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    // Draw Luxurious Champagne-Gold Metallic Scratch Surface
    const grad = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    grad.addColorStop(0, '#E6CA65');
    grad.addColorStop(0.3, '#D4AF37');
    grad.addColorStop(0.5, '#FFF2B2');
    grad.addColorStop(0.7, '#C5A059');
    grad.addColorStop(1, '#9B782E');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Add subtle ornamental sparkle pattern on top of scratch surface
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    for (let i = 0; i < 40; i++) {
      const rx = (Math.sin(i * 99) * 0.5 + 0.5) * rect.width;
      const ry = (Math.cos(i * 33) * 0.5 + 0.5) * rect.height;
      ctx.beginPath();
      ctx.arc(rx, ry, (i % 3) + 1.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Centered Scratch Prompt Text on the surface
    ctx.fillStyle = '#4A3414';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '600 13px "Montserrat", sans-serif';
    ctx.letterSpacing = '2px';
    ctx.fillText('SCRATCH WITH TOUCH OR MOUSE', rect.width / 2, rect.height / 2 - 12);
    
    ctx.fillStyle = '#6B4A1D';
    ctx.font = '400 12px "Tenor Sans", sans-serif';
    ctx.fillText('Tap & drag to reveal our special day', rect.width / 2, rect.height / 2 + 12);

    // Outer Border on Canvas
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.lineWidth = 3;
    ctx.strokeRect(6, 6, rect.width - 12, rect.height - 12);
  }, []);

  useEffect(() => {
    initCanvas();
    const handleResize = () => {
      if (!isScratched) {
        initCanvas();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initCanvas, isScratched]);

  // Check cleared percentage
  const checkScratchPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas || isScratched) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Sample a grid of pixels for optimal performance
    const sampleStep = 8;
    const imgData = ctx.getImageData(0, 0, width, height);
    const data = imgData.data;
    let transparentCount = 0;
    let totalSamples = 0;

    for (let y = 0; y < height; y += sampleStep) {
      for (let x = 0; x < width; x += sampleStep) {
        const index = (y * width + x) * 4;
        totalSamples++;
        if (data[index + 3] === 0) {
          transparentCount++;
        }
      }
    }

    const percentage = Math.round((transparentCount / totalSamples) * 100);
    setScratchPercent(percentage);

    // Threshold ~50%
    if (percentage >= 45 && !isScratched) {
      triggerFullReveal();
    }
  };

  const triggerFullReveal = () => {
    setIsScratched(true);
    // Fire celebratory confetti
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.65 },
      colors: ['#D4AF37', '#B33951', '#F4D3D7', '#FAF6F0'],
    });
  };

  // Scratch Drawing Handlers
  const scratch = (clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas || isScratched) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const dpr = window.devicePixelRatio || 1;
    const ctx = canvas.getContext('2d');
    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 28, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };

  const handlePointerDown = (e) => {
    setIsDrawing(true);
    scratch(e.clientX, e.clientY);
  };

  const handlePointerMove = (e) => {
    if (!isDrawing) return;
    scratch(e.clientX, e.clientY);
  };

  const handlePointerUp = () => {
    setIsDrawing(false);
    checkScratchPercentage();
  };

  return (
    <section className="relative py-16 px-4 max-w-4xl mx-auto text-center overflow-hidden">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <div className="flex items-center justify-center gap-2 text-[#9B782E] mb-2">
          <Flower2 className="w-4 h-4 text-[#C5A059]" />
          <span className="font-tenor text-xs uppercase tracking-[0.3em]">
            A Date Written In Destiny
          </span>
          <Flower2 className="w-4 h-4 text-[#C5A059]" />
        </div>
        
        {/* Exact Prompt Heading */}
        <h2 className="font-cormorant text-2xl sm:text-4xl text-[#2C2420] font-medium tracking-wide">
          Every Beautiful Story Deserves a Special Date...
        </h2>
        
        {/* Exact Prompt Instruction */}
        <p className="font-tenor text-xs sm:text-sm text-[#9B782E] tracking-widest uppercase mt-2">
          Scratch Here to Discover Our Special Day!
        </p>
      </motion.div>

      {/* Scratch Container Card */}
      <div className="relative max-w-md mx-auto">
        <div
          ref={containerRef}
          className="relative w-full aspect-[16/9] min-h-[220px] rounded-2xl p-6 flex flex-col items-center justify-center bg-gradient-to-br from-[#FFFDF9] via-[#FAF6F0] to-[#F5ECE1] border-2 border-[#D4AF37] shadow-xl overflow-hidden select-none"
        >
          {/* Card Filigree Corners */}
          <div className="absolute top-2.5 left-2.5 w-6 h-6 border-t border-l border-[#C5A059]" />
          <div className="absolute top-2.5 right-2.5 w-6 h-6 border-t border-r border-[#C5A059]" />
          <div className="absolute bottom-2.5 left-2.5 w-6 h-6 border-b border-l border-[#C5A059]" />
          <div className="absolute bottom-2.5 right-2.5 w-6 h-6 border-b border-r border-[#C5A059]" />

          {/* Hidden Content To Reveal Underneath (Exact Prompt Texts) */}
          <div className="flex flex-col items-center justify-center text-center z-0">
            <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#9B782E] mb-1">
              WEDDING RECEPTION DAY
            </span>
            <div className="my-1.5 flex items-center justify-center gap-2">
              <span className="w-6 h-[1px] bg-[#C5A059]" />
              <Calendar className="w-4 h-4 text-[#B33951]" />
              <span className="w-6 h-[1px] bg-[#C5A059]" />
            </div>
            <h3 className="font-cinzel text-2xl sm:text-4xl font-bold tracking-wider text-[#2C2420] gold-shimmer-text my-1">
              {weddingConfig.weddingDate.fullDateString.toUpperCase()}
            </h3>
            <p className="font-script text-3xl sm:text-4xl text-[#B33951] mt-1 font-semibold">
              {weddingConfig.couple.groom} &amp; {weddingConfig.couple.bride}
            </p>
            <p className="font-sans text-[10px] tracking-widest uppercase text-[#7A6F68] mt-2">
              Eden Garden &bull; Indore, India
            </p>
          </div>

          {/* Interactive Scratch Canvas Overlay */}
          <canvas
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            className={`absolute inset-0 w-full h-full rounded-2xl touch-none transition-opacity duration-700 cursor-crosshair z-10 ${
              isScratched ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            style={{ touchAction: 'none' }}
          />
        </div>

        {/* Scratch Progress & Clear Button Helper */}
        <div className="mt-3 flex items-center justify-between text-xs text-[#7A6F68] px-2 font-sans">
          <span>
            {isScratched
              ? 'Date Revealed!'
              : `Scratch progress: ${scratchPercent}% (Scratch ~50% to auto-reveal)`}
          </span>
          {!isScratched && scratchPercent > 10 && (
            <button
              onClick={triggerFullReveal}
              className="text-[#9B782E] hover:text-[#B33951] underline font-medium cursor-pointer"
            >
              Reveal All
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
