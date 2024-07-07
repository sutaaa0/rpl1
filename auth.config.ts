import Credential from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/app/data/user";
import bcrypt from "bcryptjs";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credential({
      async authorize(credentials) {
        const revalidateFields = LoginSchema.safeParse(credentials);

        if (revalidateFields.success) {
          const { email, password } = revalidateFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const isValid = await bcrypt.compare(password, user.password);
          if (isValid) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
