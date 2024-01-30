import axios from "axios";

const http = axios.create({
  baseURL: "https://crf-api.onrender.com"
})

export default http;