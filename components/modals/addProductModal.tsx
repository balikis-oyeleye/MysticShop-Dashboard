import React, { useState } from "react";
import InfoInput from "../inputs/infoInput";
import PriceInput from "../inputs/priceInput";
import ImageInput from "../inputs/imageInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormSchemaType, formSchema } from "@/constants/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import useProductModal from "@/hooks/useProductModal";

enum STEP {
  INFO,
  PRICE,
  IMAGE,
}

const AddProductModal = () => {
  const [step, setStep] = useState(STEP.INFO);
  const isOpen = useProductModal((state) => state.isOpen);
  const closeModal = useProductModal((state) => state.onClose);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const close = () => {
    reset();
    closeModal();
    setStep(STEP.INFO);
  };

  // const productName = watch("productName");
  // const category = watch("category");
  // const company = watch("company");
  // const description = watch("description");
  // const image = watch("image");
  // const price = watch("price");
  // const quantity = watch("quantity");
  // const status = watch("status");

  // console.log({
  //   productName,
  //   company,
  //   category,
  //   description,
  //   price,
  //   quantity,
  //   status,
  // });

  const primaryButton = () => {
    if (step === STEP.INFO) return undefined;
    return "Prev";
  };

  const secondaryButton = () => {
    if (step === STEP.IMAGE) return "Add Product";
    return "Next";
  };

  const onPrev = () => {
    setStep((value) => value - 1);
  };

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    if (step != STEP.IMAGE) {
      return setStep((value) => value + 1);
    }
    console.log(data);
  };

  return (
    <div
      className={`bg-gray/40 fixed top-0 bottom-0 h-full w-full z-[90] items-center justify-center ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      {step === STEP.INFO ? (
        <InfoInput
          register={register}
          primaryButton={primaryButton()}
          secondaryButton={secondaryButton()}
          secondaryButtonAction={handleSubmit(onSubmit)}
          primaryButtonAction={onPrev}
          errors={errors}
          close={close}
        />
      ) : step === STEP.PRICE ? (
        <PriceInput
          register={register}
          primaryButton={primaryButton()}
          secondaryButton={secondaryButton()}
          secondaryButtonAction={handleSubmit(onSubmit)}
          primaryButtonAction={onPrev}
          errors={errors}
          close={close}
        />
      ) : (
        <ImageInput
          register={register}
          primaryButton={primaryButton()}
          secondaryButton={secondaryButton()}
          secondaryButtonAction={handleSubmit(onSubmit)}
          primaryButtonAction={onPrev}
          errors={errors}
          close={close}
        />
      )}
    </div>
  );
};

export default AddProductModal;
