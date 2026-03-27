"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { loadOrders } from "@/app/actions/order";

type OrderWithItems = Awaited<ReturnType<typeof loadOrders>>["orders"][number];

export default function OrdersList({ userId }: { userId: string }) {
  const [orders, setOrders] = useState<OrderWithItems[]>([]);
  const [cursor, setCursor] = useState<string | undefined>(undefined);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const hasFetched = useRef(false);

  const fetchMore = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    const { orders: newOrders, nextCursor } = await loadOrders(userId, cursor);

    setOrders((prev) => [...prev, ...newOrders]);
    setCursor(nextCursor ?? undefined);
    setHasMore(nextCursor !== null);
    setLoading(false);
  }, [cursor, hasMore, loading, userId]);

  // initial load
  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    fetchMore();
  }, [fetchMore]);

  // infinite scroll trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) fetchMore();
      },
      { threshold: 0.1 },
    );
    if (bottomRef.current) observer.observe(bottomRef.current);
    return () => observer.disconnect();
  }, [fetchMore]);

  return (
    <>
      {orders.map((order, i) => (
        <div
          key={order.id}
          className="border-2 w-250 flex justify-center flex-col items-center gap-5 p-15"
        >
          <p>Order: {order.id.slice(0, 10) + "-" + (i + 1)}</p>
          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          <div className="flex">
            <div>
              {order.orderItems.map((item) => (
                <div key={item.id} className="flex gap-5 justify-between px-5">
                  <Image
                    height={150}
                    width={150}
                    alt={item.product.name}
                    src={item.product.image ?? ""}
                  />
                  <p>{item.product.name.toUpperCase()}</p>
                  <p>x{item.quantity}</p>
                </div>
              ))}
            </div>
            <div>
              <p>
                Price: $
                {order.orderItems.reduce(
                  (acc, orderItem) =>
                    orderItem.price * orderItem.quantity + acc,
                  0,
                )}
              </p>
            </div>
          </div>
        </div>
      ))}

      <div ref={bottomRef} className="h-10 flex items-center justify-center">
        {loading && <p className="text-sm text-muted-foreground">Loading...</p>}
        {!hasMore && orders.length > 0 && (
          <p className="text-sm text-muted-foreground">No more orders.</p>
        )}
      </div>
    </>
  );
}
