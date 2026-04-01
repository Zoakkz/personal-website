"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-5 right-5 z-50 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95"
      style={{
        background: dark
          ? "linear-gradient(135deg, #1e1e2e, #2a2a3e)"
          : "linear-gradient(135deg, #fefefe, #f0f0f0)",
        border: dark ? "1px solid #444466" : "1px solid #ccccdd",
        color: dark ? "#c0c0e0" : "#444466",
        boxShadow: dark
          ? "0 0 12px rgba(120,120,255,0.15), 0 2px 8px rgba(0,0,0,0.4)"
          : "0 0 12px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <span className="text-base">{dark ? "☀️" : "🌙"}</span>
      <span>{dark ? "Light" : "Dark"}</span>
    </button>
  );
}
