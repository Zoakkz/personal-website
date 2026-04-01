"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const [time, setTime] = useState("");
  const [marqueePos, setMarqueePos] = useState(0);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const marqueeText =
    "★ Welcome to Zach Bai's Personal Website ★   CS Student ★ Available for Internships ★   Best viewed in Internet Explorer 6.0 at 800x600 resolution ★   ";

  useEffect(() => {
    const id = setInterval(() => {
      setMarqueePos((p) => (p - 1 <= -(marqueeText.length * 6.5) ? 0 : p - 1));
    }, 30);
    return () => clearInterval(id);
  }, [marqueeText.length]);

  return (
    <>
      {/* ── Desktop "window" centred on teal background ── */}
      <section
        className="min-h-screen flex flex-col items-center justify-center px-4 py-8"
        style={{ background: "var(--background)" }}
      >
        {/* Main portfolio window */}
        <div className="win-window w-full max-w-2xl" style={{ minWidth: 320 }}>
          {/* Title bar */}
          <div className="win-title-bar">
            <div className="flex items-center gap-2">
              {/* Windows-style icon */}
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <rect x="0" y="0" width="6" height="6" fill="#f00" />
                <rect x="8" y="0" width="6" height="6" fill="#0f0" />
                <rect x="0" y="8" width="6" height="6" fill="#00f" />
                <rect x="8" y="8" width="6" height="6" fill="#ff0" />
              </svg>
              <span>Zach Bai — Personal Homepage</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="win-title-btn" aria-label="Minimize">_</div>
              <div className="win-title-btn" aria-label="Maximize">□</div>
              <div className="win-title-btn" aria-label="Close" style={{ fontWeight: "bold" }}>✕</div>
            </div>
          </div>

          {/* Menu bar */}
          <div
            className="flex gap-0 text-xs px-1 py-0.5"
            style={{ background: "var(--win-face)", borderBottom: "1px solid #808080" }}
          >
            {["File", "Edit", "View", "Favorites", "Tools", "Help"].map((m) => (
              <span
                key={m}
                className="px-2 py-0.5 cursor-default hover:bg-[#000080] hover:text-white"
              >
                {m}
              </span>
            ))}
          </div>

          {/* Address bar */}
          <div
            className="flex items-center gap-2 px-2 py-1 text-xs"
            style={{ background: "var(--win-face)", borderBottom: "1px solid #a0a0a0" }}
          >
            <span className="text-gray-700 whitespace-nowrap">Address</span>
            <div className="win-inset flex-1 px-1 py-0.5 text-xs bg-white">
              http://www.zachbai.com/index.html
            </div>
            <div className="win-btn text-xs px-3 py-0.5" style={{ minWidth: "auto" }}>
              Go
            </div>
          </div>

          {/* Marquee */}
          <div className="win-marquee overflow-hidden relative h-6">
            <span
              className="absolute top-0.5"
              style={{ left: marqueePos, whiteSpace: "nowrap" }}
              aria-hidden="true"
            >
              {marqueeText + marqueeText}
            </span>
            <span className="sr-only">{marqueeText}</span>
          </div>

          {/* Content area */}
          <div className="p-4" style={{ background: "var(--win-face)" }}>
            {/* Profile dialog box */}
            <div className="win-window mb-4">
              <div className="win-title-bar">
                <span>About Me — Zach Bai.exe</span>
                <div className="flex items-center gap-1">
                  <div className="win-title-btn">_</div>
                  <div className="win-title-btn">□</div>
                  <div className="win-title-btn" style={{ fontWeight: "bold" }}>✕</div>
                </div>
              </div>
              <div className="p-4" style={{ background: "var(--win-face)" }}>
                <div className="flex gap-4 items-start">
                  {/* Pixel avatar */}
                  <div
                    className="flex-shrink-0"
                    style={{
                      width: 64,
                      height: 64,
                      background: "#c0c0c0",
                      border: "2px inset #808080",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 32,
                    }}
                    aria-label="User avatar"
                  >
                    👤
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-1" style={{ color: "#000080" }}>
                      Zach Bai
                    </p>
                    <p className="text-xs mb-1">CS Student at [Your University]</p>
                    <p className="text-xs" style={{ color: "#444" }}>
                      Interested in backend development, systems &amp; ML.
                      <br />
                      Currently looking for internships.
                    </p>
                  </div>
                </div>

                <hr className="win-divider my-3" />

                {/* Loading bar for "skills" */}
                <p className="text-xs mb-1">Loading awesomeness...</p>
                <div className="win-progress-bar mb-3">
                  <div className="win-progress-fill" style={{ width: "78%" }} />
                </div>

                <div className="flex gap-2 justify-end">
                  <a
                    href="https://github.com/Zoakkz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="win-btn"
                  >
                    GitHub
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="win-btn"
                  >
                    Resume
                  </a>
                  <button className="win-btn">OK</button>
                </div>
              </div>
            </div>

            {/* Projects dialog */}
            <div className="win-window mb-4">
              <div className="win-title-bar">
                <span>My Projects — File Explorer</span>
                <div className="flex items-center gap-1">
                  <div className="win-title-btn">_</div>
                  <div className="win-title-btn">□</div>
                  <div className="win-title-btn" style={{ fontWeight: "bold" }}>✕</div>
                </div>
              </div>
              <div className="p-3" style={{ background: "var(--win-face)" }}>
                <div className="win-inset p-3" style={{ background: "#fff", minHeight: 80 }}>
                  {/* Project row */}
                  <div className="flex items-start gap-3 p-1 hover:bg-[#000080] hover:text-white group cursor-default">
                    <div aria-hidden="true" className="text-2xl flex-shrink-0 mt-0.5">📁</div>
                    <div>
                      <p className="font-bold text-xs group-hover:text-white">AI Fitness Tracker</p>
                      <p className="text-xs group-hover:text-white" style={{ color: "#444" }}>
                        Computer vision app using pose detection to count reps,
                        estimate calories &amp; give live form feedback.
                      </p>
                      <div className="flex gap-1 mt-1 flex-wrap">
                        {["Python", "MediaPipe", "OpenCV"].map((t) => (
                          <span
                            key={t}
                            className="text-xs px-1"
                            style={{
                              background: "#000080",
                              color: "#fff",
                              fontFamily: "monospace",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <a
                        href="https://github.com/Zoakkz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs underline"
                        style={{ color: "#000080" }}
                      >
                        View on GitHub →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="win-statusbar">
                <span className="win-statusbar-panel">1 object(s)</span>
                <span className="win-statusbar-panel">Ready</span>
              </div>
            </div>

            {/* Skills dialog */}
            <div className="win-window mb-4">
              <div className="win-title-bar">
                <span>Skills — System Properties</span>
                <div className="flex items-center gap-1">
                  <div className="win-title-btn">_</div>
                  <div className="win-title-btn">□</div>
                  <div className="win-title-btn" style={{ fontWeight: "bold" }}>✕</div>
                </div>
              </div>
              <div className="p-3" style={{ background: "var(--win-face)" }}>
                <div className="win-groupbox">
                  <span className="win-groupbox-label">Languages</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {["Python", "JavaScript", "TypeScript", "C++", "Java", "SQL"].map((s) => (
                      <span key={s} className="win-btn text-xs" style={{ minWidth: "auto", padding: "1px 8px" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="win-groupbox mt-3">
                  <span className="win-groupbox-label">Frameworks &amp; Tools</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {["React", "Next.js", "Node.js", "Git", "Docker", "Linux"].map((s) => (
                      <span key={s} className="win-btn text-xs" style={{ minWidth: "auto", padding: "1px 8px" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact dialog */}
            <div className="win-window">
              <div className="win-title-bar">
                <span>Contact — Send Message</span>
                <div className="flex items-center gap-1">
                  <div className="win-title-btn">_</div>
                  <div className="win-title-btn">□</div>
                  <div className="win-title-btn" style={{ fontWeight: "bold" }}>✕</div>
                </div>
              </div>
              <div className="p-4" style={{ background: "var(--win-face)" }}>
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl" aria-hidden="true">✉️</span>
                  <p className="text-xs" style={{ color: "#000" }}>
                    Want to get in touch? Send me an email or connect on GitHub.
                    I&apos;m always open to internship opportunities and interesting projects!
                  </p>
                </div>
                <hr className="win-divider mb-3" />
                <div className="flex gap-2 justify-end flex-wrap">
                  <a
                    href="mailto:zach@example.com"
                    className="win-btn"
                  >
                    📧 Email Me
                  </a>
                  <a
                    href="https://github.com/Zoakkz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="win-btn"
                  >
                    GitHub
                  </a>
                  <button className="win-btn">Cancel</button>
                </div>
              </div>
            </div>
          </div>

          {/* Status bar at bottom of browser window */}
          <div className="win-statusbar">
            <span className="win-statusbar-panel">Done</span>
            <span className="win-statusbar-panel" style={{ flex: "none", minWidth: 120 }}>
              Internet zone
            </span>
          </div>
        </div>
      </section>

      {/* ── Windows 2000 Taskbar ── */}
      <div className="win-taskbar" role="toolbar" aria-label="Taskbar">
        <div className="win-start-btn" aria-label="Start menu">
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <rect x="0" y="0" width="7" height="7" fill="#f00" />
            <rect x="9" y="0" width="7" height="7" fill="#0f0" />
            <rect x="0" y="9" width="7" height="7" fill="#00f" />
            <rect x="9" y="9" width="7" height="7" fill="#ff0" />
          </svg>
          <span>Start</span>
        </div>

        <div className="win-divider" style={{ width: 2, height: 20, borderTop: "none", borderLeft: "1px solid #808080", borderRight: "1px solid #fff", margin: "0 2px" }} />

        {/* Quick-launch */}
        <button
          className="win-title-btn"
          style={{ width: 22, height: 22 }}
          aria-label="Internet Explorer"
        >
          🌐
        </button>

        {/* Active window */}
        <div
          className="win-btn text-xs flex-1 text-left"
          style={{
            borderTop: "1px solid #808080",
            borderLeft: "1px solid #808080",
            borderRight: "1px solid #fff",
            borderBottom: "1px solid #fff",
            maxWidth: 200,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            padding: "2px 6px",
          }}
        >
          🌐 Zach Bai — Personal Homepage
        </div>

        <div className="flex-1" />

        {/* System tray */}
        <div
          className="win-inset flex items-center gap-2 px-2 text-xs h-[22px]"
          style={{ background: "var(--win-face)" }}
          aria-label="System clock"
        >
          <span>🔊</span>
          <span>{time}</span>
        </div>
      </div>
    </>
  );
}
