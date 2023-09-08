import "./styles.scss";

function ProductSize({ sizeName, price }) {
  return (
    <div className="product-size-container">
      <p className="menu-size-name"> {sizeName}</p>
      <p className="menu-price">{`$ ${price.toFixed(2)}`}</p>
    </div>
  );
}

export default ProductSize;
