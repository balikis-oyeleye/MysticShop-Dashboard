import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface NavbarProps {
  openSidebar: boolean;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ openSidebar, setOpenSidebar }: NavbarProps) => {
  const toggleMenu = () => {
    setOpenSidebar((prev) => !prev);
  };

  return (
    <nav className="flex items-center justify-between bg-white px-3 md:px-6 py-4 shadow-md">
      <div>
        <h1 className="font-bold text-2xl">Dashboard</h1>
      </div>
      <div className="flex items-center gap-3">
        <UserButton />
        <Menu className="md:hidden block cursor-pointer" onClick={toggleMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
