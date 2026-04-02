import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

const iconLinks = [
  {
    href: "https://github.com/Zoakkz",
    icon: FaGithub,
    label: "GitHub",
    glow: "rgba(255,255,255,0.25)",
    hoverText: "hover:text-white hover:border-zinc-400",
  },
  {
    href: "https://www.linkedin.com/in/zach-bai-ab999a31b/",
    icon: FaLinkedin,
    label: "LinkedIn",
    glow: "rgba(59,130,246,0.5)",
    hoverText: "hover:text-blue-400 hover:border-blue-400",
  },
  {
    href: "mailto:zachbai2008@outlook.com",
    icon: FaEnvelope,
    label: "Email",
    glow: "rgba(248,113,113,0.5)",
    hoverText: "hover:text-red-400 hover:border-red-400",
  },
  {
    href: "/Academic Resume.pdf",
    icon: FaFileAlt,
    label: "Resume",
    glow: "rgba(74,222,128,0.5)",
    hoverText: "hover:text-green-400 hover:border-green-400",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid-bg relative min-h-screen flex flex-col justify-center px-12 max-w-5xl mx-auto overflow-hidden"
    >
      {/* Glow blobs */}
      <div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.15), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <p className="text-zinc-400 mb-3 tracking-widest text-sm uppercase">
          Hi, I'm
        </p>

        {/* Animated gradient name */}
        <h1
          className="text-8xl font-bold mb-4 tracking-tight animated-name"
          style={{
            background:
              "linear-gradient(120deg, #ffffff 0%, #a78bfa 30%, #818cf8 55%, #ffffff 80%, #c4b5fd 100%)",
            backgroundSize: "250% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 5s ease-in-out infinite",
          }}
        >
          Zach Bai
        </h1>

        <style>{`
          @keyframes shimmer {
            0%   { background-position: 100% 50%; }
            50%  { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}</style>

        <h2
          className="text-2xl font-medium mb-6"
          style={{
            background: "linear-gradient(90deg, #6366f1, #8b5cf6, #a78bfa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Incoming TrackOne Engineering @ UofT
        </h2>

        <p className="text-zinc-400 max-w-xl mb-10 leading-relaxed text-lg">
          This site is a collection of my projects, experiences, and other
          things I've done. Feel free to look around!
        </p>

        {/* Icon buttons with glow */}
        <div className="flex gap-4">
          {iconLinks.map(({ href, icon: Icon, label, glow, hoverText }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              title={label}
              className={`group relative p-3 rounded-xl border border-zinc-700 text-zinc-400 transition-all duration-200 hover:scale-110 ${hoverText}`}
              style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            >
              <Icon size={22} />
              {/* Glow underneath */}
              <span
                className="absolute inset-x-1 -bottom-2 h-3 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: glow }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
