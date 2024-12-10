import { useContext } from "react";
import { createPortal } from "react-dom";
import { CartContext } from "../CartContextProvider";
import CartItem from "./CartItem";

export default function CartModal() {
  const { cartItems, total, modalAppear, modelShowHide } =
    useContext(CartContext);
  return createPortal(
    <div className={`model-container ${modalAppear ? "active" : ""}`}>
      <div className="modal-main">
        <div className="modal-header">
          <span>Shopping Cart</span>
          <button onClick={modelShowHide}>x</button>
        </div>
        <div className="modal-body">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="modal-footer">
          <div className="cheackout-btn">
            <button>Checkout</button>
          </div>
          <div className="pay-total">Total: ${Number(total).toFixed(2)}</div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
