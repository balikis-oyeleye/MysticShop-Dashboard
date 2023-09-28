import { SidebarProps } from "@/types/general";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";

const Navbar = ({ setOpenSidebar }: SidebarProps) => {
  const toggleMenu = () => {
    setOpenSidebar((prev) => (prev = true));
  };

  return (
    <nav className="flex items-center justify-between bg-white px-3 md:px-6 py-4 shadow-md">
      <Menu className="md:hidden block cursor-pointer" onClick={toggleMenu} />
      <div>
        <h1 className="font-bold text-2xl">Dashboard</h1>
      </div>

      <UserButton />
    </nav>
  );
};

export default Navbar;
