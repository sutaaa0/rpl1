import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { SessionProvider } from "next-auth/react";
import { auth } from "../../auth";
import NavLog from "./components/NavLog";

const mulish = Mulish({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RPL 1",
  description: "Website kelas RPL 1 SMKN Situraja",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  const isLoggedIn = session != null;

  console.log("Login :",isLoggedIn);

  return (
    <SessionProvider session={session}>
      <html lang="en" className="no-visible-scrollbar dark">
        <head>
          <link rel="shortcut icon" href="/images/logo.png" />
        </head>
        <body className={mulish.className}>
          {isLoggedIn ? <NavLog /> : <Navbar />}
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
