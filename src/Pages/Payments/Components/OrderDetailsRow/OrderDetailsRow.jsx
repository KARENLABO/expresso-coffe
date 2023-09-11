import React from "react";
import { capitalizeFirstLetter } from "../../../../Helpers";

import "./styles.scss";

function OrderDetailsRow({ userOrder, idx }) {
  const { orders } = userOrder;
  return (
    <>
      {Object.values(
        orders.reduce((acc, order) => {
          const key = `${order.drink}-${order.size}`;
          if (key in acc) {
            acc[key].qty += 1;
            acc[key].total += parseFloat(order.price);
          } else {
            acc[key] = {
              drink: capitalizeFirstLetter(order.drink),
              size: capitalizeFirstLetter(order.size),
              qty: 1,
              total: parseFloat(order.price),
            };
          }
          return acc;
        }, {})
      )
        .sort((a, b) => a.drink.localeCompare(b.drink)) // Ordenar por el nombre de la bebida
        .map((groupedOrder, orderIdx) => (
          <tr
            key={`detail-${idx}-${orderIdx}`}
            className="order-detail-container"
          >
            <td className="empty-td"></td>
            <td className="qty-td">{groupedOrder.qty}</td>
            {/* Display the drink and size details */}
            <td>{groupedOrder.drink}</td>
            <td>{groupedOrder.size}</td>
            {/* Display the total price for this group */}
            <td className="total-td">${groupedOrder.total.toFixed(2)}</td>
            <td className="empty-td"></td>
          </tr>
        ))}
    </>
  );
}

export default OrderDetailsRow;
