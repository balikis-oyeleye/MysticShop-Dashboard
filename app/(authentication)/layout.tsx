import { LayoutProps } from "@/types/general";
import React from "react";

const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex items-center justify-center h-full">{children}</div>
  );
};

export default AuthLayout;
