import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import About from './AboutPage';
import Home from './HomePage';
import ContactPage from './ContactPage';
import Projects from './ProjectsPage';
import NavHeader from './common/NavHeader';

const Navigation = () => {

    return (
        <div className="container-fluid h-100 bg-medium">
            <NavHeader />
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
                    <ContactPage />                
                </Route>
                <Redirect to='/home' />
            </Switch>
            <div className='copyright align-self-flex-end'>&#169; Dina Muhic 2021</div>   
        </div>
        
    );
}

export default Navigation;