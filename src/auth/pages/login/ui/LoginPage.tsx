import LoginButton from "@/auth/entities/user/ui/LoginButton";
import LoginField from "@/auth/entities/user/ui/LoginField";
import { SwitchField } from "@/shared/ui/switchfield";

export default function LoginPage() {
  return (
    <div className="login-page flex flex-col">
      <h1 className="text-center text-4xl font-bold text-white">
        Log in to Slopify
      </h1>

      <div className="mx-auto">
        <LoginField
          className="mt-10"
          label="Email or username"
          placeholder="Email or username"
        />
        <LoginField className="mt-4" label="Password" placeholder="Password" />
        <SwitchField className="mt-4 flex" label="Remember me" />
        <LoginButton className="mt-8" />

        <p className="mt-8 text-center text-white underline">
          Forget your password ?
        </p>
      </div>

      <div className=" mx-auto mt-12 flex flex-row">
        <p className="text-white">Don&apos;t have an account ?</p>
        <p className="ml-2 text-white underline">Sign up for Slopify ?</p>
      </div>
    </div>
  );
}
