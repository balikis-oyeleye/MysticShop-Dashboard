import { QueryStore } from "@/types/general";
import { create } from "zustand";

const useQuery = create<QueryStore>((set) => ({
  query: "",
  setQuery: (query) => set({ query: query }),
}));

export default useQuery;
