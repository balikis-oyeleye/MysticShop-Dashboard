import prisma from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";

export const getProducts = async (params: any) => {
  try {
    const { userId } = auth();
    if (!userId) return [];

    let filter: any = {
      sellerId: {
        equals: userId,
      },
    };

    if (params.category) {
      filter.category = {
        equals: params.category,
      };
    }

    if (params.status) {
      filter.status = {
        equals: params.status,
      };
    }

    const products = await prisma.product.findMany({
      where: filter,
      orderBy: {
        price: params.price === "highest" ? "desc" : "asc",
      },
    });

    return products;
  } catch (error: any) {
    return [];
  }
};
