import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function Minecraft() {
  const builds = [
    {
      src: "/badminton1.JPG",
      title: " ",
      description: " ",
    },
    {
      src: "/badminton2.JPG",
      title: " ",
      description: " ",
    },
    {
      src: "/badminton3.JPG",
      title: " ",
      description: " ",
    },
  ];

  return (
    <div className="min-h-screen dark:bg-zinc-950 bg-white px-12 py-16 max-w-5xl mx-auto">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition mb-12 text-sm"
      >
        <FaArrowLeft size={12} />
        Back
      </Link>

      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <h1 className="text-4xl font-bold dark:text-white text-zinc-900">
          Badminton
        </h1>
        <div className="flex-1 h-px bg-zinc-800" />
      </div>
      <p className="text-zinc-400 mb-16">Badminton Flicks</p>

      {/* Gallery */}
      <div className="flex flex-col gap-12">
        {builds.map((build) => (
          <div key={build.title}>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-800 mb-4">
              <Image
                src={build.src}
                alt={build.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h2 className="text-xl font-semibold dark:text-white text-zinc-900 mb-1">
              {build.title}
            </h2>
            <p className="text-zinc-400">{build.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
