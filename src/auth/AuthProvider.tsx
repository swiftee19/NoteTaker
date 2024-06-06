import {createContext, useContext, useState, useEffect, ReactNode} from 'react';
import {useNavigate} from 'react-router-dom';
import {User} from "../helper/user.ts";
import {UserController} from "../controllers/userController.ts";

const AuthContext = createContext<any>(null);

export const useAuth = () => {
    return useContext(AuthContext);
};

export function AuthProvider({children}: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const userController = new UserController();

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
        }
        setLoading(false);
    }, []);

    const login = (email: string, password: string) => {
        setLoading(true);
        const user = userController.login(email, password);
        if (user === null) {
            setLoading(false);
            return null;
        }
        setUser(() => user);
        localStorage.setItem('user', JSON.stringify(user));
        setLoading(false);
        return user;
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        navigate('/');
    };

    const value = {
        user,
        login,
        logout,
        loading,
    };

    if (loading) {
        return (
            <>
                <div className={"animate-pulse bg-primary w-screen h-screen flex flex-row align-middle justify-center"}>
                    <h1 className={"animate-bounce text-quaternary font-medium text-2xl"}>
                        Loading...
                    </h1>
                </div>
            </>
        );
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
