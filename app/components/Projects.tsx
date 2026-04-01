export default function Projects() {
  const projects = [
    {
      name: "AI Fitness Tracker",
      description:
        "A computer vision app that uses your camera to track workout movements in real time. Counts reps, estimates calories burned, and gives live feedback on your form using pose detection.",
      tech: ["Python", "MediaPipe", "OpenCV"],
      github: "https://github.com/YOURUSERNAME/REPONAME",
    },
  ];

  return (
    <section className="px-8 max-w-4xl mx-auto py-24">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border border-gray-700 rounded p-6 hover:border-gray-400 transition"
          >
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex gap-2 flex-wrap mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs border border-gray-600 text-gray-400 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              className="text-sm text-gray-400 hover:text-white transition"
            >
              View on GitHub &#8594;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
