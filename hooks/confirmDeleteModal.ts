import { confirmDeleteModalStore } from "@/types/general";
import { create } from "zustand";

const useConfirmDeleteModal = create<confirmDeleteModalStore>((set) => ({
  isOpen: false,
  productId: "",
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setProductId: (id) => set({ productId: id }),
}));

export default useConfirmDeleteModal;
