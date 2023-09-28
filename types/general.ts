import React from "react";

export type LayoutProps = {
  children: React.ReactNode;
};

export type SidebarProps = {
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  openSidebar?: boolean;
};
