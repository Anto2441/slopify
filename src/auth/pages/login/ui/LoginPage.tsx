"use client";

import { TextField } from "@/shared/ui/textfield";

import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { Switch } from "@/shared/ui/Switch";
import { Button } from "@/shared/ui/button";
import { login } from "../models";
import SubmitButton from "./SubmitButton";
import { useFormState } from "react-dom";

/**
 * Renders the login page with a title, login form, and sign up message.
 */
export default function LoginPage() {
  //const loginWithAlbumId = login.bind(null, "1");
  const [state, formAction] = useFormState(login, { errors: [] });

  return (
    <div className="login-page flex flex-col">
      <h1 className="text-center text-5xl font-bold text-white">
        Log in to Slopify
      </h1>

      <form action={formAction} className="mx-auto">
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

        <Switch
          className="mt-4"
          label="Remember me"
          defaultChecked={true}
          name="remember-me"
          value="yes"
        />

        <SubmitButton className="mt-8" variant="primary" type="submit" />
        <pre className="text-white">{JSON.stringify(state, null, 4)}</pre>

        <p className="mt-8 text-center text-white underline">
          Forget your password ?
        </p>
      </form>

      <hr className="mt-8 w-9/12 self-center border-t border-background-900" />

      <div className=" mx-auto mt-12 flex flex-row">
        <p className="text-white">Don&apos;t have an account ?</p>

        <p className="ml-2 text-white underline">Sign up for Slopify</p>
      </div>
    </div>
  );
}
