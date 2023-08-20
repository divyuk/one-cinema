import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../components/Home";
import { describe, test, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe("Home Component", () => {
  test("renders home link with image", () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const homeImage = getByAltText("home");
    expect(homeImage).toBeInTheDocument();
  });
});
