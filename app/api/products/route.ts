import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";

export async function POST(request: Request) {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { category, imageUrl, description, name, price, quantity, status } =
    body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });
  const product = await prisma.product.create({
    data: {
      category,
      description,
      name,
      price,
      quantity,
      status,
      imageUrl,
      sellerId: userId,
    },
  });

  return NextResponse.json(product);
}
