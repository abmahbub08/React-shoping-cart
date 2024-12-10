import Product from "./components/Product";
import { PRODUCTS } from "./Products";

export default function ProductBox() {
  return (
    <div className="product-container">
      {PRODUCTS.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}
