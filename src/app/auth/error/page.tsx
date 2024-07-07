import Link from "next/link";

function page() {
  return (
    <div>
      <h1 className="text-2xl sm:text-4xl">Oops, Something went wrong!</h1>
      <div className="mt-2 flex justify-center">
        <Link href={"/auth/login"} className="text-blue-500 hover:underline text-sm">
          Back to Login
        </Link>
      </div>
    </div>
  );
}

export default page;
