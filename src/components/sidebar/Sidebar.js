import { NavLink, useLocation } from "react-router-dom";
import StaticIcon from "../UI/icons/StatisticIcon";
import GroupIcon from "../UI/icons/GroupIcon";
import UserIcon from "../UI/icons/UserIcon";
import CaseIcon from "../UI/icons/CaseIcon";
import SidebarMailIcon from "../UI/icons/SidebarMailIcon";
import PigIcon from "../UI/icons/PigIcon";
import CalendarIcon from "../UI/icons/CalendarIcon";
import DiagramIcon from "../UI/icons/DiagramIcon";
import SettingIcon from "../UI/icons/SettingIcon";
import * as styles from "./sidebar.module.css";

export default function Aside({ open, onClose }) {
  const location = useLocation();
  const isUserActive = location.pathname.startsWith("/user");

  return (
    <>
      {open && <div className={styles.backdrop} onClick={onClose} />}

      <aside className={`${styles.sidebar} ${open ? styles.sidebarOpen : ""}`}>
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
                className={`${styles.navItem} ${isUserActive ? styles.active : ""}`}
                aria-label="User's page"
              >
                <UserIcon />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/list"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navItem} ${styles.active}`
                    : styles.navItem
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
                  isActive
                    ? `${styles.navItem} ${styles.active}`
                    : styles.navItem
                }
                aria-label="Kanban board"
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
    </>
  );
}
