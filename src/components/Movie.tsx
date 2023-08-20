import React from "react";
import MovieCard from "./MovieCard";

/**
 * Represents a component that displays a grid of movie cards.
 * @param {object} movieInfo - An array of movie information objects.
 * @param {string} movieInfo.title - The title of the movie.
 * @param {string} movieInfo.poster_path - The path to the movie's poster image.
 * @param {number} movieInfo.id - The unique ID of the movie.
 * @param {number} movieInfo.vote_average - The average vote rating for the movie.
 * @param {string} movieInfo.overview - A brief overview of the movie's plot.
 */

interface MovieProps {
  movieInfo: {
    title: string;
    poster_path: string;
    id: number;
    vote_average: number;
    overview: string;
  }[];
}

const Movie: React.FC<MovieProps> = ({ movieInfo }) => {
  return (
    <div className="p-6 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 min-w-512 mx-auto ">
        {movieInfo.map((curVal, id) => (
          <MovieCard key={id} myData={curVal} />
        ))}
      </div>
    </div>
  );
};

export default Movie;
