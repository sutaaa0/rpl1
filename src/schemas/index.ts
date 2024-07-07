import * as z from "zod";

export const SettingsSchema = z.object({
  name: z.optional(z.string()),
  email: z.optional(z.string()),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6,{
    message: "Password must be at least 6 characters",
  })
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Invalid email",
  }),
  password: z.string().nonempty(),
});

export const RegisterSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  password: z.string().nonempty(),
});
