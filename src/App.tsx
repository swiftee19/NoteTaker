import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import TestPage from "./pages/TestPage.tsx";
import SigninPage from "./pages/SigninPage.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={
                    <LoginPage/>
                }/>
                <Route path={'/signin'} element={
                    <SigninPage/>
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
