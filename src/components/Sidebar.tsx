import {useEffect, useState} from "react";
import {getRandomGreetings} from "../helper/greets.ts";
import {useAuth} from "../auth/AuthProvider.tsx";
import {User} from "../helper/user.ts";

function Sidebar() {
    const [greetings, setGreetings] = useState("")

    const authContext = useAuth();
    const user: User = authContext.user;

    useEffect(() => {
        setGreetings(() => getRandomGreetings())
    }, []);

    return (
        <>
            <div className={"h-screen w-max p-4 flex flex-col gap-1 justify-start rounded-r-lg bg-secondary"}>
                <h2 className={"font-bold text-lg text-quinary text-left"}>{greetings}, {user.name}</h2>
                <button
                    className={"sidebar-button"}>
                    <img src="/src/assets/plus_icon.svg" alt={"plus icon"} className={"h-6"}/>
                    <h3 className={"font-medium text-lg w-fit"}>New Note</h3>
                </button>
            </div>
        </>
    )
}

export default Sidebar;