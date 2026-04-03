import { GiTrophy, GiShuttlecock, GiGamepad } from "react-icons/gi";
import { SiSpotify, SiDevpost } from "react-icons/si";

const interests = [
  {
    icon: <GiShuttlecock size={24} />,
    label: "Badminton",
    description: " ",
    color: "#f59e0b",
    link: "/badminton",
  },
  {
    icon: <GiGamepad size={24} />,
    label: "Minecraft",
    description: " ",
    color: "#22c55e",
    link: "/minecraft",
  },
  {
    icon: <SiSpotify size={24} />,
    label: "Spotify",
    description: "",
    color: "#1db954",
    link: "https://open.spotify.com/user/31yppntlad2hzgch7c7uykr5l3tq",
  },
  {
    icon: <SiDevpost size={24} />,
    label: "Hackathons",
    description: "",
    color: "#003e54",
    link: "https://devpost.com/zachbai2008",
  },
];

const highlights = [
  "SHAD Canada Alumni",
  "FRC World Championship Qualifier",
  "Honour Roll with Distinction 4×",
  "SWOSSAA Champion 3× · OFSAA Semifinalist",
];

export default function About() {
  return (
    <section id="about" className="relative px-12 max-w-5xl mx-auto py-32">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-bold dark:text-white text-zinc-900">
          About Me
        </h2>
        <div className="flex-1 h-px bg-zinc-800" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left — bio */}
        <div>
          <p className="text-zinc-400 leading-relaxed text-lg mb-6">
            I'm a high school student at{" "}
            <span className="dark:text-white text-zinc-900">
              Vincent Massey Secondary School
            </span>{" "}
            in Windsor, ON. I enjoy building things with code, competing in
            badminton, and spending way too much time building in Minecraft.
          </p>
          <p className="text-zinc-400 leading-relaxed text-lg mb-10">
            Lately, I’ve been getting into{" "}
            <span className="dark:text-white text-zinc-900">
              computer vision and AI
            </span>{" "}
            , especially building things that interact with the real world
            instead of just living on a screen. I’m always looking for new
            things to learn and build.
          </p>

          {/* Achievements */}
          <div>
            <p className="text-zinc-500 text-sm uppercase tracking-widest mb-4">
              Highlights
            </p>
            <div className="flex flex-col gap-2">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-3 text-zinc-400">
                  <GiTrophy size={14} className="text-amber-400 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — interests */}
        <div>
          <p className="text-zinc-500 text-sm uppercase tracking-widest mb-6">
            Interests
          </p>
          <div className="flex flex-col gap-4">
            {interests.map((item) => {
              const content = (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800 hover:border-zinc-600 transition-all duration-200 hover:scale-[1.02]"
                  style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                >
                  <div
                    className="p-2 rounded-lg shrink-0"
                    style={{
                      color: item.color,
                      backgroundColor: `${item.color}18`,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="dark:text-white text-zinc-900">
                      {item.label}
                    </p>
                    <p className="text-zinc-500 text-sm">{item.description}</p>
                  </div>
                  {item.link && (
                    <div className="ml-auto text-zinc-600 text-sm">↗</div>
                  )}
                </div>
              );

              return item.link ? (
                <a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
