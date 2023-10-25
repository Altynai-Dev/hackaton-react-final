import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://34.89.235.149/api/v1",
  withCredentials: true,
});