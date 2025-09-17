"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/bg/kenny1.jpg","/bg/kenny2.jpg","/bg/kenny3.jpg"];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(x => (x + 1) % images.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <header className="relative min-h-[100svh] pt-16 text-white flex items-center justify-center overflow-hidden">
      {/* Slideshow molto tenue dietro */}
      <AnimatePresence>
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.18 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          style={{
            backgroundImage: `url(${images[i]})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      </AnimatePresence>

      {/* Velluto + profondità */}
      <div className="absolute inset-0 hero-velvet" />

      {/* Contenuto centrale perfettamente centrato */}
      <div className="relative z-10 container">
        <div className="flex flex-col items-center text-center gap-5 md:gap-6">
          <img
            src="/logo.png"
            alt="Kenny Ramp Logo"
            className="h-28 md:h-36 w-auto drop-shadow-[0_0_24px_rgba(0,0,0,.6)]"
          />
          <h1 className="text-5xl md:text-7xl font-extrabold text-gold tracking-wide text-glow">
            Kenny Ramp
          </h1>
          <p className="text-base md:text-xl text-gray-300/90 italic leading-relaxed max-w-3xl">
            Hip-hop Urban Tech Lo-fi Chill Guardian HipHop Rap Music
          </p>
        </div>
      </div>
    </header>
  );
}
