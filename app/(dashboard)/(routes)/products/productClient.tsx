"use client";

import FilterBox from "@/components/filterbox";
import TableBody from "@/components/tableBody";
import TableHead from "@/components/tableHead";
import { Button } from "@/components/ui/button";
import { productHeadings, productsFilters } from "@/constants/constants";
import useProductModal from "@/hooks/useProductModal";
import { ProductProps, ProductsProps } from "@/types/general";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ProductClient = ({ products }: ProductsProps) => {
  const openModal = useProductModal((state) => state.onOpen);
  const router = useRouter();

  const onDelete = useCallback((id: string) => {
    axios
      .delete(`/api/products/${id}`)
      .then(() => {
        toast.success("Product deleted");
        router.refresh();
      })
      .catch(() => {
        toast.error("Something went wrong.");
      })
      .finally(() => {});
  }, []);

  const onUpdate = useCallback((product: ProductProps) => {
    console.log(product.id, product.status);

    axios
      .post(`/api/status/${product.id}`, product)
      .then(() => {
        toast.success("Status Changed!");
        router.refresh();
      })
      .catch(() => {
        toast.error("Something went wrong.");
      })
      .finally(() => {});
  }, []);

  return (
    <main className="mt-6 pb-6 mx-6 overflow-x-auto">
      <div className="flex justify-between gap-7">
        <div className="md:flex gap-3 hidden">
          {productsFilters.map((filter) => (
            <FilterBox
              filters={filter.filters}
              name={filter.name}
              key={filter.name}
              page="products"
            />
          ))}
        </div>
        <Button
          onClick={openModal}
          className="bg-blue hover:bg-blueHoover text-white text-sm"
        >
          Add Product
        </Button>
      </div>

      {products.length != 0 || !products ? (
        <>
          <table className="mt-16 mb-6 min-w-full text-center text-sm font-light">
            <TableHead headings={productHeadings} />
            <TableBody
              products={products}
              onDeleteProduct={onDelete}
              onUpdateProduct={onUpdate}
            />
          </table>
          <div className="flex md:items-center justify-between flex-col sm:flex-row gap-y-5">
            <p>
              Showing 1 to {products.length} of {products.length} entries
            </p>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center mt-48">
          <p className="text-3xl font-bold">No Products</p>
        </div>
      )}
    </main>
  );
};

export default ProductClient;
