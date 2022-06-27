import fetch from "./fetch";

const api = {
  get: (endpoint: string) => {
    return fetch(
      process.env.REACT_APP_BASEURL +
        endpoint +
        `&appid=${process.env.REACT_API_TOKEN}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
  },
};

export default api;
