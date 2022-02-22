import axios from "axios";

export const API = axios.create({
  // baseURL: "http://www.omdbapi.com/?i=tt3896198&apikey=3d19be93&type=movie"
  // baseURL: process.env.REACT_APP_API,
  baseURL: "http://www.omdbapi.com",
});
