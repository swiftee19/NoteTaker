import {Note} from "../helper/note.ts";
import {NoteRepository} from "../repositories/noteRepository.ts";

export class NoteController {
    private noteRepository: NoteRepository | null = null;

    constructor() {
        this.noteRepository = new NoteRepository();
    }

    getAllNotes() {
        if (this.noteRepository === null) return null
        return this.noteRepository.getAllNotes();
    }

    getNoteById(noteId: string) {
        if (this.noteRepository === null) return null
        return this.noteRepository.getNoteById(noteId);
    }

    saveNote(note: Note) {
        if (this.noteRepository === null) return
        const noteFromDb = this.noteRepository.getNoteById(note.id);

        if (noteFromDb !== null) {
            return this.noteRepository.updateNote(note);
        } else {
            return this.noteRepository.saveNote(note);
        }
    }

    deleteNote(noteId: string) {
        if (this.noteRepository === null) return
        return this.noteRepository.deleteNote(noteId);
    }
}