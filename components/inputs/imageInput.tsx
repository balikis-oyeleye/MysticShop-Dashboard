import { InputProps } from "@/types/general";
import Modal from "../modals/modal";
import { Button } from "../ui/button";
import { X } from "lucide-react";

interface ImageInputProps extends InputProps {}

const ImageInput = ({
  register,
  primaryButton,
  secondaryButton,
  primaryButtonAction,
  secondaryButtonAction,
  close,
}: ImageInputProps) => {
  return (
    <div className="bg-white sm:max-h-[40rem] sm:w-[30rem] p-6 rounded w-72">
      <div className="uppercase flex items-center justify-between font-semibold text-lg border-b pb-2 mb-4">
        <h2> Product Image - Step 3 </h2>
        <X className="cursor-pointer" onClick={close} />
      </div>
      <form className="flex flex-col gap-y-3">
        <div>
          <div className="h-56 w-full border flex items-center justify-center">
            <span>image</span>
          </div>
          <span className="text-xs text-gray">
            Please upload a valid image file. Size of image should not be more
            than 2MB
          </span>
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

export default ImageInput;
