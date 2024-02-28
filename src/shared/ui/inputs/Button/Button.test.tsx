import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";

import { Button } from "./Button";

function renderButton({
  children = "Test button",
  icon = undefined,
  variant = "primary",
  onClick = () => undefined,
}: Partial<React.ComponentProps<typeof Button>> = {}) {
  render(
    <Button icon={icon} variant={variant} onClick={onClick}>
      {children}
    </Button>,
  );

  const $button = () => screen.queryByRole("button");
  const $children = () =>
    typeof children === "string" ? screen.queryByText(children) : null;
  const $icon = (title: string) => screen.queryByTitle(title);

  return {
    $button,
    $children,
    $icon,
  };
}

describe("<Button />", () => {
  test("should render correctly", () => {
    const { $button, $children, $icon } = renderButton();

    expect($button()).toBeInTheDocument();
    expect($button()).toHaveClass("bg-accent-500");

    expect($children()).toBeInTheDocument();

    expect($icon("should not exist")).not.toBeInTheDocument();
  });

  test("should render the icon", () => {
    const expectedTitle = "icon title";

    const { $icon } = renderButton({
      icon: <EyeSlashIcon title={expectedTitle} />,
    });

    expect($icon(expectedTitle)).toBeInTheDocument();
  });

  test("should call onClick when the button is clicked", () => {
    const mockOnClick = vi.fn();

    const { $button } = renderButton({ onClick: mockOnClick });

    fireEvent.click($button()!);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test("should render secondary color", () => {
    const { $button } = renderButton({ variant: "secondary" });

    expect($button()).toHaveClass("bg-white");
  });

  afterEach(() => {
    cleanup();
  });
});
