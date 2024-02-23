"use client";

import { Switch } from "@/shared/ui/Switch";
import { TextField } from "@/shared/ui/textfield";
import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { useFormState, useFormStatus } from "react-dom";
import { login } from "../models/actions";
import { Button } from "@/shared/ui/button";

const initialState = {
  email: undefined,
  password: undefined,
  rememberMe: undefined,
};

export default function LoginForm() {
  const [state, formAction] = useFormState(login, initialState);
  const { pending } = useFormStatus();

  return (
    <form action={formAction} className="mx-auto">
      <TextField
        className="mt-10"
        id="email"
        label="Email or username"
        placeholder="Email or username"
      />

      {state?.email && (
        <p aria-live="polite" className="text-red-500">
          {state?.email}
        </p>
      )}

      <TextField
        className="mt-4"
        icon={
          <EyeSlashIcon className="size-5 text-gray-400" aria-hidden="true" />
        }
        id="password"
        label="Password"
        placeholder="Password"
      />

      {state?.password && (
        <p aria-live="polite" className="text-red-500">
          {state?.password}
        </p>
      )}

      <Switch
        className="mt-4"
        label="Remember me"
        defaultChecked={true}
        name="remember-me"
        value="yes"
      />

      <Button className="mt-8" variant="primary" type="submit">
        {pending ? "Loading" : "Submit"}
      </Button>

      <p className="mt-8 text-center text-white underline">
        Forget your password ?
      </p>
    </form>
  );
}
