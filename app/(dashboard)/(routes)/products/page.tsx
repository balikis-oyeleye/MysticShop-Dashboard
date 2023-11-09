import { getProducts } from "@/actions/getProducts";
import ProductClient from "./productClient";
import Client from "@/components/client";
import { ProductProps } from "@/types/general";

export default async function Products({ searchParams }: any) {
  const products = (await getProducts(searchParams)) as ProductProps[];

  return (
    <Client>
      <ProductClient products={products} />
    </Client>
  );
}
