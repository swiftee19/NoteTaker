import {useEffect, useState} from "react";
import {Note} from "../helper/note.ts";
import {NoteController} from "../controllers/noteController.ts";
import {useNavigate} from "react-router-dom";

function NoteSection({noteId, noteController, fetchNotes}: {
    noteId: string | undefined,
    noteController: NoteController,
    fetchNotes: () => void
}) {
    const [noteTitle, setNoteTitle] = useState<string>("")
    const [noteContent, setNoteContent] = useState<string>("")
    const navigate = useNavigate();

    useEffect(() => {
        if (noteId !== undefined) {
            const note: Note | null = noteController.getNoteById(noteId)
            if (note !== null) {
                setNoteTitle(() => note.title)
                setNoteContent(() => note.content)
            }
        }
    }, [])

    const deleteNote = () => {
        if (noteId === undefined) return
        noteController.deleteNote(noteId)
        fetchNotes()
        navigate(`/home`)
    }

    return (
        <>
            {noteId === undefined ?
                <div className={"w-full h-full bg-primary flex flex-row items-center justify-center"}>
                    <h1 className={"h1 text-quinary"}>Select a note to view or create a new note</h1>
                </div>
                :
                <div className={"w-full h-full bg-primary p-16 flex flex-col gap-4 relative"}>
                    <input placeholder={"Untitled..."} type='text' value={noteTitle}
                           className={"h1 bg-primary border-none focus:outline-none"} onChange={(e) => {
                        setNoteTitle(() => e.target.value)
                    }}/>
                    <textarea placeholder={"Empty note"} value={noteContent}
                              className={"p bg-primary border-none focus:outline-none w-full min-h-full py-8"}
                              onChange={(e) => {
                                  setNoteContent(() => e.target.value)
                              }}/>
                    <button className={"delete-note-button"} onClick={() => {
                        deleteNote()
                    }}><img src="/src/assets/bin_icon.svg" className={"h-6"}/></button>
                </div>
            }
        </>
    )
}

export default NoteSection;