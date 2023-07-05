import axios from "axios";
import { GithubRepository } from "../interfaces/repository";
import { useQuery } from "@tanstack/react-query";

const github = axios.create({
  baseURL: "https://api.github.com",
});

interface SearchRepositoriesQuery {
  q: string;
  sort?: "stars" | "forks" | "updated";
  order?: "asc" | "desc";
  per_page?: number;
  page?: number;
}

interface SearchRepositoriesResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GithubRepository[];
}

export const useGithubRepositories = (query: SearchRepositoriesQuery) => {
  return useQuery<SearchRepositoriesResponse>({
    queryKey: ["repositories", query],
    queryFn: async () => {
      const { data } = await github.get("/search/repositories", {
        params: query,
      });
      return data;
    },
    enabled: !!query.q,
  });
};
