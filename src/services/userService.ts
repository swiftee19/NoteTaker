import {UserController} from "../controllers/userController.ts";
import {NoteController} from "../controllers/noteController.ts";

export class UserService {
    private userController: UserController | null = null;
    private noteController: NoteController | null = null;

    constructor() {
        this.userController = new UserController();
        this.noteController = new NoteController();
    }

    getUserNotes(userId: string) {
        if (this.userController === null || this.noteController === null) return null

        const notes = this.noteController.getAllNotes();
        if (notes === null) return null

        console.log(notes)
        console.log(userId)
        console.log(notes.filter(note => note.userId === userId))
        return notes.filter(note => note.userId === userId);
    }
}