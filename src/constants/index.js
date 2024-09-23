import { Ad, Ecohabit, Pursuit } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    
    {
        title: "Project Manager",
        company_name: "Ad Lumiere",
        icon: Ad,
        iconBg: "#ffffff",
        date: "Febuary 2024 - July 2024",
        points: [
            "Guide and Support: Provide support and guidance to the team.",
            "Data-Driven Optimization: Emphasize a data-driven approach to decision-making.",
            "Encouraging the use of A/B testing, user feedback, analytics, and other metrics.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Software Engineering Fellow",
        company_name: "Pursuit",
        icon: Pursuit,
        iconBg: "#000000",
        date: "Nov 2023 - Nov 2024",
        points: [
            "Completed 2,000 hours of coursework in web development, CS fundamentals, and leadership development",
            "Developed proficiency in HTML/CSS, JavaScript, Python, NodeJS, ReactJS, SQL, and AWS",
            "Contributed to the open-source community by writing blogs about programming technologies such as Learning Swift.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Computer Networking Student",
        company_name: "Swenson Arts & Technology High School",
        icon: Ecohabit,
        iconBg: "#B6EFD4",
        date: "Sept 2009 - Jun 2013",
        points: [
            "The program focuses on the design, implementation, and management of linked systems of computers, peripherals, and associated software",
            "It includes instruction in operating systems and applications; installing new hardware and software systems or components.",
            "Identifying the causes of networking problems.",
            "Using diagnostic testing software and equipment; and troubleshooting.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ROUSE-prog',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/stevenrouse/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://pricewise-jsm.vercel.app',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://threads-psi.vercel.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-blue',
        name: 'Weatherware',
        description: 'Designed to provide users with real-time weather information based on the provided location.',
        link: 'https://whatweatherware.netlify.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-pink',
        name: 'Local Buzz',
        description: 'A full-stack React game that challenges users to test their movie knowledge based on a randomly generated letter.',
        link: 'https://github.com/ROUSE-prog/React/tree/main/movie-roulette',
    }
];