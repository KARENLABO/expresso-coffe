import React, { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "../../Assets";
import Pagination from "../Pagination";
import { paginateArray, capitalizeFirstLetter } from "../../Helpers";
import "./styles.scss";

function Table({ data, columns }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataCurrentPage, setDataCurrentPage] = useState(null);
  const [sortBy, setSortBy] = useState({
    field: "", // Initial field to sort
    ascending: true, // Initial ascending order
  });
  const itemsPerPage = 10;

  useEffect(() => {
    if (sortBy.field === "") {
      // Don't sort if sort field is empty
      setDataCurrentPage(paginateArray(data, itemsPerPage, currentPage));
      return;
    }

    const sortedData = [...data].sort((a, b) => {
      const fieldA = a[sortBy.field];
      const fieldB = b[sortBy.field];

      if (fieldA < fieldB) {
        return sortBy.ascending ? -1 : 1;
      }
      if (fieldA > fieldB) {
        return sortBy.ascending ? 1 : -1;
      }
      return 0;
    });

    setDataCurrentPage(paginateArray(sortedData, itemsPerPage, currentPage));
  }, [currentPage, data, sortBy]);

  const handleSort = (field) => {
    // If the field is the same as the current sort field, reverse the direction.
    const ascending = field === sortBy.field ? !sortBy.ascending : true;
    setSortBy({ field, ascending });
    setCurrentPage(1); // Reset current page when sort column changes
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr className="table-titles">
            {columns.map((column) => (
              <th
                className="title"
                key={column.field}
                onClick={() => handleSort(column.field)}
              >
                {column.title}
                <img
                  src={sortBy.ascending ? ChevronUp : ChevronDown}
                  alt={`Chevron${sortBy.ascending ? "Up" : "Down"}`}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataCurrentPage?.map((item, idx) => (
            <tr key={idx}>
              {columns.map((column) => (
                <td key={column.field}>
                  {column.render
                    ? column.render(capitalizeFirstLetter(item[column.field]))
                    : capitalizeFirstLetter(item[column.field])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-container">
        <Pagination
          orders={data} // Use the original unsorted data for pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default Table;
