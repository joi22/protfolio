import { IService } from "@/types";

export const servicesData: IService[] = [
    {
        slug: "shopify-store-development",
        title: "Shopify Store Development",
        description: "End-to-end setups with custom Liquid templates, structured product schemas, and custom cart mechanics designed to maximize average order value.",
        features: ["Custom Liquid/JSON Templates", "Conversion Rate Optimization (CRO)", "Responsive UX Design", "Shopify Apps Setup & Setup"]
    },
    {
        slug: "shopify-custom-apps",
        title: "Shopify Custom Apps",
        description: "Bespoke extensions built with Node.js/Remix and App Bridge to add unique logic, customized checkouts, and recurring billing tools.",
        features: ["Shopify App Bridge & Admin Extensions", "Stripe & Custom Gateway Webhooks", "GDPR-compliant Webhook Handling", "Automated Background Workers"]
    },
    {
        slug: "shopify-theme-customization",
        title: "Shopify Theme Customization",
        description: "Tweaking existing Dawn or premium themes to build custom sections, advanced filtering, and custom bundle discount modules.",
        features: ["Section Everywhere (OS 2.0)", "Vanilla JS Interactivity", "Tailwind styling inside Liquid", "Third-party Script Auditing"]
    },
    {
        slug: "next-js-development",
        title: "Next.js Headless Commerce",
        description: "Ultra-fast headless stores utilizing Next.js React Server Components and GraphQL Storefront APIs to bring web speed to under 1 second.",
        features: ["Incremental Static Regeneration (ISR)", "Shopify GraphQL API Integration", "Global Edge CDN caching", "Optimized Core Web Vitals"]
    },
    {
        slug: "api-integration",
        title: "API Integration & Middleware",
        description: "Syncing Shopify inventories, orders, and customer tracking profiles with third-party ERPs, CRMs (HubSpot/Salesforce), and delivery tools.",
        features: ["Bespoke Node.js/Express Middleware", "Queue Systems (BullMQ/Redis)", "Real-time Webhook Synchronization", "Robust Error Logs & Retry Logic"]
    },
    {
        slug: "performance-optimization",
        title: "Performance Optimization",
        description: "Accelerating your slow Shopify Liquid or React frontend to score 95+ on Google Lighthouse, boosting search ranks and conversion numbers.",
        features: ["Lazy-loading Scripts Auditing", "Image Format Modernization", "Critical CSS Inline Injection", "Detailed Performance Profiling"]
    }
];
