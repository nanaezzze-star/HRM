import { useUsers } from "../../store/api";
import KanbanColumn from "./kanbanColumn";
import { DEALS_STATUS } from "../../constants/kanbanConfig";

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
        <>
        {DEALS_STATUS.map((status)=>(
            <KanbanColumn 
            key={status.id} 
            status={status} 
            allUsers={data?.users}
            />
        ))}
        </>
    )
}