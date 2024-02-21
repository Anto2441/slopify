import { classNames } from "@/shared/utils";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
}

export default function Button({
  className = "",
  children,
  icon,
  onClick,
  type = "button",
  variant,
}: ButtonProps) {
  return (
    <button
      className={classNames(
        "rounded-full px-32 py-2 text-base font-bold",
        variant === "primary" ? "bg-primary" : "",
        variant === "secondary" ? "bg-white" : "",
        className,
      )}
      type={type}
      onClick={onClick}
    >
      {children}

      {icon && (
        <div className="-mr-0.5 ml-2 h-4 w-4" aria-hidden="true">
          {icon}
        </div>
      )}
    </button>
  );
}
