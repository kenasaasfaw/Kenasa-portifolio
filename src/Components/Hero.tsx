import profileImage from "./assets/kenasa_photo.jpg";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 sm:pt-32"
    >
      {/* Profile Image */}
      <div className="mb-8 flex justify-center">
        <div className="rounded-full p-3 sm:p-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_70px_rgba(56,189,248,0.55)]">
          <img
            src={profileImage}
            alt="Kenasa Asfaw"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover bg-background"
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
          href={`${import.meta.env.BASE_URL}Kenasa_Asfaw_CV.pdf`}
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