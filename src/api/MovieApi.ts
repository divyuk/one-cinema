import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const IMAGES_PATH = "https://image.tmdb.org/t/p";
