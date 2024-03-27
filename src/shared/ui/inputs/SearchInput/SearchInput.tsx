import { VariantProps, cva } from "cva";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Input } from "../Input/Input";

export const searchInputVariants = cva({
  base: "border-0 bg-background-tinted-base pl-spacing-looser-3 placeholder:text-font-size-smaller",

  variants: {
    rounded: {
      full: "rounded-full border-border-width-hairline border-transparent placeholder:text-essential-subdued hover:border-essential-subdued hover:bg-background-tinted-highlight focus:border-border-width-hairline",
      square:
        "rounded-border-radius-base placeholder:text-color-subdued focus:border-0 focus:border-background-base focus:ring-background-base",
    },

    size: {
      small: "py-spacing-tighter-5",
      large: "py-spacing-tighter",
    },
  },
});

export interface SearchInputProps {
  /** The ID attribute of the input */
  id: string;
  /** The placeholder attribute of the input */
  placeholder: string;
  /** The function to call when the input change */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

/**
 * Renders a search input component with the specified icon, id, onChange function, placeholder, and rounded variant.
 */
export function SearchInput({
  id,
  onChange,
  placeholder,
  rounded,
  size,
}: SearchInputProps & VariantProps<typeof searchInputVariants>) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-spacing-tighter-2 flex items-center pr-spacing-tighter">
        <HiMagnifyingGlass
          className="size-5 text-color-subdued"
          aria-hidden="true"
        />
      </div>

      <Input
        autoComplete="off"
        type="search"
        name={id}
        id={id}
        className={searchInputVariants({ rounded, size })}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
