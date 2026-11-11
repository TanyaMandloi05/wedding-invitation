import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Flower2, Calendar, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { weddingConfig } from '../data/weddingConfig';

/**
 * ScratchReveal - Ultra-smooth Canvas scratch-to-reveal wedding date interaction
 * Fully optimized for mobile thumbs and desktop mice with accurate coordinate mapping,
 * continuous stroke interpolation, real-time threshold reveal, and Light/Dark royal styling.
 */
export default function ScratchReveal() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const lastPointRef = useRef(null);
  const lastWidthRef = useRef(0);
  const strokeCountRef = useRef(0);
  const isCheckingRef = useRef(false);

  const [isScratched, setIsScratched] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  // Initialize Canvas Scratch Surface in native pixel buffer
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    lastWidthRef.current = rect.width;
    strokeCountRef.current = 0;

    // Buffer dimensions
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    const w = canvas.width;
    const h = canvas.height;

    // Draw Luxurious Champagne-Gold Metallic Scratch Surface
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#E6CA65');
    grad.addColorStop(0.3, '#D4AF37');
    grad.addColorStop(0.5, '#FFF2B2');
    grad.addColorStop(0.7, '#C5A059');
    grad.addColorStop(1, '#9B782E');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Subtle ornamental sparkle pattern
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    for (let i = 0; i < 35; i++) {
      const rx = (Math.sin(i * 77) * 0.5 + 0.5) * w;
      const ry = (Math.cos(i * 41) * 0.5 + 0.5) * h;
      ctx.beginPath();
      ctx.arc(rx, ry, (i % 3) * dpr + 2 * dpr, 0, Math.PI * 2);
      ctx.fill();
    }

    // Centered Scratch Prompt Text on the metallic surface
    ctx.fillStyle = '#4A3414';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `700 ${Math.round(13 * dpr)}px "Montserrat", sans-serif`;
    ctx.fillText('SCRATCH WITH THUMB OR MOUSE', w / 2, h / 2 - 14 * dpr);

    ctx.fillStyle = '#6B4A1D';
    ctx.font = `600 ${Math.round(12 * dpr)}px "Tenor Sans", sans-serif`;
    ctx.fillText('Swipe gently to reveal our wedding date', w / 2, h / 2 + 14 * dpr);

    // Delicate Outer Border on Canvas
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.lineWidth = 3 * dpr;
    ctx.strokeRect(6 * dpr, 6 * dpr, w - 12 * dpr, h - 12 * dpr);
  }, []);

  // Initialize on mount
  useEffect(() => {
    initCanvas();

    const handleResize = () => {
      if (isScratched || !containerRef.current) return;
      const currentWidth = containerRef.current.getBoundingClientRect().width;
      if (Math.abs(currentWidth - lastWidthRef.current) > 25) {
        initCanvas();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initCanvas, isScratched]);

  // Trigger celebration and complete reveal
  const triggerFullReveal = useCallback(() => {
    setIsScratched(true);

    confetti({
      particleCount: 90,
      spread: 85,
      origin: { y: 0.65 },
      colors: ['#D4AF37', '#B33951', '#F4D3D7', '#FAF6F0'],
    });
  }, []);

  // Check cleared percentage with sampling
  const checkScratchPercentage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || isScratched || isCheckingRef.current) return;

    isCheckingRef.current = true;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const width = canvas.width;
    const height = canvas.height;

    const sampleStep = Math.max(10, Math.round(width / 40));
    const imgData = ctx.getImageData(0, 0, width, height);
    const data = imgData.data;
    let transparentCount = 0;
    let totalSamples = 0;

    for (let y = 0; y < height; y += sampleStep) {
      for (let x = 0; x < width; x += sampleStep) {
        const index = (y * width + x) * 4;
        totalSamples++;
        if (data[index + 3] < 128) {
          transparentCount++;
        }
      }
    }

    const percentage = Math.round((transparentCount / totalSamples) * 100);
    isCheckingRef.current = false;

    // Friendly 20% threshold: reveals quickly after a few thumb swipes
    if (percentage >= 20 && !isScratched) {
      triggerFullReveal();
    }
  }, [isScratched, triggerFullReveal]);

  // Smooth scratch interpolation between pointer coordinates
  const scratchTo = (clientX, clientY, isStart = false) => {
    const canvas = canvasRef.current;
    if (!canvas || isScratched) return;

    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const currentX = (clientX - rect.left) * scaleX;
    const currentY = (clientY - rect.top) * scaleY;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.globalCompositeOperation = 'destination-out';

    const strokeWidth = 38 * scaleX;

    if (isStart || !lastPointRef.current) {
      ctx.beginPath();
      ctx.arc(currentX, currentY, strokeWidth / 2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.lineWidth = strokeWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
      ctx.lineTo(currentX, currentY);
      ctx.stroke();
    }

    lastPointRef.current = { x: currentX, y: currentY };
    strokeCountRef.current++;

    // Periodically check percentage or auto-reveal after active swiping
    if (strokeCountRef.current % 12 === 0) {
      checkScratchPercentage();
    }
  };

  const handlePointerDown = (e) => {
    e.preventDefault();
    try {
      e.target.setPointerCapture?.(e.pointerId);
    } catch {}
    setIsDrawing(true);
    scratchTo(e.clientX, e.clientY, true);
  };

  const handlePointerMove = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    scratchTo(e.clientX, e.clientY, false);
  };

  const handlePointerUp = (e) => {
    if (!isDrawing) return;
    try {
      e.target.releasePointerCapture?.(e.pointerId);
    } catch {}
    setIsDrawing(false);
    lastPointRef.current = null;
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
        
        <h2 className="font-cormorant text-2xl sm:text-4xl text-[#2C2420] font-medium tracking-wide">
          Every Beautiful Story Deserves a Special Date...
        </h2>
        
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

          {/* Hidden Content Revealed Underneath */}
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
            <p className="font-script text-3xl sm:text-4xl text-[#B33951] mt-1 font-semibold leading-[1.3] pt-2 pb-1 overflow-visible">
              {weddingConfig.couple.groom} &amp; <span className="inline-block text-[1.12em]">N</span>imisha
            </p>
            <p className="font-sans text-[10px] tracking-widest uppercase text-[#7A6F68] mt-2">
              Eden Garden &bull; Indore, India
            </p>
          </div>

          {/* Interactive Scratch Canvas Overlay with touch-none */}
          <canvas
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className={`absolute inset-0 w-full h-full rounded-2xl touch-none transition-opacity duration-700 cursor-crosshair z-10 ${
              isScratched ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            style={{ touchAction: 'none' }}
          />
        </div>

        {/* Clean Helper & Reveal Action */}
        <div className="mt-3.5 flex items-center justify-between text-xs text-[#7A6F68] px-2 font-sans">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{isScratched ? 'Date Revealed!' : 'Swipe card to unveil'}</span>
          </span>

          {!isScratched && (
            <button
              onClick={triggerFullReveal}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 text-[#9B782E] hover:text-[#B33951] text-xs font-semibold tracking-wider transition-colors cursor-pointer border border-[#D4AF37]/40 active:scale-95"
            >
              <span>Reveal Date</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
