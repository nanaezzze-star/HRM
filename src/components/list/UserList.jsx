import { useNavigate } from "react-router-dom";
import { useUsers } from "../../store/api";
import { useSelector, useDispatch } from "react-redux";
import { changeCheckbox } from "../../store/kanbanSlice";
import ResumeIcon from "../UI/icons/ResumeIcon";
import Pagination from "./Pagination";
import * as styles from "./userList.module.css";

const formatDate = (dateString) => {
  if (!dateString) return "Not Available";

  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export default function UsersList() {
  const dispatch = useDispatch();
  const selectedUID = useSelector((state) => state.kanban.selectedUID);
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const pageSize = useSelector((state) => state.pagination.pageSize);

  const navigate = useNavigate();
  const { data: response = [], isLoading, error } = useUsers();

  if (isLoading) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error</p>
      </div>
    );
  }

  const usersList = Array.isArray(response) ? response : response?.users || []; // extract users array or empty array
  const startIndex = (currentPage - 1) * pageSize; // index of the first user on the page
  const paginatedUsers = usersList.slice(startIndex, startIndex + pageSize); // users to display on the current page

  return (
    <div className={styles.container}>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th>
                <input type="checkbox" aria-hidden="true" tabIndex="-1" />
              </th>
              <th>ID</th>
              <th>Name</th>
              <th>City</th>
              <th>Title</th>
              <th>Resume</th>
              <th>Owner</th>
              <th>Source</th>
              <th>Profile request</th>
              <th>Profile updated</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {paginatedUsers.map((user) => (
              <tr
                key={user.id}
                onClick={() => navigate(`/user/${user.id}`)}
                className={styles.row}
              >
                <td onClick={(e) => e.stopPropagation()}>
                  <input
                    type="checkbox"
                    checked={selectedUID.includes(user.id)}
                    onChange={() => dispatch(changeCheckbox(user.id))}
                    aria-label={`Select user: ${user.lastName}`}
                  />
                </td>
                <td>{user.id}</td>
                <td className={styles.nameCell}>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.address?.city}</td>
                <td>{user.company?.title}</td>
                <td>
                  <ResumeIcon />
                </td>
                <td>{user.company?.state || "Shrini"}</td>
                <td>Not Available</td>
                <td>{formatDate(user.birthDate)}</td>
                <td>Not Available</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.paginationContainer}>
        <Pagination totalItems={usersList.length} />
      </div>
    </div>
  );
}
