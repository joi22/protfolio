import { ITimelineItem } from "@/types";

export const timelineData: ITimelineItem[] = [
    {
        year: "2021",
        title: "Started Freelancing",
        description: "Began building responsive web frontends using React and helping local merchants build basic WooCommerce & Shopify sites."
    },
    {
        year: "2022",
        title: "Shopify Specialist Focus",
        description: "Deep-dived into Shopify liquid themes, customization, and custom scripts to boost storefront conversion rates."
    },
    {
        year: "2023",
        title: "Custom App Development",
        description: "Built custom Shopify applications using Node.js, Express, and React to integrate external ERP/billing solutions."
    },
    {
        year: "2024",
        title: "Enterprise Projects Delivery",
        description: "Partnered with high-growth Shopify Plus brands (e.g. QistBazaar) to custom-engineer checkout flows and complex custom installment integrations."
    },
    {
        year: "2025",
        title: "SaaS & Headless Commerce",
        description: "Pioneered Next.js 15 headless commerce storefronts connected to Shopify GraphQL Storefront API to hit sub-second load times."
    },
    {
        year: "2026",
        title: "Agency Growth & Expansion",
        description: "Assembled a dedicated squad of developers and UI/UX designers to support global Shopify brands and build cutting-edge custom apps."
    }
];

export const skillsData = [
    {
        category: "E-Commerce",
        items: ["Shopify Plus", "Liquid templating", "Storefront GraphQL API", "Shopify App Bridge", "Remix for Apps", "Cart & Checkout Extensions"]
    },
    {
        category: "Frontend Dev",
        items: ["React", "Next.js 15 (RSC)", "TypeScript", "Tailwind CSS", "Framer Motion", "Vanilla JavaScript"]
    },
    {
        category: "Backend & Devops",
        items: ["Node.js / Express", "PostgreSQL / Prisma", "MongoDB / Mongoose", "REST / GraphQL APIs", "Vercel / AWS", "Docker"]
    },
    {
        category: "Tools & Integrations",
        items: ["Stripe / BNPL APIs", "QuickBooks ERP", "Algolia Search", "Git / GitHub CI", "Figma design system"]
    }
];

export const statsData = [
    { value: "50+", label: "Projects Completed" },
    { value: "5+", label: "Years Experience" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "98/100", label: "Avg Lighthouse Speed" }
];
