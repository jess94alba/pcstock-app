import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.103:5171/api", 
});

export default api;
