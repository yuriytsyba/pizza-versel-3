import React from 'react';
import styles from './Pagination.module.css';
import ReactPaginate from 'react-paginate';

type PaginationProps = {
  onChangePage: (page: number) => void;
  currentPage: number;
};
const Pagination: React.FC<PaginationProps> = ({ onChangePage, currentPage }) => {
  return (
    <div className={styles.root}>
      <ReactPaginate
        breakLabel='...'
        nextLabel='>'
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
        previousLabel='<'
      />
    </div>
  );
};

export default Pagination;
