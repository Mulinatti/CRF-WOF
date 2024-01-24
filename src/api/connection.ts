import axios from "axios";

const http = axios.create({
  baseURL: "https://crf-wof-api.vercel.app"
})

export default http;