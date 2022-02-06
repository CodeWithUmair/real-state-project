import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "303da0877cmsh8c9636f47f5cf1ap1d8f3ejsnbb9293bb1329",
    },
  });
  return data;
};
