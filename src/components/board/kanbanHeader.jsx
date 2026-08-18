import SquareIcon from "../UI/icons/squareIcon"
import SearchIcon from "../UI/icons/searchIcon"
export default function KanbanHeader(){
    return(
        <header>
            <SquareIcon />
            <p>Candidate list</p>
            <p>Page</p>
            <select>
                <option>Add to Project</option>
                <option>Swiggy</option>
                <option>LuxApp CRM</option>
                <option>Recruit App-mo</option>
                <option> <strong>Recruit LuxApp</strong></option>
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