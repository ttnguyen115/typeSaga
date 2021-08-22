import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import cityApi from './api/cityApi';
import './App.css';
import { AuthRoute, PrivateRoute } from './HOCs/Routes';
import Admin from './views/Admin';
import Login from './views/Login';
import NotFound from './views/NotFound';

const App = () => {
    useEffect(() => {
        const fetchCityData = async () => {
            try {
                const res = await cityApi.getAll();
                console.log(res)
            } catch (err) {
                console.log(err);
            }
        }
        fetchCityData();
    }, []);

    return (
        <div>
            <Switch>
                <AuthRoute path="/login" component={Login} redirectPath="/admin" />
                <PrivateRoute path="/admin" component={Admin} redirectPath="/login" />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;
