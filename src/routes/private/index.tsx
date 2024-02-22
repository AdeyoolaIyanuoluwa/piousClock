import { useUserContext } from '../../context/userContexts';
import { Navigate } from 'react-router-dom';
import React from 'react';

const PrivateRoute = ({ component: Component }: any) => {
    const { isLoggedIn }: any = useUserContext();
    if (!isLoggedIn) return <Navigate to='/auth/login' replace />

    return <Component />;
};

export default PrivateRoute;
