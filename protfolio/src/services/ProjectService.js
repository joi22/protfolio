
const STORAGE_KEY = 'portfolio_projects';

const initialProjects = [
    {
        id: 1,
        title: "FlashSync Inventory Master",
        stack: "Remix + GraphQL + Node.js",
        description: "A high-performance Shopify public app for real-time inventory synchronization across multiple warehouses.",
        businessImpact: "Automated 40+ hours of manual inventory sync for a Plus Merchant.",
        image: "https://images.unsplash.com/photo-1586528116311-ad86d7c493cf?auto=format&fit=crop&q=80&w=1000",
        category: "Public App",
        longDescription: "FlashSync leverages Shopify's Admin GraphQL API and Webhooks to ensure inventory levels are always accurate. It includes a custom Remix-based dashboard with Polaris components for a native Shopify feel.",
        githubLink: "#",
        demoLink: "#"
    },
    {
        id: 2,
        title: "LuxCart Checkout Extension",
        stack: "Checkout UI Extensions + Rust",
        description: "Custom checkout extension for a luxury brand to add personalized gift wrapping options and upsells.",
        businessImpact: "Increased Average Order Value (AOV) by 15% within the first month.",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1000",
        category: "Checkout Extension",
        longDescription: "Built using the new Shopify Checkout UI Extensions, this project provides a seamless, secure way for customers to customize their orders without leaving the checkout flow.",
        githubLink: "#",
        demoLink: "#"
    },
    {
        id: 3,
        title: "B2B Wholesale Portal",
        stack: "Liquid + Javascript + API",
        description: "A secure wholesale portal integrated into a Shopify Plus store with custom pricing tiers.",
        businessImpact: "Reduced wholesale order processing time by 60%.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000",
        category: "Custom Solution",
        longDescription: "I developed a custom wholesale experience using metaobjects and a specialized Liquid theme. It allows pre-approved B2B customers to view exclusive pricing and place bulk orders effortlessly.",
        githubLink: "#",
        demoLink: "#"
    },
    {
        id: 4,
        title: "ERP Bridge: Shopify to SAP",
        stack: "Node.js + AWS + Shopify API",
        description: "Custom middleware connecting a large Shopify Plus store to a legacy SAP ERP system.",
        businessImpact: "Eliminated data entry errors and synchronized 10,000+ orders daily.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
        category: "API Integration",
        longDescription: "This robust integration ensures that orders, customers, and inventory levels are perfectly synced between Shopify and SAP in real-time, handling high traffic volumes without latentcy.",
        githubLink: "#",
        demoLink: "#"
    }
];

export const getProjects = () => {
    let stored = localStorage.getItem(STORAGE_KEY);
    let projects;
    if (!stored) {
        projects = initialProjects;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    } else {
        projects = JSON.parse(stored);
        // Ensure all projects have the new fields
        projects = projects.map(p => ({
            ...p,
            githubLink: p.githubLink || '#',
            demoLink: p.demoLink || '#'
        }));
    }
    return projects;
};

export const saveProject = (project) => {
    const projects = getProjects();
    if (project.id) {
        const index = projects.findIndex(p => p.id === project.id);
        projects[index] = project;
    } else {
        project.id = Date.now();
        projects.push(project);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    return projects;
};

export const deleteProject = (id) => {
    const projects = getProjects();
    const filtered = projects.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return filtered;
};

export const getProjectById = (id) => {
    const projects = getProjects();
    return projects.find(p => p.id === parseInt(id));
};
