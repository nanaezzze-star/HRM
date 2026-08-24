import { useDispatch, useSelector } from "react-redux";
import { useDraggable } from "@dnd-kit/core";
import { changeCheckbox } from "../../store/kanbanSlice";
import BoardUserIcon from "../UI/icons/boardUserIcon";
import * as styles from "./kanban.module.css";

export default function KanbanCard({user}){
    const dispatch = useDispatch();

    const selectedUID = useSelector((state) => state.kanban.selectedUID);
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: user.id,
    });
    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        zIndex: isDragging ? 9999 : 'auto', 
        position: isDragging ? 'relative' : undefined, 
    };

    return(
        <div 
            ref={setNodeRef} 
            style={style} 
            {...listeners} 
            {...attributes} 
            className={styles.card}>
            
            <input 
            type="checkbox" 
            checked={selectedUID.includes(user.id)}
            onChange={() => dispatch(changeCheckbox(user.id))}
            onPointerDown={(e) => e.stopPropagation()} 
            onClick={(e) => e.stopPropagation()}
    
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
    )
}