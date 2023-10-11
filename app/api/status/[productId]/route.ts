import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";

interface ParamsProps {
  params: {
    productId: string;
  };
}

export async function POST(request: Request, { params }: ParamsProps) {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.error();
  }

  const body = await request.json();

  const { status } = body;

  const product = await prisma.product.update({
    where: {
      id: params.productId,
    },
    data: {
      status: status === "available" ? "unavailable" : "available",
    },
  });

  return NextResponse.json(product);
}
