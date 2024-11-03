"use client"; // Indicate this is a client component
import React, { useState } from "react";
import HeroText from "@/components/HeroText"; // Import HeroText component
import ProjectRenderer from "@/components/ProjectRenderer"; // Import ProjectRenderer
import useGitHubAllProjects from "@/hooks/useGitHubAllProjects"; // Hook to fetch all projects
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"; // Import Pagination components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectsPage = () => {
  const { projects, error } = useGitHubAllProjects(); // Fetch all projects
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4; // Number of projects to display per page

  if (error) return <div>Error: {error}</div>;

  // Calculate total number of pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Get current projects to display
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Function to handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-[90vh] p-8 flex flex-col items-center">
      <HeroText
        text="All My Projects"
        className="mb-6 text-center text-4xl font-bold"
      />
      <div className="">
        {currentProjects.length > 0 ? (
          currentProjects.map((project) => (
            <ProjectRenderer key={project.id} {...project} />
          ))
        ) : (
          <div>
            {Array.from({ length: 4 }, (_, index) => (
              <Card className=" transition-transform transform hover:scale-105 duration-200 w-[90vh] my-2" key={index}>
                <div className="flex items-center">
                  <CardHeader className="flex flex-col w-full">
                    <CardTitle className="text-xl font-bold">
                      <div>name</div>
                    </CardTitle>
                    <CardDescription>
                      <Button>
                          View Project
                      </Button>
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="text-gray-600 mb-4 w-full">
                    {"description"}
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            {currentPage > 1 && (
              <PaginationPrevious
                href="#"
                onClick={() => handlePageChange(currentPage - 1)}
              />
            )}
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem key={index + 1}>
              <PaginationLink
                href="#"
                isActive={currentPage === index + 1}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            {currentPage < totalPages && (
              <PaginationNext
                href="#"
                onClick={() => handlePageChange(currentPage + 1)}
              />
            )}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ProjectsPage;
