import {UserController} from "../controllers/userController.ts";
import {Alert} from "../components/Alert.tsx";
import {useEffect, useState} from "react";
import {AlertTypes} from "../helper/alertTypes.ts";
import {User} from "../helper/user.ts";

function SigninPage() {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [alertType, setAlertType] = useState<AlertTypes | null>(null)
    const [alertMessage, setAlertMessage] = useState<string>("")

    const userController = new UserController();

    useEffect(() => {
        if (alertType !== null) {
            setTimeout(() => {
                closeAlert();
            }, 3000);
        }
    }, [alertType]);

    const closeAlert = () => {
        setAlertType(() => null)
        setAlertMessage(() => ``)
    }

    const showAlert = (type: AlertTypes, message: string) => {
        setAlertType(() => type)
        setAlertMessage(() => message)
    }

    const signin = async () => {
        if (email === "" || password === "" || name === "") {
            showAlert(AlertTypes.ERROR, "Please input all fields!")
            return
        }

        if (userController.getUserByEmail(email) !== null) {
            showAlert(AlertTypes.ERROR, "An account using this email already exists!")
            return
        }

        const user:User = new User(name, email, password)

        userController.saveUser(user)
        showAlert(AlertTypes.SUCCESS, "Account created successfully!")

        setTimeout(() => {
            window.location.href = "/"
        }, 2000)
    }

    return (
        <>
            {alertType != null && <Alert alertMessage={alertMessage} alertType={alertType} closeAlert={closeAlert}/>}
            <div className={"w-screen h-screen bg-primary flex flex-col items-center justify-center gap-2"}>
                <h1 className={"text-2xl font-bold"}>Start writing notes with us</h1>
                <div className={"w-2/5 flex flex-row shadow-md rounded-2xl"}>
                    <div className={"w-2/5 bg-white flex flex-col justify-center items-center rounded-l-2xl p-4"}>
                        <img className={"w-1/2"} src="/src/assets/pencil_icon.svg"/>
                        <p className={"text-quaternary text-center w-full"}>Start writing with us.</p>
                    </div>
                    <form
                        className={"w-full bg-secondary flex flex-col justify-center items-start rounded-r-2xl p-2 gap-2"}>
                        <div className={"w-full flex flex-row gap-1"}>
                            <label htmlFor={"name"} className={"text-lg font-bold w-40"}>Name</label>
                            <input type={"text"} id={"name"} className={"rounded-lg bg-primary p-1 w-full"}
                                   value={name} placeholder={"Enter your name here"} onChange={(event) => {
                                setName(event.target.value)
                            }}/>
                        </div>
                        <div className={"w-full flex flex-row gap-1"}>
                            <label htmlFor={"email"} className={"text-lg font-bold w-40"}>Email</label>
                            <input type={"email"} id={"email"} className={"rounded-lg bg-primary p-1 w-full"}
                                   value={email} placeholder={"Enter your email here"} onChange={(event) => {
                                setEmail(event.target.value)
                            }}/>
                        </div>
                        <div className={"w-full flex flex-row gap-1"}>
                            <label htmlFor={"password"} className={"text-lg font-bold w-40"}>Password</label>
                            <input type={"password"} id={"password"} className={"rounded-lg bg-primary p-1 w-full"}
                                   value={password} placeholder={"Enter your password here"} onChange={(event) => {
                                setPassword(event.target.value)
                            }}/>
                        </div>
                    </form>
                </div>
                <button
                    className={"w-2/5 bg-primary py-1 text-quaternary font-bold rounded-lg shadow-md duration-300 border-2 border-quaternary hover:bg-quaternary hover:text-primary"}
                    onClick={() => signin()}>Sign in
                </button>
                <a href="/" className={"text-quaternary hover:underline hover:cursor-pointer"}>Login to my account</a>
            </div>
        </>
    );
}

export default SigninPage;