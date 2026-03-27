"use server";

import { getCart } from "../actions/cart";
import CartItem from "../components/ui/cart/CartItem";
import OrderButton from "../components/ui/OrderButton";

export default async function Page() {
  const cart = await getCart();
  if (!cart || cart.items.length === 0) {
    return <> You have an Empty Cart</>;
  }

  return (
    <div className=" flex justify-center">
      <div className="flex flex-col justify-center w-100 gap-10 h-full">
        {cart.items.map((item) => (
          <CartItem
            key={item.id}
            product={item.product}
            quantity={item.quantity}
            id={item.id}
          />
        ))}
      </div>
      <OrderButton cartItems={cart.items} />
    </div>
  );
}
