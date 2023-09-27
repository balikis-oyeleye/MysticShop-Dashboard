import { UserButton } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
      <div>
        <h1 className="font-bold text-2xl">Dashboard</h1>
      </div>
      <UserButton />
    </nav>
  );
};

export default Navbar;
