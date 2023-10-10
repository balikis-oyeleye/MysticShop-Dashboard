import { getProducts } from "@/actions/getProducts";
import ProductClient from "./productClient";

export default async function Products({ searchParams }: any) {
  const products = await getProducts(searchParams);
  console.log(searchParams);

  return <ProductClient products={products} />;
}
