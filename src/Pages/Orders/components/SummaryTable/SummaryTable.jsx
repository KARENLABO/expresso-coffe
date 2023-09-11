import React, { useState, useEffect } from "react";

import { paginateArray, calculatePages } from "../../../../Helpers";
import { Pagination } from "../../../../Components";
import CustomerRow from "../CustomerRow";

import "./styles.scss";

function SummaryTable({ usersOrders, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedRowIndex, setExpandedRowIndex] = useState(-1);
  const [currentOrdersPage, setCurrentOrdersPage] = useState(null);

  useEffect(() => {
    const currentOrders = paginateArray(usersOrders, itemsPerPage, currentPage);
    setCurrentOrdersPage(currentOrders);
  }, [currentPage, usersOrders, itemsPerPage]);

  const totalPages = calculatePages(usersOrders, itemsPerPage);

  const toggleDetails = (idx) => {
    setExpandedRowIndex(expandedRowIndex === idx ? -1 : idx);
  };

  return (
    <div className="summary-table">
      <table>
        <thead>
          <tr className="table-titles">
            <th className="customer">Customer</th>
            <th className="qty">Qty</th>
            <th className="drink">Drink</th>
            <th className="size">Size</th>
            <th>Total</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {currentOrdersPage?.map((userOrder, idx) => (
            <CustomerRow
              key={idx}
              userOrder={userOrder}
              idx={idx}
              expandedRowIndex={expandedRowIndex}
              toggleDetails={toggleDetails}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        data={usersOrders}
        pages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default SummaryTable;
