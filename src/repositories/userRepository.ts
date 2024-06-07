import {User} from "../helper/user.ts";
import {CookieStorage} from "../databases/cookieStorage.ts";

export class UserRepository {
    private db: CookieStorage | null = null;

    constructor() {
        this.db = new CookieStorage();
    }

    getAllUsers() {
        if (this.db === null) return null;
        const userCookie = this.db.getCookie("users");

        if (userCookie === null) return null;

        const userCookieDataList = userCookie.split('|');

        if (userCookieDataList === null) return null;

        const users: User[] = [];

        for (let i = 0; i < userCookieDataList.length; i++) {
            const user = JSON.parse(userCookieDataList[i]);
            users.push(user);
        }

        return users;
    }

    getUserByEmail(email: string) {
        if (this.db === null) return null;
        const userCookie = this.db.getCookie("users");

        if (userCookie === null) return null;

        const userCookieDataList = userCookie.split('|');

        if (userCookieDataList === null) return null;

        for (let i = 0; i < userCookieDataList.length; i++) {
            const user:User = JSON.parse(userCookieDataList[i]);
            if (user.email === email) {
                return user;
            }
        }

        return null;
    }

    getUserById(userId: string) {
        if (this.db === null) return null;
        const userCookie = this.db.getCookie("users");

        if (userCookie === null) return null;

        const userCookieDataList = userCookie.split('|');

        if (userCookieDataList === null) return null;

        for (let i = 0; i < userCookieDataList.length; i++) {
            const user:User = JSON.parse(userCookieDataList[i]);
            if (user.id === userId) {
                return user;
            }
        }

        return null;
    }

    saveUser(user: User) {
        if (this.db === null) return
        const userList: User[] = []
        const currentUsers = this.getAllUsers()

        userList.push(user)
        if (currentUsers !== null) {
            for (let i = 0; i < currentUsers.length; i++) {
                userList.push(currentUsers[i])
            }
        }

        let userString = ""

        for (let i = 0; i < userList.length; i++) {
            const user = userList[i]
            userString += JSON.stringify(user)
            if (i !== userList.length - 1) {
                userString += "|"
            }
        }

        this.db.setCookie("users", userString, 1)
    }

    deleteUser(userId: string) {
        if (this.db === null) return
        this.db.eraseCookie(userId)
    }
}
