import { useNavigate } from "react-router-dom";
import { useUsers } from "../../store/api";
import { useSelector,  useDispatch } from "react-redux";
import { changeCheckbox } from "../../store/kanbanSlice";
import ResumeIcon from "../UI/icons/resumeIcon";

const formatDate = (dateString) => {
  if (!dateString) return "Not Available";
  
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export default function UsersList(){

    const dispatch = useDispatch();
    const selectedUID = useSelector((state) => state.kanban.selectedUID);

    const navigate = useNavigate();
    const { 
        data, 
        isLoading, 
        error
    } = useUsers();

    if(isLoading) {
        return(
            <div>
                <p>Loading</p>
            </div>
        )
    }

    if(error){
        return(
            <div>
                <p>Error</p>
            </div>
        )
    }
    return(
        <table>
            <thead>
                <tr>
                    <th> <input type = 'checkbox'/>ID </th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Title</th>
                    <th>Resume</th>
                    <th>Owner</th>
                    <th>Source</th>
                    <th>Profile request</th>
                    <th>Profile update</th>
                </tr>
            </thead>
            <tbody>
                {data?.users?.map((user)=>(
                    <tr 
                    key={user.id} 
                    onClick={() => navigate(`/user/${user.id}`)}
                    >
                        <td onClick={(e) => e.stopPropagation()}>
                            <input type = 'checkbox'
                            checked={selectedUID.includes(user.id)}
                            onChange={() => dispatch(changeCheckbox(user.id))}
                        />{" "} {user.id}
                        </td>
                        <td>{user.firstName} {user.lastName} </td>
                        <td>{user.address?.city}</td>
                        <td>{user.company?.title}</td>
                        <td> <ResumeIcon /> </td>
                        <td>{user.company?.state}</td>
                        <td>Not Avaiable</td>
                        <td>{formatDate(user.birthDate)}</td>
                        <td>Not Available</td>
                    </tr>



                ) )}

            </tbody>
        </table>
        
    )

}
