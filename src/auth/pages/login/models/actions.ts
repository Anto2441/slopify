"use server";

import { z } from "zod";

const FormSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(2, "Password must be at least 2 characters"),
  rememberMe: z.coerce.boolean(),
});

export async function login(prevState: any, formData: FormData) {
  const validatedFields = FormSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!validatedFields.success) {
    const errors = validatedFields.error.flatten().fieldErrors;

    return { ...errors };
  }

  await fetch("http://localhost:3000/api/example", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(validatedFields.data),
  });
}
