"use client";

import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [dark]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-4 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(9, 9, 18, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      {/* Logo */}
      <button
        onClick={() => scrollTo("hero")}
        className="px-3 py-1.5 rounded-lg border border-zinc-700 text-white font-bold text-sm tracking-widest hover:border-zinc-400 hover:bg-zinc-800 transition-all duration-200"
      >
        ZB
      </button>

      {/* Right side */}
      <div className="flex items-center gap-6">
        {["projects", "about", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => scrollTo(section)}
            className="text-zinc-400 hover:text-white text-sm capitalize transition-colors duration-200"
          >
            {section}
          </button>
        ))}
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-lg border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-400 transition-all duration-200"
        >
          {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
        </button>
      </div>
    </nav>
  );
}
