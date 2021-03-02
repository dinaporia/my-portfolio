import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = (props) => {
    return (
        <div className="row h-100">
            <div className="col-lg-4 p-0">
                <div className="home-wrapper bg-dark">
                    <h2 className="wrapped-title">About Me</h2>
                    <p className="wrapped-text">Soluta aut minus incidunt harum accusamus. Ipsa soluta est voluptas facere. Quasi temporibus voluptas qui est. Qui explicabo eaque quaerat eaque ipsum.</p>
                    <Button variant="outline-primary" size="lg" className="mx-auto" onClick={() => props.history.push('/About')}>Learn More</Button>
                </div>
            </div>
            <div className="col-lg-4 p-0">
                <div className="home-wrapper bg-medium">
                <h2 className="wrapped-title">Projects</h2>
                <p className="wrapped-text">Soluta aut minus incidunt harum accusamus. Ipsa soluta est voluptas facere. Quasi temporibus voluptas qui est. Qui explicabo eaque quaerat eaque ipsum.</p>
                    <Button variant="outline-primary" size="lg" className="mx-auto" onClick={() => props.history.push('/Projects')} >Take a Look</Button>
                </div>
            </div>
            <div className="col-lg-4 p-0">
            <div className="home-wrapper bg-light">
                <h2 className="wrapped-title">Contact Me</h2>
                    <Button variant="outline-primary" size="lg" className="mx-auto" onClick={() => props.history.push('/Contact')}>Email Me</Button>
                </div>
            </div>
        </div>        
    );
}

export default withRouter(Home);