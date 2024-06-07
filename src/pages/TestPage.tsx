import Sidebar from "../components/Sidebar.tsx";
import NoteSection from "../components/NoteSection.tsx";

function TestPage() {
    return (
        <>
            <div className={"w-screen h-screen bg-primary flex flex-row"}>
                <Sidebar/>
                <NoteSection/>
            </div>
        </>
    )
}

export default TestPage