"use client";
import {
  Gem,
  LayoutGrid,
  Archive,
  ShoppingBag,
  Boxes,
  LogOut,
  X,
} from "lucide-react";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import { SidebarProps } from "@/types/general";

const routes = [
  { label: "Overview", icon: LayoutGrid, to: "/" },
  { label: "Products", icon: Archive, to: "/products" },
  { label: "Orders", icon: ShoppingBag, to: "/orders" },
  { label: "Transactions", icon: Boxes, to: "/transactions" },
];

const Sidebar = ({ openSidebar, setOpenSidebar }: SidebarProps) => {
  const toggleMenu = () => {
    setOpenSidebar((prev) => (prev = false));
  };

  return (
    <div className="px-4 py-5 w-full relative h-full overflow-hidden">
      <div className="flex items-center justify-between mb-12">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Gem className="w-8 text-white" />
          <h1
            className={`text-2xl text-white 
          md:block font-bold ${openSidebar ? "block" : "hidden"}`}
          >
            MysticShop
          </h1>
        </Link>
        <X
          className="text-white cursor-pointer md:hidden"
          onClick={toggleMenu}
        />
      </div>
      <div className="flex flex-col gap-y-6">
        {routes.map((route) => (
          <Link
            href={route.to}
            key={route.label}
            className="flex gap-4 items-center text-white"
          >
            <route.icon className="w-6" />
            <span
              className={`font-medium text-md 
              md:block ${openSidebar ? "block" : "hidden"}`}
            >
              {route.label}
            </span>
          </Link>
        ))}
      </div>
      <SignOutButton>
        <div className="flex items-center absolute bottom-0 gap-4 text-white mb-20 cursor-pointer">
          <LogOut className="w-6" />
          <span
            className={`font-medium text-md md:block ${
              openSidebar ? "block" : "hidden"
            }`}
          >
            Log out
          </span>
        </div>
      </SignOutButton>
    </div>
  );
};

export default Sidebar;