import React from "react";
import { capitalizeFirstLetter } from "../../../../Helpers";
import { ChevronUp, ChevronDown } from "../../../../Assets";
import OrderDetailsRow from "../OrderDetailsRow";

import "./styles.scss";

function CustomerRow({ data, idx, expandedRowIndex, toggleDetails }) {
  const { user, totalAmount, total: totalProducts } = data;
  const totalBalance = totalProducts - totalAmount.toFixed(2);
  const leftover = totalBalance < 0;

  return (
    <React.Fragment>
      <tr className="customer-row-container">
        <td className="customer-name">
          {capitalizeFirstLetter(user).toUpperCase()}
        </td>
        <td className="total">${totalProducts.toFixed(2)}</td>
        <td className="total">${totalAmount.toFixed(2)}</td>
        <td className="balance-status">${totalBalance.toFixed(2)}</td>
        <td className={`${leftover ? "leftover" : "owes"}`}>
          {`${leftover ? "Leftover" : "Owes"}`}
        </td>
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
        <OrderDetailsRow userOrder={data} idx={idx} />
      )}
    </React.Fragment>
  );
}

export default CustomerRow;
