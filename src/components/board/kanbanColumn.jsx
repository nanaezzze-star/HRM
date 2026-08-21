import { totalAmount, weightedAmount } from "../../utils/kanbanUtils";
import { useSelector,  useDispatch } from "react-redux";
import { changeCheckbox } from "../../store/kanbanSlice";
import BoardUserIcon from "../UI/icons/boardUserIcon";
import * as styles from "./kanban.module.css";

export default function KanbanColumn({status, allUsers}){
    const columnUsers = allUsers?.filter(
        (user) => status.group?.includes(user.bloodGroup)
    )

    const total = totalAmount(columnUsers);
    const weighted = weightedAmount(total, status?.success);

    const dispatch = useDispatch();//send action to store
    const selectedUID = useSelector((state) => state.kanban.selectedUID);

    return(
        <div className={styles.columnWrapper}>
        <div className={styles.column}>
        <label className={styles.columnHeader}>
            <input type="checkbox" 
            aria-label={`Select deal: ${status.title}`}/>
            <span>{status.title}</span>
            </label>

        <div className={styles.cardsList}>
    {columnUsers?.map((user) => (
        <div key={user.id} className={styles.card}>
    

    <input 
        type="checkbox" 
        checked={selectedUID.includes(user.id)}
        onChange={() => dispatch(changeCheckbox(user.id))}
        aria-label={`Select deal for ${user.title || user.name}`}
    />

    <div className={styles.cardBody}>
        <span className={styles.cardTitle}>{user.company.title}</span>
        <p className={styles.cardCompany}>{user.company.name}</p>
        <p className={styles.cardPrice}>$&nbsp;{user.weight * 1000}</p>
        
        <div className={styles.cardFooter}>
            <p className={styles.cardDate}>Close date: <span>Oct 26, 2021</span></p>
            <BoardUserIcon />
                </div>
            </div>
        </div>
            ))}
            </div>
            </div>

                <div className={styles.amount}>
                    <div className={styles.weight}>Weighted amount <span>$&nbsp;{weighted}</span> </div>
                    <div className={styles.total}>Total amount <span>$&nbsp;{total}</span></div>
                </div>
    </div>
)
}