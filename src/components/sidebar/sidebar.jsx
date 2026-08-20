import { NavLink, useLocation } from 'react-router-dom'
import StaticIcon from "../UI/icons/statisticIcon"
import GroupIcon from "../UI/icons/groupIcon"
import UserIcon from "../UI/icons/userIcon"
import CaseIcon from "../UI/icons/caseIcon"
import SidebarMailIcon from "../UI/icons/sidebarMailIcon"
import PigIcon from "../UI/icons/pigIcon"
import CalendarIcon from "../UI/icons/calendarIcon"
import DiagramIcon from "../UI/icons/diagramIcon"
import SettingIcon from "../UI/icons/settingIcon"
import * as styles from "./sidebar.module.css"
export default function Aside(){
    const location = useLocation();
    const isUserActive = location.pathname.startsWith('/user');

return (
    <aside className={styles.sidebar}>
      <nav>
        <ul className={styles.sidebarMenu}>
          <li>
            <span className={styles.navItem}>
              <StaticIcon />
            </span>
          </li>
          <li>
            <span className={styles.navItem}>
              <GroupIcon />
            </span>
          </li>
          <li>
            <NavLink 
              to="/user/1" 
              className={`${styles.navItem} ${isUserActive ? styles.active : ''}`}
              aria-label="User's page"
            >
              <UserIcon />
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/list" 
              className={({ isActive }) => 
                isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
              }
              aria-label="Users list"
            >
              <CaseIcon />
            </NavLink>
          </li>
          <li>
            <span className={styles.navItem}>
              <SidebarMailIcon />
            </span>
          </li>
          <li>
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => 
              isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
              }
            >
              <PigIcon />
            </NavLink>
          </li>
          <li>
            <span className={styles.navItem}>
              <CalendarIcon />
            </span>
          </li>
          <li className={styles.bottomGroup}>
            <span className={styles.navItem}>
              <DiagramIcon />
            </span>
          </li>
          <li>
            <span className={styles.navItem}>
              <SettingIcon />
            </span>
          </li>
        </ul>
      </nav>
    </aside>
  );
}