import React, { useEffect } from 'react';
import './App.css';
import cityApi from './api/cityApi';
import { Route, Switch } from 'react-router-dom';

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
                <Route path="/login" />
                <Route path="/admin" />
                <Route path="*" />
            </Switch>
        </div>
    );
}

export default App;
