"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiOpenjdk,
  SiCplusplus,
  SiHtml5,
} from "react-icons/si";
import { FiBox } from "react-icons/fi";

const skills = [
  {
    name: "Python",
    icon: SiPython,
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.1)",
    border: "rgba(59,130,246,0.25)",
    desc: "Primary language — CV, ML, scripting",
    level: 90,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#6366f1",
    bg: "rgba(99,102,241,0.1)",
    border: "rgba(99,102,241,0.25)",
    desc: "Next.js, React, type-safe frontends",
    level: 75,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#eab308",
    bg: "rgba(234,179,8,0.1)",
    border: "rgba(234,179,8,0.25)",
    desc: "DOM, async, browser tooling",
    level: 78,
  },
  {
    name: "Java",
    icon: SiOpenjdk,
    color: "#f97316",
    bg: "rgba(249,115,22,0.1)",
    border: "rgba(249,115,22,0.25)",
    desc: "OOP fundamentals, FRC robotics",
    level: 65,
  },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.1)",
    border: "rgba(139,92,246,0.25)",
    desc: "Systems, competitive programming",
    level: 55,
  },
  {
    name: "HTML / CSS",
    icon: SiHtml5,
    color: "#ec4899",
    bg: "rgba(236,72,153,0.1)",
    border: "rgba(236,72,153,0.25)",
    desc: "Semantic markup, animations, layout",
    level: 88,
  },
  {
    name: "CAD",
    icon: FiBox,
    color: "#14b8a6",
    bg: "rgba(20,184,166,0.1)",
    border: "rgba(20,184,166,0.25)",
    desc: "Onshape — FRC mechanisms & parts",
    level: 60,
  },
];

function SkillCard({
  skill,
  index,
}: {
  skill: (typeof skills)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const Icon = skill.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl p-5 flex flex-col gap-3 overflow-hidden cursor-default"
      style={{
        backgroundColor: hovered ? skill.bg : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? skill.border : "rgba(255,255,255,0.07)"}`,
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition:
          "transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        boxShadow: hovered ? `0 12px 40px ${skill.color}18` : "none",
      }}
    >
      {/* Corner glow */}
      <div
        className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl pointer-events-none"
        style={{
          background: skill.color,
          opacity: hovered ? 0.15 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Icon + name */}
      <div className="flex items-center gap-3 relative z-10">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{
            backgroundColor: hovered
              ? `${skill.color}28`
              : "rgba(255,255,255,0.05)",
            border: `1px solid ${hovered ? skill.color + "55" : "rgba(255,255,255,0.08)"}`,
            transition: "background-color 0.3s ease, border-color 0.3s ease",
          }}
        >
          <Icon
            size={20}
            style={{
              color: hovered ? skill.color : "rgba(255,255,255,0.45)",
              transition: "color 0.3s ease",
            }}
          />
        </div>
        <span
          className="font-mono text-sm font-medium tracking-wide"
          style={{
            color: hovered ? skill.color : "rgba(255,255,255,0.65)",
            transition: "color 0.3s ease",
          }}
        >
          {skill.name}
        </span>
      </div>

      {/* Description */}
      <p
        className="text-xs leading-relaxed relative z-10"
        style={{
          color: hovered ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.28)",
          transition: "color 0.3s ease",
        }}
      >
        {skill.desc}
      </p>

      {/* Level bar */}
      <div className="relative z-10">
        <div
          className="h-px w-full rounded-full overflow-hidden"
          style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{
              duration: 1.2,
              delay: index * 0.07 + 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${skill.color}60, ${skill.color})`,
              boxShadow: hovered ? `0 0 8px ${skill.color}88` : "none",
              transition: "box-shadow 0.3s ease",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <section id="skills" className="relative px-12 max-w-5xl mx-auto py-24">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-3"
      >
        <h2 className="text-4xl font-bold dark:text-white text-zinc-900">
          Skills
        </h2>
        <div className="flex-1 h-px bg-zinc-800" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-zinc-500 text-sm font-mono mb-10"
      >
        <span className="text-indigo-400">~/</span> hover to explore
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </section>
  );
}
