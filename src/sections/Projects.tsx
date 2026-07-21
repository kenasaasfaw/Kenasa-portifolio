import React from "react";
import { cn } from "../lib/utils";
import { SiAmazon, SiNetflix, SiApple } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";

interface Project {
  name: string;
  description: string;
  tech: string[];
  repo?: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    name: "Amazon Clone",
    description:
      "A fullstack e-commerce platform where users can browse products, add to cart, and checkout using Stripe payments.",
    tech: ["React", "Redux", "Firebase", "Stripe", "Tailwind CSS"],
    repo: "https://github.com/kenasaasfaw/Amazon-Clone",
    icon: <SiAmazon size={40} color="#FF9900" />,
  },
  {
    name: "Netflix Clone",
    description:
      "A frontend Netflix UI clone fetching movie data from TMDB API and displaying categories with responsive design.",
    tech: ["React", "Tailwind CSS", "Vite", "TMDB API"],
    repo: "https://github.com/kenasaasfaw/Netflix-clone",
    icon: <SiNetflix size={40} color="#E50914" />,
  },
  {
    name: "Apple Frontend",
    description:
      "A frontend Apple-style website built with React, HTML, CSS, and Bootstrap.",
    tech: ["React", "HTML", "CSS", "Bootstrap"],
    repo: "https://github.com/kenasaasfaw/Apple-Frontend",
    icon: <SiApple size={40} color="#999999" />,
  },
  {
    name: "IT Help Desk Request System",
    description:
      "Developed during internship at Ethiopian Statistics Service. Manages IT support requests, tracking, and reporting.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    repo: "https://github.com/kenasaasfaw/IT-Helpdesk-System",
    icon: <FaLaptopCode size={40} color="#1D4ED8" />,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-background text-foreground">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-14 px-6">Projects</h2>

      {/* Single equal-height grid for all projects */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => (
  <div
    className={cn(
      "flex flex-col justify-between p-5 sm:p-6 rounded-xl border border-border",
      "bg-gradient-to-br from-primary/5 via-background to-primary/10",
      "hover:border-primary transition-all duration-300",
      "min-h-[320px] sm:min-h-[350px]"
    )}
  >
    <div>
      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
        <div className="flex-shrink-0">{project.icon}</div>
        <h3 className="text-lg sm:text-xl font-semibold">{project.name}</h3>
      </div>
      <p className="mb-3 sm:mb-4 text-sm text-muted-foreground">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs font-medium rounded-md bg-primary/20 text-primary"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
    {project.repo && (
      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 sm:mt-6 text-sm font-medium text-primary hover:underline inline-block"
      >
        View on GitHub →
      </a>
    )}
  </div>
);
