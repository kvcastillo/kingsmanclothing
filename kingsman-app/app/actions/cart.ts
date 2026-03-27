"use server";
import prisma from "@/lib/prisma";
import { auth } from "../lib/auth";
import { revalidatePath } from "next/cache";

// helper function to get user id
export const getUserId = async () => {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");
  return session.user.id;
};

// when add to cart is clicked
export const addToCart = async (productId: string, quantity: number = 1) => {
  const userId = await getUserId();

  const cart = await prisma.cart.upsert({
    where: { userId },
    update: {},
    create: { userId },
  });

  // Check if item being add to cart already exists in the cart, if exists , add quantity only, if not, create a new cartItem.
  const existingCart = await prisma.cartItem.findFirst({
    where: {
      productId,
    },
  });

  if (existingCart) {
    await prisma.cartItem.update({
      where: { id: existingCart.id },
      data: { quantity: existingCart.quantity + quantity },
    });
  } else {
    await prisma.cartItem.create({
      data: {
        cartId: cart.userId,
        productId,
        quantity,
      },
    });
  }

  // redirect to home and refresh cart data in Navbar since it exists in Layout
  revalidatePath("/", "layout");
};

export const getCart = async () => {
  const userId = await getUserId();
  return await prisma.cart.findUnique({
    where: { userId },
    include: {
      items: {
        include: { product: true },
        distinct: ["productId"],
      },
    },
  });
};

// delete cartItem
export const deleteCartItem = async (id: string) => {
  await prisma.cartItem.delete({
    where: {
      id,
    },
  });
  revalidatePath("/cart", "layout");
};
