"use client"
import React from "react";
import { FloatingLog } from "./ui/floating-log";
import { Home, Images, User } from "lucide-react";

const NavLog = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home />
    },
    {
      name: "Siswa",
      link: "#siswa",
      icon: <User />
    },
    {
      name: "Galery",
      link: "#galery",
      icon: <Images />
    },
  ];

  return (
    <div>
      <FloatingLog navItems={navItems}  />
    </div>
  );
};

export default NavLog;
