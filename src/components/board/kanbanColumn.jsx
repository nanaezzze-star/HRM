import { totalAmount, weightedAmount } from "../../utils/kanbanUtils";
import { useSelector,  useDispatch } from "react-redux";
import { changeCheckbox } from "../../store/kanbanSlice";
import BoardUserIcon from "../UI/icons/boardUserIcon";

export default function KanbanColumn({status, allUsers}){
    const columnUsers = allUsers?.filter(
        (user) => status.group?.includes(user.bloodGroup)
    )

    const total = totalAmount(columnUsers);
    const weighted = weightedAmount(total, status?.success);

    const dispatch = useDispatch();//send action to store
    const selectedUID = useSelector((state) => state.kanban.selectedUID);

    return(
    <>
        <p>{status.title}</p>
            {columnUsers?.map((user) => (
                <div key={user.id}>
                    <input type="checkbox" 
                     checked={selectedUID.includes(user.id)}
                     onChange={() => dispatch(changeCheckbox(user.id))}
                    />{" "} {user.company.title}
                    <p>{user.company.name}</p>
                    <p>$ {user.weight * 1000} </p>
                    <p>Close date: Oct 26, 2021 </p>
                    <BoardUserIcon />
                </div>
            ))}
                <div>Weighted amount {weighted}</div>
                <div>Total amount {total}</div>

    </>
)
}