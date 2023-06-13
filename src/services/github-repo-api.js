import axios from "axios";

const GITHUB_REPO_API_URL = `https://api.github.com/search/repositories?`;

export async function searchRepos(query) {
  try {
    const response = await axios.get(GITHUB_REPO_API_URL + `q=${query}`);
    console.log("response  ", response);
    return response.data;
  } catch (error) {
    return [];
  }
}
