import { ProductProps } from "@/app/types/types";
import Image from "next/image";
import { addToCart } from "@/app/actions/cart";

const ProductItem = ({ product }: ProductProps) => {
  return (
    <div className="group relative flex flex-col gap-4">
      {/* IMAGE CONTAINER */}
      <div className="relative overflow-hidden bg-gray-100 aspect-[3/4]">
        <Image
          src={product.image ?? ""}
          alt={product.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        {/* HOVER OVERLAY */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500" />

        {/* QUICK ACTION */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition duration-500">
          <button
            className="w-full bg-black text-white py-3 text-sm tracking-widest uppercase"
            onClick={() => addToCart(product.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* TEXT */}
      <div className="flex flex-col gap-1 px-1">
        <p className="text-sm tracking-wide">{product.name}</p>

        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">₱{product.price}</p>

          {product.quantity > 0 ? (
            <span className="text-xs text-gray-400 tracking-wider">
              In Stock
            </span>
          ) : (
            <span className="text-xs text-gray-300 tracking-wider line-through">
              Sold Out
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
