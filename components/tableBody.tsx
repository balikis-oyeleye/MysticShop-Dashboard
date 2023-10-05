import { OrderProps, ProductProps, TransactionProps } from "@/types/general";
import { Pencil, Trash2 } from "lucide-react";
import Image from "next/image";

interface TableBodyProps {
  products?: ProductProps[];
  orders?: OrderProps[];
  transactions?: TransactionProps[];
}

const TableBody = ({ products, orders, transactions }: TableBodyProps) => {
  return (
    <tbody>
      {products ? (
        <>
          {products.map((product, index) => (
            <tr className="border-b border-gray/50" key={product.id}>
              <td> {index + 1} </td>
              <td className="flex items-center justify-center gap-3 py-4 px-6">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={40}
                  height={40}
                />
                <span className="whitespace-nowrap">{product.name}</span>
              </td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td
                className={`${
                  product.status === "available"
                    ? "text-green-600"
                    : "text-red-700"
                }`}
              >
                {product.status}
              </td>
              <td className="flex items-center gap-4 px-6 py-4 justify-center">
                <Pencil className="text-blue cursor-pointer" />
                <Trash2 className="text-red-600 cursor-pointer" />
              </td>
            </tr>
          ))}
        </>
      ) : orders ? (
        <>
          {orders?.map((order, index) => (
            <tr className="border-b border-gray/50" key={order.orderId}>
              <td> {index + 1} </td>
              <td>{order.orderId}</td>
              <td className="flex items-center justify-center gap-3 py-4 px-6">
                <Image
                  src={order.img}
                  alt={order.name}
                  width={40}
                  height={40}
                />
                <span className="whitespace-nowrap">{order.name}</span>
              </td>
              <td className="whitespace-nowrap px-4">{order.address}</td>
              <td>{order.date}</td>
              <td>{order.amount}</td>
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
