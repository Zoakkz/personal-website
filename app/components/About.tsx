import { GiTrophy, GiShuttlecock, GiGamepad } from "react-icons/gi";
import { SiSpotify, SiDevpost } from "react-icons/si";

const interests = [
  {
    icon: <GiShuttlecock size={24} />,
    label: "Badminton",
    description: "SWOSSAA Champion 3× · OFSAA Semifinalist · Team MVP",
    color: "#f59e0b",
    link: "/badminton",
  },
  {
    icon: <GiGamepad size={24} />,
    label: "Minecraft",
    description: "Been playing since forever. Creative mode enjoyer.",
    color: "#22c55e",
    link: "/minecraft",
  },
  {
    icon: <SiSpotify size={24} />,
    label: "Spotify",
    description: "Check out what I'm listening to.",
    color: "#1db954",
    link: "https://open.spotify.com/user/31yppntlad2hzgch7c7uykr5l3tq",
  },
  {
    icon: <SiDevpost size={24} />,
    label: "Hackathons",
    description: "Best Use of Generative AI @ MasseyHacks · Top 3 @ SHAD",
    color: "#003e54",
    link: "https://devpost.com/zachbai2008",
  },
];

const highlights = [
  "Honour Roll with Distinction 3×",
  "FRC World Championship Qualifier",
  "SHAD Canada Alumni",
  "Top 5 SSPC Competition",
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
            in Windsor, ON, enrolled in the Enriched Program. I build things
            with code, compete in badminton, and spend way too much time on side
            projects.
          </p>
          <p className="text-zinc-400 leading-relaxed text-lg mb-10">
            I'm passionate about{" "}
            <span className="dark:text-white text-zinc-900">
              computer vision and AI
            </span>{" "}
            — specifically building tools that can see and understand the
            physical world. Currently looking for opportunities to keep learning
            and building.
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
