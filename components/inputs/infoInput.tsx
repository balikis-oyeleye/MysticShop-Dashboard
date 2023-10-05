import { InputProps } from "@/types/general";
import { productsFilters } from "@/constants/constants";
import { Button } from "../ui/button";
import { X } from "lucide-react";

interface InfoInputProps extends InputProps {}

const InfoInput = ({
  register,
  primaryButton,
  secondaryButton,
  primaryButtonAction,
  secondaryButtonAction,
  errors,
  close,
}: InfoInputProps) => {
  return (
    <div className="bg-white sm:max-h-[40rem] sm:w-[30rem] p-6 rounded w-72">
      <div className="uppercase flex items-center justify-between font-semibold text-lg border-b pb-2 mb-4">
        <h2> Product Information - Step 1 </h2>
        <X className="cursor-pointer" onClick={close} />
      </div>
      <form className="flex flex-col gap-y-3">
        <label className="flex flex-col gap-y-1">
          <span className="text-xs">Product Name</span>
          <input
            className="border-blue border rounded-sm px-2 py-1"
            type="text"
            placeholder="Enter Product Name"
            {...register("name")}
          />
          {errors.name && (
            <small className="error">{errors.name.message}</small>
          )}
        </label>

        <label className="flex flex-col w-full gap-y-1">
          <span className="text-xs">Product Company</span>
          <input
            className="border-blue border rounded-sm 
              h-10 px-2"
            type="text"
            placeholder="Company Name"
            {...register("company")}
          />
          {errors.company && (
            <small className="error">{errors.company.message}</small>
          )}
        </label>
        <span className="text-xs">Select Category</span>
        <select
          className="h-10 self-end px-2 capitalize w-full"
          {...register("category")}
        >
          {productsFilters[0].filters.map((category) => (
            <option className="capitalize" key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <small className="error">{errors.category.message}</small>
        )}

        <label className="flex flex-col gap-y-1">
          <span className="text-xs">Product Description</span>
          <textarea
            className="border-blue border rounded-sm max-h-[100px] min-h-[80px] px-2 py-1"
            placeholder="Enter Product Description"
            {...register("description")}
          />
        </label>
        <div className="mt-4 space-x-4 text-end">
          {primaryButton && (
            <Button onClick={primaryButtonAction}>{primaryButton}</Button>
          )}
          <Button onClick={secondaryButtonAction}>{secondaryButton}</Button>
        </div>
      </form>
    </div>
  );
};

export default InfoInput;
