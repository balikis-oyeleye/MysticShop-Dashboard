import { getProducts } from "@/actions/getProducts";
import ProductClient from "./productClient";
import Client from "@/components/client";

export default async function Products({ searchParams }: any) {
  const products = await getProducts(searchParams);

  return (
    <Client>
      <ProductClient products={products} />
    </Client>
  );
}
