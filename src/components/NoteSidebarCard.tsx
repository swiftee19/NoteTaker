import {useNavigate} from "react-router-dom";

function NoteSidebarCard({noteId, noteTitle}: { noteId: string, noteTitle: string }) {
    const navigate = useNavigate();
    const openNote = () => {
        navigate(`/home/${noteId}`)
    }

    return (
        <>
            <button className={"note-sidebar-card"} onClick={()=>{openNote()}}>
                <h3 className={"font-medium text-lg w-full text-left"}>{noteTitle}</h3>
            </button>
        </>
    )
}

export default NoteSidebarCard;