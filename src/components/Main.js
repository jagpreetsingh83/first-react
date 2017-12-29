import React from 'react';
import Switch from 'react-router-dom/Switch';
import {Route} from 'react-router-dom';
import Home from './Home';
import Roster from './Roster';
import Schedule from './Schedule';

const Main = () => {
    return (
        <main style={{height: 400}}>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/roster' component={Roster}/>
                <Route path='/schedule' component={Schedule}/>
            </Switch>
        </main>
    );
};

export default Main;