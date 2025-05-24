import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Edunest",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Reactjs", "Vercel", "Typescript"],
    image: {
      LIGHT: "/images/projects/edunest.webp",
    },
  },
  {
    index: 1,
    title: "FoodLane",
    href: "/projects",
    tags: [
      "Reactjs",
      "Tailwindcss",
      "Vite",
      "React-router-dom",
      "Firebase",
      "Vercel",
    ],
    image: {
      LIGHT: "/images/projects/foodlane.webp",
      // DARK: "/images/projects/manyGamesDark.webp",
    },
  },
  {
    index: 2,
    title: "TaskHub",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "AntD"],
    image: {
      LIGHT: "/images/projects/taskhub.webp",
      // DARK: "/images/projects/kanbanDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Edunest",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: ["/images/projects/edunest.webp"],
    description:
      "Built a role-based study platform (Admin, Tutor, Student) using Next.js, TailwindCSS, and Redux. Included JWT auth, study materials, dashboard, Shadcn UI.",
    sourceCodeHref: "https://github.com/kader009/study-platform-frontend",
    liveWebsiteHref: "https://study-platform-frontend-azure.vercel.app/",
  },
  {
    name: "FoodLane",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/foodlane.webp",
      // "/images/projects/kanbanDark.webp",
      // "/images/projects/kanbanCardLight.webp",
    ],
    description:
      "Developed a full-featured restaurant web app where users can browse food items, add them to cart, and place orders with online payment. Implemented authentication, search and filtering, cart system, and secure checkout. Built using React.js, TailwindCSS, custom authentication, and integrated a payment gateway.",
    sourceCodeHref: "https://github.com/kader009/FoodLane",
    liveWebsiteHref: "https://food-lane-zeta.vercel.app/",
  },
  {
    name: "TaskHub",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: ["/images/projects/taskhub.webp"],
    description:
      "Task management websit for creating task for ownself and use when ever need.",
    sourceCodeHref: "https://github.com/kader009/task-manage",
    liveWebsiteHref: "https://task-manage-ebon.vercel.app/",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/Portfolio.webp",
      // "/images/projects/portfolioLight.webp",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/kader009/modern-portfolio",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "Dashboard",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: [
      "/images/projects/shadcn.webp",
      // "/images/projects/covidTrackerMap.webp",
      // "/images/projects/covidTrackerTable.webp",
    ],
    description:
      "Creating a awesome dashboard with nextjs, typescript and shadcnUI",
    sourceCodeHref: "https://github.com/kader009/shadcn-dashboard",
    liveWebsiteHref: "https://shadcn-dashboard-master-kappa.vercel.app/",
  },
];
