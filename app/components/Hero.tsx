export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 max-w-4xl mx-auto">
      <p className="text-gray-400 mb-2">Hi, my name is</p>
      <h1 className="text-6xl font-bold mb-4">Zach Bai</h1>
      <h2 className="text-3xl text-gray-400 font-bold mb-6">
        CS Student at [Your University]
      </h2>
      <p className="text-gray-400 max-w-lg mb-8">
        I'm interested in [what you're into — e.g. backend development, systems,
        ML]. Currently looking for internships for [season + year].
      </p>
      <div className="flex gap-4">
        <a
          href="https://github.com/YOURUSERNAME"
          target="_blank"
          className="border border-gray-400 text-gray-400 px-6 py-3 rounded hover:bg-gray-400 hover:text-black transition"
        >
          GitHub
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          className="border border-gray-400 text-gray-400 px-6 py-3 rounded hover:bg-gray-400 hover:text-black transition"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
