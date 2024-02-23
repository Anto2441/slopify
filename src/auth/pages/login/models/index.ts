"use server";
export async function login(prevState: any, formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries());

  try {
    throw new Error("Something went wrong");
    await fetch("http://localhost:3000/api/example", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawFormData),
    });
    return {
      errors: [],
    };
  } catch (error) {
    return {
      errors: ["Something went wrong"],
    };
  }
}
