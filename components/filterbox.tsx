"use client";

import { ChevronDown } from "lucide-react";
import React from "react";
import Dropdown from "./dropdown";

interface FilterBox {
  name: string;
  filters: string[];
  page: string;
}

const FilterBox = ({ filters, name, page }: FilterBox) => {
  return (
    <div className="flex items-center bg-white py-2 px-3 gap-2 rounded relative group cursor-pointer">
      <span className="text-base">{name}</span>
      <ChevronDown className="w-3 transition group-hover:rotate-180" />
      <Dropdown
        items={filters}
        className="hidden group-hover:block text-white"
        name={name}
        page={page}
      />
    </div>
  );
};

export default FilterBox;
