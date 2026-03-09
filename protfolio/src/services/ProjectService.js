
const STORAGE_KEY = 'portfolio_projects';

const initialProjects = [
    {
        id: 1,
        title: "Shopify Gym Clothing Store",
        stack: "Shopify + Liquid",
        description: "Complete Shopify e-commerce website for gym clothing and activewear.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000",
        category: "Web Design",
        longDescription: "This project involved creating a full-scale Shopify store for a fitness brand. The goal was to create a high-converting landing page with integrated product catalogs and promotional banners. We customized the Liquid theme to include unique sections for user testimonials and size guides.",
        githubLink: "#",
        demoLink: "#"
    },
    {
        id: 2,
        title: "E-Commerce Platform",
        stack: "MERN Stack",
        description: "Full-featured e-commerce platform with payment integration and admin dashboard.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
        category: "App Design",
        longDescription: "A robust MERN stack application featuring user authentication, product management, and Stripe payment integration. The admin panel allows real-time inventory tracking and order processing.",
        githubLink: "#",
        demoLink: "#"
    },
    {
        id: 3,
        title: "Task Management App",
        stack: "React + Node.js",
        description: "Collaborative task management application with real-time updates.",
        image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=1000",
        category: "App Design",
        longDescription: "Built with React and Node.js, this app uses Socket.io for real-time updates among team members. Users can create boards, assign tasks, and track progress through a drag-and-drop interface.",
        githubLink: "#",
        demoLink: "#"
    },
    {
        id: 4,
        title: "Social Media Dashboard",
        stack: "MERN Stack",
        description: "Analytics dashboard for social media management with data visualization.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
        category: "App Design",
        longDescription: "This dashboard provides comprehensive analytics for social media platforms. It utilizes Chart.js for data visualization and integrates with multiple APIs to fetch real-time engagement metrics.",
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
