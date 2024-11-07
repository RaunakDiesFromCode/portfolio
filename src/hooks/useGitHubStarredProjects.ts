// src/hooks/useGitHubStarredProjects.ts

import { Project } from "@/lib/types";
import axios from "axios";
import { useEffect, useState } from "react";

const useGitHubStarredProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);
  const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  useEffect(() => {
    const fetchUserAndStarredProjects = async () => {
      try {
        // Fetch authenticated user details
        const userResponse = await axios.get("https://api.github.com/user", {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
          },
        });
        const username = userResponse.data.login;

        // Fetch starred repositories
        const reposResponse = await axios.get(
          "https://api.github.com/user/starred?visibility=public",
          {
            headers: {
              Authorization: `Bearer ${GITHUB_TOKEN}`,
            },
          }
        );

        // Filter only repositories owned by the authenticated user
        const ownedRepos = reposResponse.data.filter(
          (repo: { owner: { login: string } }) => repo.owner.login === username
        );

        setProjects(ownedRepos);
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

    fetchUserAndStarredProjects();
  }, [GITHUB_TOKEN]);

  return { projects, error };
};

export default useGitHubStarredProjects;
