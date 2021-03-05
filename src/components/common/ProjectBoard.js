import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import PostIt from './PostIt';



const ProjectBoard = ({project, featured = false}) => {
    const {green, yellow, blue, images} = project;

    const slides = images.map(image => {
        return (
            <Carousel.Item>
                <img 
                    className='d-block w-100'
                    src={image.src}
                    alt={image.alt}
                />
            </Carousel.Item>
        )
    })

    return (
        <div className='board'>
            {featured && <h6 className='featured'>Featured Project</h6> }
            <h4 className='text-center text-dark mb-4'>SmarTask Mobile App</h4>
           
            <div className='container board-container'>
                <div className='row'>
                    <div className='col-12 p-2 mb-3 px-4'>
                    <Carousel>
                        {slides}
                    </Carousel>
                    </div>
                </div>
           
                <div className='row postits-row'>
                    <div className='board-piece col-12 col-md-4 align-self-md-center'>
                        <div className='left-postit'>
                            <PostIt color='green' title={green.title} text={green.text} />
                        </div>
                    </div>
                    <div className='board-piece col-12 col-md-4 align-self-md-end justify-content-center'>
                        <PostIt color='yellow' title={yellow.title} text={yellow.text} />
                    </div>
                    <div className='board-piece col-12 col-md-4'>
                        <div className='right-postit'>
                            <PostIt color='blue' title={blue.title} text={blue.text} />
                        </div>
                    </div>
                </div>

            </div>
            <div className='text-center '>
                        <p>Here is a blurb about this app bla bla bla bla</p>
                    </div>
            <Card.Footer className='d-flex justify-content-around text-center p-0'>
                        <Card.Link href='#'>CODE</Card.Link>
                        <Card.Link href='#'>DEMO</Card.Link>
                    </Card.Footer>
            
            
        </div>
    );
}

export default ProjectBoard;