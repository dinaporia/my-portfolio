import React from 'react';
import { Card } from 'react-bootstrap';
import PostIt from './PostIt';



const ProjectBoard = ({project}) => {
    const {green, yellow, blue} = project;
    return (
        <div className='bg-light row'>
        <div className='col-12 col-md-4'>
            <PostIt color='green' title={green.title} text={green.text} />
        </div>
        <div className='col-12 col-md-4'>
            <PostIt color='yellow' title={yellow.title} text={yellow.text} />
        </div>
        <div className='col-12 col-md-4'>
            <PostIt color='blue' title={blue.title} text={blue.text} />
        </div>
            
        </div>
    );
}

export default ProjectBoard;