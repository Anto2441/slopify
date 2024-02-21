import { classNames } from "@/shared/utils";

interface TextFieldProps {
  icon?: React.ReactNode;
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}

export default function TextField({
  icon,
  id,
  label,
  className,
  placeholder,
}: TextFieldProps) {
  return (
    <div className={classNames("text-white", className)}>
      <label htmlFor={id} className="block text-sm font-bold">
        {label}
      </label>
      <div className="relative mt-2 rounded shadow-sm">
        <input
          type="text"
          name={id}
          id={id}
          className="block w-full rounded border bg-transparent pr-10  placeholder:text-neutral-300 focus:border-white focus:ring-white sm:text-sm"
          placeholder={placeholder}
        />
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
