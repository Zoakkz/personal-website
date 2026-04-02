import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

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

      {/* Content */}
      <div className="relative z-10">
        <p className="text-zinc-400 mb-3 tracking-widest text-sm uppercase">
          Hi, I'm
        </p>

        <h1 className="text-8xl font-bold mb-4 dark:text-white text-zinc-900 tracking-tight">
          Zach Bai
        </h1>

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

        {/* Icon buttons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Zoakkz"
            target="_blank"
            className="p-3 rounded-xl border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-400 transition-all duration-200 hover:scale-110"
            style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            title="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/zach-bai-ab999a31b/"
            target="_blank"
            className="p-3 rounded-xl border border-zinc-700 text-zinc-400 hover:text-blue-400 hover:border-blue-400 transition-all duration-200 hover:scale-110"
            style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            title="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="mailto:zachbai2008@outlook.com"
            className="p-3 rounded-xl border border-zinc-700 text-zinc-400 hover:text-red-400 hover:border-red-400 transition-all duration-200 hover:scale-110"
            style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            title="Email"
          >
            <FaEnvelope size={22} />
          </a>
          <a
            href="/Academic Resume.pdf"
            target="_blank"
            className="p-3 rounded-xl border border-zinc-700 text-zinc-400 hover:text-green-400 hover:border-green-400 transition-all duration-200 hover:scale-110"
            style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            title="Resume"
          >
            <FaFileAlt size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
