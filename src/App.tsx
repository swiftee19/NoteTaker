import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import TestPage from "./pages/TestPage.tsx";
import SigninPage from "./pages/SigninPage.tsx";
import {AuthProvider} from "./auth/AuthProvider.tsx";
import PrivateRoute from "./PrivateRoute.tsx";

function App() {
    return (
        <>
            <AuthProvider>
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
                    <Route path={'/home'} element={
                        <PrivateRoute path="/home" element={<TestPage/>}/>
                    }/>
                </Routes>
            </AuthProvider>
        </>
    )
}

export default App
