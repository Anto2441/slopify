import { useFormState } from "react-dom";

import { signIn } from "../../../features/sign-in";

export function useSignInForm() {
  const [state, signInAction] = useFormState(signIn, {
    data: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  return {
    state,
    signInAction,
  };
}
