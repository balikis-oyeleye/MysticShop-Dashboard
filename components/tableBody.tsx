import { OrderProps, ProductProps } from "@/types/general";
import { Pencil, Trash2 } from "lucide-react";
import Image from "next/image";

interface TableBodyProps {
  products?: ProductProps[];
  orders?: OrderProps[];
}

const colors = {
  pending: "text-orange-600",
  completed: "text-green-600",
  shipped: "text-purple-600",
  canceled: "text-red-600",
};

const TableBody = ({ products, orders }: TableBodyProps) => {
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
      ) : (
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
              <td className={`${colors[order.status as keyof typeof colors]}`}>
                {order.status}
              </td>
            </tr>
          ))}
        </>
      )}
    </tbody>
  );
};

export default TableBody;
