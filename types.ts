export interface SectionTitleProps {
    text1: string;
    text2: string;
    text3: string;
}

export interface TestimonialCardProps {
    testimonial: ITestimonial;
    index: number;
}

export interface ITestimonial {
    image: string;
    name: string;
    handle: string;
    date: string;
    quote: string;
}

export interface IFeature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface IFooter {
    title: string;
    links: IFooterLink[];
}

export interface IFooterLink {
    name: string;
    href: string;
}

export interface NavbarProps {
    navlinks: INavLink[];
}

export interface INavLink {
    name: string;
    href: string;
}

export interface PricingCardProps {
    pricing: IPricing;
    index: number;
}

export interface IPricing {
    name: string;
    price: number;
    period: string;
    features: string[];
    mostPopular: boolean;
}

export interface SectionProps {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
}

export interface IProject {
    slug: string;
    title: string;
    client: string;
    challenge: string;
    solution: string;
    techStack: string[];
    metrics: { label: string; value: string }[];
    screenshots: string[];
    liveDemoUrl: string;
    category: "Shopify" | "Next.js" | "Custom Apps" | "UI/UX";
    coverImage: string;
    summary: string;
}

export interface IService {
    title: string;
    description: string;
    features: string[];
    slug: string;
}

export interface ITimelineItem {
    year: string;
    title: string;
    description: string;
}