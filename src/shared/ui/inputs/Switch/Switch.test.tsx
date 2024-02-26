import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { Switch } from "./Switch";

function renderSwitch({
  checked = undefined,
  defaultChecked = undefined,
  label = "Test switch",
  name = undefined,
  value = undefined,
  onChange = () => undefined,
}: Partial<React.ComponentProps<typeof Switch>> = {}) {
  const controlledProps = {
    checked: checked ?? false,
    label,
    name,
    value,
    onChange,
  };
  const uncontrolledProps = {
    defaultChecked: defaultChecked ?? false,
    label,
    name: name ?? "",
    value: value ?? "",
    onChange,
  };

  const props =
    typeof checked === "boolean" ? controlledProps : uncontrolledProps;

  render(<Switch {...props} />);

  const $switch = () => screen.queryByRole("switch");
  const $label = () => screen.queryByLabelText(label);

  return {
    $label,
    $switch,
  };
}

describe("<Switch />", () => {
  it("renders correctly", () => {
    const { $label, $switch } = renderSwitch();

    expect($switch()).toBeInTheDocument();
    expect($switch()).not.toBeChecked();
    expect($switch()).toHaveAttribute("data-headlessui-state", "");

    expect($label()).toBeInTheDocument();
  });

  it("renders with the correct initial state based on the `checked` prop", () => {
    const { $switch } = renderSwitch({ checked: true });

    expect($switch()).toBeChecked();
    expect($switch()).toHaveAttribute("data-headlessui-state", "checked");
  });

  it("calls the onChange callback when the switch is clicked", () => {
    const onChange = vi.fn();

    const { $switch } = renderSwitch({ onChange });

    fireEvent.click($switch()!);

    expect($switch()).toHaveAttribute("data-headlessui-state", "checked");

    expect(onChange).toHaveBeenCalledOnce();
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("calls the onChange callback when the label is clicked", () => {
    const onChange = vi.fn();

    const { $switch, $label } = renderSwitch({ onChange });

    fireEvent.click($label()!);

    expect($switch()).toHaveAttribute("data-headlessui-state", "checked");

    expect(onChange).toHaveBeenCalledOnce();
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("calls the onChange callback when the space key is pressed", () => {
    const onChange = vi.fn();

    const { $switch } = renderSwitch({ onChange });

    fireEvent.keyUp($switch()!, { key: " " });

    expect($switch()).toHaveAttribute("data-headlessui-state", "checked");

    expect(onChange).toHaveBeenCalledOnce();
    expect(onChange).toHaveBeenCalledWith(true);
  });

  afterEach(() => {
    cleanup();
  });
});
