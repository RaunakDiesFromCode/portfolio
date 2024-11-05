// src/components/ProjectRenderer.tsx

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Project } from "@/lib/types";

const ProjectRenderer: React.FC<Project> = ({
  name,
  description,
  html_url,
  homepage,
}) => {
  return (
    <Card className=" transition-transform transform hover:scale-105 duration-200 w-[80vw] my-2">
      <div className="flex items-center flex-col md:flex-row">
        <CardHeader className="flex flex-col md:items-start gap-2 w-full">
          <CardTitle className="text-xl font-bold">
            <div>{name}</div>
          </CardTitle>
          <CardDescription className="flex items-center gap-2">
            <Button asChild>
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit"
              >
                View Project
              </a>
            </Button>
            {homepage && (
              <Button asChild>
                <a
                  href={homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit"
                >
                  View Live
                </a>
              </Button>
            )}
          </CardDescription>
        </CardHeader>

        <CardContent className="text-gray-600 mb-4 w-full">
          {description || "No description provided."}
        </CardContent>
      </div>
    </Card>
  );
};

export default ProjectRenderer;
