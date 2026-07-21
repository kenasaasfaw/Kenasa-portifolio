export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 sm:pt-32"
    >
      {/* Profile Image */}
      <div className="mb-12">
        <div className="rounded-full p-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_40px_rgba(56,189,248,0.45)]">
          <img
            src="/profile.jpg"
            alt="Kenasa Asfaw"
            className="w-40 h-40 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full object-cover bg-background"
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        Hi, I’m <span className="text-primary">Kenasa Asfaw</span>
      </h1>

      {/* Role / Tagline */}
      <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl sm:max-w-2xl">
        Web Developer | Full-Stack Engineer
      </p>

      {/* Download CV Button */}
      <div className="mt-8 sm:mt-10">
        <a
          href="/Kenasa_Asfaw_CV.pdf"
          download
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full
                     bg-primary text-primary-foreground font-medium
                     hover:scale-105 transition-transform shadow-lg"
        >
          Download CV
          <span className="text-lg sm:text-xl">⬇</span>
        </a>
      </div>
    </section>
  );
};
