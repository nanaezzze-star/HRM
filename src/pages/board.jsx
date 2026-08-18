import Header from "../components/header/header";
import KanbanBoard from "../components/board/kanbanBoard";
import Aside from "../components/sidebar/sidebar";
import KanbanHeader from "../components/board/kanbanHeader";

export default function Board(){
    return(
        <>
        <Header />
        <KanbanHeader />
        <Aside />
        <KanbanBoard />
        </>
    )

}

