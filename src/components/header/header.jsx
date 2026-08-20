import AddIcon from "../UI/icons/AddIcon";
import GiftIcon from "../UI/icons/giftIcon";
import MailIcon from "../UI/icons/mailIcon";
import NotificationIcon from "../UI/icons/notificationIcon";
import SearchIcon from "../UI/icons/searchIcon";
import * as styles from "./header.module.css";

export default function Header (){
    return(
    <header className={styles.header}>
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