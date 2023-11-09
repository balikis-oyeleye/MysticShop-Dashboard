import Client from "@/components/client";
import OverviewClient from "./overviewClient";
import { getProducts } from "@/actions/getProducts";
import { getOrders } from "@/actions/getOrders";

const Overview = async () => {
  const product = await getProducts();
  const orders = await getOrders();

  const revenue = orders?.reduce((sum, item) => sum + item.totalAmount, 0);
  // const totalCustomer = orders?.reduce((acc, order) =>{

  // } ,[])

  console.log(product);
  console.log(orders);

  return (
    <Client>
      <OverviewClient
        product={product?.length || 0}
        order={orders?.length || 0}
        revenue={revenue || 0}
      />
    </Client>
  );
};

export default Overview;
