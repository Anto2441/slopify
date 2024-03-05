import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";

import { Button } from "./Button";

function renderButton({
  children = "Test button",
  icon = undefined,
  theme = "accent",
  onClick = () => undefined,
}: Partial<React.ComponentProps<typeof Button>> = {}) {
  render(
    <Button icon={icon} theme={theme} onClick={onClick}>
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

  afterEach(() => {
    cleanup();
  });
});
