import axios from "axios";

export const axiosClient = axios.create({
   baseURL: "http://borarachar.online:8080/v1",
   timeout: 0,
   headers: {
      "Content-type": "application/json",
   },
});
