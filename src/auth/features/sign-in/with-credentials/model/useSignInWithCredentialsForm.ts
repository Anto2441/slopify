import { useFormState } from "react-dom";

import { signIn } from "./actions";

export function useSignInWithCredentialsForm() {
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
