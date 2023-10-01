"use client";

import TableBody from "@/components/tableBody";
import TableHead from "@/components/tableHead";
import { Button } from "@/components/ui/button";
import { transactionHeadings } from "@/constants/constants";
import { USDollar } from "@/lib/currencyFormat";
import React from "react";

const transactions = [
  {
    id: 1,
    time: "09:48:50 pm",
    date: "12/40/2023",
    detail: "Withdrawal",
    amount: 6000,
  },
  {
    id: 2,
    time: "09:48:50 pm",
    date: "12/40/2023",
    detail: "Withdrawal",
    amount: 6000,
  },
  {
    id: 3,
    time: "09:48:50 pm",
    date: "12/40/2023",
    detail: "Withdrawal",
    amount: 6000,
  },
  {
    id: 4,
    time: "09:48:50 pm",
    date: "12/40/2023",
    detail: "Withdrawal",
    amount: 6000,
  },
];

const Transactions = () => {
  return (
    <main className="mt-6 pb-6 mx-6 overflow-x-auto">
      <div className="flex items-start justify-between mb-14 flex-col md:flex-row md:items-center gap-3">
        <h2 className="font-bold text-3xl">
          Balance: {USDollar.format(50000)}
        </h2>
        <Button className="bg-blue hover:bg-blueHoover">Withdraw</Button>
      </div>
      <table>
        <TableHead headings={transactionHeadings} />
        <TableBody transactions={transactions} />
      </table>
    </main>
  );
};

export default Transactions;
