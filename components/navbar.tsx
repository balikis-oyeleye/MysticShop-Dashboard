"use client";

import { SidebarProps } from "@/types/general";
import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = ({ setOpenSidebar }: SidebarProps) => {
  const pathname = usePathname();
  const { user } = useUser();

  const openMenu = () => {
    setOpenSidebar((prev) => (prev = true));
  };

  const title = () => {
    if (pathname === "/") return "Dashboard";
    else return pathname.substring(1);
  };

  return (
    <nav className="flex items-center justify-between bg-white px-3 md:px-6 py-4 shadow-md">
      <Menu className="md:hidden block cursor-pointer" onClick={openMenu} />
      <div>
        <h1 className="font-bold text-2xl capitalize">{title()}</h1>
      </div>

      <Avatar className="cursor-pointer">
        <AvatarImage src={user?.imageUrl} />
        <AvatarFallback>
          {user?.firstName?.charAt(0)}
          {user?.lastName?.charAt(0)}
        </AvatarFallback>
      </Avatar>
    </nav>
  );
};

export default Navbar;
