"use client";

import { HiEyeSlash } from "react-icons/hi2";

import { Input, Switch } from "@/shared/ui";
import { SignInButton } from "@/user/features/sign-in";

import { useSignInForm } from "../model/useSignInForm";

export function SignInForm() {
  const { state, signInAction } = useSignInForm();

  return (
    <form action={signInAction} className="flex flex-col pt-spacing-looser-3">
      <Input
        id="email"
        label="Email or username"
        placeholder="Email or username"
      />

      {state.errors?.email && (
        <p className="mt-spacing-tighter-2 text-font-size-smaller font-semibold text-text-base">
          {state.errors.email}
        </p>
      )}

      <Input
        className="mt-spacing-base"
        icon={
          <HiEyeSlash className="size-5 text-text-subdued" aria-hidden="true" />
        }
        id="password"
        label="Password"
        placeholder="Password"
      />

      {state.errors?.password && (
        <p className="mt-spacing-tighter-2 text-font-size-smaller font-semibold text-text-base">
          {state.errors.password}
        </p>
      )}

      <Switch
        className="mt-spacing-base"
        defaultChecked
        label="Remember me"
        name="rememberMe"
        value="yes"
      />

      <SignInButton className="my-spacing-looser" />

      <a href="#" className="self-center text-text-base underline">
        Forgot your password?
      </a>
    </form>
  );
}
