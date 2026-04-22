export interface WorkExperience {
  readonly id: number;
  readonly company: string;
  readonly position: string;
  readonly duration: string;
  readonly description: string;
  readonly technologies: readonly string[];
}

export const WORK_EXPERIENCE: readonly WorkExperience[] = [
  {
    id: 1,
    company: "GENERAL ERA DIGITAL SOLUTION JOINT STOCK COMPANY",
    position: "Frontend Developer",
    duration: "August 2023 - December 2023",
    description:
      "Joined the company as a Frontend Developer intern, focusing on strengthening ReactJS skills by building several small-scale projects to solidify knowledge and apply practical development techniques.",
    technologies: ["React", "JavaScript", "CSS", "HTML5"],
  },
  {
    id: 2,
    company: "DAN SOLUTIONS",
    position: "Frontend Developer",
    duration: "August 2024 - Present",
    description:
      "Continued to grow as a frontend developer by improving React Native skills and participating in larger-scale projects. Gained exposure to Next.js for server-side rendering and routing, while applying Zustand for state management across both web and mobile applications. Became more proficient in using GitHub for collaboration and version control.",
    technologies: ["React", "React Native", "Node.js", "MongoDB"],
  },
];
