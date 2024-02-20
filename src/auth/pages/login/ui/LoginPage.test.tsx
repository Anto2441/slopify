import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import LoginPage from "./LoginPage";

function renderLoginPage() {
  render(<LoginPage />);

  const title = () => screen.queryByRole("heading", { level: 1 });

  return {
    title,
  };
}

describe("LoginPage", () => {
  test("should render", () => {
    const { title } = renderLoginPage();

    expect(title()).toBeInTheDocument();
  });
});
