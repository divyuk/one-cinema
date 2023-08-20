import { render } from "@testing-library/react";
import Loading from "../components/Loading";
import { describe, test } from "vitest";
import "@testing-library/jest-dom";

describe("Loading Component", () => {
  test("renders a loading spinner", () => {
    const { container } = render(<Loading />);
  });
});
