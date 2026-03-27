"use client";

import { addToCart } from "@/app/actions/cart";
import { AddtoCartButtonProps } from "@/app/types/types";

const AddtoCartButton = ({ product }: AddtoCartButtonProps) => {
  return (
    <span
      className="cursor-pointer text-2xl"
      onClick={() => addToCart(product.id)}
    >
      🛒
    </span>
  );
};

export default AddtoCartButton;
