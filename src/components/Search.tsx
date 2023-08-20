import { useState, useEffect } from "react";
import movieApi from "../api/MovieApi";
import { useDispatch } from "react-redux";
import { addMovie } from "../Store/reducer";
import List from "./List";
import Home from "./Home";
import SearchIcon from "../assets/search.svg";
import SearchedMovie from "./SearchedMovie";

const APIKey = import.meta.env.VITE_API_KEY;

function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const response = await movieApi.get(
          `/search/movie?query=${search}&api_key=${APIKey}`
        );
        setTimeout(() => {
          dispatch(addMovie(response.data.results));
        }, 500);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieData();
  }, [search, dispatch]);

  return (
    <>
      <div className="pt-2 relative mx-auto text-gray-600 pl-6">
        <div className="relative">
          <input
            className="w-1/2 bg-[#D8D8D8] border p-2 pl-10"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-2">
            <img src={SearchIcon} alt="Search Icon" />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="absolute right-0 top-0 mt-5 mr-4">
          <Home />
        </div>
      </div>
      <div className="mb-4">
        <div className="w-full h-0.5 bg-gray-300 mt-3"></div>
      </div>
      {search.length ? <SearchedMovie /> : <List />}
    </>
  );
}

export default Search;
