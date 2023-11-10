import prisma from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";

export const getCustomers = async (params?: any) => {
  const { userId } = auth();
  if (!userId) return [];

  try {
    const customers = await prisma.order.groupBy({
      by: ["custormerId"],
      where: {
        isPaid: { equals: true },
      },
    });
    return customers;
  } catch (error: any) {
    new Error(error);
  }
};
