interface Project {
  readonly id: number;
  readonly image: string;
  readonly title: string;
  readonly description: string;
}

export const PROJECTS: readonly Project[] = [
  {
    id: 1,
    image: "/assets/tamda-project.png",
    title: "Tamda Project",
    description:
      "A logistics management platform to streamline shipment scheduling for bulk vendor orders",
  },
  {
    id: 2,
    image: "/assets/fastcare-project.png",
    title: "Fastcare Project",
    description:
      "A website for phone accessories offers cases, chargers, headphones, and more with secure shopping, fast delivery, and excellent customer support.",
  },
  {
    id: 3,
    image: "/assets/skyline-project.png",
    title: "Skyline Mobile App",
    description:
      "A cross-platform mobile application for schools to facilitate communication between homeroom teachers and parents.",
  },
];
