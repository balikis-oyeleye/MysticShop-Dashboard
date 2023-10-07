"use client";

interface TableHeadProps {
  headings: string[];
}

const TableHead = ({ headings }: TableHeadProps) => {
  return (
    <thead className="bg-blue text-white border-b font-medium">
      <tr>
        {headings.map((heading) => (
          <th key={heading} className="px-6 py-4 whitespace-nowrap">
            {heading}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
