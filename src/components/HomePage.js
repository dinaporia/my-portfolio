import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = (props) => {
    return (
        <div className="row h-100">
            <div className="col-lg-4 p-0">
                <div className="home-wrapper bg-dark">
                    <h2 className="wrapped-title">About Me</h2>
                    <p className="wrapped-text">Hello! My name is Dina Muhic, and I am a web developer. I am also an artist, a teacher, a writer, a life-long learner, and a television fanatic.</p>
                    <Button variant="outline-accent" size="lg" className="m-auto" onClick={() => props.history.push('/About')}>Learn More</Button>
                </div>
            </div>
            <div className="col-lg-4 p-0">
                <div className="home-wrapper bg-medium">
                <h2 className="wrapped-title">Projects</h2>
                <p className="wrapped-text">I create responsive websites using HTML, CSS, and JavaScript. I prefer Sass and Bootstrap for my styling needs, and I've grown to love React for its reusable components.</p>
                    <Button variant="outline-accent" size="lg" className="m-auto" onClick={() => props.history.push('/Projects')} >Take a Look</Button>
                </div>
            </div>
            <div className="col-lg-4 p-0">
            <div className="home-wrapper bg-light">
                <h2 className="wrapped-title">Contact Me</h2>
                <div className=' align-self-center mb-2 my-lg-auto'>
                            <div className="row">
                                <div className="col-12 col-sm-4 col-lg-12 p-2">
                                    <a className="btn btn-outline-accent social-button " href="mailto:dmuhic@gmail.com"><i className="far fa-5x fa-envelope " /> </a>
                                </div>
                                <div className="col-12 col-sm-4 col-lg-12 p-2">
                                    <a className="btn btn-outline-accent social-button" href="https://www.linkedin.com/in/dinamuhic"><i className="fab fa-5x fa-linkedin" /></a>
                                </div>
                                <div className="col-12 col-sm-4 col-lg-12 p-2">
                                    <a className="btn btn-outline-accent social-button" href="https://github.com/dinaporia"><i className="fab fa-5x fa-github " /></a>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>        
    );
}

export default withRouter(Home);