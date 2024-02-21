interface TextFieldProps {
  label: string;
  placeholder: string;
  className?: string;
}

export default function TextField({
  label,
  className,
  placeholder,
}: TextFieldProps) {
  return (
    <div className={className}>
      <p className="text-white">{label}</p>
      <input
        className="mt-2 rounded-sm border bg-black py-2 placeholder:pl-3"
        placeholder={placeholder}
      />
    </div>
  );
}
