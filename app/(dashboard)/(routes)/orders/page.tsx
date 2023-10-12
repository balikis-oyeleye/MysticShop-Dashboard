import Client from "@/components/client";
import OrderClient from "./orderClient";

const Orders = ({ params }: any) => {
  return (
    <Client>
      <OrderClient params={params} />
    </Client>
  );
};

export default Orders;
