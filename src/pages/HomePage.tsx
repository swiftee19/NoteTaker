import Sidebar from "../components/Sidebar.tsx";
import NoteSection from "../components/NoteSection.tsx";
import {useParams} from "react-router-dom";
import {NoteController} from "../controllers/noteController.ts";
import {useEffect, useState} from "react";
import {Note} from "../helper/note.ts";
import {UserService} from "../services/userService.ts";
import {useAuth} from "../auth/AuthProvider.tsx";
import {User} from "../helper/user.ts";

function HomePage() {
    const [userNotes, setUserNotes] = useState<Note[]>([])

    const userService: UserService = new UserService();
    const params = useParams()
    const noteId = params.noteId
    const noteController: NoteController = new NoteController()

    const authContext = useAuth();
    const user: User = authContext.user;

    const fetchNotes = () => {
        const notes = userService.getUserNotes(user.id);
        if (notes !== null) {
            setUserNotes(() => notes);
        } else {
            setUserNotes(() => []);
        }
    }


    useEffect(() => {
        fetchNotes()
    }, []);

    return (
        <>
            <div className={"w-screen h-screen bg-primary flex flex-row"}>
                <Sidebar userNotes={userNotes} authContext={authContext} fetchNote={fetchNotes}/>
                {
                    noteId === undefined ?
                        <div className={"w-full h-full bg-primary flex flex-row items-center justify-center"}>
                            <h1 className={"h1 text-quinary"}>Select a note to view or create a new note</h1>
                        </div>
                        :
                        <NoteSection noteId={noteId} noteController={noteController} fetchNotes={fetchNotes}
                                     userId={user.id}/>
                }
            </div>
        </>
    )
}

export default HomePage