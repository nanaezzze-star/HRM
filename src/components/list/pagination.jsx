import { useSelector,  useDispatch } from "react-redux";
import { setCurrentPage, setPageSize } from "../../store/paginationSlice";

export default function Pagination({totalItems}){
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
    };

    return(
        <nav className="pagination">
        <select 
        value={pageSize} 
        onChange={(e) => dispatch(setPageSize(Number(e.target.value)))}
        >
        <option value={10}>10</option>
        <option value={13}>13</option>
        <option value={20}>20</option>
        </select>


        <button onClick={handlePrev} disabled={currentPage === 1}>
        &lt;
        </button>

 
        {pageNumbers.map((page) => (
         <button
        key={page}
        className={page === currentPage ? "page-btn active" : "page-btn"}
        onClick={() => dispatch(setCurrentPage(page))}
        >
        {page}
         </button>
        ))}

 
        <button onClick={handleNext} disabled={currentPage >= totalPages}>
        &gt;
        </button>
        </nav>
    )
}