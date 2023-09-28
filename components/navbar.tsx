"use client";

import { SidebarProps } from "@/types/general";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = ({ setOpenSidebar }: SidebarProps) => {
  const pathname = usePathname();

  const toggleMenu = () => {
    setOpenSidebar((prev) => (prev = true));
  };

  const title = () => {
    if (pathname === "/") return "Dashboard";
    else return pathname.substring(1);
  };

  return (
    <nav className="flex items-center justify-between bg-white px-3 md:px-6 py-4 shadow-md">
      <Menu className="md:hidden block cursor-pointer" onClick={toggleMenu} />
      <div>
        <h1 className="font-bold text-2xl capitalize">{title()}</h1>
      </div>

      <UserButton />
    </nav>
  );
};

export default Navbar;
