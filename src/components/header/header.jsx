import AddIcon from "../UI/icons/AddIcon"
import GiftIcon from "../UI/icons/giftIcon"
import MailIcon from "../UI/icons/mailIcon"
import NotificationIcon from "../UI/icons/notificationIcon"
import SearchIcon from "../UI/icons/searchIcon"

export default function Header (){
    return(
    <header>
        <SearchIcon/>
        <input 
        type="search" 
        id = "search"
        placeholder="Search by name, job, email & Linkedin URL"
        title = "Search bar"/>

        <p>CRM Recruit </p>


        <div>
            <AddIcon />
            <svg width="1" height="36" viewBox="0 0 1 36">
                <line x1="0.5" y1="0" x2="0.5" y2="36" stroke="currentColor" strokeWidth="1" />
            </svg>
            <GiftIcon />
            <MailIcon />
            <NotificationIcon />

        </div>
    </header>
    )
}