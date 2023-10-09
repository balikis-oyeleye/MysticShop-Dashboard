import React, { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import useQuery from "@/hooks/useProductQuery";

interface DropdownProps {
  items: string[];
  className: string;
  name: string;
  page: string;
}

const Dropdown = ({ items, className, name, page }: DropdownProps) => {
  const router = useRouter();
  const params = useSearchParams();
  const filter = params?.get(name);

  const handleClick = useCallback(
    (item: string) => {
      let currentQuery = {};
      if (params) {
        currentQuery = queryString.parse(params.toString());
      }

      const updatedQuery: any = {
        ...currentQuery,
        category: item,
      };

      if (item === "all" || filter === item) {
        delete updatedQuery.filter;
      }

      const url = queryString.stringifyUrl(
        {
          url: `/${page}`,
          query: updatedQuery,
        },
        { skipNull: true }
      );

      router.push(url);
    },
    [items, router, params, filter]
  );

  return (
    <div
      className={`bg-gray absolute top-10
    left-0 w-full ${className} z-50`}
    >
      {items.map((item) => (
        <div
          key={item}
          className={`hover:bg-pale/60 px-1 py-2 ${
            filter === item ? "bg-pale/60" : ""
          }`}
        >
          <button className="capitalize" onClick={() => handleClick(item)}>
            {item}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
