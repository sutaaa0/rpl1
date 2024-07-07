import { Image } from "@nextui-org/react";
import "./Login.css"; // Make sure to import the CSS file
import BtnProviders from "@/app/components/BtnProviders";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import ContinueWithEmail from "@/app/components/ContinueWithEmail";

const Login = async () => {
  const session = await auth();

  if (session) {
    redirect("/");
  }


  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-x-4">
        <Image src="/images/logo.png" alt="Picture of the author" width={35} />
        <h3 className="text-xl font-bold">Spelgesa</h3>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-4 border-b border-gray-800 w-full py-6">
        <div>
          <h1 className="text-4xl">Welcome to Spelgesa</h1>
        </div>
        <BtnProviders />
      </div>
      <ContinueWithEmail/>
    </div>
  );
};

export default Login;
