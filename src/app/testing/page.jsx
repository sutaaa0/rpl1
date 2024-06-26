import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function App() {
  return (
    <div>
      <nav className=" py-4">
        <div className="container mx-auto px-4">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link className="text-gray-500" href="/">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-500" />
            </li>
            <li className="flex items-center">
              <span className="text-gray-500">Terms</span>
            </li>
          </ol>
        </div>
      </nav>
    </div>
  );
}
