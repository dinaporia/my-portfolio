import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { Wrapper, Text, Title } from './common/Styles';
import {NavHeader} from './common';


const Home = (props) => {
    return (
        <Fragment>
            <NavHeader />
            <div className="row h-100">
                <div className="col-lg-4 p-0">
                    <Wrapper color='dark'>
                        <Title>About Me</Title>
                        <Text>Soluta aut minus incidunt harum accusamus. Ipsa soluta est voluptas facere. Quasi temporibus voluptas qui est. Qui explicabo eaque quaerat eaque ipsum.</Text>
                        <Button variant="outline-primary" size="lg" className="mx-auto" onClick={() => props.history.push('/About')}>Learn More</Button>
                    </Wrapper>
                </div>
                <div className="col-lg-4 p-0">
                    <Wrapper color='medium'>
                        <Title>Projects</Title>
                        <Text>Soluta aut minus incidunt harum accusamus. Ipsa soluta est voluptas facere. Quasi temporibus voluptas qui est. Qui explicabo eaque quaerat eaque ipsum.</Text>
                        <Button variant="outline-primary" size="lg" className="mx-auto" onClick={() => props.history.push('/Projects')} >Take a Look</Button>
                    </Wrapper>
                </div>
                <div className="col-lg-4 p-0">
                    <Wrapper color='light'>
                        <Title>Contact Me</Title>
                        <Button variant="outline-primary" size="lg" className="mx-auto" onClick={() => props.history.push('/Contact')}>Email Me</Button>
                    </Wrapper>
                </div>
            </div>        
        </Fragment>
    );
}

export default withRouter(Home);