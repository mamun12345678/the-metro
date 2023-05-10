import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { admin, isLoading } = useAuth();
    if (isLoading) { return <img className='w-50' src="https://thumbs.gfycat.com/DearWellinformedDalmatian-size_restricted.gif" alt=""/> }
    return (
        <Route
            {...rest}
            render={({ location }) =>
            admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;