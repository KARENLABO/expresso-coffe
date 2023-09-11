import React, { useState, useEffect } from "react";

import { paginateArray, calculatePages } from "../../../../Helpers";
import { Pagination } from "../../../../Components";
import CustomerRow from "../CustomerRow";

import "./styles.scss";

function SummaryTable({ data, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedRowIndex, setExpandedRowIndex] = useState(-1);
  const [currentBalancePage, setCurrentBalancePage] = useState(null);

  useEffect(() => {
    const currentOrders = paginateArray(data, itemsPerPage, currentPage);
    setCurrentBalancePage(currentOrders);
  }, [currentPage, data, itemsPerPage]);

  const totalPages = calculatePages(data, itemsPerPage);

  const toggleDetails = (idx) => {
    setExpandedRowIndex(expandedRowIndex === idx ? -1 : idx);
  };

  return (
    <div className="summary-table">
      <table>
        <thead>
          <tr className="table-titles">
            <th className="customer">Customer</th>
            <th className="total-order">Total Order</th>
            <th className="total-payment">Total Payment</th>
            <th className="Balance">Balance</th>
            <th className="status">Status</th>
            <th className="order-detail">Order Datail</th>
          </tr>
        </thead>
        <tbody>
          {currentBalancePage?.map((userBalance, idx) => (
            <CustomerRow
              key={idx}
              data={userBalance}
              idx={idx}
              expandedRowIndex={expandedRowIndex}
              toggleDetails={toggleDetails}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        data={data}
        pages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default SummaryTable;
