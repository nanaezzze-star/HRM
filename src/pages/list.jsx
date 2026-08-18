import Header from "../components/header/header";
import UsersList from "../components/list/userList";
import Aside from "../components/sidebar/sidebar";
import ListHeader from "../components/list/listHeader";

export default function List(){
    return(
        <>
        <Header />
        <ListHeader />
        <Aside />
        <UsersList/>
        </>
    )
}