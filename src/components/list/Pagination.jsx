import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage, setPageSize } from "../../store/paginationSlice";
import * as styles from "./pagination.module.css";

export default function Pagination({ totalItems }) {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const pageSize = useSelector((state) => state.pagination.pageSize);

  const totalPages = Math.ceil(totalItems / pageSize) || 1;

  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.pagination} aria-label="Pagination Navigation">
      <div className={styles.selectWrapper}>
        <select
          className={styles.select}
          value={pageSize}
          aria-label="Items per page"
          onChange={(e) => dispatch(setPageSize(Number(e.target.value)))}
        >
          <option value={10}>10</option>
          <option value={13}>13</option>
          <option value={20}>20</option>
        </select>
      </div>

      <button
        type="button"
        className={styles.arrowBtn}
        onClick={handlePrev}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        ‹
      </button>

      {pageNumbers.map((page) => (
        <button
          type="button"
          key={page}
          className={`${styles.pageBtn} ${page === currentPage ? styles.active : ""}`}
          onClick={() => dispatch(setCurrentPage(page))}
          aria-label={`Page ${page}`}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        className={styles.arrowBtn}
        onClick={handleNext}
        disabled={currentPage >= totalPages}
        aria-label="Next page"
      >
        ›
      </button>
    </nav>
  );
}
