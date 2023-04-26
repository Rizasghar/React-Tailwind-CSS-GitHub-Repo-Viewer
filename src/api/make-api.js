import { APIToken, BaseURL } from "./api-creds";

export const githubService = async (data) => {
  const { url, method, service } = data;
  const options = {
    method: method,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
      Authorization: `Bearer ${APIToken}`,
    },
  };

  const URL = service === "commits" ? url : BaseURL + url;
  try {
    const response = await fetch(URL, options);
    const data = await response.json();
    return data;
  } catch (err) {
    return null;
  }
};
