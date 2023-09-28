import React from "react";

export type LayoutProps = {
  children: React.ReactNode;
};

export type SidebarProps = {
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  openSidebar?: boolean;
};

export type ProductProps = {
  id: number;
  img: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  status: string;
};

export type ProductsProps = {
  products: ProductProps[];
};

export type OrderProps = {
  orderId: string;
  img: string;
  name: string;
  address: string;
  date: string;
  amount: number;
  status: string;
};

export type OrdersProps = {
  order: OrderProps[];
};
