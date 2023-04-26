import { githubService } from "./make-api";

export const getRepos = async () => {
  let url = `/search/repositories?q=stars:>1&sort=stars&sort=stars&per_page=100`;
  let method = "GET";
  let service = "repos";
  return await githubService({ url, method, service });
};

export const getRepoCommits = async (commitsUrl) => {
  let url =  commitsUrl
  let method = "GET";
  let service = "commits";
  return await githubService({ url, method, service });
};
