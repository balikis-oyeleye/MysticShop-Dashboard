import { getProducts } from "@/actions/getProducts";
import ProductClient from "./productClient";

const Products = async ({ params }: any) => {
  const products = await getProducts();

  return <ProductClient products={products} params={params} />;
};

export default Products;
