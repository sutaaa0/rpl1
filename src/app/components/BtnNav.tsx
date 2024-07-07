import { Image, Link } from "@nextui-org/react";
import React, { useState, useEffect } from "react";

const BtnNav: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [userImage, setUserImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchAuth = async () => {
      try {
        const response = await fetch('/api/user');
        const data = await response.json();

        if (data.user) {
          setIsLoggedIn(true);
          setUserImage(data.user.image);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Failed to fetch auth data:', error);
        setIsLoggedIn(false);
      }
    };

    fetchAuth();
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Image src={userImage!} width={30} height={30} alt="Profile" />
      ) : (
        <Link href="/auth/login" className="border text-sm font-medium relative border-white/[0.2] text-white px-4 py-2 rounded-full">
          Login
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </Link>
      )}
    </div>
  );
};

export default BtnNav;
