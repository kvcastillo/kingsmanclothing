import { ProductProps } from "@/app/types/types";
import Image from "next/image";
import AddtoCartButton from "./AddtoCartButton";

const ProductItem = ({ product }: ProductProps) => {
  return (
    <div className="flex gap-5 flex-col justify-evenly items-center h-100 p-5">
      <Image
        src={product.image ?? ""}
        alt={product.name}
        width={150}
        height={150}
      />
      <p>{product.name}</p>
      <p>₱{product.price}</p>
      <p>
        {product.quantity > 0 ? (
          `${product.quantity} pcs`
        ) : (
          <span className="opacity-50">Out of Stock</span>
        )}
      </p>
      <div className="p-3">
        <AddtoCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductItem;
