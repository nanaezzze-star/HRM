import AddIcon from "../UI/icons/AddIcon";
import GiftIcon from "../UI/icons/giftIcon";
import MailIcon from "../UI/icons/mailIcon";
import NotificationIcon from "../UI/icons/notificationIcon";
import SearchIcon from "../UI/icons/searchIcon";
import * as styles from "./header.module.css";

export default function Header ({ onMenu }){
    return(
    <header className={styles.header}>
        <button className={styles.burgerBtn} onClick={onMenu} aria-label="Open menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
        <div className={styles.searchWrapper}>
            <span className={styles.searchIcon}>
            <SearchIcon />
        </span>
            <input 
            type="search" 
            id = "search"
            placeholder="Search by name, job, email & Linkedin URL"
            title = "Search bar"
            className={styles.searchBar}/>
        </div>

        <p className={styles.title}>CRM Recruit </p>


        <div className={styles.icons}>
            <AddIcon className = {styles.addIcon}/>
            <svg className={styles.line} width="1" height="36" viewBox="0 0 1 36">
                <line x1="0.5" y1="0" x2="0.5" y2="36" stroke="currentColor" strokeWidth="1" />
            </svg>
            <span className = {styles.giftIcon}>
                <GiftIcon />
            </span>
            <span className = {styles.mailIcon}><MailIcon /></span>
            <span className = {styles.notificationIcon}><NotificationIcon /></span>
        </div>
    </header>
    )
}