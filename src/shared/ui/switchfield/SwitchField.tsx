interface SwitchFieldProps {
  className: string;
  label: string;
}

export default function SwitchField({ className, label }: SwitchFieldProps) {
  return (
    <div className={className}>
      <label>
        <input type="checkbox" />
      </label>
      <p className="text-white ml-2">{label}</p>
    </div>
  );
}
