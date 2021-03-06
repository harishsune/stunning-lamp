import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Reports from './Components/Reports';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'


const routing = (

    <Router>
        <Switch>
            <Route path="/" component={App}>
                <Route exact  path="/" component={App} />
                <Route path="/Reports" component={Reports} />
            </Route>
        </Switch>
    </Router>
)



ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
