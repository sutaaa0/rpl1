"use server";

import { LoginSchema } from "@/schemas";
import { z } from "zod";
import { signIn } from "../../../auth";
import { AuthError } from "next-auth";

const Login = async (data: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(data);
  if (!validateFields.success) {
    return { error: "Invalid data" };
  }

  const { email, password } = validateFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/settings",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Invalid data" };
      }
    }

    throw error;
  }
};

export default Login;
