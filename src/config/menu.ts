export interface NavLink {
    title: string;
    href: string;
    description: string;
    children?: NavLink[];
}

export interface MenuSection {
    title: string;
    href?: string;
    description?: string;
    children?: MenuSection[];
}

export const navigationMenu = {
    products: {
        title: "Products",
        href: "/products",
        children: [
            {
                title: "ZenCreator",
                href: "/products/zencreator",
                children: [
                    {
                        title: "Content Creation",
                        href: "/products/zencreator/content-creation",
                        children: [
                            { title: "AI Face Generation", href: "/products/zencreator/content-creation/ai-face-generation", description: "Generate realistic AI faces for your content." },
                            { title: "AI Face Swapping", href: "/products/zencreator/content-creation/ai-face-swapping", description: "Swap faces in images and videos seamlessly." },
                            { title: "AI Upscaling", href: "/products/zencreator/content-creation/ai-upscaling", description: "Enhance image quality with AI upscaling." },
                            { title: "AI Generation by Prompt", href: "/products/zencreator/content-creation/ai-generation-prompt", description: "Generate content from text prompts." },
                            { title: "AI Generation by Reference", href: "/products/zencreator/content-creation/ai-generation-reference", description: "Create content based on reference images." },
                            { title: "AI Dating Profile Generation", href: "/products/zencreator/content-creation/dating-profiles", description: "Generate compelling dating profiles." },
                            { title: "AI Video Generation", href: "/products/zencreator/content-creation/video-generation", description: "Create videos with AI technology." },
                            { title: "AI Carousel Generation", href: "/products/zencreator/content-creation/carousel-generation", description: "Generate social media carousels." },
                            { title: "AI Photo Shoot Generation", href: "/products/zencreator/content-creation/photo-shoot", description: "Create professional photo shoots with AI." }
                        ]
                    },
                    {
                        title: "Publishing Hub",
                        href: "/products/zencreator/publishing-hub",
                        children: [
                            { title: "on Instagram", href: "/products/zencreator/publishing-hub/instagram", description: "Schedule and publish to Instagram." },
                            { title: "on Threads", href: "/products/zencreator/publishing-hub/threads", description: "Manage your Threads presence." },
                            { title: "on Twitter (X)", href: "/products/zencreator/publishing-hub/twitter", description: "Post and schedule tweets efficiently." },
                            { title: "on Facebook", href: "/products/zencreator/publishing-hub/facebook", description: "Manage Facebook content and pages." },
                            { title: "on YouTube", href: "/products/zencreator/publishing-hub/youtube", description: "Upload and schedule YouTube videos." }
                        ]
                    },
                    { title: "Account Management", href: "/products/zencreator/account-management", description: "Connect and manage all your social accounts." },
                    { title: "Analytics and Insights", href: "/products/zencreator/analytics", description: "Track performance across all platforms." }
                ]
            },
            {
                title: "ZenComfy",
                href: "/products/zencomfy",
                children: [
                    { title: "ComfyUI in the Cloud", href: "/products/zencomfy/comfy-ui-cloud", description: "Run powerful ComfyUI workflows in the cloud." },
                    { title: "ComfyUI Workflow as Web App", href: "/products/zencomfy/workflow-as-app", description: "Turn any ComfyUI workflow into a web application." }
                ]
            }
        ]
    },
    services: {
        title: "Services",
        href: "/services",
        children: [
            {
                title: "AI Influencers",
                href: "/services/ai-influencers",
                description: "Create and manage virtual influencers for your brand.",
                children: [
                    { title: "Full Funnel Influencer Marketing", href: "/services/full-funnel-marketing", description: "Comprehensive influencer marketing campaigns." },
                    { title: "Performance Marketing", href: "/services/performance-marketing", description: "Data-driven marketing to achieve specific goals." },
                    { title: "Experiential Influencer Marketing", href: "/services/experiential-marketing", description: "Create immersive brand experiences with influencers." },
                    { title: "Creative Influencer Projects", href: "/services/creative-projects", description: "Unique and innovative influencer collaborations." },
                    { title: "Brand Ambassador Programs", href: "/services/brand-ambassador", description: "Build long-term relationships with brand ambassadors." }
                ]
            },
            { title: "Dating Profiles Generation", href: "/services/dating-profiles-generation", description: "Professional dating profile creation services." },
            { title: "Photo Shoot Generation", href: "/services/photo-shoots-generation", description: "AI-powered photo shoots for various marketing needs." }
        ]
    },
    technologies: {
        title: "Technologies",
        href: "/technologies",
        description: "Explore our cutting-edge AI technologies."
    },
    pricing: {
        title: "Pricing",
        href: "/pricing", 
        description: "Choose the perfect plan for your needs."
    },
    // about: {
    //     title: "About Us",
    //     href: "/about-us",
    //     description: "About ZenCreator — mission, values, global team."
    // }
};
