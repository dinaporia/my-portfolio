import React from 'react';
import { ProjectBoard } from './common';

const Projects = (props) => {
    const smarTask = {
        green: {
            title: "Features",
            text: ['clickable', 'fast', 'this', 'that']
        },
        yellow: {
            title: 'Technologies',
            text: ['React Native', 'Redux Toolkit', 'Expo SDK']
        },
        blue: {
            title: 'Plans',
            text: ['Scheduling', 'Server']
        }
    };



    return (
        <div>
            <ProjectBoard 
                project={smarTask}

            />
        </div>
    );
}

export default Projects;