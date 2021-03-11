import React from 'react';
import { Carousel, Card } from 'react-bootstrap';

import { PostIt } from './common/';

const ProjectBoard = ({project, featured = false}) => {
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

    return (
        <div className='board'>

            {featured && <h6 className='featured'>Featured Project</h6> }
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
                        <p className='mb-1'>{blurb}</p>
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
                <Card.Link href={links.demo} target="_blank">DEMO</Card.Link>
            </Card.Footer>
        </div>
    );
}

export default ProjectBoard;