import React from 'react';
import AboutMenu from './about-menu';
import { Route, Switch } from 'react-router-dom'

export default function App(props) {

    return (
        <div className="app">
            {/* This should only show up on /about/foo, /about/bar, or /about/foo/bar */}
            <Switch>
            <Route path="/about" component={AboutMenu} /> 
            </Switch>
        </div>
    );
}
