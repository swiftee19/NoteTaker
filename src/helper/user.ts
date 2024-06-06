import {v4 as uuidv4} from 'uuid';

export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    notes: Note[];

    constructor(name: string, email: string, password: string) {
        this.id = uuidv4();
        this.name = name;
        this.email = email;
        this.password = password;
        this.notes = [];
    }
}