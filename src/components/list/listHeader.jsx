import { useState } from "react";
import { useSelector } from "react-redux";
import SquareIcon from "../UI/icons/squareIcon"
import SearchIcon from "../UI/icons/searchIcon"
import * as styles from "./listHeader.module.css";


export default function ListHeader(){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const currentPage = useSelector((state) => state.pagination.currentPage);
    return(
        <header className={styles.header}>
    <div className={styles.titleGroup}>
        <SquareIcon />
        <p>Candidate list</p>
        <p className={styles.pageInfo}>Page {currentPage}</p>
    </div>

    <div className={styles.actionsGroup}>
            <div className={styles.dropdownWrapper}>
                <button 
                    type="button" 
                    className={styles.dropdownBtn}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    
                    <span>+ Add candidate</span>
                    <span>⌵</span>
                </button>

                {isDropdownOpen && (
                 <div className={styles.dropdownMenu}>
                <div className={styles.dropdownItem}>Swiggy</div>
                <div className={styles.dropdownItem}>LuxApp CRM</div>
                <div className={styles.dropdownItem}>Recruit App-mo</div>
                <div className={styles.dropdownItem}>Recruit LuxApp</div>
                <div className={styles.dropdownItem}>EY</div>
                <div className={styles.dropdownItem}>Zapier</div>
                <div className={styles.dropdownItem}>Recruit CRM</div>
            </div>
            )}
            </div>
        
        <button className={styles.slackButton}>
            Resume parser
        </button>
        
           <div className={styles.searchWrapper}>
    <SearchIcon /> 
    <input 
        type="search" 
        id="search"
        className={styles.searchInput}
        placeholder="Advanced search"
        title="Advanced search"
    />
</div>
    </div>
</header>

    )
}