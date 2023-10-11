import { FormSchemaType } from "@/constants/zodSchema";
import React from "react";
import { UseFormRegister, FieldErrors, UseFormTrigger } from "react-hook-form";

export type LayoutProps = {
  children: React.ReactNode;
};

export type SidebarProps = {
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  openSidebar?: boolean;
};

export type ProductProps = {
  id: string;
  imageUrl: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  status: string;
  description?: string;
  sellerId?: string;
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
};

export type OrdersProps = {
  order: OrderProps[];
};

export type TransactionProps = {
  time: string;
  date: string;
  id: number;
  detail: string;
  amount: number;
};

export type InputProps = {
  register: UseFormRegister<FormSchemaType>;
  primaryButton?: string | undefined;
  secondaryButton: string;
  primaryButtonAction?: () => void;
  secondaryButtonAction: () => void;
  errors: FieldErrors<FormSchemaType>;
  close: () => void;
  trigger?: UseFormTrigger<FormSchemaType>;
};

export type ProductModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export type UpdateProductModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export type QueryStore = {
  query: string | null;
  setQuery: (query: string | null) => void;
};
