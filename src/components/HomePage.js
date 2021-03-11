import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { Contact } from './common';

const Home = (props) => {
    return (
        <div className="row h-100">
            <div className="col-lg-4 p-0 bg-light">
                <div className="home-wrapper bg-dark pt-lg-6">
                    <h2 className="wrapped-title responsive-title">About Me</h2>
                    <p className="wrapped-text">Hello! My name is Dina Muhic, and I am a web developer. I am also an artist, a teacher, a writer, a life-long learner, and a television fanatic. Mostly, I like to deconstruct things, figure out how they work, and make cool stuff from scratch.</p>
                    <Button variant="outline-accent" size="lg" className="m-auto" onClick={() => props.history.push('/About')}>Learn More</Button>
                 
                </div>
            </div>
            <div className="col-lg-4 p-0">
                <div className="home-wrapper bg-medium pt-lg-6">
                <h2 className="wrapped-title responsive-title">Projects</h2>
                <p className="wrapped-text">I create responsive websites using HTML, CSS, and JavaScript. I prefer Sass and Bootstrap for my styling needs, and I've grown to love React/React Native for its reusable components. I'm currently working on mastering MongoDB & Express.</p>
                    <Button variant="outline-accent" size="lg" className="m-auto" onClick={() => props.history.push('/Projects')} >Take a Look</Button>
                </div>
            </div>
            <div className="col-lg-4 p-0">
                <div className="home-wrapper bg-light pt-lg-6">
                    <h2 className="wrapped-title responsive-title">Contact Me</h2>
                    <Contact mail />
                </div>
            </div>
        </div>        
    );
}

export default withRouter(Home);