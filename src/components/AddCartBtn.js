import { useContext } from "react";
import { CartContext } from "../CartContextProvider";

export default function AddCartBtn({ itemId }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="add-to-cart">
      <button
        onClick={() => {
          addToCart(itemId, 1);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
