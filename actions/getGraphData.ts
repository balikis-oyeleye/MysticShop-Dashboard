import prisma from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";

export const getGraphData = async () => {
  try {
    const data = [
      { name: "Jan", total: 0 },
      { name: "Feb", total: 0 },
      { name: "Mar", total: 0 },
      { name: "Apr", total: 0 },
      { name: "May", total: 0 },
      { name: "Jun", total: 0 },
      { name: "Jul", total: 0 },
      { name: "Aug", total: 0 },
      { name: "Sep", total: 0 },
      { name: "Oct", total: 0 },
      { name: "Nov", total: 0 },
      { name: "Dec", total: 0 },
    ];

    const { userId } = auth();
    if (!userId) return data;

    const orders = await prisma.order.findMany({
      where: {
        sellerId: {
          equals: userId,
        },
        isPaid: {
          equals: true,
        },
      },
      include: {
        Product: true,
      },
    });

    const monthlyRevenue: { [key: number]: number } = {};

    for (const order of orders) {
      const month = order.orderDate.getMonth();

      let revenueForOrder = order.totalAmount;

      monthlyRevenue[month] = (monthlyRevenue[month] || 0) + revenueForOrder;
      console.log(monthlyRevenue);
    }

    for (const month in monthlyRevenue) {
      data[month].total = monthlyRevenue[month];
    }

    return data;
  } catch (error: any) {
    return new Error(error);
  }
};
