// https://portfolio-backend-rdsn.onrender.com/api/reviews/

// src/hooks/useReviews.ts

import { useEffect, useState } from "react";
import axios from "axios";
import { Review } from "@/lib/types";

const useGitHubAllProjects = () => {
  const [projects, setProjects] = useState<Review[]>([]);
  const [error, setError] = useState<string | null>(null);
  const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const response = await axios.get(
          "https://portfolio-backend-rdsn.onrender.com/api/reviews/"
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
