import React from "react";
import { InputProps } from "@/types/general";
import { Button } from "../ui/button";
import { X } from "lucide-react";

interface PriceInputProps extends InputProps {}

const PriceInput = ({
  register,
  secondaryButton,
  primaryButton,
  primaryButtonAction,
  secondaryButtonAction,
  close,
}: PriceInputProps) => {
  return (
    <div className="bg-white sm:max-h-[40rem] sm:w-[30rem] p-6 rounded w-72">
      <div className="uppercase flex items-center justify-between font-semibold text-lg border-b pb-2 mb-4">
        <h2>Price & Status - Step 2</h2>
        <X className="cursor-pointer" onClick={close} />
      </div>
      <form className="flex flex-col gap-y-3">
        <label className="flex flex-col">
          <span>Product Price</span>
          <input
            className="border-blue border rounded-sm px-2 py-1"
            type="number"
            defaultValue={1}
            min={1}
            placeholder="Enter Product Price"
            {...register("price", {
              setValueAs: (value) => Number(value),
            })}
          />
        </label>

        <label className="flex flex-col">
          <span>Product Quantity</span>
          <input
            className="border-blue border rounded-sm px-2 py-1"
            type="number"
            defaultValue={1}
            min={1}
            placeholder="Enter Product Price"
            {...register("quantity", {
              setValueAs: (value) => Number(value),
            })}
          />
        </label>

        <div>
          <h4>Product Available</h4>
          <div className="space-x-4">
            <label className="space-x-2">
              <input
                type="radio"
                {...register("status")}
                checked
                value="available"
              />
              <span>Yes</span>
            </label>

            <label className="space-x-2">
              <input type="radio" {...register("status")} value="unavailable" />
              <span>No</span>
            </label>
          </div>
        </div>
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

export default PriceInput;
