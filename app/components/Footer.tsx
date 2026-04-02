import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

const iconLinks = [
  {
    href: "https://github.com/Zoakkz",
    icon: FaGithub,
    label: "GitHub",
    glow: "rgba(255,255,255,0.25)",
    hoverColor: "hover:text-white hover:border-zinc-400",
  },
  {
    href: "https://www.linkedin.com/in/zach-bai-ab999a31b/",
    icon: FaLinkedin,
    label: "LinkedIn",
    glow: "rgba(59,130,246,0.5)",
    hoverColor: "hover:text-blue-400 hover:border-blue-400",
  },
  {
    href: "mailto:zachbai2008@outlook.com",
    icon: FaEnvelope,
    label: "Email",
    glow: "rgba(248,113,113,0.5)",
    hoverColor: "hover:text-red-400 hover:border-red-400",
  },
  {
    href: "/Academic Resume.pdf",
    icon: FaFileAlt,
    label: "Resume",
    glow: "rgba(74,222,128,0.5)",
    hoverColor: "hover:text-green-400 hover:border-green-400",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-800/60 px-12 py-10 max-w-5xl mx-auto">
      {/* Subtle top glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)",
        }}
      />

      <div className="flex flex-col items-center gap-6">
        {/* Icons */}
        <div className="flex gap-4">
          {iconLinks.map(({ href, icon: Icon, label, glow, hoverColor }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              title={label}
              className={`group relative p-3 rounded-xl border border-zinc-800 text-zinc-500 transition-all duration-200 hover:scale-110 ${hoverColor}`}
              style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
            >
              <Icon size={18} />
              <span
                className="absolute inset-x-1 -bottom-2 h-3 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: glow }}
              />
            </a>
          ))}
        </div>

        {/* Rights */}
        <p className="text-zinc-600 text-xs font-mono tracking-widest">
          © {new Date().getFullYear()} Zach Bai · All rights reserved
        </p>
      </div>
    </footer>
  );
}
