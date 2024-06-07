import {CookieStorage} from "../databases/cookieStorage.ts";
import {Note} from "../helper/note.ts";

export class NoteRepository {
    private db: CookieStorage | null = null;

    constructor() {
        this.db = new CookieStorage();
    }

    convertNotesToString(notes: Note[]) {
        let noteString = ""
        for (let i = 0; i < notes.length; i++) {
            const note = notes[i]
            noteString += JSON.stringify(note)
            if (i !== notes.length - 1) {
                noteString += "|"
            }
        }
        return noteString
    }

    getAllNotes() {
        if (this.db === null) return null;
        const noteCookie = this.db.getCookie("notes");

        if (noteCookie === null || noteCookie === undefined || noteCookie === '') return null;

        const noteCookieDataList = noteCookie.split('|');
        if (noteCookieDataList === null) return null;

        const notes: Note[] = [];

        for (let i = 0; i < noteCookieDataList.length; i++) {
            const note: Note = JSON.parse(noteCookieDataList[i]);
            notes.push(note);
        }
        return notes;
    }

    getNoteById(noteId: string) {
        if (this.db === null) return null;
        const noteCookie = this.db.getCookie("notes");

        if (noteCookie === null) return null;

        const noteCookieDataList = noteCookie.split('|');

        if (noteCookieDataList === null) return null;

        for (let i = 0; i < noteCookieDataList.length; i++) {
            const note: Note = JSON.parse(noteCookieDataList[i]);

            if (note.id === noteId) {
                return note;
            }

        }
        return null;
    }

    saveNote(note: Note) {
        if (this.db === null) return
        const noteList: Note[] = []
        const currentNotes = this.getAllNotes()

        noteList.push(note)
        if (currentNotes !== null) {
            for (let i = 0; i < currentNotes.length; i++) {
                noteList.push(currentNotes[i])
            }
        }

        const noteString = this.convertNotesToString(noteList)
        this.db.setCookie("notes", noteString, 1)
    }

    updateNote(note: Note) {
        if (this.db === null) {
            console.log("fail to update note")
            return;
        }

        const notes: Note[] | null = this.getAllNotes();

        if (notes === null) {
            console.log("fail to update note")
            return;
        }

        for (let i = 0; i < notes.length; i++) {
            if (notes[i].id === note.id) {
                notes[i] = note;
                break;
            }
        }

        const noteString = this.convertNotesToString(notes);

        this.db.setCookie("notes", noteString, 1)
    }

    deleteNote(noteId: string) {
        if (this.db === null) {
            console.log("fail to delete note")
            return;
        }
        const notes: Note[] | null = this.getAllNotes();

        if (notes === null) {
            console.log("fail to delete note")
            return;
        }

        const newNotes = notes.filter(note => note.id !== noteId);

        if (newNotes.length === 0) {
            this.db.eraseCookie("notes")
            return
        }

        const noteString = this.convertNotesToString(newNotes);

        this.db.setCookie("notes", noteString, 1)
    }
}
