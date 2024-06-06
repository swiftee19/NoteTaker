import {useState} from "react";
import {AlertTypes} from "../helper/alertTypes.ts";
import {Alert} from "../components/Alert.tsx";

function LoginPage() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [alertType, setAlertType] = useState<AlertTypes | null>(null)
    const [alertMessage, setAlertMessage] = useState<string>("")

    const closeAlert = () => {
        setAlertType(() => null)
        setAlertMessage(() => ``)
    }

    const showAlert = (type: AlertTypes, message: string) => {
        setAlertType(() => type)
        setAlertMessage(() => message)
    }
    const login = async () => {
        if (email === "" || password === "") {
            showAlert(AlertTypes.ERROR, "Please input all fields!")
            return
        }
        showAlert(AlertTypes.SUCCESS, "Login successful!")
    }

    return (
        <>
            {alertType != null && <Alert alertMessage={alertMessage} alertType={alertType} closeAlert={closeAlert}/>}
            <div className={"w-screen h-screen bg-primary flex flex-col items-center justify-center gap-2"}>
                <h1 className={"text-2xl font-bold"}>Start writing notes with us</h1>
                <div className={"w-2/5 flex flex-row shadow-md rounded-2xl"}>
                    <div className={"w-2/5 bg-white flex flex-col justify-center items-center rounded-l-2xl p-4"}>
                        <img className={"w-1/2"} src="/src/assets/pencil_icon.svg"/>
                        <p className={"text-quaternary text-center w-full"}>Things worth sharing are notes worth
                            taking</p>
                    </div>
                    <form
                        className={"w-full bg-secondary flex flex-col justify-center items-start rounded-r-2xl p-2 gap-2"}>
                        <div className={"w-full flex flex-row gap-1"}>
                            <label htmlFor={"email"} className={"text-xl font-bold w-40"}>Email</label>
                            <input type={"email"} id={"email"} className={"rounded-lg bg-primary p-1 w-full"}
                                   value={email} placeholder={"Enter your email here"} onChange={(event) => {
                                setEmail(event.target.value)
                            }}/>
                        </div>
                        <div className={"w-full flex flex-row gap-1"}>
                            <label htmlFor={"password"} className={"text-xl font-bold w-40"}>Password</label>
                            <input type={"password"} id={"password"} className={"rounded-lg bg-primary p-1 w-full"}
                                   value={password} placeholder={"Enter your password here"} onChange={(event) => {
                                setPassword(event.target.value)
                            }}/>
                        </div>
                    </form>
                </div>
                <button
                    className={"w-2/5 bg-primary py-1 text-quaternary font-bold rounded-lg shadow-md duration-300 border-2 border-quaternary hover:bg-quaternary hover:text-primary"}
                    onClick={() => login()}>Login
                </button>
            </div>
        </>
    )
}

export default LoginPage