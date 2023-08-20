import { useEffect, useState } from "react";
import movieApi from "../api/MovieApi";

import Movie from "./Movie";
import Loading from "./Loading";
const APIKey = import.meta.env.VITE_API_KEY;

interface MovieData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

function List() {
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [card, setCard] = useState<MovieData[]>([]);

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const response = await movieApi.get(
          `/movie/upcoming?api_key=${APIKey}&page=${page}`
        );
        setCard((prev) => [...prev, ...response.data.results]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieData();
  }, [page]);

  const handleInfiniteScroll = () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, []);

  return (
    <>
      <Movie movieInfo={card} />
      {loading && <Loading />}
    </>
  );
}

export default List;
