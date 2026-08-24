import { useParams } from "react-router-dom";
import { useUserById } from "../../store/api";
import Map from "./map";
import * as styles from "./userRpofile.module.css";

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
        <div className={styles.container}>
            <div className={styles.userCard}>
                <img 
                    src={data?.image} 
                    alt="User avatar" 
                    className={styles.avatar}
                />
                <h2 className={styles.name}>{data?.firstName} {data?.lastName}</h2>
                <p className={styles.title}>{data?.company?.title || "No Title"}</p>
                <span className={styles.cityBadge}>{data?.address?.city || "Not available"}</span>
            </div>

            <Map 
                lat={data?.address?.coordinates?.lat} 
                lng={data?.address?.coordinates?.lng}
            />
        </div>

)}