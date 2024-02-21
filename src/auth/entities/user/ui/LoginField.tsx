import { TextField } from "@/shared/ui/textfield";

interface LoginFieldProps {
  className?: string;
  label: string;
  placeholder: string;
}

export default function LoginField({
  className,
  label,
  placeholder,
}: LoginFieldProps) {
  return (
    <TextField label={label} placeholder={placeholder} className={className} />
  );
}
