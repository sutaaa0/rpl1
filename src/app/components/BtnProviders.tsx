"use client";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "../../../routes";

const BtnProviders = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="flex justify-center items-center gap-x-4">
      <div>
        <button
          onClick={() => onClick("github")}
          className="flex justify-center items-center shadow-[0_4px_14px_0_rgb(0,0,0,39%)] hover:shadow-[0_6px_20px_rgba(0,0,0,23%)] hover:bg-[rgba(255,255,255,0.9)] px-8 py-2 bg-[#ffffff] rounded-md text-black font-light transition duration-200 ease-linear"
        >
          <IconBrandGithub className="h-4 w-4 me-2 text-black" />
          <span>Login With Github</span>
        </button>
      </div>
      <div>
        <button
          onClick={() => onClick("google")}
          className="flex justify-center items-center shadow-[0_4px_14px_0_rgb(0,0,0,39%)] hover:shadow-[0_6px_20px_rgba(0,0,0,23%)] hover:bg-[rgba(255,255,255,0.9)] px-8 py-2 bg-[#ffffff] rounded-md text-black font-light transition duration-200 ease-linear"
        >
          <IconBrandGoogle className="h-4 w-4 me-2 text-black" />
          <span>Login With Google</span>
        </button>
      </div>
    </div>
  );
};

export default BtnProviders;
