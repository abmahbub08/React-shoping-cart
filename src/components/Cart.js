import { useContext } from "react";
import { CartContext } from "../CartContextProvider";

export default function CartIcon() {
  const { cartItems, total, modelShowHide } = useContext(CartContext);

  let totalItem = 0;
  cartItems.map((item) => {
    totalItem += item.qt;
  });

  return (
    <div className="cart-holder" onClick={modelShowHide}>
      <div>
        {totalItem}
        <br />
        <span>${Number(total).toFixed(2)}</span>
      </div>
    </div>
  );
}
