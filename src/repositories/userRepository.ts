import {User} from "../helper/user.ts";
import {CookieStorage} from "../databases/cookieStorage.ts";

export class UserRepository {
    private db: CookieStorage | null = null;

    constructor() {
        this.db = new CookieStorage();
    }

    getUserByEmail(email: string) {
        if (this.db === null) return null;
        const cookies = this.db.getAllCookies();

        const cookieList = cookies.split(';');
        for (let i = 0; i < cookieList.length; i++) {
            const cookie = cookieList[i];
            const cookieContent = cookie.split('=')[1];
            const user:User = JSON.parse(cookieContent);

            if (user.email === email) {
                return user;
            }
        }
        return null;
    }

    getUserById(userId: string) {
        if (this.db === null) return
        return this.db.getCookie(userId)
    }

    saveUser(user: User) {
        if (this.db === null) return
        this.db.setCookie(user.id, JSON.stringify(user), 1)
    }

    deleteUser(userId: string) {
        if (this.db === null) return
        this.db.eraseCookie(userId)
    }
}
