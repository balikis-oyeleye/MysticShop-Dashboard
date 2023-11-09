import Client from "@/components/client";
import OrderClient from "./orderClient";
import { getOrders } from "@/actions/getOrders";
import { OrderProps } from "@/types/general";

const Orders = async ({ searchParams }: any) => {
  const orders = (await getOrders(searchParams)) as OrderProps[];

  return (
    <Client>
      <OrderClient orders={orders} />
    </Client>
  );
};

export default Orders;
