"use client";

import { HiEyeSlash } from "react-icons/hi2";

import { Label, Switch, TextField } from "@/shared/ui/inputs";
import { Link } from "@/shared/ui/navigation";

import { useSignInWithCredentialsForm } from "../model/useSignInWithCredentialsForm";
import { SignInButton } from "./SignInButton";

/**
 * Renders a form for signing in with credentials (email + password).
 */
export function SignInWithCredentialsForm() {
  const { state, signInAction } = useSignInWithCredentialsForm();

  return (
    <form action={signInAction} className="flex flex-col">
      <TextField
        id="email"
        label="Email or username"
        placeholder="Email or username"
      />

      {state.errors?.email && (
        <p className="mt-spacing-tighter-2 text-font-size-smaller font-semibold text-color-base">
          {state.errors.email}
        </p>
      )}

      <TextField
        className="mt-spacing-base"
        icon={
          <HiEyeSlash
            className="size-5 text-color-subdued"
            aria-hidden="true"
          />
        }
        id="password"
        label="Password"
        placeholder="Password"
      />

      {state.errors?.password && (
        <p className="mt-spacing-tighter-2 text-font-size-smaller font-semibold text-color-base">
          {state.errors.password}
        </p>
      )}

      {/* TODO: Extract it in a FormControl and FormItem components */}
      <div className="mt-spacing-base inline-flex items-baseline gap-x-spacing-tighter">
        <Switch defaultChecked name="rememberMe" id="rememberMe" value="yes" />

        <Label className="text-font-size-smaller" htmlFor="rememberMe">
          Remember me
        </Label>
      </div>

      <SignInButton
        className="my-spacing-looser"
        size="large"
        variant="accent"
      />

      <Link
        href="#"
        className="self-center font-semibold text-color-base underline hover:text-color-bright-accent"
      >
        Forgot your password?
      </Link>
    </form>
  );
}
