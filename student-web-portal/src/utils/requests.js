import axios from "axios";
import config from "./config.json";

export function getRequest(endpoint) {
  return axios.get(`${config.baseUrl}${endpoint}`);
}

export function postRequest(endpoint, payload) {
  return axios.post(`${config.baseUrl}${endpoint}`, payload);
}
