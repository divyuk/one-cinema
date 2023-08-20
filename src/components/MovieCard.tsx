import React from "react";
import { IMAGES_PATH } from "../api/MovieApi";
import { Link } from "react-router-dom";

interface MovieCardProps {
  myData: {
    title: string;
    poster_path: string;
    id: number;
    vote_average: number;
    overview: string;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ myData }) => {
  // Destructuring the data.
  const { title, poster_path, id, vote_average, overview } = myData;
  // Show the description of the movie upto 30 characters.
  const truncatedOverview =
    overview.length > 30 ? overview.slice(0, 30) + "..." : overview;

  return (
    <Link
      to={`/movie/${id}`}
      className="block w-200 h-264 relative rounded-lg overflow-hidden"
    >
      <div className="relative w-200 h-200">
        {poster_path ? (
          <img
            src={`${IMAGES_PATH}/w200${poster_path}`}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <img className="w-full h-full object-cover" />
        )}
      </div>
      <div className="absolute bottom-0 left-0 p-2 w-full bg-black bg-opacity-60 text-white flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-xs line-clamp-2">{truncatedOverview}</p>
        </div>
        <div className="text-sm text-right">
          <div>{vote_average}</div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
