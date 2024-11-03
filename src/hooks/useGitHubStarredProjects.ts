// src/hooks/useGitHubStarredProjects.ts:

import { Project } from "@/lib/types";
import { useEffect, useState } from "react";


const useGitHubStarredProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);
  const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  useEffect(() => {
    const fetchStarredProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/user/starred", {
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

    fetchStarredProjects();
  }, [GITHUB_TOKEN]);

  return { projects, error };
};

export default useGitHubStarredProjects;
