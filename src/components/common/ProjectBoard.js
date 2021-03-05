import React from 'react';
import { Carousel } from 'react-bootstrap';
import PostIt from './PostIt';



const ProjectBoard = ({project, featured = false}) => {
    const {green, yellow, blue} = project;
    return (
        <div className='board'>
            {featured && <h6 className='featured'>Featured Project</h6> }
            <h4 className='text-center text-dark'>SmarTask Mobile App</h4>
           
            <div className='container board-container'>
                <div className='row'>
                    <div className='col-12'>
                    <Carousel>
                        <Carousel.Item>
                            <img 
                                className='d-block w-100'
                                src='images/placeholder.png'
                                alt='first slide'
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                                className='d-block w-100'
                                src='images/placeholder.png'
                                alt='first slide'
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                                className='d-block w-100'
                                src='images/placeholder.png'
                                alt='first slide'
                            />
                            
                        </Carousel.Item>
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
           
            
            
        </div>
    );
}

export default ProjectBoard;