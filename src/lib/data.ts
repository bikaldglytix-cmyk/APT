export interface Article {
    id: string;
    slug: string;
    title: string;
    category: string;
    readTime: string;
    excerpt: string;
    content: string;
    image: string;
    author: {
        name: string;
        avatar: string;
    };
    date: string;
    featured: boolean;
}

export const articles: Article[] = [
    {
        id: "1",
        slug: "biochar-revolutionizing-soil-health-nepal",
        title: "Biochar: Revolutionizing Soil Health and Carbon Sequestration in Nepal",
        category: "Field Notes",
        readTime: "5 min read",
        excerpt: "Discover how we are converting agricultural waste into a powerful tool for soil regeneration and verifiable carbon removal.",
        content: `
At Appropriate Technology Lab, our core mission is to bridge global expertise with local realities. Biochar represents one of our most effective interventions. 

### What is Biochar?
Biochar is a charcoal-like substance that's made by burning organic material from agricultural and forestry wastes (also called biomass) in a controlled process called pyrolysis. Although it looks a lot like common charcoal, biochar is produced using a specific process to reduce contamination and safely store carbon.

### Our Impact in Nepal
By training women-led cooperatives in rural Nepal to produce and apply biochar, we achieve multiple outcomes simultaneously:
- **Carbon Removal**: Capturing carbon that would otherwise be released through open burning.
- **Soil Health**: Improving water retention and nutrient availability in depleted soils.
- **Economic Empowerment**: Providing local communities with new streams of income through carbon credits and increased agricultural yields.

We have established rigorous SOPs (Standard Operating Procedures) and MRV (Measurement, Reporting, and Verification) frameworks to ensure that every ton of carbon removed is verifiable and ready for global certification.
        `,
        image: "/works/biochar.jpg",
        author: {
            name: "Research Team",
            avatar: "/logo/atl-logo.png"
        },
        date: "May 25, 2026",
        featured: true
    },
    {
        id: "2",
        slug: "empowering-women-climate-action",
        title: "Empowering Women at the Forefront of Climate Action",
        category: "Community",
        readTime: "4 min read",
        excerpt: "A deep dive into our cooperative model that places women at the center of localized climate interventions.",
        content: `
True environmental sustainability cannot be achieved without social equity. In many rural communities in Nepal, women are the primary stewards of the land, making them the natural leaders for climate resilience projects.

### The Cooperative Model
Our approach goes beyond simply providing technology. We assist in the formation and training of women-led cooperatives. These cooperatives are trained not just in the technical aspects of deploying solutions like biochar, but also in business management, leadership, and carbon tracking.

### Why It Works
When women are empowered to lead environmental operations, we see higher adoption rates, better maintenance of technologies, and a broader distribution of economic benefits throughout the community. This model guarantees that our projects don't just survive beyond the initial funding cycle—they thrive and scale organically.
        `,
        image: "/works/community.jpg",
        author: {
            name: "Community Outreach",
            avatar: "/logo/atl-logo.png"
        },
        date: "May 10, 2026",
        featured: false
    },
    {
        id: "3",
        slug: "scaling-mrv-frameworks-developing-nations",
        title: "Scaling MRV Frameworks for Developing Ecosystems",
        category: "Methodology",
        readTime: "7 min read",
        excerpt: "How we build robust Measurement, Reporting, and Verification systems that meet global standards while remaining accessible locally.",
        content: `
The global carbon market demands absolute integrity. However, many of the standard MRV (Measurement, Reporting, and Verification) protocols are designed for large-scale, industrial projects in developed nations, making them difficult and expensive to implement for grassroots projects in places like Nepal.

### Our Approach to MRV
At Appropriate Technology Lab, we specialize in adapting rigorous MRV frameworks for decentralized, community-driven projects. 

We utilize a combination of mobile technology, localized training, and robust data architecture to ensure that every metric—from the volume of biomass pyrolyzed to the amount of biochar applied to the soil—is accurately tracked and securely stored.

### Bridging the Gap
By creating MRV systems that are both accessible to local farmers and rigorous enough for international auditors, we unlock institutional capital for the communities that need it most, proving that grassroots action can drive global impact.
        `,
        image: "/works/nature.jpg",
        author: {
            name: "Technical Team",
            avatar: "/logo/atl-logo.png"
        },
        date: "April 28, 2026",
        featured: false
    }
];
