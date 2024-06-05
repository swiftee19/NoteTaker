import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={
                    <LoginPage/>
                }/>
                <Route path={'/test'} element={
                    <>
                        <p>test</p>
                    </>
                }/>
            </Routes>
        </>
    )
}

export default App
