import {Navigate} from 'react-router-dom';
import {useAuth} from "./auth/AuthProvider.tsx";
import {ReactNode} from "react";

interface PrivateRouteProps {
    path: string;
    element: ReactNode;
}

function PrivateRoute(props: PrivateRouteProps) {
    const auth = useAuth();
    const user = auth.user;

    if (auth.loading === false && user === null) {
        return (
            <>
                <Navigate to={'/'}/>
            </>
        )
    }

    return (
        <>
            {props.element}
        </>
    );
};

export default PrivateRoute;
