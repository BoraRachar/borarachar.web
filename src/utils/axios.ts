import axios from "axios";

const API_BASE_URL =
  process.env.API_BASE_URL || "http://api.borarachar.online/v1";

// Remove after validate
console.info("API_BASE_URL", API_BASE_URL);

export const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});
