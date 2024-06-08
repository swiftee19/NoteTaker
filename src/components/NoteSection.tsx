import {useEffect, useState} from "react";
import {Note} from "../helper/note.ts";
import {NoteController} from "../controllers/noteController.ts";
import {useNavigate} from "react-router-dom";

function NoteSection({noteId, noteController, fetchNotes, userId}: {
    noteId: string,
    noteController: NoteController,
    fetchNotes: () => void,
    userId: string
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
    }, [noteId]);

    useEffect(() => {
        let currentNoteContent = noteContent;
        let currentNoteTitle = noteTitle;

        // make currentNoteContent safe for JSON.parse
        if (currentNoteContent.includes("|")) {
            currentNoteContent = currentNoteContent.replace(/\|/g, " ");
        }
        if (currentNoteTitle.includes("|")) {
            currentNoteTitle = currentNoteTitle.replace(/\|/g, " ");
        }
        if (currentNoteContent.includes(";")) {
            currentNoteContent = currentNoteContent.replace(";", " ");
        }
        if (currentNoteTitle.includes(";")) {
            currentNoteTitle = currentNoteTitle.replace(";", " ");
        }

        console.log(currentNoteContent)
        console.log(currentNoteTitle)


        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            const note: Note = {
                id: noteId,
                title: currentNoteTitle,
                content: currentNoteContent,
                userId: userId
            }
            noteController.saveNote(note)
            fetchNotes();
            event.preventDefault();
            event.returnValue = ''; // for cross-browser compatibility
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [noteTitle, noteContent]);

    const deleteNote = () => {
        if (noteId === undefined) return
        noteController.deleteNote(noteId)
        fetchNotes()
        navigate(`/home`)
    }

    return (
        <>
            <div className={"w-full h-full bg-primary p-16 flex flex-col gap-4 relative"}>
                <input placeholder={"Untitled..."} type='text' value={noteTitle}
                       className={"h1 bg-primary border-none focus:outline-none"} onChange={(e) => {
                    setNoteTitle(() => e.target.value)
                }}
                       onBlur={() => {
                           let currentNoteContent = noteContent;
                           let currentNoteTitle = noteTitle;

                           // make currentNoteContent safe for JSON.parse
                           if (currentNoteContent.includes("|")) {
                               currentNoteContent = currentNoteContent.replace(/\|/g, " ");
                           }
                           if (currentNoteTitle.includes("|")) {
                               currentNoteTitle = currentNoteTitle.replace(/\|/g, " ");
                           }
                           if (currentNoteContent.includes(";")) {
                               currentNoteContent = currentNoteContent.replace(";", " ");
                           }
                           if (currentNoteTitle.includes(";")) {
                               currentNoteTitle = currentNoteTitle.replace(";", " ");
                           }

                           const note: Note = {
                               id: noteId,
                               title: currentNoteTitle,
                               content: currentNoteContent,
                               userId: userId
                           }
                           noteController.saveNote(note)
                           fetchNotes();
                       }}/>
                <textarea placeholder={"Empty note"} value={noteContent}
                          className={"p bg-primary border-none focus:outline-none w-full min-h-full py-8"}
                          onChange={(e) => {
                              setNoteContent(() => e.target.value)
                          }}
                          onBlur={() => {
                              let currentNoteContent = noteContent;
                              let currentNoteTitle = noteTitle;

                              // make currentNoteContent safe for JSON.parse
                              if (currentNoteContent.includes("|")) {
                                  currentNoteContent = currentNoteContent.replace(/\|/g, " ");
                              }
                              if (currentNoteTitle.includes("|")) {
                                  currentNoteTitle = currentNoteTitle.replace(/\|/g, " ");
                              }
                              if (currentNoteContent.includes(";")) {
                                  currentNoteContent = currentNoteContent.replace(";", " ");
                              }
                              if (currentNoteTitle.includes(";")) {
                                  currentNoteTitle = currentNoteTitle.replace(";", " ");
                              }

                              const note: Note = {
                                  id: noteId,
                                  title: currentNoteTitle,
                                  content: currentNoteContent,
                                  userId: userId
                              }
                              noteController.saveNote(note)
                              fetchNotes();
                          }}
                />
                <button className={"delete-note-button"} onClick={() => {
                    deleteNote()
                }}><img src="/bin_icon.svg" className={"h-6"}/></button>
            </div>
        </>
    )
}

export default NoteSection;