"use client";

import { LayoutProps } from "@/types/general";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { useState } from "react";

const DashboardLayout = ({ children }: LayoutProps) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="h-full relative">
      <aside
        className={`h-full fixed inset-y-0 z-[80] bg-gray md:w-72 sm:left-0  transition-all duration-300 ${
          openSidebar ? "sm:w-72" : "sm:w-16"
        } ${openSidebar ? "left-0 w-72" : "-left-full"}`}
      >
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      </aside>
      <main className="md:pl-72 sm:pl-16  min-h-full w-full bg-grayFade">
        <Navbar setOpenSidebar={setOpenSidebar} />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
