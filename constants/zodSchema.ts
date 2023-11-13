import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(3, "Product name must have more than 3 letters")
    .optional(),
  category: z.string(),
  price: z.number().optional(),
  status: z.string().optional(),
  image: z.string().optional(),
  description: z
    .string()
    .min(4, "Please enter a valid value")
    .optional()
    .or(z.literal("")),
  company: z.string().min(3, "Please enter a valid company name"),
});

export type FormSchemaType = z.infer<typeof formSchema>;
