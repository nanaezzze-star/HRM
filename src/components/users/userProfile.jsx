import { useParams } from "react-router-dom";
import { useUserById } from "../../store/api";
import Map from "./map";
import UsersList from "../list/userList";

export default function Profile () {
    const {id} = useParams()
    const{
        data,
        isLoading,
        error
    } = useUserById(id)

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
        <>
         <img src = {data?.image}  alt = 'User avatar'/>
         <div> {data?.firstName} {data?.lastName} </div>
         <div>{data?.company?.title}</div>
         <div>{data?.address?.city}</div>             
         <Map 
            lat={data?.address?.coordinates?.lat} 
            lng={data?.address?.coordinates?.lng}/>

        </>

</>
)}