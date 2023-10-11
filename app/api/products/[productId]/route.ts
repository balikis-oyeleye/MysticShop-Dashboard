import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

interface ParamsProps {
  params: {
    productId: string;
  };
}

export async function DELETE(request: Request, { params }: ParamsProps) {
  if (!params.productId) {
    throw new Error("Invalid ID");
  }

  const product = await prisma.product.delete({
    where: {
      id: params.productId,
    },
  });

  return NextResponse.json(product);
}
