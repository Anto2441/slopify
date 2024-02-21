import { Button } from '@/shared/ui/button';
import { classNames } from '@/shared/utils';

interface LoginButtonProps {
  className: string;
}

export default function LoginButton({ className }: LoginButtonProps) {
  return (
    <Button
      className={classNames('bg-primary', className)}
      label="Log In"
      variant="primary"
    />
  );
}
