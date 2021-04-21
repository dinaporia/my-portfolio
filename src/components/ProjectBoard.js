import React, { useState } from 'react';
import { Carousel, Card, Modal } from 'react-bootstrap';

import { PostIt } from './common/';

const ProjectBoard = ({project}) => {
    const {title, subtitle, blurb, cards, images, links} = project;
    const {left, middle, right } = cards;
    // retrieve carousel slides from images props
    const slides = images.map((image, index) => {
        return (
            <Carousel.Item key={index}>
                <img 
                    className='d-block mw-100 m-auto'
                    src={image.src}
                    alt={image.alt}
                />
            </Carousel.Item>
        )
    });
    const [ showModal, setShowModal ] = useState(false);

    return (
        <div className='board'>
            <h3 className='text-center'>{title}</h3>
            <h5 className='text-center text-medium px-3 mb-4'>{subtitle}</h5>
           {/* board-container contents overlap on larger screens, stack on small */}
            <div className='container board-container'>
                <div className='row'>
                    <div className='col-12 col-md-7 p-2 col-lg-8 mb-3 px-4'>
                        <Carousel>
                            {slides}
                        </Carousel>
                    </div>
                    <div className='text-left text-md-right col-12 col-md-5 col-lg-4 align-self-end p-3'>
                        <p className='mb-1 pl-1'>{blurb}</p>
                    </div>
                </div>
           
                <div className='row postits-row'>
                    <div className='board-piece col-12 col-md-4 align-self-md-center'>
                        <div className='left-postit'>
                            <PostIt color='purple' title={left.title} text={left.text} />
                        </div>
                    </div>
                    <div className='board-piece col-12 col-md-3 col-lg-4 align-self-md-end justify-content-center'>
                        <PostIt color='yellow' title={middle.title} text={middle.text} />
                    </div>
                    <div className='board-piece col-12 col-md-5 col-lg-4'>
                        <div className='right-postit'>
                            <PostIt color='blue' title={right.title} text={right.text} />
                        </div>
                    </div>
                </div>
               
            </div>
            
            <Card.Footer className='d-flex justify-content-around text-center p-0'>
                <Card.Link href={links.code} target="_blank">CODE</Card.Link>
                <Card.Link onClick={() => setShowModal(true)}>DEMO</Card.Link>
            </Card.Footer>

            <Modal show={showModal} onHide={()=>setShowModal(false)}>
                <Modal.Header closeButton >
                    <Modal.Title>Choose your fighter!</Modal.Title>
                </Modal.Header>
                <Modal.Body>To try out the app, you will need an Android phone with the Expo Go app installed. Otherwise, you can take a look at my demo video.</Modal.Body>
                <Modal.Footer>
                    <a className='btn btn-lg btn-primary mx-auto' onClick={()=>setShowModal(false)} href={links.demo} target='_blank' rel="noreferrer">Try App</a>
                    <a className='btn btn-lg btn-accent mx-auto' onClick={()=>setShowModal(false)} href={links.video} target='_blank' rel="noreferrer">View Video</a>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ProjectBoard;