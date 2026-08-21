import { useUsers } from "../../store/api";
import { setUsers } from "../../store/kanbanSlice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { DEALS_STATUS } from "../../constants/kanbanConfig";
import { moveUser } from "../../store/kanbanSlice";
import KanbanColumn from "./kanbanColumn";
import KanbanCard from "./kanbanCard";
import * as styles from "./kanban.module.css";

export default function KanbanBoard() {
    const dispatch = useDispatch();

    const [activeUser, setActiveUser] = useState(null);
    const allUsers = useSelector((state) => state.kanban.users)

    const { 
            data, 
            isLoading, 
            error
        } = useUsers();

        useEffect(() => {
        if (data?.users) {
            dispatch(setUsers(data.users));
        }
        }, [data]);

    const handleDragStart = (event) => {
        const user = allUsers.find((u) => u.id === event.active.id);
        setActiveUser(user);
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;
        setActiveUser(null);

        if (!over) return;

        dispatch(moveUser({ 
            userId: active.id, 
            newStatusId: over.id 
        }));
    };

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
            <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className={styles.kanbanContainer}>
            {DEALS_STATUS.map((status)=>(
            <KanbanColumn 
            key={status.id} 
            status={status} 
            allUsers={data?.users}
            />
        ))}

        </div>
        <DragOverlay>
                    {activeUser ? <KanbanCard user={activeUser} /> : null}
        </DragOverlay>
        </DndContext>
        </div>



    )
}