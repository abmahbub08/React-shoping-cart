import AddCartBtn from "./AddCartBtn";

export default function Product({ id, image, title, description, price }) {
  return (
    <>
      <div className="product-details">
        <div className="prd-img">
          <img src={image} alt="Product" />
        </div>
        <div className="prd-text">
          <h2>{title}</h2>
          <p>{description}</p>
          <p className="price-text">
            <strong>Price: </strong>
            <span>${price}</span>
          </p>

          <AddCartBtn itemId={id} />
        </div>
      </div>
    </>
  );
}
