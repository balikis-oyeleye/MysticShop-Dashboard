"use client";

import { USDollar } from "@/lib/currencyFormat";
import { LucideIcon } from "lucide-react";

interface BoxProps {
  amount: number;
  name: string;
  icon: LucideIcon;
}

const Box = ({ name, amount, icon: Icon }: BoxProps) => {
  return (
    <div className="bg-white w-full sm:w-56 shadow h-20 flex flex-col  rounded gap-y-2 px-6 justify-center">
      <div className="flex items-center justify-between">
        <h4 className="capitalize font-bold text-gray/50">{name}</h4>
        <div className="bg-blue/30 rounded-full p-1">
          <Icon className="text-blue" size={20} />
        </div>
      </div>
      <p className="text-gray text-sm font-semibold">
        {name === "Revenue" ? USDollar.format(amount!) : amount}
      </p>
    </div>
  );
};

export default Box;
