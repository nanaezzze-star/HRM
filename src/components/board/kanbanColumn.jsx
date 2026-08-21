import { totalAmount, weightedAmount } from "../../utils/kanbanUtils";
import { useSelector} from "react-redux";
import { useDroppable } from "@dnd-kit/core";
import KanbanCard from "./kanbanCard";
import * as styles from "./kanban.module.css";

export default function KanbanColumn({status}){


    const allUsers = useSelector((state) => state.kanban.users);
    const columnUsers = allUsers?.filter(
        (user) => user.statusId === status.id
    );

    const total = totalAmount(columnUsers);
    const weighted = weightedAmount(total, status?.success);

    const { setNodeRef } = useDroppable({
        id: status.id,
    });

    return(
        <div ref={setNodeRef} className={styles.columnWrapper}>
        <div className={styles.column}>
        <label className={styles.columnHeader}>
            <input type="checkbox" 
            aria-label={`Select deal: ${status.title}`}/>
            <span>{status.title}</span>
            </label>

        <div className={styles.cardsList}>
    {columnUsers?.map((user) => (

            <KanbanCard key={user.id} user = {user}/>
    

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