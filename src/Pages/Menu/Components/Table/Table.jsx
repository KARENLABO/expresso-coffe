import { capitalizeFirstLetter } from "../../../../Helpers";
import ProductSize from "../ProductSize";
import "./styles.scss";

function Table({ products }) {
  return (
    <div className="menu-table">
      {products ? ( // Conditionally render only when 'loading' is false and 'products' is not null or undefined.
        <div className="menu-container-products">
          {/* Map over the 'products' array.*/}
          {products.map((product) => {
            const { drink_name, prices } = product;
            const pricesArray = Object.entries(prices); // Convert 'prices' object into an array of key-value pairs to be able to iterate after.

            return (
              <div className="product-container" key={drink_name}>
                <h3 className="menu-product-title">
                  {drink_name === "supermochacrapucaramelcream"
                    ? " Mocha caramel cream"
                    : capitalizeFirstLetter(drink_name)}
                </h3>

                {/* Map over the 'prices' array.*/}
                {pricesArray.map(([sizeName, price]) => (
                  <ProductSize
                    key={sizeName}
                    sizeName={capitalizeFirstLetter(sizeName)}
                    price={price}
                  />
                ))}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default Table;
