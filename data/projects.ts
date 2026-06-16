import { IProject } from "@/types";

export const projectsData: IProject[] = [
    {
        slug: "qistbazaar",
        title: "QistBazaar - Installment Commerce Engine",
        client: "QistBazaar Retail",
        summary: "Empowered Pakistan's leading BNPL platform to offer interest-free installments directly on Shopify with automated KYC approvals.",
        challenge: "QistBazaar wanted to bring installment-based retail to Shopify. Standard e-commerce checkouts do not support custom financing schedules, customer credit scoring, KYC verification, and dynamic monthly payment options. The goal was to build a secure integration that evaluates risk instantly without adding friction to the customer journey.",
        solution: "We engineered a customized Shopify Plus storefront with custom React checkout components and webhooks connected to QistBazaar's proprietary scoring engine. Users can choose payment terms (3 to 12 months) directly on the product detail page, go through a 2-minute digital KYC verification, and set up automated weekly/monthly recurring bank and mobile wallet debits.",
        techStack: ["Shopify Plus", "React", "Node.js", "GraphQL", "Tailwind CSS", "MongoDB", "REST APIs"],
        metrics: [
            { label: "Conversion Rate Increase", value: "+38%" },
            { label: "Installment Sales", value: "$3.5M+" },
            { label: "Instant KYC Approvals", value: "85%" }
        ],
        screenshots: [
            "/assets/qistbazaar-details-1.jpg",
            "/assets/qistbazaar-details-2.jpg"
        ],
        liveDemoUrl: "https://qistbazaar.com",
        category: "Shopify",
        coverImage: "/assets/qistbazaar-cover.jpg"
    },
    {
        slug: "shopify-installment-app",
        title: "Shopify Custom Installment App",
        client: "Fintech Solutions Inc.",
        summary: "A private Shopify app enabling custom installment plans, direct merchant financing, and automated customer ledger entries.",
        challenge: "Traditional buy-now-pay-later (BNPL) apps charge high transaction fees to merchants. The client needed a self-hosted Shopify custom app that allows merchants to finance customers directly, define custom repayment terms, and automatically track collections and overdue balances within Shopify's dashboard.",
        solution: "We developed a robust Shopify Custom App (built using Next.js, Shopify App Bridge, and Remix on the backend). The app extends Shopify draft orders, creates customized payment links using Stripe Billing, sends automated WhatsApp/Email reminders, and syncs transaction journals with ERP tools like QuickBooks.",
        techStack: ["Next.js", "Shopify App Bridge", "Remix", "Prisma", "Stripe API", "PostgreSQL", "Tailwind CSS"],
        metrics: [
            { label: "Merchant Fees Saved", value: "65%" },
            { label: "On-time Repayments", value: "94%" },
            { label: "Stores Active", value: "120+" }
        ],
        screenshots: [
            "/assets/installment-app-1.jpg",
            "/assets/installment-app-2.jpg"
        ],
        liveDemoUrl: "#",
        category: "Custom Apps",
        coverImage: "/assets/installment-app-cover.jpg"
    },
    {
        slug: "renewed-pc",
        title: "Renewed PC - Headless Commerce Store",
        client: "RenewedPC Group",
        summary: "A high-performance headless commerce Shopify store built using Next.js 15, Tailwind, and Shopify Storefront GraphQL APIs.",
        challenge: "The existing Shopify Liquid store suffered from poor mobile performance (Lighthouse speed score < 45) due to massive script bloat and third-party apps. This speed bottleneck led to a high bounce rate and low conversion rates on mobile devices.",
        solution: "We decoupled the storefront entirely by building a headless e-commerce frontend using Next.js 15 and React Server Components. We integrated Shopify's Storefront GraphQL API for catalog and cart management, coupled with Algolia for instant sub-second search suggestions, resulting in an ultra-fast, app-like shopping experience.",
        techStack: ["Next.js 15", "Shopify Storefront API", "GraphQL", "Tailwind CSS", "Framer Motion", "Algolia", "Vercel"],
        metrics: [
            { label: "Mobile Speed Score", value: "98/100" },
            { label: "Bounce Rate Reduction", value: "-24%" },
            { label: "Mobile Revenue growth", value: "+54%" }
        ],
        screenshots: [
            "/assets/renewed-pc-1.jpg",
            "/assets/renewed-pc-2.jpg"
        ],
        liveDemoUrl: "https://renewedpc.com",
        category: "Next.js",
        coverImage: "/assets/renewedpc-cover.jpg"
    }
];
