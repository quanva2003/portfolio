interface Project {
  readonly id: number;
  readonly image: string;
  readonly imageAlt: string;
  readonly title: string;
  readonly description: string;
}

export const PROJECTS: readonly Project[] = [
  {
    id: 1,
    image: "/assets/tamda-project.png",
    imageAlt: "Screenshot of Tamda – logistics management platform for bulk vendor shipments",
    title: "Tamda Project",
    description:
      "A logistics management platform to streamline shipment scheduling for bulk vendor orders",
  },
  {
    id: 2,
    image: "/assets/fastcare-project.png",
    imageAlt: "Screenshot of Fastcare – phone accessories e-commerce store",
    title: "Fastcare Project",
    description:
      "A website for phone accessories offers cases, chargers, headphones, and more with secure shopping, fast delivery, and excellent customer support.",
  },
  {
    id: 3,
    image: "/assets/skyline-project.png",
    imageAlt: "Screenshot of Skyline Mobile App – school communication app for teachers and parents",
    title: "Skyline Mobile App",
    description:
      "A cross-platform mobile application for schools to facilitate communication between homeroom teachers and parents.",
  },
];
