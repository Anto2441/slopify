interface TextFieldProps {
  inputStyle: string;
  label: string;
  labelStyle: string;
  placeholder: string;
  style?: string;
}

export default function LoginField({
  inputStyle,
  label,
  labelStyle,
  style,
  placeholder,
}: TextFieldProps) {
  return (
    <div className={style}>
      <p className={labelStyle}>{label}</p>
      <input className={inputStyle} placeholder={placeholder} />
    </div>
  );
}
