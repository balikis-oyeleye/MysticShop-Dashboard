"use client";

import Box from "@/components/box";
import Chart from "@/components/chart";
import Client from "@/components/client";
import { DollarSign, Package, ShoppingBag, User } from "lucide-react";

const Overview = () => {
  const orders = [
    { name: "Revenue", amount: 34000, icon: DollarSign },
    { name: "Customer", amount: 2000, icon: User },
    { name: "Orders", amount: 2000, icon: ShoppingBag },
    { name: "Products", amount: 2000, icon: Package },
  ];
  return (
    <Client>
      <main className="flex md:block flex-col md:px-0 md:items-center justify-center md:pl-6 mt-6 w-full px-9 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-y-4 w-full">
          {orders.map((order) => (
            <Box
              name={order.name}
              amount={order.amount}
              icon={order.icon}
              key={order.name}
            />
          ))}
        </div>
        <div className="mt-20 w-full relative">
          <Chart />
        </div>
      </main>
    </Client>
  );
};

export default Overview;
