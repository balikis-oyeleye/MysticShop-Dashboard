import { ProductModalStore } from "@/types/general";
import { create } from "zustand";

const useProductModal = create<ProductModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useProductModal;
