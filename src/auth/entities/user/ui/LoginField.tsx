import { TextField } from '@/shared/ui/textfield';

interface LoginFieldProps {
  label: string;
  placeholder: string;
  style?: string;
}

export default function LoginField({
  label,
  placeholder,
  style,
}: LoginFieldProps) {
  return (
    <TextField
      inputStyle="mt-2 rounded-sm bg-black border placeholder:pl-3 py-2"
      label={label}
      labelStyle="text-white"
      placeholder={placeholder}
      style={style}
    />
  );
}
