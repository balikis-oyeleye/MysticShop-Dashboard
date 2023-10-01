"use client";

import { USDollar } from "@/lib/currencyFormat";

interface BoxProps {
  amount?: number;
  orders?: number;
  period: string;
}

const Box = ({ orders, period, amount }: BoxProps) => {
  return (
    <div className="bg-white w-40 shadow h-20 flex flex-col justify-center items-center rounded gap-y-2">
      <h4 className="uppercase font-bold">{period}</h4>
      <p className="text-gray text-sm font-semibold">
        {amount ? USDollar.format(amount!) : orders}
      </p>
    </div>
  );
};

export default Box;
