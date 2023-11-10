"use client";

import Box from "@/components/box";
import Chart from "@/components/chart";
import { DollarSign, Package, ShoppingBag, User } from "lucide-react";

interface OverviewClientProps {
  product: number;
  order: number;
  revenue: number;
  customers: number;
}

const OverviewClient = ({
  product,
  order,
  revenue,
  customers,
}: OverviewClientProps) => {
  const orders = [
    { name: "Revenue", amount: revenue, icon: DollarSign },
    { name: "Customer", amount: customers, icon: User },
    { name: "Orders", amount: order, icon: ShoppingBag },
    { name: "Products", amount: product, icon: Package },
  ];

  return (
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
  );
};

export default OverviewClient;
