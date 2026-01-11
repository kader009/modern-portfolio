import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "ReviewPortal",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Reactjs", "Redux tookit", "Typescript"],
    image: {
      LIGHT: "/images/projects/trustedge.webp",
      DARK: "/images/projects/trustedge.webp",
    },
  },
  {
    index: 1,
    title: "Edunest",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Reactjs", "Redux tookit", "Typescript"],
    image: {
      LIGHT: "/images/projects/edunest.webp",
      DARK: "/images/projects/edunest.webp",
    },
  },
  {
    index: 2,
    title: "FoodLane",
    href: "/projects",
    tags: [
      "Reactjs",
      "Tailwindcss",
      "Javascript",
      "React-router-dom",
      "Firebase",
      "Mern",
    ],
    image: {
      LIGHT: "/images/projects/foodlane.webp",
      DARK: "/images/projects/foodlane.webp",
    },
  },
  {
    index: 3,
    title: "TaskHub",
    href: "/projects",
    tags: ["Reactjs", "Tailwindcss", "Mern", "AntD"],
    image: {
      LIGHT: "/images/projects/taskhub.webp",
      DARK: "/images/projects/taskhub.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "ReviewPortal",
    favicon: "/images/projects/logos/trustedge.png",
    imageUrl: ["/images/projects/trustedge.webp"],
    description:
      "Engineered a modern full-stack platform with role-based access (Admin/User) using Next.js, TypeScript, Tailwind CSS, Redux, Express, and MongoDB, featuring product management, user reviews, threaded comments/replies, JWT auth, and admin control panels.",
    sourceCodeHref: "https://github.com/kader009/trustedge",
    liveWebsiteHref: "https://trustedge.vercel.app/",
  },
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
    imageUrl: ["/images/projects/foodlane.webp"],
    description:
      "Developed a full-featured restaurant web app where users can browse food items, add them to cart, and place orders with online payment. Implemented authentication, search and filtering, cart system, and secure checkout. Built using React.js, TailwindCSS, custom authentication, and integrated a payment gateway.",
    sourceCodeHref: "https://github.com/kader009/FoodLane",
    liveWebsiteHref: "https://food-lane-zeta.vercel.app/",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/portfolio.webp"],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/kader009/modern-portfolio",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "Dashboard",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: ["/images/projects/shadcn.webp"],
    description:
      "Creating a awesome dashboard feature with Nextjs, Typescript, Tailwindcss and shadcnUI also use SSR",
    sourceCodeHref: "https://github.com/kader009/shadcn-dashboard",
    liveWebsiteHref: "https://shadcn-dashboard-master-kappa.vercel.app/",
  },
  {
    name: "TrendWave",
    favicon: "/images/projects/logos/trendwave.ico",
    imageUrl: ["/images/projects/trendwave.webp"],
    description:
      "Trendwave is a modern, responsive web application designed to provide users with real-time trend insights and analytics. The platform focuses on delivering a seamless user experience through an interactive and intuitive interface",
    sourceCodeHref: "https://github.com/kader009/trendwave-frontend",
    liveWebsiteHref: "https://trendwave-frontend.vercel.app/",
  },
  {
    name: "TaskHub",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: ["/images/projects/taskhub.webp"],
    description:
      "Task management website for creating task for your ownself and use when you need update delete and much more.",
    sourceCodeHref: "https://github.com/kader009/task-manage",
    liveWebsiteHref: "https://task-manage-ebon.vercel.app/",
  },
];
