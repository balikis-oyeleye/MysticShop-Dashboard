import { LayoutProps } from "@/types/general";
import Client from "@/components/client";

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <div className="h-full relative">
      <Client children={children} />
    </div>
  );
};

export default DashboardLayout;
