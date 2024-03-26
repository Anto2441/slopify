import { twJoin } from "tailwind-merge";
import { Input } from "../Input/Input";

interface TextFieldProps {
  icon?: React.ReactNode;
  id: string;
  label: string;
  placeholder: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export function TextField({
  icon,
  id,
  label,
  className,
  placeholder,
  onChange,
}: TextFieldProps) {
  return (
    <div className={twJoin("text-color-base", className)}>
      <label htmlFor={id} className="block text-sm font-bold">
        {label}
      </label>

      <div className="relative mt-spacing-tighter-2 rounded shadow-sm">
        <Input
          type="text"
          name={id}
          id={id}
          className={twJoin(
            "block min-h-control-size-base w-full rounded-border-radius-base border border-essential-subdued bg-background-base py-spacing-tighter-2 font-semibold shadow-essential-base placeholder:text-color-subdued hover:border-essential-base focus:border-essential-base focus:border-white focus:ring-white",
            icon && "pr-[calc(24px+var(--spacing-tighter)*2)]",
          )}
          placeholder={placeholder}
          onChange={onChange}
        />
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-spacing-tighter">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
