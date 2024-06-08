import {useEffect, useState} from "react";
import {getRandomGreetings} from "../helper/greets.ts";
import {User} from "../helper/user.ts";
import {Note} from "../helper/note.ts";
import {NoteController} from "../controllers/noteController.ts";
import {useNavigate} from "react-router-dom";
import NoteSidebarCard from "./NoteSidebarCard.tsx";

function Sidebar({userNotes, authContext, fetchNote}: { userNotes: Note[], authContext: any, fetchNote: () => void }) {
    const [greetings, setGreetings] = useState("")

    const user: User = authContext.user;
    const noteController: NoteController = new NoteController();
    const navigate = useNavigate();

    useEffect(() => {
        setGreetings(() => getRandomGreetings())
    }, []);

    const logout = () => {
        authContext.logout();
    }

    const startNewNote = () => {
        const note: Note = new Note('', user.id);
        noteController.saveNote(note);
        fetchNote();
        navigate(`/home/${note.id}`)
    }

    return (
        <>
            <div className={"relative h-screen w-52 p-4 flex flex-col gap-4 justify-start rounded-r-lg bg-secondary"}>
                <h2 className={"font-bold text-lg text-quinary text-left w-fit"}>{greetings}, {user.name}</h2>
                <button className={"sidebar-button"} onClick={() => startNewNote()}>
                    <img src="/plus_icon.svg" alt={"plus icon"} className={"h-6"}/>
                    <h3 className={"font-medium text-lg w-fit"}>New Note</h3>
                </button>
                <h2 className={"font-bold text-lg text-quinary text-left w-fit"}>Created Notes</h2>
                <div className={"w-full h-[44rem] flex flex-col gap-4 overflow-y-scroll py-4"}>
                    {userNotes.map((note) => {
                        return (
                            <>
                                <NoteSidebarCard noteId={note.id} noteTitle={note.title}/>
                            </>
                        )
                    })
                    }
                </div>
                <button className={"logout-button"} onClick={() => logout()}>
                    <img src="/logout_icon.svg" alt={"plus icon"} className={"h-6"}/>
                    <h3 className={"font-medium text-lg w-fit"}>Logout</h3>
                </button>
            </div>
        </>
    )
}

export default Sidebar;