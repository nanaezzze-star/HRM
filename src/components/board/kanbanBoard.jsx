import { useUsers } from "../../store/api";
import KanbanColumn from "./kanbanColumn";
import { DEALS_STATUS } from "../../constants/kanbanConfig";
import { totalAmount, weightedAmount } from "../../utils/kanbanUtils";
import * as styles from "./kanban.module.css";

export default function KanbanBoard() {
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
        <div>
        <div className={styles.deals}>
                <span className={styles.dealsTitle}>Deals</span>


                <div className={styles.summaryItem}>
                    <span>Total Weighted Pipeline</span>
                    <span className={styles.summaryValue}>$822,001</span>
                </div>
                

                <div className={styles.summaryItem}>
                    <span>Total Pipeline</span>
                    <span className={styles.summaryValue}>$2,796,756</span>
                </div>

                <div className={styles.summaryItem}>
                    <span className={styles.summaryLabelGreen}>Deals Won</span>
                    <span className={styles.summaryValueGreen}>$60,000</span>
                </div>


                <div className={styles.summaryItem}>
                    <span className={styles.summaryLabelRed}>Deals Lost</span>
                    <span className={styles.summaryValueRed}>$60,000</span>
                </div>
            </div>
        <div className={styles.kanbanContainer}>
            {DEALS_STATUS.map((status)=>(
            <KanbanColumn 
            key={status.id} 
            status={status} 
            allUsers={data?.users}
            />
        ))}

        </div>
        </div>



    )
}