import axios from "axios";

const api = axios.create({
  baseURL: "http://172.104.181.250"
});

export default api;
