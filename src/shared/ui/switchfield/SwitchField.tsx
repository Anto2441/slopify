import { classNames } from "@/shared/utils";
interface SwitchFieldProps {
  className: string;
  label: string;
}

export default function SwitchField({ className, label }: SwitchFieldProps) {
  return (
    <div className={classNames("flex items-center", className)}>
      <label>
        <input type="checkbox" />
      </label>
      <p className="ml-2 text-sm text-white ">{label}</p>
    </div>
  );
}
