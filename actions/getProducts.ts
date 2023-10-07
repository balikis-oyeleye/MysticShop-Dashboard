import prisma from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";

export const getProducts = async () => {
  try {
    const { userId } = auth();
    if (!userId) return [];

    const products = await prisma.product.findMany({
      where: {
        sellerId: {
          equals: userId,
        },
      },
    });

    return products;
  } catch (error: any) {
    throw new Error(error);
  }
};
