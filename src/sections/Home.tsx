import { Navbar } from "../Components/Navbar";
import { Hero } from "../Components/Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contacts } from "../Components/Contacts";
import { Footer } from "./Footer";
import { StarBackground } from "../Components/StarBackground";
import { ThemeToggle } from "../Components/ThemeToggle";

export const Home = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* Background Effects */}
      <StarBackground />

      {/* Theme Toggle */}
      <div className="fixed right-4 top-20 z-50 sm:right-6 sm:top-6">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />

        <main className="flex flex-col gap-16 sm:gap-20 md:gap-24">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contacts />
        </main>

        <Footer />
      </div>
    </div>
  );
};
