import React, { useEffect, useRef } from 'react';

/**
 * FallingPetals - Smooth, organic canvas petal animation
 * Renders drifting rose and cherry blossom petals swaying in the breeze
 */
export default function FallingPetals({ intensity = 'normal', active = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const petalCount = intensity === 'burst' ? 65 : 28;
    const petalColors = [
      'rgba(244, 211, 215, 0.75)', // Soft blush
      'rgba(226, 149, 157, 0.7)',  // Muted rose
      'rgba(247, 230, 214, 0.65)', // Warm champagne
      'rgba(217, 143, 152, 0.6)',  // Deep blush
      'rgba(255, 240, 243, 0.8)',  // Ivory petal
    ];

    const petals = Array.from({ length: petalCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      radiusX: Math.random() * 6 + 6,
      radiusY: Math.random() * 10 + 9,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      speedY: Math.random() * 1.2 + 0.8,
      speedX: Math.random() * 0.8 - 0.4,
      sway: Math.random() * 2 * Math.PI,
      swaySpeed: Math.random() * 0.02 + 0.01,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      opacity: Math.random() * 0.5 + 0.5,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      petals.forEach((petal) => {
        petal.y += petal.speedY;
        petal.sway += petal.swaySpeed;
        petal.x += Math.sin(petal.sway) * 0.8 + petal.speedX;
        petal.rotation += petal.rotationSpeed;

        if (petal.y > canvas.height + 25) {
          petal.y = -20;
          petal.x = Math.random() * canvas.width;
        }
        if (petal.x > canvas.width + 20) {
          petal.x = -15;
        } else if (petal.x < -20) {
          petal.x = canvas.width + 15;
        }

        ctx.save();
        ctx.translate(petal.x, petal.y);
        ctx.rotate(petal.rotation);
        ctx.fillStyle = petal.color;
        ctx.beginPath();
        // Curvature of a flower petal
        ctx.ellipse(0, 0, petal.radiusX, petal.radiusY, 0, 0, Math.PI * 2);
        ctx.fill();

        // Delicate inner petal vein
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 0.7;
        ctx.beginPath();
        ctx.moveTo(0, -petal.radiusY * 0.7);
        ctx.quadraticCurveTo(petal.radiusX * 0.2, 0, 0, petal.radiusY * 0.7);
        ctx.stroke();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [active, intensity]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 w-full h-full"
      aria-hidden="true"
    />
  );
}
