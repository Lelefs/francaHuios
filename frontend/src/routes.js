import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import History from './pages/History';
import Religion from './pages/Religion';
import Main from './pages/Main';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/historia" component={History} />
                <Route path="/religiao" component={Religion} />
            </Switch>
        </BrowserRouter>
    )
}