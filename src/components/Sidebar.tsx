import {useEffect, useState} from "react";
import {getRandomGreetings} from "../helper/greets.ts";

function Sidebar() {
    const [greetings, setGreetings] = useState("")

    useEffect(() => {
        setGreetings(() => getRandomGreetings())
    }, []);

    return (
        <>
            <div className={"h-screen w-fit p-4 flex flex-col align-middle rounded-r-lg bg-secondary"}>
                <h2>{greetings}, name</h2>
            </div>
        </>
    )
}

export default Sidebar;