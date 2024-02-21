import { classNames } from '@/shared/utils';

interface ButtonProps {
  className?: string;
  label: string;
  variant: 'primary' | 'secondary';
}

export default function Button({
  className = '',
  label,
  variant,
}: ButtonProps) {
  return (
    <button
      className={classNames(
        'px-32 py-2 rounded-full',
        variant === 'primary' ? 'bg-primary' : '',
        variant === 'secondary' ? 'bg-white' : '',
        className
      )}
    >
      {label}
    </button>
  );
}
