import { getProducts } from "@/actions/getProducts";
import ProductClient from "./productClient";

const Products = async () => {
  const products = await getProducts();

  return <ProductClient products={products} />;
};

export default Products;
