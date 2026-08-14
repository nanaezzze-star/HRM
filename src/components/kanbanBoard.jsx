import { useUsers } from "../store/api";

const formatDate = (dateString) => {
  if (!dateString) return "Not Available";
  
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

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
        {data?.users?.map((user)=>(
             <div>
                <input type = "checkbox" /> {user.company.title}
                <p>{user.company.name}</p>
                <p>$ {user.weight * 1000} </p>
                <p>Close date: {formatDate(user.birthDate)} </p>
             </div>

        ))}
        </>
    )
}