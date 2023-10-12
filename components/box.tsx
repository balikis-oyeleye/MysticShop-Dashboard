"use client";

import { USDollar } from "@/lib/currencyFormat";

interface BoxProps {
  amount: number;
  name: string;
}

const Box = ({ name, amount }: BoxProps) => {
  return (
    <div className="bg-white w-full sm:w-40 shadow h-20 flex flex-col justify-center md:items-center rounded gap-y-2 px-6">
      <h4 className="uppercase font-bold">{name}</h4>
      <p className="text-gray text-sm font-semibold">
        {amount ? USDollar.format(amount!) : 0}
      </p>
    </div>
  );
};

export default Box;
