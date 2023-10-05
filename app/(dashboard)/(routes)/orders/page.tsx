"use client";

import TableBody from "@/components/tableBody";
import TableHead from "@/components/tableHead";
import { Button } from "@/components/ui/button";
import { ordersFilters, ordersHeadings } from "@/constants/constants";
import FilterBox from "@/components/filterbox";

const orders = [
  {
    orderId: "#1234",
    img: "/img.webp",
    name: "Wall Mirror",
    address: "60, Adeyomi street ilupeju, Lagos",
    amount: 180000,
    date: "09/08/2023",
  },
  {
    orderId: "#2234",
    img: "/img.webp",
    name: "Wall Mirror",
    address: "60, Adeyomi street ilupeju, Lagos",
    amount: 180000,
    date: "09/08/2023",
  },
  {
    orderId: "#3234",
    img: "/img.webp",
    name: "Wall Mirror",
    address: "60, Adeyomi street ilupeju, Lagos",
    amount: 180000,
    date: "09/08/2023",
  },
  {
    orderId: "#4234",
    img: "/img.webp",
    name: "Wall Mirror",
    address: "60, Adeyomi street ilupeju, Lagos",
    amount: 180000,
    date: "09/08/2023",
  },
  {
    orderId: "#5234",
    img: "/img.webp",
    name: "Wall Mirror",
    address: "60, Adeyomi street ilupeju, Lagos",
    amount: 180000,
    date: "09/08/2023",
  },
  {
    orderId: "#6234",
    img: "/img.webp",
    name: "Wall Mirror",
    address: "60, Adeyomi street ilupeju, Lagos",
    amount: 180000,
    date: "09/08/2023",
  },
  {
    orderId: "#7234",
    img: "/img.webp",
    name: "Wall Mirror",
    address: "60, Adeyomi street ilupeju, Lagos",
    amount: 180000,
    date: "09/08/2023",
  },
  {
    orderId: "#8234",
    img: "/img.webp",
    name: "Wall Mirror",
    address: "60, Adeyomi street ilupeju, Lagos",
    amount: 180000,
    date: "09/08/2023",
  },
  {
    orderId: "#9234",
    img: "/img.webp",
    name: "Wall Mirror",
    address: "60, Adeyomi street ilupeju, Lagos",
    amount: 180000,
    date: "09/08/2023",
  },
  {
    orderId: "#10234",
    img: "/img.webp",
    name: "Wall Mirror",
    address: "60, Adeyomi street ilupeju, Lagos",
    amount: 180000,
    date: "09/08/2023",
  },
];

const Orders = () => {
  return (
    <main className="mt-6 pb-6 mx-6 overflow-x-auto">
      <div className="flex justify-between gap-7">
        <div className="md:flex gap-3 hidden">
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

      <table className="mt-16 mb-6 min-w-full text-center text-sm font-light">
        <TableHead headings={ordersHeadings} />
        <TableBody orders={orders} />
      </table>

      <div className="flex items-center justify-between flex-col sm:flex-row gap-y-5">
        <p>Showing 1 to 10 of 100 entries</p>
        <div className="space-x-4">
          <Button className="bg-blue hover:bg-blueHoover text-white ">
            Previous
          </Button>
          <Button className="bg-blue hover:bg-blueHoover text-white ">
            Next
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Orders;
