import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { HiEyeSlash } from "react-icons/hi2";
import { afterEach, describe, expect, test, vi } from "vitest";

import { Input } from "./Input";

function renderInput({
  icon = undefined,
  id = "email",
  label = "Email or username",
  placeholder = "Enter your email",
  onChange = () => undefined,
}: Partial<React.ComponentProps<typeof Input>> = {}) {
  render(
    <Input
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
    const { $icon, $label, $input } = renderInput();

    expect($input()).toBeInTheDocument();
    expect($input()).toHaveAttribute("placeholder", "Enter your email");

    expect($label()).toBeInTheDocument();

    expect($icon("should not exist")).not.toBeInTheDocument();
  });

  test("label should render the correct text", () => {
    const { $label } = renderInput({ label: "expected label" });

    expect($label()).toHaveTextContent("expected label");
  });

  test("should render the icon", () => {
    const expectedTitle = "icon title";

    const { $icon } = renderInput({
      icon: <HiEyeSlash title={expectedTitle} />,
    });

    expect($icon(expectedTitle)).toBeInTheDocument();
  });

  test("It should return ?toto!", () => {
    const mockOnChange = vi.fn();
    const { $input } = renderInput({ onChange: mockOnChange });

    expect($input()).toHaveDisplayValue("");

    fireEvent.change($input()!, { target: { value: "?toto!" } });

    expect($input()!).toHaveDisplayValue("?toto!");

    expect(mockOnChange).toHaveBeenCalled();
  });

  afterEach(() => {
    cleanup();
  });
});
