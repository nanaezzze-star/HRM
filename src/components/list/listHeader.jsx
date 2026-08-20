import { useSelector } from "react-redux";
import SquareIcon from "../UI/icons/squareIcon"
import SearchIcon from "../UI/icons/searchIcon"


export default function ListHeader(){
    const currentPage = useSelector((state) => state.pagination.currentPage);
    return(
        <header>
            <SquareIcon />
            <p>Candidate list</p>
            <p>Page {currentPage}</p>
            <select>
                <option value="" hidden>
                 Add to Project
                </option>
                <option>Swiggy</option>
                <option>LuxApp CRM</option>
                <option>Recruit App-mo</option>
                <option> Recruit LuxApp</option>
                <option>EY</option>
                <option>Zapier</option>
                <option>Recruit CRM</option>
            </select>
            <button> Send via Slack </button>
            <SearchIcon/>
                    <input 
                    type="search" 
                    id = "search"
                    placeholder="Advanced search"
                    title = "Advanced search"/>
            
        </header>


    )
}