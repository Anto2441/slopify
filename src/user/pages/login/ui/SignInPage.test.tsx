import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { SignInPage } from "./SignInPage";

function renderPage() {
  render(<SignInPage />);

  const title = () => screen.queryByRole("heading", { level: 1 });

  return {
    title,
  };
}

describe("SignInPage", () => {
  test("should render correctly", () => {
    const { title } = renderPage();

    expect(title()).toBeInTheDocument();
  });
});
