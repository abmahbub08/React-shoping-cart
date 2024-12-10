import CartContextProvider from "./CartContextProvider";
import CartModal from "./components/CartModal";
import Header from "./Header";
import ProductBox from "./ProductBox";
import "./styles.css";

export default function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <CartModal />
        <Header />
        <ProductBox />
      </div>
    </CartContextProvider>
  );
}
