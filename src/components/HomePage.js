import React from 'react';
import { withRouter } from 'react-router-dom';

import { Contact } from './common';

const Home = (props) => {
    return (
        <div className="row h-100">
            <div className="col-lg-4 p-0">
                <div className="home-wrapper bg-dark pt-lg-6">
                    <h2 className="wrapped-title responsive-title text-medium">WHO</h2>
                    <p className="wrapped-text px-md-3">Hello! My name is Dina Muhic, and I am a web developer. I am also an artist, a teacher, a writer, a life-long learner, and a television fanatic. Mostly, I like to deconstruct things, figure out how they work, and make cool stuff from scratch.</p>
                    <button className="m-auto p-4 btn btn-outline-accent btn-lg border-0" onClick={() => props.history.push('/About')}>Learn More</button>
                </div>
            </div>
            <div className="col-lg-6 p-0">
                <div className="home-wrapper bg-medium pt-lg-6">
                    <h2 className="wrapped-title responsive-title text-dark">WHAT</h2>
                    <p className="wrapped-text px-md-3">I create responsive websites with HTML, CSS, and JavaScript. Though I'm familiar with various styling libraries and frameworks, I prefer to style my own elements with Sass while taking advantage of Bootstrap's flexbox utilities. I've grown to love React and React Native for their reusable components, and I can find my way around a Redux store. I'm currently working on mastering MongoDB & Express for the full MERN experience!</p>
                    <button className="m-auto p-4 btn btn-lg btn-accent look-button" onClick={() => props.history.push('/Projects')} >Take a Look</button>
                </div>
            </div>
            <div className="col-lg-2 p-0">
                <div className="home-wrapper bg-light pt-lg-6">
                <h2 className="wrapped-title responsive-title text-medium">WHERE</h2>
                    <Contact />
                </div>
            </div>
        </div>        
    );
}

export default withRouter(Home);