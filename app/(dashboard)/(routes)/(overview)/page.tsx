import Client from "@/components/client";
import OverviewClient from "./overviewClient";
import { getProducts } from "@/actions/getProducts";
import { getOrders } from "@/actions/getOrders";
import { getCustomers } from "@/actions/getCustomer";

const Overview = async () => {
  const product = await getProducts();
  const orders = await getOrders();
  const customers = await getCustomers();

  const revenue = orders?.reduce((sum, item) => sum + item.totalAmount, 0);

  console.log(customers);

  return (
    <Client>
      <OverviewClient
        product={product?.length || 0}
        order={orders?.length || 0}
        revenue={revenue || 0}
        customers={customers?.length || 0}
      />
    </Client>
  );
};

export default Overview;
