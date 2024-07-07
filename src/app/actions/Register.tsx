"use server";
import bcyrpt from "bcryptjs";
import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import { db } from "@/lib/db";
import { getUserByEmail } from "../data/user";

const Register = async (data: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(data);
  if (!validateFields.success) {
    return { error: "Invalid data" };
  }
  const { name, email, password } = validateFields.data;
  const hasPassword = await bcyrpt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "User already exists" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hasPassword,
    },
  });

  return { success: "Succes" };
};

export default Register;
