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
