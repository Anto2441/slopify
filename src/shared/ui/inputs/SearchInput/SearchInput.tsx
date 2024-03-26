import { VariantProps, cva } from "cva";
import { Input } from "../Input/Input";

export const searchInputVariants = cva({
  base: "block w-full border-0 bg-background-tinted-base pl-spacing-looser-3 shadow-essential-base placeholder:text-font-size-smaller",

  variants: {
    rounded: {
      full: "rounded-full border-border-width-hairline border-transparent py-spacing-tighter placeholder:text-essential-subdued hover:border-essential-subdued hover:bg-background-tinted-highlight focus:border-border-width-hairline focus:border-essential-base focus:border-white focus:ring-white",
      square:
        "rounded-border-radius-base py-spacing-tighter-5 placeholder:text-color-subdued focus:ring-transparent",
    },
  },
});

interface SearchInputProps {
  icon: React.ReactNode;
  id: string;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

/**
 * Renders a search input component with the specified icon, id, onChange function, placeholder, and rounded variant.
 */
export function SearchInput({
  icon,
  id,
  onChange,
  placeholder,
  rounded,
}: SearchInputProps & VariantProps<typeof searchInputVariants>) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-spacing-tighter-2 flex items-center pr-spacing-tighter">
        {icon}
      </div>

      <Input
        autoComplete="off"
        type="search"
        name={id}
        id={id}
        className={searchInputVariants({ rounded })}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
