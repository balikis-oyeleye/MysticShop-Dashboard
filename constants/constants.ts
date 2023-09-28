export const ordersFilters = [
  {
    name: "category",
    filters: ["furniture", "clocks", "beddings", "lighting", "accessories"],
  },
  { name: "status", filters: ["cancel", "shipped", "pending", "completed"] },
  { name: "price", filters: ["highest", "lowest"] },
];

export const ordersHeadings = [
  "#",
  "Order Id",
  "Order Name",
  "Address",
  "Date",
  "Amount",
  "Status",
];

export const productsFilters = [
  {
    name: "category",
    filters: ["furniture", "clocks", "beddings", "lighting", "accessories"],
  },
  { name: "status", filters: ["available", "unavailable"] },
  { name: "price", filters: ["highest", "lowest"] },
];

export const productHeadings = [
  "#",
  "Product Name",
  "Category",
  "Price",
  "Quantity",
  "Status",
  "Actions",
];
