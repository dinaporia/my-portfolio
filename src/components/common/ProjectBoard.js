import React from 'react';
import PostIt from './PostIt';


const ProjectBoard = ({project}) => {
    const {green, yellow, blue} = project;
    return (
        <div className='bg-light'>
            <PostIt color='green' title={green.title} text={green.text} />
            <PostIt color='yellow' title={yellow.title} text={yellow.text} />
            <PostIt color='blue' title={blue.title} text={blue.text} />
        </div>
    );
}

export default ProjectBoard;