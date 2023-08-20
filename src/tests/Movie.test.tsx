// import { describe, expect, render, it } from "vite  st";
import Movie from "../components/Movie";
import { describe, test } from "vitest";
import { render } from "@testing-library/react";

describe("Movie Component", () => {
  test("renders movie cards correctly", () => {
    const movieInfo = [];
    render(<Movie movieInfo={movieInfo}></Movie>);
  });
});
