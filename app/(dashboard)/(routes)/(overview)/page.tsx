import Client from "@/components/client";
import OverviewClient from "./overviewClient";
import { getProducts } from "@/actions/getProducts";
import { getOrders } from "@/actions/getOrders";
import { getCustomers } from "@/actions/getCustomer";
import { getGraphData } from "@/actions/getGraphData";
import { graphData } from "@/types/general";

const Overview = async () => {
  const product = await getProducts();
  const orders = await getOrders();
  const customers = await getCustomers();
  const graphData = await getGraphData();

  const revenue = orders?.reduce((sum, item) => sum + item.totalAmount, 0);

  return (
    <Client>
      <OverviewClient
        product={product?.length || 0}
        order={orders?.length || 0}
        revenue={revenue || 0}
        customers={customers?.length || 0}
        data={graphData as graphData}
      />
    </Client>
  );
};

export default Overview;
