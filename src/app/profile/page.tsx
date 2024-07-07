import { redirect } from "next/navigation";
import { auth } from "../../../auth";
import { Image } from "@nextui-org/react";

async function Profile() {
  const session = await auth();
  if (!session) {
    redirect("/auth/login");
  }

  const user = session.user;

  return (
    <div className="flex justify-center items-center flex-col">
      <h1>Profile</h1>
      <Image src={`${user.image}`} width={200} height={200} alt="Profile" />
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;
