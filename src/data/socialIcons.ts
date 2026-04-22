import type { ComponentType } from "react";
import {
  FacebookIcon,
  LinkedInIcon,
  GithubIcon,
  GmailIcon,
} from "../components/ui/icons";

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
