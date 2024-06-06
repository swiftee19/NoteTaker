import {UserController} from "../controllers/userController.ts";
import {User} from "../helper/user.ts";

function SigninPage() {
    const userController = new UserController();
    const registerDummyUser = async () => {
        // Dummy user registration
        const user: User = new User("John Doe", "john@email.com", "password")

        userController.saveUser(user)
    }

    return (
        <div>
            <button onClick={() => registerDummyUser()}>Signin</button>
            <br/>
            <a href="/">login</a>
        </div>
    );
}

export default SigninPage;