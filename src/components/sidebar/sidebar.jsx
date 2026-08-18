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

export default function Aside(){
    const location = useLocation();
    const isUserActive = location.pathname.startsWith('/user');

return (
    <aside className="sidebar">
      <nav>
        <ul className="sidebar-menu">
          <li>
            <span className="nav-item">
              <StaticIcon />
            </span>
          </li>
          <li>
            <span className="nav-item">
              <GroupIcon />
            </span>
          </li>
          <li>
            <NavLink 
              to="/user/1" 
              className={`nav-item ${isUserActive ? 'active' : ''}`}
              aria-label="User's page"
            >
              <UserIcon />
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/list" 
              className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
              aria-label="Users list"
            >
              <CaseIcon />
            </NavLink>
          </li>
          <li>
            <span className="nav-item">
              <SidebarMailIcon />
            </span>
          </li>
          <li>
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
              aria-label="Board"
            >
              <PigIcon />
            </NavLink>
          </li>
          <li>
            <span className="nav-item">
              <CalendarIcon />
            </span>
          </li>
          <li>
            <span className="nav-item">
              <DiagramIcon />
            </span>
          </li>
          <li>
            <span className="nav-item">
              <SettingIcon />
            </span>
          </li>
        </ul>
      </nav>
    </aside>
  );
}