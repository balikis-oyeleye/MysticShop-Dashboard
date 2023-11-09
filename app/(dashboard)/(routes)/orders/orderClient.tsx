"use client";

import TableBody from "@/components/tableBody";
import TableHead from "@/components/tableHead";
import { ordersFilters, ordersHeadings } from "@/constants/constants";
import FilterBox from "@/components/filterbox";
import { OrderProps } from "@/types/general";

const OrderClient = ({ orders }: { orders: OrderProps[] }) => {
  return (
    <main className="mt-6 pb-6 mx-6 overflow-x-auto">
      <div className="flex justify-between gap-7">
        <div className="sm:flex gap-3 hidden">
          {ordersFilters.map((filter) => (
            <FilterBox
              filters={filter.filters}
              name={filter.name}
              key={filter.name}
              page="orders"
            />
          ))}
        </div>
      </div>

      {!orders || orders.length === 0 ? (
        <div className="flex items-center justify-center mt-48">
          <p className="text-3xl font-bold">No Orders</p>
        </div>
      ) : (
        <>
          <table className="mt-16 mb-6 min-w-full text-center text-sm font-light">
            <TableHead headings={ordersHeadings} />
            <TableBody orders={orders} />
          </table>
        </>
      )}
    </main>
  );
};

export default OrderClient;
