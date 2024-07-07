import { db } from "@/lib/db";
import { HoverEffect } from "./ui/card-hover-effect";
import { auth } from "../../../auth";
import { getUserById } from "../data/user";

export async function CardHover() {
  const getAllPosts = async () => {
    const response = await db.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        tag: true,
        author: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return response;
  };

  const session = await auth();
  const user = await getUserById(session?.user.id);
  const userId = user?.id;

  const getUserPosts = async () => {
    const response = await db.post.findMany({
      where: {
        author: {
          id: userId,
        },
      },
    });

    return response;
  };

  const post = await getUserPosts();
  const posts = await getAllPosts();

  console.log("Posts :", posts);

  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={post} />
    </div>
  );
}
