import Header from "../components/header/header";
import UsersList from "../components/list/userList";
import Aside from "../components/sidebar/sidebar";

export default function List(){
    return(
        <>
        <Header />
        <Aside />
        <UsersList/>
        </>
    )
}