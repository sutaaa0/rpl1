import { redirect } from "next/navigation";
import { auth, signOut } from "../../../../auth";
import { getUserById } from "@/app/data/user";
import { Image, Button, Badge } from "@nextui-org/react";
import { Link, NotebookText, Users } from "lucide-react";
import { CardHover } from "@/app/components/CardHover";

const Settings = async () => {
  const session = await auth();
  if (!session) {
    redirect("/auth/login");
  }

  const user = await getUserById(session.user.id);
  console.log("user :", user);

  return (
    <div className="flex w-full h-full mt-[80px] px-[100px]">
      <div className="flex justify-center items-center w-[400px] h-full flex-col gap-y-6">
        <div className="border border-slate-700 rounded-full">
          <Image src={user?.image} alt="Profile" width={300} height={300} loading="lazy" className="rounded-full" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{user?.name}</h1>
          <p className="text-slate-500 ">{user?.email}</p>
          <div className="mt-2">
            <p>{user?.bio}</p>
          </div>
          <div className="mt-2">
            <button className="bn53">Edit Profile</button>
          </div>
          <div className="mt-3 flex justify-start text-sm items-center">
            <div className="flex gap-x-2 justify-center items-center">
              <Users size={20} />
              <p>285k Followers</p>
            </div>
            <div className="flex gap-x-2 justify-center items-center">
              <p></p>
              <p>15 Following</p>
            </div>
          </div>
          <div className="mt-4 text-sm flex justify-center items-start flex-col">
            <div className="flex gap-x-2 justify-center items-center">
              <Link size={20} />
              <p>https://github.com/sutaaa0</p>
            </div>
            <div className="flex gap-x-2 justify-center items-center">
              <Link size={20} />
              <p>https://instagram.com/sutaaa_28</p>
            </div>
            <div>
              <form action={async () => {
                "use server"

                await signOut();
              }}>

                <button>
                  Log Out
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-2 gap-4 flex-1">
        <div className="flex flex-col justify-center items-start p-2 border border-slate-900 rounded-lg">
          <div className="flex gap-x-3">
            <NotebookText />
            <h1>Judul</h1>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iure labore dolores.</p>
          </div>
          <div>
            <h1>Blog</h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start p-2 border border-slate-900 rounded-lg">
          <div className="flex gap-x-3">
            <NotebookText />
            <h1>Judul</h1>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iure labore dolores.</p>
          </div>
          <div>
            <h1>Blog</h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start p-2 border border-slate-900 rounded-lg">
          <div className="flex gap-x-3">
            <NotebookText />
            <h1>Judul</h1>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iure labore dolores.</p>
          </div>
          <div>
            <h1>Blog</h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start p-2 border border-slate-900 rounded-lg">
          <div className="flex gap-x-3">
            <NotebookText />
            <h1>Judul</h1>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iure labore dolores.</p>
          </div>
          <div>
            <h1>Blog</h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start p-2 border border-slate-900 rounded-lg">
          <div className="flex gap-x-3">
            <NotebookText />
            <h1>Judul</h1>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iure labore dolores.</p>
          </div>
          <div>
            <h1>Blog</h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start p-2 border border-slate-900 rounded-lg">
          <div className="flex gap-x-3">
            <NotebookText />
            <h1>Judul</h1>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iure labore dolores.</p>
          </div>
          <div>
            <h1>Blog</h1>
          </div>
        </div>
      </div> */}
      <div className="flex-1">
        <CardHover />
      </div>
    </div>
  );
};

export default Settings;
