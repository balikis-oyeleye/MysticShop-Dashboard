"use client";

import { OrderProps, ProductProps, TransactionProps } from "@/types/general";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { Switch } from "./ui/switch";

interface TableBodyProps {
  products?: ProductProps[];
  orders?: OrderProps[];
  transactions?: TransactionProps[];
  onDeleteProduct?: (id: string) => void;
  onUpdateProduct?: (product: ProductProps) => void;
}

const TableBody = ({
  products,
  orders,
  transactions,
  onDeleteProduct,
  onUpdateProduct,
}: TableBodyProps) => {
  return (
    <tbody>
      {products ? (
        <>
          {products.map((product, index) => (
            <tr className="border-b border-gray/50" key={product.id}>
              <td> {index + 1} </td>
              <td className="flex items-center justify-start gap-3 py-4 px-6">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={30}
                  height={30}
                  className="h-auto w-auto"
                />
                <span className="whitespace-nowrap">{product.name}</span>
              </td>
              <td className="capitalize px-2">{product.category}</td>
              <td>{product.price}</td>
              <td>
                <Switch
                  checked={product.status === "available"}
                  onCheckedChange={() => onUpdateProduct?.(product)}
                />
              </td>
              <td>
                <Trash2
                  className="text-red-600 cursor-pointer mx-auto"
                  onClick={() => onDeleteProduct?.(product.id)}
                />
              </td>
            </tr>
          ))}
        </>
      ) : orders ? (
        <>
          {orders?.map((order, index) => (
            <tr className="border-b border-gray/50" key={order.id}>
              <td> {index + 1} </td>
              <td className="capitalize text-start">
                {order.Product.category}
              </td>
              <td className="flex items-center justify-start gap-3 py-4 px-6">
                <Image
                  src={order.Product?.imageUrl!}
                  alt={order.Product?.name!}
                  width={30}
                  height={30}
                  className="h-auto w-auto"
                />
                <span className="whitespace-nowrap">{order.Product?.name}</span>
              </td>
              <td className="whitespace-nowrap px-4">{order.address}</td>
              <td className="whitespace-nowrap px-4">
                {order.orderDate.toDateString()}
              </td>
              <td>{order.totalAmount}</td>
            </tr>
          ))}
        </>
      ) : (
        <>
          {transactions?.map((transaction, index) => (
            <tr className="border-b border-gray/50" key={transaction.id}>
              <td className="whitespace-nowrap px-4 py-4 text-center">
                {transaction.time}
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-center">
                {transaction.date}
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-center">
                {transaction.id}
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-center">
                {transaction.detail}
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-center">
                {transaction.amount}
              </td>
            </tr>
          ))}
        </>
      )}
    </tbody>
  );
};

export default TableBody;
