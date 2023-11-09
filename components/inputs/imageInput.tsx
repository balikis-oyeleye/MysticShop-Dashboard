"use client";

import { InputProps } from "@/types/general";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { useCallback } from "react";
import Image from "next/image";

interface ImageInputProps extends InputProps {
  onChange: (value: string) => void;
  value: string | undefined;
  isLoading: boolean;
}

const ImageInput = ({
  primaryButton,
  secondaryButton,
  primaryButtonAction,
  secondaryButtonAction,
  close,
  onChange,
  value,
  isLoading,
  errors,
}: ImageInputProps) => {
  const handleImageUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <div className="bg-white sm:max-h-[40rem] sm:w-[30rem] p-6 rounded w-72">
      <div className="uppercase flex items-center justify-between font-semibold text-lg border-b pb-2 mb-4">
        <h2> Product Image - Step 3 </h2>
        <X className="cursor-pointer" onClick={close} />
      </div>
      <div className="flex flex-col gap-y-3">
        <div>
          <div className="h-56 w-full border flex items-center justify-center">
            {value ? (
              <div className="relative h-full w-full">
                <Image
                  src={value}
                  alt="product image"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            ) : (
              <CldUploadWidget
                uploadPreset="nncydfmv"
                onUpload={handleImageUpload}
                options={{
                  maxFiles: 1,
                  maxFileSize: 2000000,
                }}
              >
                {({ open }) => {
                  return (
                    <button className="button" onClick={() => open?.()}>
                      Upload an Image
                    </button>
                  );
                }}
              </CldUploadWidget>
            )}
          </div>

          <span className="text-xs text-gray">
            Please upload a valid image file. Size of image should not be more
            than 2MB
          </span>
          {errors.image && (
            <small className="error block">{errors.image?.message}</small>
          )}
        </div>
        <div className="mt-4 space-x-4 text-end">
          {primaryButton && (
            <Button onClick={primaryButtonAction}>{primaryButton}</Button>
          )}
          <Button
            disabled={isLoading}
            className={isLoading ? "cursor-not-allowed" : ""}
            onClick={secondaryButtonAction}
          >
            {secondaryButton}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImageInput;
