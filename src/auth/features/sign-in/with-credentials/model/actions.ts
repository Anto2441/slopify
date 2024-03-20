"use server";

import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  rememberMe: z.coerce.boolean(),
});

export type SignInSchema = z.infer<typeof signInSchema>;

type SuccessState = { data: SignInSchema };

type ErrorState = {
  errors: { [K in keyof SignInSchema]?: string[] };
};

type SignInState = SuccessState | ErrorState;

export async function signIn(prevState: SignInState, formData: FormData) {
  const result = signInSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  return { data: result.data };
}
