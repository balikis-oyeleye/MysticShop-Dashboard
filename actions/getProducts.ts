import prisma from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";

export const getProducts = async (params: any) => {
  try {
    const { userId } = auth();
    if (!userId) return [];

    let filter = {
      sellerId: {
        equals: userId,
      },
    };

    const products = await prisma.product.findMany({
      where: filter,
    });

    return products;
  } catch (error: any) {
    return [];
  }
};
