import axios from "axios";
import config from "./config.json";

export function getRequest(endpoint) {
  return axios.get(`${config.baseUrl}${endpoint}`);
}
