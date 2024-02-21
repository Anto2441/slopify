import LoginButton from '@/auth/entities/user/ui/LoginButton';
import LoginField from '@/auth/entities/user/ui/LoginField';
import { SwitchField } from '@/shared/ui/switchfield';

export default function LoginPage() {
  return (
    <div className="login-page flex flex-col">
      <h1 className="text-white text-4xl font-bold text-center">
        Log in to Slopify
      </h1>

      <div className="mx-auto">
        <LoginField
          style="mt-10"
          label="Email or username"
          placeholder="Email or username"
        />
        <LoginField style="mt-4" label="Password" placeholder="Password" />
        <SwitchField className="flex mt-4" label="Remember me" />
        <LoginButton className="mt-8" />

        <p className="text-white underline mt-8 text-center">
          Forget your password ?
        </p>
      </div>

      <div className=" flex flex-row mt-12 mx-auto">
        <p className="text-white">Don&apos;t have an account ?</p>
        <p className="text-white underline ml-2">Sign up for Slopify ?</p>
      </div>
    </div>
  );
}
