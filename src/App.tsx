import {HashRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import {AuthProvider} from "./auth/AuthProvider.tsx";
import PrivateRoute from "./PrivateRoute.tsx";
import HomePage from "./pages/HomePage.tsx";

function App() {
    return (
        <HashRouter basename="/">
            <AuthProvider>
                <Routes>
                    <Route path={'/'} element={
                        <LoginPage/>
                    }/>
                    <Route path={'signup'} element={
                        <SignUpPage/>
                    }/>
                    <Route path={'home/:noteId'} element={
                        <PrivateRoute path="/home" element={<HomePage/>}/>
                    }/>
                    <Route path={'home'} element={
                        <PrivateRoute path="/home" element={<HomePage/>}/>
                    }/>
                </Routes>
            </AuthProvider>
        </HashRouter>

    )
}

export default App
