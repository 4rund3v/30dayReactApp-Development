import React from "react";
import _, { curry } from "lodash";
import PropTypes from "prop-types";

/*
 Input : pageSize, itemsCount
 Ouput: onPageChange
*/

// Stateless functional components

const Pagination = (props) => {
  const { currentPage, itemsCount, pageSize, onPageChange } = props;
  // console.log(currentPage, itemsCount, pageSize, onPageChange);
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
