import React from "react";
import HeroText from "./ui/HeroText";
import { Timeline } from "./ui/Timeline";

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

const Education = () => {
    return (
        <section
            id="education"
            className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 pt-24"
        >
            <HeroText
                text="Education"
                className="pointer-events-none mb-12 whitespace-pre-wrap bg-foreground bg-clip-text text-center font-bold leading-none text-transparent"
            />

            <div className="w-full max-w-3xl flex justify-center md:pl-10">
                <Timeline items={EDUCATION} />
            </div>
        </section>
    );
};

export default Education;
