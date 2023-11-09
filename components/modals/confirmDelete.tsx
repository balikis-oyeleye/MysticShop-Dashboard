"use client";

import useConfirmDeleteModal from "@/hooks/confirmDeleteModal";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";

const ConfirmDelete = () => {
  const [isLoading, setLoading] = useState(false);
  const isOpen = useConfirmDeleteModal((state) => state.isOpen);
  const productId = useConfirmDeleteModal((state) => state.productId);
  const closeModal = useConfirmDeleteModal((state) => state.onClose);
  const router = useRouter();


  const onDelete = useCallback((id: string) => {
    setLoading(true);
    axios
      .delete(`/api/products/${id}`)
      .then(() => {
        toast.success("Product deleted");
        router.refresh();
      })
      .catch(() => {
        toast.error("Something went wrong.");
      })
      .finally(() => {
        closeModal();
        setLoading(false);
      });
  }, []);

  return (
    <div
      className={`bg-gray/40 fixed top-0 bottom-0 h-full w-full z-[90] items-center justify-center ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <div className="bg-white h-40 w-80 py-4 px-4">
        <p className="text-center mb-9">
          Are you sure you want to delete this product?
        </p>
        <div className="flex items-center justify-between">
          <button
            onClick={() => onDelete(productId)}
            disabled={isLoading}
            className="bg-green-600 px-4 py-1 text-white text-lg rounded-md"
          >
            {isLoading ? (
              <Image alt="loading" src="/loader.gif" width={20} height={20} />
            ) : (
              "Yes"
            )}
          </button>
          <button
            onClick={closeModal}
            disabled={isLoading}
            className="bg-red-600 px-4 py-1 text-white text-lg rounded-md"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
