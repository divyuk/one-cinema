import { useEffect, useState } from "react";
import movieApi from "../api/MovieApi";
import { useParams } from "react-router-dom";
import Home from "./Home";

import { IMAGES_PATH } from "../api/MovieApi";
import Loading from "./Loading";

const APIKey = import.meta.env.VITE_API_KEY;

interface CastMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

interface MovieDetailData {
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  runtime: number;
  overview: string;
}

interface CreditsData {
  cast: CastMember[];
  crew: { job: string; name: string }[];
}

function MovieDetail() {
  const [movie, setMovie] = useState<MovieDetailData | null>(null);
  const [credits, setCredits] = useState<CreditsData>();
  const [loading, setLoading] = useState<boolean>(false);
  const [readMore, setReadMore] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [detailResponse, creditsResponse] = await Promise.all([
          movieApi.get(`/movie/${id}?language=en-US&api_key=${APIKey}`),
          movieApi.get(`/movie/${id}/credits?api_key=${APIKey}`),
        ]);

        setMovie(detailResponse.data);
        setCredits(creditsResponse.data);
        setLoading(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  const castToShow = readMore
    ? credits?.cast.map((member) => member.name).join(", ")
    : credits?.cast
        .slice(0, 3)
        .map((member) => member.name)
        .join(", ");
  function formatRuntime(runtime: number): string {
    const hours: number = Math.floor(runtime / 60);
    const minutes: number = runtime % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  }

  return (
    <div>
      {loading ? (
        <div className="p-4">
          <div className="mb-4">
            <h1 className="text-xl font-bold">Movie Details</h1>
            <div className="w-full h-0.5 bg-gray-300 mt-3"></div>
          </div>
          <div className="flex">
            {movie?.poster_path ? (
              <img
                src={`${IMAGES_PATH}/w200${movie.poster_path}`}
                alt={movie.title}
                className="w-200 h-200 object-cover mr-4"
              />
            ) : (
              <img className="w-full h-full object-cover" alt="Movie Poster" />
            )}
            <div>
              {movie && (
                <h4 className="text-lg font-bold">
                  {movie?.title} ({Math.round(movie?.vote_average)})
                </h4>
              )}
              <p className="text-gray-600">
                ({movie?.release_date.split("-")[0]}) |{" "}
                {movie && formatRuntime(movie?.runtime)}| Director:{" "}
                {
                  credits?.crew.find((member) => member.job === "Director")
                    ?.name
                }
              </p>
              <div className="my-2">
                <span className="text-gray-700">Cast: {castToShow}</span>
                {credits && credits?.cast.length > 3 && (
                  <button
                    onClick={toggleReadMore}
                    className="text-blue-500 hover:underline focus:outline-none ml-1"
                  >
                    {readMore ? "... Less" : "... More"}
                  </button>
                )}
              </div>
              <p className="mt-4">{movie?.overview}</p>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
      <div className="flex justify-end">
        <div className="absolute right-0 top-0 mt-5 mr-4">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
