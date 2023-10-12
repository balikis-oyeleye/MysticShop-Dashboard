import Box from "@/components/box";
import Client from "@/components/client";

const Overview = () => {
  const orders = [
    { name: "Revenue", amount: 340000 },
    { name: "Customer", amount: 2000 },
    { name: "Orders", amount: 2000 },
    { name: "Products", amount: 2000 },
  ];
  return (
    <Client>
      <main className="flex md:block flex-col md:px-0 md:items-center justify-center md:pl-6 mt-6 w-full px-9">
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-y-4 w-full">
          {orders.map((order) => (
            <Box name={order.name} amount={order.amount} key={order.name} />
          ))}
        </div>
      </main>
    </Client>
  );
};

export default Overview;
