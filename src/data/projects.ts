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
    title: "Travelbuddy",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Typescript", "Redux toolkit", "Mern"],
    image: {
      LIGHT: "/images/projects/travelbuddy.png",
      DARK: "/images/projects/travelbuddy.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "ReviewPortal",
    favicon: "/images/projects/logos/trustedge.png",
    imageUrl: ["/images/projects/trustedge.webp"],
    description:
      "Product review platform built with Next.js and TypeScript - product listings, reviews with threaded comments, JWT auth, and admin moderation.",
    sourceCodeHref: "https://github.com/kader009/trustedge",
    liveWebsiteHref: "https://trustedge.vercel.app/",
  },
  {
    name: "Edunest",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: ["/images/projects/edunest.webp"],
    description:
      "LMS built with Next.js and TypeScript featuring three roles - Admin, Tutor, Student. Admins manage users/courses, Tutors create content and grade, Students access courses, submit assignments and view dashboards. Uses JWT auth, Redux, and Tailwind CSS.",
    sourceCodeHref: "https://github.com/kader009/study-platform-frontend",
    liveWebsiteHref: "https://study-platform-frontend-azure.vercel.app/",
  },
  {
    name: "Travelbuddy",
    favicon: "/images/projects/logos/siteicon.png",
    imageUrl: ["/images/projects/travelbuddy.png"],
    description:
      "Travel planning app (Next.js + TypeScript) with destination search, itinerary builder, user auth, and SSLCommerz payment integration.",
    sourceCodeHref: "https://github.com/kader009/travel-frontend",
    liveWebsiteHref: "https://travel-frontend-liart.vercel.app/",
  },
  {
    name: "FoodLane",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: ["/images/projects/foodlane.webp"],
    description:
      "Restaurant web app with role-based management: admins manage menu items (create/update/delete), customers browse menu, add to cart and place orders. Integrated Stripe for secure payments. Built with React and Tailwind CSS.",
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
