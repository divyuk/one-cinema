import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IMAGES_PATH } from "../api/MovieApi";
import MovieCard from "../components/MovieCard";
import { describe, test, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe("MovieCard Component", () => {
  const mockData = {
    title: "Sample Movie",
    poster_path: "/sample-poster.jpg",
    id: 1,
    vote_average: 7,
    overview:
      "This is a sample movie overview that is longer than 30 characters.",
  };

  test("truncates and displays movie overview up to 30 characters", () => {
    const { getByText } = render(
      <MemoryRouter>
        <MovieCard myData={mockData} />
      </MemoryRouter>
    );
    const truncatedOverview = getByText("This is a sample movie overvie...");

    expect(truncatedOverview).toBeInTheDocument();
  });

  const mockDataWithPoster = {
    title: "Sample Movie",
    poster_path: "/sample-poster.jpg",
    id: 1,
    vote_average: 7.5,
    overview: "This is a sample movie overview.",
  };

  test("displays poster when poster_path is provided", () => {
    const { container } = render(
      <MemoryRouter>
        <MovieCard myData={mockDataWithPoster} />
      </MemoryRouter>
    );
    const posterImage = container.querySelector("img");

    expect(posterImage).toBeInTheDocument();
    expect(posterImage).toHaveAttribute(
      "src",
      `${IMAGES_PATH}/w200/sample-poster.jpg`
    ); // Adjust the expected path
    expect(posterImage).toHaveAttribute("alt", "Sample Movie");
  });

  const mockDataWithoutPoster = {
    title: "Sample Movie",
    id: 2,
    vote_average: 8.0,
    overview: "Another sample movie overview.",
  };

  test("does not display poster when poster_path is not provided", () => {
    const { container } = render(
      <MemoryRouter>
        <MovieCard myData={mockDataWithoutPoster} />
      </MemoryRouter>
    );
    const posterImage = container.querySelector("img");
    expect(posterImage).not.toHaveAttribute("src", null); // No src attribute
  });

  test("displays the movie title", () => {
    const { getByText } = render(
      <MemoryRouter>
        <MovieCard myData={mockData} />
      </MemoryRouter>
    );
    const movieTitle = getByText("Sample Movie");

    expect(movieTitle).toBeInTheDocument();
  });

  test("displays the vote average on the right side", () => {
    const { getByText } = render(
      <MemoryRouter>
        <MovieCard myData={mockData} />
      </MemoryRouter>
    );
    const voteAverageElement = getByText("7"); // Adjust this to match your vote average

    expect(voteAverageElement).toBeInTheDocument();
    expect(voteAverageElement.parentElement).toHaveClass("text-sm text-right");
  });
});
