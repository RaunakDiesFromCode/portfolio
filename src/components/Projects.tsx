// src/components/Projects.tsx

"use client";
import React from "react";
import HeroText from "./HeroText";
import useGitHubStarredProjects from "@/hooks/useGitHubStarredProjects";
import ProjectRenderer from "./ProjectRenderer";
import NewTabButton from "./NewTabButton";

const Projects = () => {
  const { projects, error } = useGitHubStarredProjects();

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-24">
      <HeroText
        text="What I've done"
        className="pointer-events-none mb-3 whitespace-pre-wrap bg-foreground bg-clip-text text-center text-4xl md:text-9xl font-bold leading-none text-transparent"
      />
      <div className="">
        {projects.slice(0, 4).map(
          (
            project // Only take the first 4 projects
          ) => (
            <ProjectRenderer key={project.id} {...project} />
          )
        )}
      </div>
      <NewTabButton text="View all projects" href="/projects"/>
    </div>
  );
};

export default Projects;
