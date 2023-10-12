import Box from "@/components/box";
import Client from "@/components/client";
import React from "react";

const orders = [
  { period: "today", orders: 2 },
  { period: "this week", orders: 30 },
  { period: "this month", orders: 500 },
];

const revenues = [
  { period: "today", amount: 8590 },
  { period: "this week", amount: 23900 },
  { period: "this month", amount: 100000 },
];

const Overview = () => {
  return (
    <Client>
      <main className="flex md:block flex-col items-center justify-center md:pl-6 mt-6 space-y-12">
        <div>
          <h3 className="font-bold mb-4">Orders</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4">
            {orders.map((order) => (
              <Box
                period={order.period}
                orders={order.orders}
                key={order.period}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-4">Revenue</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4">
            {revenues.map((revenue) => (
              <Box
                period={revenue.period}
                amount={revenue.amount}
                key={revenue.period}
              />
            ))}
          </div>
        </div>
      </main>
    </Client>
  );
};

export default Overview;
