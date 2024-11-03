// src/hooks/useGitHubAllProjects.ts

import { useEffect, useState } from "react";

interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

const useGitHubAllProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);
  const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN; // Ensure this is set in .env.local

  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/user/repos", {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setProjects(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err));
        }
      }
    };

    fetchAllProjects();
  }, [GITHUB_TOKEN]);

  return { projects, error };
};

export default useGitHubAllProjects;
