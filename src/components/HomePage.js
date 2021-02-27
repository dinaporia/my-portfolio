import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { Wrapper, Text, Title } from './common/Styles';

const Home = (props) => {
    return (
        <div className="row h-100">
            <div className="col-lg-4 p-0">
                <Wrapper color='dark'>
                    <h2 className="wrapped-title">About Me</h2>
                    <p className="wrapped-text">Soluta aut minus incidunt harum accusamus. Ipsa soluta est voluptas facere. Quasi temporibus voluptas qui est. Qui explicabo eaque quaerat eaque ipsum.</p>
                    <Button variant="outline-primary" size="lg" className="mx-auto" onClick={() => props.history.push('/About')}>Learn More</Button>
                </Wrapper>
            </div>
            <div className="col-lg-4 p-0">
                <Wrapper color='medium'>
                <h2 className="wrapped-title">Projects</h2>
                <p className="wrapped-text">Soluta aut minus incidunt harum accusamus. Ipsa soluta est voluptas facere. Quasi temporibus voluptas qui est. Qui explicabo eaque quaerat eaque ipsum.</p>
                    <Button variant="outline-primary" size="lg" className="mx-auto" onClick={() => props.history.push('/Projects')} >Take a Look</Button>
                </Wrapper>
            </div>
            <div className="col-lg-4 p-0">
                <Wrapper color='light'>
                <h2 className="wrapped-title">Contact Me</h2>
                    <Button variant="outline-primary" size="lg" className="mx-auto" onClick={() => props.history.push('/Contact')}>Email Me</Button>
                </Wrapper>
            </div>
        </div>        
    );
}

export default withRouter(Home);