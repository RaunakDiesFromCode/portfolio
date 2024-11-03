// src/hooks/useGitHubAllProjects.ts

import { useEffect, useState } from "react";
import axios from "axios";

interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

const useGitHubAllProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);
  const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/user/repos?visibility=public",
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
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      }
    };

    fetchAllProjects();
  }, [GITHUB_TOKEN]);

  return { projects, error };
};

export default useGitHubAllProjects;
