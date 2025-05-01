import axios from "axios";
import { Project } from "@/lib/types";

async function fetchAllGithubProjects(): Promise<Project[]> {
    const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    if (!GITHUB_TOKEN) {
        throw new Error("GitHub token is not defined");
    }

    try {
        const response = await axios.get(
            "https://api.github.com/user/repos?visibility=public",
            {
                headers: {
                    Authorization: `Bearer ${GITHUB_TOKEN}`,
                },
            }
        );

        return response.data;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            throw new Error(
                `Error: ${err.response?.status} ${
                    err.response?.statusText || "Unknown error"
                }`
            );
        } else if (err instanceof Error) {
            throw new Error(err.message);
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
}

export default fetchAllGithubProjects;
