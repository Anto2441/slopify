"use client";

import { Switch as HeadlessSwitch } from "@headlessui/react";

import { classNames } from "@/shared/utils";

type CommonProps = {
  /**
   * Optional additional CSS class names to apply to the switch component for custom styling.
   */
  className?: string;

  /**
   * A brief explanation about the switch's purpose, which will be displayed below the label.
   */
  description?: string;

  /**
   * Descriptive label for the switch component, which will be displayed adjacent to the toggle.
   */
  label: string;

  /**
   * The name used when using this component inside a form.
   */
  name?: string;

  /**
   * The value used when using this component inside a form, if it is checked.
   */
  value?: string;

  /**
   * Callback function that is invoked when the switch is toggled.
   *
   * @param checked - The new state of the switch.
   */
  onChange?: (checked: boolean) => void;
};

type ControlledSwitchProps = {
  /**
   * Indicates whether the switch is currently in the "on" position.
   */
  checked: boolean;

  /**
   * Callback function that is invoked when the switch is toggled.
   *
   * @param checked - The new state of the switch.
   */
  onChange: (checked: boolean) => void;
} & { defaultChecked?: never };

type UncontrolledSwitchProps = {
  /**
   * The default checked value when using as an uncontrolled component.
   */
  defaultChecked: boolean;

  /**
   * The name used when using this component inside a form.
   */
  name: string;

  /**
   * The value used when using this component inside a form, if it is checked.
   */
  value: string;
} & { checked?: never };

type SwitchProps = CommonProps &
  (ControlledSwitchProps | UncontrolledSwitchProps);

/**
 * Renders a Switch component that enables users to toggle between active (on) and inactive (off) states.
 * The visual design indicates the current state, and an event is triggered upon state change for further handling.
 *
 * This component can be controlled or uncontrolled.
 * - Controlled: `checked` and `onChange` props are managed externally.
 * - Uncontrolled: `defaultChecked` sets the initial state, and `name` and `value` are used within forms.
 */
export function Switch({
  checked,
  className,
  defaultChecked,
  description,
  label,
  name,
  value,
  onChange,
}: SwitchProps) {
  return (
    <HeadlessSwitch.Group>
      <div
        className={classNames(
          "grid-row-2 grid auto-cols-max grid-flow-col gap-x-3 gap-y-1 text-white",
          className,
        )}
      >
        <HeadlessSwitch
          checked={checked}
          className={classNames(
            "ui-checked:bg-primary ui-not-checked:bg-background-500 relative row-span-2 inline-flex h-4 w-7 translate-y-0.5 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-background-950",
          )}
          defaultChecked={defaultChecked}
          name={name}
          value={value}
          onChange={onChange}
        >
          <span className="sr-only">{label}</span>

          <span
            aria-hidden="true"
            className={classNames(
              "ui-checked:translate-x-3.5 ui-not-checked:translate-x-0.5 pointer-events-none inline-block size-3 transform rounded-full bg-background-950 shadow-lg ring-0 transition-transform duration-200 ease-in-out",
            )}
          />
        </HeadlessSwitch>

        <HeadlessSwitch.Label className="text-sm">{label}</HeadlessSwitch.Label>

        {description && (
          <HeadlessSwitch.Description className="text-xs">
            {description}
          </HeadlessSwitch.Description>
        )}
      </div>
    </HeadlessSwitch.Group>
  );
}
