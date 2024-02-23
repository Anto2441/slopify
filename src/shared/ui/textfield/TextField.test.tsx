import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { EyeSlashIcon } from "@heroicons/react/24/outline";

import TextField from "./TextField";

function renderTextField({
  icon = undefined,
  id = "email",
  label = "Email or username",
  placeholder = "Enter your email",
  onChange = () => undefined,
}: Partial<React.ComponentProps<typeof TextField>> = {}) {
  render(
    <TextField
      icon={icon}
      id={id}
      label={label}
      placeholder={placeholder}
      onChange={onChange}
    />,
  );

  const $input = () => screen.queryByRole("textbox");
  // TODO: Check why queryByLabelText doesn't work
  const $label = () => screen.queryByText(label);
  const $icon = (title: string) => screen.queryByTitle(title);

  return {
    $input,
    $label,
    $icon,
  };
}

describe("<TextField />", () => {
  test("should render correctly", () => {
    const { $icon, $label, $input } = renderTextField();

    expect($input()).toBeInTheDocument();
    expect($input()).toHaveAttribute("placeholder", "Enter your email");

    expect($label()).toBeInTheDocument();

    expect($icon("should not exist")).not.toBeInTheDocument();
  });

  test("label should render the correct text", () => {
    const { $label } = renderTextField({ label: "expected label" });

    expect($label()).toHaveTextContent("expected label");
  });

  test("should render the icon", () => {
    const expectedTitle = "icon title";

    const { $icon } = renderTextField({
      icon: <EyeSlashIcon title={expectedTitle} />,
    });

    expect($icon(expectedTitle)).toBeInTheDocument();
  });

  test("It should return ?toto!", () => {
    const mockOnChange = vi.fn();
    const { $input } = renderTextField({ onChange: mockOnChange });

    expect($input()).toHaveDisplayValue("");

    fireEvent.change($input()!, { target: { value: "?toto!" } });

    expect($input()!).toHaveDisplayValue("?toto!");

    expect(mockOnChange).toHaveBeenCalled();
  });

  afterEach(() => {
    cleanup();
  });
});
