import { Review } from "@/lib/types";

// Fallback offline reviews with unique IDs
export const OfflineReviews: Review[] = [
    {
        id: "offline-1",
        name: "Sagnik",
        contact: "@sagnifyofficial",
        review: "I can do this in Django too. Lame.",
        rating: 3,
    },
    {
        id: "offline-2",
        name: "Tautik",
        contact: "@tautik_sinha",
        review: "You guys will have fewer jobs. ChatGPT can do this.",
        rating: 2,
    },
    {
        id: "offline-3",
        name: "Swagnik",
        contact: "@swagnikganguly",
        review: "Looks decent.",
        rating: 4,
    },
    {
        id: "offline-4",
        name: "Sneha",
        contact: "@susneha",
        review: "I was paid to say this. But I love it.",
        rating: 5,
    },
    {
        id: "offline-5",
        name: "A proud client",
        contact: "@raunakisannoying",
        review: "This guy is a genius. I love him.",
        rating: 5,
    },
    {
        id: "offline-6",
        name: "Swarnabha",
        contact: "@swarnabha19",
        review: "Few people can do this. He is one of them.",
        rating: 4,
    },
    {
        id: "offline-7",
        name: "Rishita",
        contact: "@rix_04turtle",
        review: "This guy codes as sharp as his jokes.",
        rating: 4,
    },
    {
        id: "offline-8",
        name: "Bristi",
        contact: "@sen_bristi_",
        review: "His designs are so good, they make the internet look bad.",
        rating: 5,
    },
];


export const ACHIEVEMENTS = [
    {
        id: "sih-2025",
        type: "competition",
        title: "Smart India Hackathon",
        role: "Participant",
        year: "2025",
        description:
            "Worked in a team-based national hackathon focused on problem-solving, rapid prototyping, and real-world constraints.",
    },
    {
        id: "sih-2024",
        type: "competition",
        title: "Smart India Hackathon",
        role: "Participant",
        year: "2024",
        description:
            "Worked in a team-based national hackathon focused on problem-solving, rapid prototyping, and real-world constraints.",
    },
    {
        id: "sih-2023",
        type: "competition",
        title: "Smart India Hackathon",
        role: "Participant",
        year: "2023",
        description:
            "Worked in a team-based national hackathon focused on problem-solving, rapid prototyping, and real-world constraints.",
    },
    {
        id: "hs-boards",
        type: "exam",
        title: "Higher Secondary Examination",
        authority: "ISC Board",
        year: "2022",
        description: "Scored 87% with Computer Science as a core subject.",
    },
    {
        id: "sec-boards",
        type: "exam",
        title: "Secondary Examination",
        authority: "ICSE Board",
        year: "2020",
        description:
            "Scored 89%, strong foundation in mathematics and science.",
    },
];

export const EDUCATION = [
    {
        id: "btech-cs",
        period: "2023 – Present",
        title: "Bachelor of Technology in Computer Science (Data Science)",
        institution: "Future Institute of Engineering and Management, Sonarpur",
        details:
            "CGPA: 7.5 (Till 5th Semester). Relevant Coursework: Data Structures, Algorithms, Database Management Systems, Machine Learning, Artificial Intelligence.",
    },
    {
        id: "higher-secondary",
        period: "2020 – 2022",
        title: "Higher Secondary Education",
        institution: "The Assembly of God Church School, Tollygunge",
        details:
            "Percentage: 87%. Subjects: Physics, Chemistry, Mathematics, Computer Science, English",
    },
    {
        id: "secondary",
        period: "2018 – 2020",
        title: "Secondary Education",
        institution: "The Assembly of God Church School, Tollygunge",
        details:
            "Percentage: 89%. Subjects: English, Hindi, Mathematics, Science, Social Studies, Computer Applications",
    },
];

export const SOCIALS = [
    { href: "https://github.com/RaunakDiesFromCode", icon: "github" },
    { href: "https://www.linkedin.com/in/raunak-manna/", icon: "linkedin" },
    { href: "https://x.com/RaunakM298742", icon: "twitter" },
    { href: "https://www.instagram.com/har.jagah.raunak/", icon: "instagram" },
    {
        href: "mailto:raunakmanna43@gmail.com?subject=I%20saw%20your%20portfolio",
        icon: "mail",
    },
] as const;


export const TERMINAL_COMMANDS = {
    windows: "irm https://hifromraunak.vercel.app/run.ps1 | iex",
    unix: "sh <(curl -fsSL https://hifromraunak.vercel.app/run.sh)",
} as const;
