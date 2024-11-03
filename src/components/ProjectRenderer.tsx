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
import { ProjectProps } from "@/lib/types";

const ProjectRenderer: React.FC<ProjectProps> = ({
  name,
  description,
  html_url,
}) => {
  return (
    <Card className=" transition-transform transform hover:scale-105 duration-200 w-[90vh] my-2">
      <div className="flex items-center">
        <CardHeader className="flex flex-col w-full">
          <CardTitle className="text-xl font-bold">
            <div>{name}</div>
          </CardTitle>
          <CardDescription>
            <Button>
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit"
              >
                View Project
              </a>
            </Button>
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
