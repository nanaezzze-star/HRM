import { totalAmount, weightedAmount } from "../../utils/kanbanUtils";

    const formatDate = (dateString) => {
  if (!dateString) return "Not Available";
  
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export default function KanbanColumn({status, allUsers}){
    const columnUsers = allUsers?.filter(
        (user) => status.group?.includes(user.bloodGroup)
    )

    const total = totalAmount(columnUsers);
    const weighted = weightedAmount(total, status?.success);

    return(
    <>
        <p>{status.title}</p>
            {columnUsers?.map((user) => (
                <div key={user.id}>
                    <input type="checkbox" /> {user.company.title}
                    <p>{user.company.name}</p>
                    <p>$ {user.weight * 1000} </p>
                    <p>Close date: {formatDate(user.birthDate)} </p>
                </div>
            ))}
                <div>Weighted amount {weighted}</div>
                <div>Total amount {total}</div>

    </>
)
}