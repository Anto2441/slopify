"use client";

import { EyeSlashIcon } from "@heroicons/react/24/solid";

import { Input, Switch } from "@/shared/ui";

import { SignInButton } from "@/user/features/sign-in";

import { useSignInForm } from "../model/useSignInForm";

export function SignInForm() {
  const { state, signInAction } = useSignInForm();

  return (
    <form action={signInAction} className="mx-auto">
      <Input
        className="mt-10"
        id="email"
        label="Email or username"
        placeholder="Email or username"
      />

      {state.errors?.email && (
        <p className="mt-2 text-red-500">{state.errors.email}</p>
      )}

      <Input
        className="mt-4"
        icon={
          <EyeSlashIcon className="size-5 text-gray-400" aria-hidden="true" />
        }
        id="password"
        label="Password"
        placeholder="Password"
      />

      {state.errors?.password && (
        <p className="mt-2 text-red-500">{state.errors.password}</p>
      )}

      <Switch
        className="mt-4"
        defaultChecked
        label="Remember me"
        name="rememberMe"
        value="yes"
      />

      <SignInButton className="mt-8" />

      <p className="mt-8 text-center text-white underline">
        Forget your password ?
      </p>
    </form>
  );
}
