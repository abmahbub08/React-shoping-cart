import { useContext } from "react";
import { CartContext } from "../CartContextProvider";

export default function CartItem(cartItems) {
  const { id, title, qt, price } = cartItems;
  const { addToCart, updateCart } = useContext(CartContext);

  return (
    <div className="item-box">
      <div className="item-title">{title}</div>
      <div className="item-qt">
        <button
          onClick={() => {
            updateCart(id, -1);
          }}
        >
          -
        </button>{" "}
        {qt}{" "}
        <button
          onClick={() => {
            updateCart(id, 1);
          }}
        >
          +
        </button>
      </div>
      <div className="item-price">${Number(price * qt).toFixed(2)}</div>
    </div>
  );
}
