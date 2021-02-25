import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import About from './AboutPage';
import Home from './HomePage';
import Contact from './ContactPage';
import Projects from './ProjectsPage';

const Navigation = () => {
    return (
        <Fragment>

            <div className="container-fluid h-100 ">
            <Switch>
                <Route path='/home'>
                    <Home />                
                </Route>
                <Route path='/about'>
                    <About />                
                </Route>
                <Route path='/projects'>
                    <Projects />                
                </Route>
                <Route path='/contact'>
                    <Contact />                
                </Route>
                <Redirect to='/home' />
            </Switch>
        </div>
        </Fragment>
    );
}

export default Navigation;