"use client";

import FilterBox from "@/components/filterbox";
import TableBody from "@/components/tableBody";
import TableHead from "@/components/tableHead";
import { Button } from "@/components/ui/button";
import { productHeadings, productsFilters } from "@/constants/constants";
import useProductModal from "@/hooks/useProductModal";
import { ProductsProps } from "@/types/general";

// const products = [
//   {
//     id: 0,
//     img: "/img.webp",
//     name: "Wall Mirror",
//     category: "Decor",
//     price: 9000,
//     quantity: 18,
//     status: "unavailable",
//   },
//   {
//     id: 1,
//     img: "/img.webp",
//     name: "Wall Mirror",
//     category: "Decor",
//     price: 9000,
//     quantity: 18,
//     status: "available",
//   },
//   {
//     id: 2,
//     img: "/img.webp",
//     name: "Wall Mirror",
//     category: "Decor",
//     price: 9000,
//     quantity: 18,
//     status: "available",
//   },
//   {
//     id: 3,
//     img: "/img.webp",
//     name: "Wall Mirror",
//     category: "Decor",
//     price: 9000,
//     quantity: 18,
//     status: "available",
//   },
//   {
//     id: 4,
//     img: "/img.webp",
//     name: "Wall Mirror",
//     category: "Decor",
//     price: 9000,
//     quantity: 18,
//     status: "available",
//   },
//   {
//     id: 5,
//     img: "/img.webp",
//     name: "Wall Mirror",
//     category: "Decor",
//     price: 9000,
//     quantity: 18,
//     status: "available",
//   },
//   {
//     id: 6,
//     img: "/img.webp",
//     name: "Wall Mirror",
//     category: "Decor",
//     price: 9000,
//     quantity: 18,
//     status: "available",
//   },
//   {
//     id: 7,
//     img: "/img.webp",
//     name: "Wall Mirror",
//     category: "Decor",
//     price: 9000,
//     quantity: 18,
//     status: "available",
//   },
//   {
//     id: 8,
//     img: "/img.webp",
//     name: "Wall Mirror",
//     category: "Decor",
//     price: 9000,
//     quantity: 18,
//     status: "available",
//   },
//   {
//     id: 9,
//     img: "/img.webp",
//     name: "Wall Mirror",
//     category: "Decor",
//     price: 9000,
//     quantity: 18,
//     status: "available",
//   },
// ];

const ProductClient = ({ products }: ProductsProps) => {
  const openModal = useProductModal((state) => state.onOpen);

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
            <TableBody products={products} />
          </table>
          <div className="flex items-center justify-between flex-col sm:flex-row gap-y-5">
            <p>
              Showing 1 to {products.length} of {products.length} entries
            </p>
            <div className="space-x-4">
              <Button className="bg-blue hover:bg-blueHoover text-white ">
                Previous
              </Button>
              <Button className="bg-blue hover:bg-blueHoover text-white ">
                Next
              </Button>
            </div>
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
