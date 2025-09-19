"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/bg/img1.jpg", "/bg/img2.jpg", "/bg/img3.jpg"];

export default function Hero() {
  const [i, setI] = useState(0);
  const [theme, setTheme] = useState("light");

  // Slideshow
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % images.length), 7000);
    return () => clearInterval(t);
  }, []);

  // Gestione tema persistente
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <header className="relative min-h-[100svh] text-white flex items-center justify-center overflow-hidden">
      {/* Slideshow molto tenue dietro */}
      <AnimatePresence>
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.18 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          style={{
            backgroundImage: `url(${images[i]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Overlay gradiente elegante */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-blue-950/60 to-black/80" />

      {/* Toggle Tema in alto a destra */}
      <button
        onClick={toggleTheme}
        className="absolute top-5 right-5 z-20 w-11 h-11 rounded-xl flex items-center justify-center
                   bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-600
                   shadow-xl backdrop-blur-md transition-transform hover:scale-110"
        aria-label="Toggle tema"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      {/* Contenuto centrale */}
      <div className="relative z-10 container">
        <div className="flex flex-col items-center text-center gap-5 md:gap-6">
          <img
            src="/logo.png"
            alt="Ornella Amedeo Logo"
            className="h-28 md:h-36 w-auto drop-shadow-[0_0_30px_rgba(0,0,0,.7)]"
          />
          <h1 className="text-5xl md:text-7xl font-extrabold text-amber-400 dark:text-amber-300 tracking-wide drop-shadow-lg">
            Ornella Amedeo
          </h1>
          <p className="text-base md:text-xl text-slate-200/90 dark:text-slate-300/90 italic leading-relaxed max-w-3xl drop-shadow">
            Servizi professionali di mediazione, consulenza e formazione per
            clienti privati, professionisti e aziende.
          </p>
        </div>
      </div>
    </header>
  );
}
