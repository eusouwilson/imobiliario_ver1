import React from "react";
interface paginateData {
  itemsPerPage: number;
  totalItems: number;
  paginate(number: number): void;
}

const Pagination: React.FC<paginateData> = ({
  itemsPerPage,
  totalItems,
  paginate,
}) => {
  if (totalItems <= 10) {
    return null;
  }

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
