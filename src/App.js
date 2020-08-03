import React from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, EventsList, trackedEntityAttributes, Statistics, NoMatch } from './views'
import logo from './images/ehas.jpeg'
import { Navigation } from './navigation'
import i18n from '@dhis2/d2-i18n'
import './App.css'
import * as  classes from './App.module.css'

const query = {
    me: {
        resource: 'me',
    },
}

const MyApp = () => (
    <Router>
        
        <div className={classes.container}>
            <div className={classes.left}>
                <img className={classes.logo} src={logo} />
                <Navigation/>
            </div>

            <div className={classes.right}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/EventsList" component={EventsList} />
                    <Route exact path="/trackedEntityAttributes" component={trackedEntityAttributes} />
                    <Route exact path="/statistics" component={Statistics} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </div>
    </Router>

)

export default MyApp
