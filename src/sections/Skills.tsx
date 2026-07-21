import React from "react";
import { cn } from "../lib/utils";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiBootstrap,
  SiGithub,
  SiVite,
  SiPostgresql,
  SiGit,
  SiNextdotjs,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React", icon: <SiReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },
  {
    title: "UI / Design",
    skills: [{ name: "Figma", icon: <SiFigma /> }],
  },
  {
    title: "Tools / Backend",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-background text-foreground">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-14 px-6">Skills</h2>
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16 px-6">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-primary">{group.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={cn(
                    "flex flex-col items-center justify-center gap-2 sm:gap-3 p-4 sm:p-5 rounded-xl min-h-[100px] sm:min-h-[120px]",
                    "bg-gradient-to-br from-primary/10 via-background to-primary/5",
                    "border border-border hover:border-primary transition-all hover:scale-105"
                  )}
                >
                  <span className="text-2xl sm:text-3xl text-primary">{skill.icon}</span>
                  <span className="text-xs sm:text-sm font-medium text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
