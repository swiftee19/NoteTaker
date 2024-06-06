import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import TestPage from "./pages/TestPage.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={
                    <LoginPage/>
                }/>
                <Route path={'/test'} element={
                    <>
                        <TestPage/>
                    </>
                }/>
            </Routes>
        </>
    )
}

export default App
