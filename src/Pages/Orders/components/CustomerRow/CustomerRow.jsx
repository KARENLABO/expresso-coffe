import React from "react";
import { capitalizeFirstLetter } from "../../../../Helpers";
import { ChevronUp, ChevronDown } from "../../../../Assets";
import OrderDetailsRow from "../OrderDetailsRow";

import "./styles.scss";

function CustomerRow({ userOrder, idx, expandedRowIndex, toggleDetails }) {
  const { user, orders, total } = userOrder;
  return (
    <React.Fragment>
      <tr className="customer-row-container">
        <td className="customer-name">
          {capitalizeFirstLetter(user).toUpperCase()}
        </td>
        <td className="order-qty">{orders.length}</td>
        <td>
          {[
            ...new Set(
              orders.map((order) => capitalizeFirstLetter(order.drink))
            ),
          ].join(", ")}
        </td>
        <td>
          {[
            ...new Set(
              orders.map((order) => capitalizeFirstLetter(order.size))
            ),
          ].join(", ")}
        </td>
        <td className="total-cost">${total.toFixed(2)}</td>
        <td className="container-chevron">
          <img
            onClick={() => toggleDetails(idx)}
            src={!expandedRowIndex ? ChevronUp : ChevronDown}
            className="img-chevron"
            alt={`Chevron${expandedRowIndex ? "Up" : "Down"}`}
          />
        </td>
      </tr>
      {expandedRowIndex === idx && (
        <OrderDetailsRow userOrder={userOrder} idx={idx} />
      )}
    </React.Fragment>
  );
}

export default CustomerRow;
