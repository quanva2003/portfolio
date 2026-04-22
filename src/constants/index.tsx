import type { ComponentType } from "react";
import {
  FacebookIcon,
  LinkedInIcon,
  GithubIcon,
  GmailIcon,
} from "../components/icons";

interface MenuItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

export const MENU_ITEMS: readonly MenuItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "work-experience", label: "Work Experience", href: "#work-experience" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];

interface HeaderConfig {
  readonly brandName: string;
  readonly brandHighlight: string;
  readonly stickyThreshold: number;
  readonly scrollOffset: number;
}

export const HEADER_CONFIG: HeaderConfig = {
  brandName: "QuanVA's",
  brandHighlight: "Portfolio",
  stickyThreshold: 100,
  scrollOffset: 150,
};

interface SocialIcon {
  readonly id: string;
  readonly name: string;
  readonly link: string;
  readonly Icon: ComponentType<{ className?: string }>;
}

export const SOCIAL_ICONS: readonly SocialIcon[] = [
  {
    id: "facebook",
    name: "Facebook",
    link: "https://www.facebook.com/quan.van.5076",
    Icon: FacebookIcon,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/wuanvan5076/",
    Icon: LinkedInIcon,
  },
  {
    id: "github",
    name: "Github",
    link: "https://github.com/quanva2003",
    Icon: GithubIcon,
  },
  {
    id: "gmail",
    name: "Gmail",
    link: "mailto:qsao2212@gmail.com",
    Icon: GmailIcon,
  },
];

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
