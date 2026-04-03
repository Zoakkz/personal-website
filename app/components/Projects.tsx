"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaLeaf,
  FaFlask,
  FaRecycle,
} from "react-icons/fa";
import { SiPython, SiOpencv } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import {
  GiSwordsPower,
  GiTreasureMap,
  GiDragonHead,
  GiSpaceSuit,
  GiLaserGun,
  GiAsteroid,
} from "react-icons/gi";

type Tech = { label: string; icon: React.ElementType; color: string };
type Stat = { value: string; label: string };

type Project = {
  name: string;
  tagline: string;
  description: string;
  logo: string | null;
  logoEmoji?: string;
  link: string;
  linkLabel: string;
  linkIcon: React.ElementType;
  accent: string;
  accentSoft: string;
  accentBorder: string;
  badge: string;
  tech: Tech[];
  stats: Stat[];
};

const projects: Project[] = [
  {
    name: "TrueForm",
    tagline: "AI-powered workout form analysis",
    description:
      "A computer vision app that uses your camera to track workout movements in real time. Counts reps, estimates calories burned, and gives live feedback on your form using pose detection.",
    logo: "/trueform-logo.png",
    link: "https://github.com/Zoakkz/TrueForm",
    linkLabel: "View on GitHub",
    linkIcon: FaGithub,
    accent: "#ef4444",
    accentSoft: "rgba(239,68,68,0.12)",
    accentBorder: "rgba(239,68,68,0.3)",
    badge: "open source",
    tech: [
      { label: "Python", icon: SiPython, color: "#3b82f6" },
      { label: "MediaPipe", icon: TbBrandFramerMotion, color: "#a78bfa" },
      { label: "OpenCV", icon: SiOpencv, color: "#22c55e" },
    ],
    stats: [
      { value: "Real-time", label: "Pose Detection" },
      { value: "Multiple", label: "Exercises" },
      { value: "Live", label: "Form Feedback" },
    ],
  },
  {
    name: "Biogas Buddy",
    tagline: "Food waste → clean energy for schools",
    description:
      "A biogas system that captures methane from school cafeteria food waste and reuses it as fuel, supplementing the school's natural gas supply. Includes fermentation via methanogenic microbes, safety valves, fertilizer extraction, and cafeteria-ready piping — recognized by HDSB and TMU.",
    logo: null,
    logoEmoji: "♻",
    link: "https://www.linkedin.com/posts/amandayl-he_after-wrapping-up-an-amazing-month-at-shad-activity-7225254462725009408-XU_u",
    linkLabel: "View on LinkedIn",
    linkIcon: FaLinkedin,
    accent: "#22c55e",
    accentSoft: "rgba(34,197,94,0.12)",
    accentBorder: "rgba(34,197,94,0.3)",
    badge: "SHAD Canada",
    tech: [
      { label: "Bioengineering", icon: FaFlask, color: "#a78bfa" },
      { label: "Sustainability", icon: FaLeaf, color: "#22c55e" },
      { label: "Waste Reduction", icon: FaRecycle, color: "#3b82f6" },
    ],
    stats: [
      { value: "560k kg", label: "Food Waste / Year (ON)" },
      { value: "Top 3", label: "SHAD Capstone" },
      { value: "HDSB", label: "Approved" },
    ],
  },
  {
    name: "League of Swords",
    tagline: "Top-down RPG built from scratch in Java",
    description:
      "A fully hand-crafted top-down RPG where you gather resources, buy increasingly powerful swords, and battle through distinct areas — each guarded by a custom-designed boss. Five unique bosses stand between you and victory, each with their own attack patterns.",
    logo: null,
    logoEmoji: "⚔",
    link: "https://github.com/Zoakkz/League-Of-Swords",
    linkLabel: "View on GitHub",
    linkIcon: FaGithub,
    accent: "#f59e0b",
    accentSoft: "rgba(245,158,11,0.12)",
    accentBorder: "rgba(245,158,11,0.3)",
    badge: "Grade 12 FSE",
    tech: [
      { label: "Java", icon: GiSwordsPower, color: "#f59e0b" },
      { label: "Swing", icon: GiTreasureMap, color: "#ec4899" },
      { label: "OOP Design", icon: GiDragonHead, color: "#ef4444" },
    ],
    stats: [
      { value: "5", label: "Custom Bosses" },
      { value: "Top-down", label: "Game Engine" },
      { value: "100%", label: "From Scratch" },
    ],
  },
  {
    name: "Space Invaders",
    tagline: "Classic arcade game recreated in Java",
    description:
      "A faithful recreation of the iconic 1978 arcade game Space Invaders, built entirely from scratch using Java Swing. Includes enemy waves, player movement, shooting mechanics, lives system, and progressive difficulty.",
    logo: null,
    logoEmoji: "👾",
    link: "https://github.com/Zoakkz/Space-Invaders",
    linkLabel: "View on GitHub",
    linkIcon: FaGithub,
    accent: "#6366f1",
    accentSoft: "rgba(99,102,241,0.12)",
    accentBorder: "rgba(99,102,241,0.3)",
    badge: "arcade",
    tech: [
      { label: "Java", icon: GiSpaceSuit, color: "#6366f1" },
      { label: "Swing", icon: GiLaserGun, color: "#a78bfa" },
      { label: "Game Loop", icon: GiAsteroid, color: "#ec4899" },
    ],
    stats: [
      { value: "Waves", label: "Enemy Scaling" },
      { value: "Classic", label: "Arcade Mechanics" },
      { value: "Java", label: "From Scratch" },
    ],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-60px" });
  const LinkIcon = project.linkIcon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative rounded-2xl overflow-hidden cursor-default"
      style={{
        border: `1px solid ${hovered ? project.accentBorder : "rgba(255,255,255,0.07)"}`,
        background: "rgba(255,255,255,0.02)",
        transition: "border-color 0.4s ease, box-shadow 0.4s ease",
        boxShadow: hovered
          ? `0 0 60px ${project.accent}18, 0 20px 60px rgba(0,0,0,0.4)`
          : "0 4px 24px rgba(0,0,0,0.2)",
      }}
    >
      {/* Spotlight follow */}
      <div
        className="absolute pointer-events-none z-0 rounded-full"
        style={{
          width: 500,
          height: 500,
          left: mousePos.x - 250,
          top: mousePos.y - 250,
          background: `radial-gradient(circle, ${project.accent}0e 0%, transparent 65%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row gap-0">
        {/* Left — logo panel */}
        <div
          className="relative md:w-56 shrink-0 flex items-center justify-center p-10 md:p-0"
          style={{
            background: hovered
              ? `radial-gradient(circle at center, ${project.accent}20, rgba(0,0,0,0.3))`
              : "rgba(0,0,0,0.2)",
            borderRight: "1px solid rgba(255,255,255,0.06)",
            transition: "background 0.5s ease",
            minHeight: 200,
          }}
        >
          {/* Pulsing halo */}
          <motion.div
            animate={
              hovered
                ? { scale: [1, 1.2, 1], opacity: [0.1, 0.22, 0.1] }
                : { scale: 1, opacity: 0 }
            }
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-32 h-32 rounded-full pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${project.accent}55, transparent 70%)`,
            }}
          />

          <motion.div
            animate={hovered ? { scale: [1.04, 1, 1.04] } : { scale: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            {project.logo ? (
              <Image
                src={project.logo}
                alt={project.name}
                width={88}
                height={88}
                style={{
                  filter: hovered
                    ? `drop-shadow(0 0 22px ${project.accent}99)`
                    : "drop-shadow(0 0 8px rgba(0,0,0,0.5))",
                  transition: "filter 0.4s ease",
                }}
              />
            ) : (
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl"
                style={{
                  background: hovered
                    ? project.accentSoft
                    : "rgba(255,255,255,0.04)",
                  border: `1px solid ${hovered ? project.accentBorder : "rgba(255,255,255,0.08)"}`,
                  filter: hovered
                    ? `drop-shadow(0 0 22px ${project.accent}66)`
                    : "none",
                  transition: "all 0.4s ease",
                }}
              >
                {project.logoEmoji}
              </div>
            )}
          </motion.div>
        </div>

        {/* Right — content */}
        <div className="flex-1 p-8 flex flex-col gap-4">
          {/* Header */}
          <div>
            <div className="flex items-center gap-3 mb-1 flex-wrap">
              <h3 className="text-2xl font-bold dark:text-white text-zinc-900 tracking-tight">
                {project.name}
              </h3>
              <span
                className="text-xs font-mono px-2.5 py-0.5 rounded-full"
                style={{
                  color: project.accent,
                  background: project.accentSoft,
                  border: `1px solid ${project.accentBorder}`,
                }}
              >
                {project.badge}
              </span>
            </div>
            <p className="text-sm font-mono" style={{ color: project.accent }}>
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-zinc-400 leading-relaxed text-sm">
            {project.description}
          </p>

          {/* Stats */}
          <div className="flex gap-6 flex-wrap">
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <p className="dark:text-white text-zinc-900 font-bold text-base leading-none mb-1">
                  {stat.value}
                </p>
                <p className="text-zinc-500 text-xs font-mono">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Tech + link */}
          <div
            className="flex items-center justify-between flex-wrap gap-4 mt-auto pt-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex gap-2 flex-wrap">
              {project.tech.map((t) => {
                const Icon = t.icon;
                return (
                  <span
                    key={t.label}
                    className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg"
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <Icon size={12} style={{ color: t.color }} />
                    {t.label}
                  </span>
                );
              })}
            </div>

            <motion.a
              href={project.link}
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-mono"
              style={{
                color: "rgba(255,255,255,0.7)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "background 0.2s ease, border-color 0.2s ease",
              }}
            >
              <LinkIcon size={15} />
              <span className="group-hover:text-white transition-colors duration-200">
                {project.linkLabel}
              </span>
              <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors duration-200">
                ↗
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="relative px-12 max-w-5xl mx-auto py-24">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-3"
      >
        <h2 className="text-4xl font-bold dark:text-white text-zinc-900">
          Projects
        </h2>
        <div className="flex-1 h-px bg-zinc-800" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-zinc-500 text-sm font-mono mb-10"
      >
        <span className="text-indigo-400">~/</span> things I've built
      </motion.p>

      <div className="flex flex-col gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
