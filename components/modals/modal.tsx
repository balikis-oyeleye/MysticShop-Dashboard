import { FormSchemaType, formSchema } from "@/constants/zodSchema";
import useProductModal from "@/hooks/useProductModal";
import { LayoutProps } from "@/types/general";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";

interface ModalProps extends LayoutProps {
  heading: string;
}

const Modal = ({ children, heading }: ModalProps) => {
  const isOpen = useProductModal((state) => state.isOpen);
  const close = useProductModal((state) => state.onClose);

  return (
    <div
      className={`bg-gray/40 fixed top-0 bottom-0 h-full w-full z-[90] items-center justify-center ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <div className="bg-white sm:max-h-[40rem] sm:w-[30rem] p-6 rounded w-72">
        <div className="uppercase flex items-center justify-between font-semibold text-lg border-b pb-2 mb-4">
          <h2> {heading}</h2>
          <X className="cursor-pointer" onClick={close} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
