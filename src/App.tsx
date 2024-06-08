import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import SigninPage from "./pages/SigninPage.tsx";
import {AuthProvider} from "./auth/AuthProvider.tsx";
import PrivateRoute from "./PrivateRoute.tsx";
import HomePage from "./pages/HomePage.tsx";

function App() {
    return (
        <>
            <AuthProvider>
                <Routes>
                    <Route path={'/'} element={
                        <LoginPage/>
                    }/>
                    <Route path={'signin'} element={
                        <SigninPage/>
                    }/>
                    <Route path={'home/:noteId'} element={
                        <PrivateRoute path="/home" element={<HomePage/>}/>
                    }/>
                    <Route path={'home'} element={
                        <PrivateRoute path="/home" element={<HomePage/>}/>
                    }/>
                </Routes>
            </AuthProvider>
        </>
    )
}

export default App
