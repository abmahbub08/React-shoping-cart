import { createContext, useState } from "react";
import { PRODUCTS } from "./Products";

export const CartContext = createContext({
  cartItems: [],
  total: null,
  modalAppear: false,
  addToCart: () => {},
  modelShowHide: () => {},
});

export default function CartContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // add to cart or update cart items======
  // --------------------------------------
  function addToCart(_id, _qt) {
    const prd = PRODUCTS.find((obj) => obj.id === _id);

    setCartProducts((previousState) => {
      let preStarte = [...previousState];

      preStarte.push({
        id: _id,
        title: prd.title,
        price: prd.price * _qt,
        qt: _qt,
      });

      return preStarte;
    });

    setCartTotal((prevTotal) => {
      return prevTotal + prd.price * _qt;
    });
  }

  // add to cart or update cart items======
  // --------------------------------------
  function updateCartItem(_id, _qt) {
    let prd_price = 0;

    // update cart item
    setCartProducts((previousState) => {
      const updatedItems = [...previousState];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === _id
      );
      const targetItem = { ...updatedItems[updatedItemIndex] };

      targetItem.qt += _qt;
      prd_price = targetItem.price;

      if (targetItem.qt <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = targetItem;
      }

      return updatedItems;
    });

    //  update total
    setCartTotal((prevTotal) => {
      let totalP = 0;
      if (_qt > 0) {
        totalP = prevTotal + prd_price;
      } else {
        totalP = prevTotal - prd_price;
      }
      return totalP;
    });
  }

  // Cart Modal show hide======
  // --------------------------------------
  function modalTogglae() {
    // console.log(isModalOpen);
    if (isModalOpen) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }
  }

  // Context default value======
  // --------------------------------------
  const defaulsValue = {
    cartItems: cartProducts,
    total: cartTotal,
    modalAppear: isModalOpen,
    addToCart: addToCart,
    updateCart: updateCartItem,
    modelShowHide: modalTogglae,
  };

  return (
    <CartContext.Provider value={defaulsValue}>{children}</CartContext.Provider>
  );
}
