export const ordersFilters = [
  {
    name: "category",
    filters: ["furniture", "clocks", "beddings", "lighting", "accessories"],
  },
  { name: "date", filters: ["latest", "oldest"] },
];

export const ordersHeadings = [
  "#",
  "Order Id",
  "Order Name",
  "Address",
  "Date",
  "Amount",
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

export const transactionHeadings = [
  "Transaction Time",
  "Transaction Date",
  "Transaction ID",
  "Transaction Detail",
  "Amount",
];
