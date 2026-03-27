import { getUserId } from "../actions/cart";
import OrdersList from "../components/ui/order/OrdersList";

export default async function Page() {
  const userId = await getUserId();

  return (
    <div className="flex gap-5 flex-col items-center w-full">
      <OrdersList userId={userId} />
    </div>
  );
}
