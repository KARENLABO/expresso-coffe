import { capitalizeFirstLetter, transformData } from "../../../../Helpers";
import ProductSize from "../ProductSize";
import "./styles.scss";

function Table({ products }) {
  // Transform drink names before displaying them
  const transformedProducts = transformData(
    products,
    "drink_name", // The field to check
    "supermochacrapucaramelcream", // The value to transform
    "Mocha caramel cream" // The expected value
  );

  return (
    <div className="menu-table">
      {transformedProducts ? ( // Conditionally render only when 'loading' is false and 'products' is not null or undefined.
        <div className="menu-container-products">
          {/* Map over the 'transformedProducts' array. */}
          {transformedProducts.map((product) => {
            const { drink_name, prices } = product;
            const pricesArray = Object.entries(prices); // Convert 'prices' object into an array of key-value pairs to be able to iterate after.

            return (
              <div className="product-container" key={drink_name}>
                <h3 className="menu-product-title">
                  {capitalizeFirstLetter(drink_name)}
                </h3>

                {/* Map over the 'prices' array. */}
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
