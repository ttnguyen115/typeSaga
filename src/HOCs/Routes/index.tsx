import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface RouteParams {
    path: string;
    component: (props: any) => any;
    redirectPath: string;
}

const createRoute = (condition: () => boolean) => ({ path, component: RouteComponent, redirectPath }: RouteParams) => {
    return (
        <Route
            path={path}
            render={(routeProps: RouteProps) => {
                if (condition()) {
                    return <RouteComponent { ...routeProps } />
                }
                return <Redirect to={redirectPath} />;
            }} 
        />
    )
}

export const PrivateRoute = createRoute((): boolean => Boolean(localStorage.getItem('token')));
export const AuthRoute = createRoute((): boolean => Boolean(!localStorage.getItem('token')));
