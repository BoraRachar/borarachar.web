import axios from "axios";

const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3000";

export const axiosClient = axios.create({
   baseURL: API_BASE_URL,
   headers: {
      "Content-type": "application/json",
   },
});
