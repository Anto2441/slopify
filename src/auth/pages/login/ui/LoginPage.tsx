"use client";

import { Button } from "@/shared/ui/button";
import { SwitchField } from "@/shared/ui/switchfield";
import { TextField } from "@/shared/ui/textfield";
import { EyeSlashIcon } from "@heroicons/react/24/outline";

export default function LoginPage() {
  return (
    <div className="login-page flex flex-col">
      <h1 className="text-center text-5xl font-bold text-white">
        Log in to Slopify
      </h1>

      <div className="mx-auto">
        <TextField
          className="mt-10"
          id="email"
          label="Email or username"
          placeholder="Email or username"
        />
        <TextField
          className="mt-4"
          icon={
            <EyeSlashIcon className="size-5 text-gray-400" aria-hidden="true" />
          }
          id="password"
          label="Password"
          placeholder="Password"
        />
        <SwitchField className="mt-4 flex" label="Remember me" />
        <Button className="mt-8" variant="primary" onClick={() => undefined}>
          Log In
        </Button>

        <p className="mt-8 text-center text-white underline">
          Forget your password ?
        </p>
      </div>

      <div className="mt-8 w-9/12 self-center border-t border-background-900"></div>

      <div className=" mx-auto mt-12 flex flex-row">
        <p className="text-white">Don&apos;t have an account ?</p>
        <p className="ml-2 text-white underline">Sign up for Slopify</p>
      </div>
    </div>
  );
}
