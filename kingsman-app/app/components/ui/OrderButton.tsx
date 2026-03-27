"use client";
import { createOrder } from "@/app/actions/order";
import { OrderButtonProps } from "@/app/types/types";

const OrderButton = ({ cartItems }: OrderButtonProps) => {
  const onOrderButtonClick = () => {
    createOrder();
  };
  return (
    <div
      className="self-start mt-10 cursor-pointer border-2 p-5"
      onClick={onOrderButtonClick}
    >
      <p>
        Total Price :{" "}
        {Math.round(
          cartItems.reduce(
            (acc, item) => acc + item.quantity * item.product.price,
            0,
          ),
        )}
      </p>
      <span>Place Order</span>
    </div>
  );
};

export default OrderButton;
