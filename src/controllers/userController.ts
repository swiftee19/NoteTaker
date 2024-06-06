import {UserRepository} from "../repositories/userRepository.ts";
import {User} from "../helper/user.ts";

export class UserController {
    private userRepository: UserRepository | null = null;

    constructor() {
        this.userRepository = new UserRepository();
    }

    getUserById(userId: string) {
        if (this.userRepository === null) return
        return this.userRepository.getUserById(userId);
    }

    login(email: string, password: string) {
        if (this.userRepository === null) return null;
        const user = this.userRepository.getUserByEmail(email);
        if (user === null) {
            return null;
        }
        if (user.password === password) {
            return user;
        }
        return null;
    }

    getUserByEmail(email: string) {
        if (this.userRepository === null) return
        return this.userRepository.getUserByEmail(email);
    }

    saveUser(user: User) {
        if (this.userRepository === null) return
        return this.userRepository.saveUser(user);
    }

    deleteUser(userId: string) {
        if (this.userRepository === null) return
        return this.userRepository.deleteUser(userId);
    }
}