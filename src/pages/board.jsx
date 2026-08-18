import Header from "../components/header/header";
import KanbanBoard from "../components/board/kanbanBoard";
import Aside from "../components/sidebar/sidebar";

export default function Board(){
    return(
        <>
        <Header />
        <Aside />
        <KanbanBoard />
        </>
    )

}

