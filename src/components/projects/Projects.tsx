// src/components/Projects.tsx

"use client";
import React from "react";
import HeroText from "../ui/HeroText";
import useGitHubStarredProjects from "@/hooks/useGitHubStarredProjects";
import ProjectRenderer from "./ProjectRenderer";
import { Button } from "../ui/button";
import Link from "next/link";

const Projects = () => {
    const { projects, error } = useGitHubStarredProjects();

    if (error) return <div>Error: {error}</div>;

    return (
        <div
            className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-24"
            id="projects"
        >
            <HeroText
                text="What I've done"
                className="pointer-events-none mb-3 whitespace-pre-wrap bg-foreground bg-clip-text text-center text-4xl md:text-9xl font-bold leading-none text-transparent"
            />
            <div className="">
                {projects.slice(0, 4).map(
                    (
                        project, // Only take the first 4 projects
                    ) => (
                        <ProjectRenderer key={project.id} {...project} />
                    ),
                )}
            </div>
            <Button asChild className="mt-8">
                <Link
                    href="/projects"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View all projects
                </Link>
            </Button>
        </div>
    );
};

export default Projects;
