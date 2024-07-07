import { db } from "@/lib/db";
import { SettingsSchema } from "@/schemas";
import { z } from "zod";
import { getUserById } from "../data/user";
import { CurrentUser } from "@/lib/auth";

export const settings = async (data: z.infer<typeof SettingsSchema>) => {
  const user = await CurrentUser();

  if (!user) {
    return { Error: "User not found" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { Error: "User not found" };
  }

  await db.user.update({
    where: { id: dbUser.id },
    data: {
      name: data.name,
      email: data.email,
      emailVerified: new Date(),

    },
  });

  return { Success: "Settings updated" };
};
