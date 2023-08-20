import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "../components/Home";
import { describe, test } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe("Home Component", () => {
  test("renders home link with image", () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });
});
