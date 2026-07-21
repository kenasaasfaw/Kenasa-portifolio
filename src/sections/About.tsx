export const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-background text-foreground">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 px-6">About Me</h2>
      <div className="max-w-5xl mx-auto px-6 space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
        <p>I am a passionate <span className="font-semibold">Web Developer</span> with a
          BSc in Computer Science from Haramaya University.</p>

        <p>
          I am certified in <span className="font-semibold">Artificial Intelligence</span> from
          <span className="font-semibold"> Udacity</span> and enjoy building modern,
          scalable, and user-friendly web applications.
        </p>

        <p>
          I have hands-on experience developing fullstack and frontend projects,
          including an <span className="font-semibold">Amazon Clone</span>,
          <span className="font-semibold"> Netflix Clone</span>, and an
          <span className="font-semibold"> IT Help Desk Request System</span>.
        </p>

        <p>
          I strongly believe in <span className="font-semibold">teamwork</span>,
          continuous learning, and solving real-world problems.
        </p>
      </div>
    </section>
  );
};
