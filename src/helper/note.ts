import {v4 as uuidv4} from 'uuid';

export class Note {
    id: string;
    title: string;
    content: string;
    userId: string;

    constructor(content: string, userId: string) {
        this.id = uuidv4();
        this.title = 'Untitled';
        this.content = content;
        this.userId = userId;
    }
}