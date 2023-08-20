import { useSelector } from "react-redux";
import { RootState } from "../Store/store";

import MovieCard from "./MovieCard";

function SearchedMovie() {
  const { movies } = useSelector((state: RootState) => state.movies);

  return (
    <div className="p-6 ">
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 min-w-512 mx-auto">
        {movies &&
          movies.map((movie, index) => (
            <MovieCard key={index} myData={movie} />
          ))}
      </div>
    </div>
  );
}

export default SearchedMovie;
