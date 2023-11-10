import prisma from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";

export const getOrders = async (params?: any) => {
  try {
    const { userId } = auth();
    if (!userId) return [];

    let filter: any = {
      sellerId: {
        equals: userId,
      },
      isPaid: {
        equals: true,
      },
    };

    if (params) {
      if (params.category) {
        filter.Product = {
          category: {
            equals: params.category,
          },
        };
      }
    }

    const orders = await prisma.order.findMany({
      where: filter,
      include: {
        Product: true,
      },
    });

    return orders;
  } catch (error: any) {
    new Error(error);
  }
};
