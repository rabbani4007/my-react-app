import axios from "axios";

const API_KEY = "ab3ae65415ce46a19b037bb494bcbb73";
const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;

export default {
  getTopHeadlines: async (country) => {
    try {
      const response = await axios.get(`${NEWS_API_URL}&country=${country}`);
      return response.data;
    } catch (error) {
      return [];
    }
  },
};
