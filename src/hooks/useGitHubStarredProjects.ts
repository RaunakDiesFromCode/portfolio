// src/hooks/useGitHubStarredProjects.ts

import { Project } from "@/lib/types";
import axios from "axios";
import { useEffect, useState } from "react";

const useGitHubStarredProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);
  const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  useEffect(() => {
    const fetchStarredProjects = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/user/starred?visibility=public",
          {
            headers: {
              Authorization: `Bearer ${GITHUB_TOKEN}`,
            },
          }
        );

        setProjects(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(
            `Error: ${err.response?.status} ${
              err.response?.statusText || "Unknown error"
            }`
          );
        } else if (err instanceof Error) {
          // Handle general JavaScript errors
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      }
    };

    fetchStarredProjects();
  }, [GITHUB_TOKEN]);

  return { projects, error };
};

export default useGitHubStarredProjects;
