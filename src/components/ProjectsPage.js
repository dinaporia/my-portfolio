import React from 'react';

import { ProjectCard } from './common';
import ProjectBoard from './ProjectBoard';

const Projects = (props) => {


    const smarTask = {
        title: 'SmarTask Mobile',
        subtitle: 'SmarTask takes care of organizing and scheduling your to-dos so you can focus on completing them!',
        blurb: 'SmarTask Mobile provides all the standard features of a to-do list app, along with an algorithm to automatically generate a daily schedule based on user preferences. Built with React Native, this app takes advantage of Redux for state management.',
        links: {
            code: 'https://github.com/dinaporia/smartask-mobile',
            demo: '#'
        },
        cards: {
            right: {
                title: "Features",
                text: ['Add detailed tasks', 'Personalize preferences', 'Sort and filter tasks', 'Automatically generate daily schedule']
            },
            middle: {
                title: 'Technologies',
                text: ['React Native', 'Redux Toolkit', 'React Animatable', 'Expo SDK']
            },
            left: {
                title: 'Plans',
                text: ['Appointment scheduling', 'Recurring Tasks', 'User-defined categories']
            }
        },
        images: [
            { src: 'images/smartask-slides/add.png', alt: 'Add a new task'},
            { src: 'images/smartask-slides/details.png', alt: 'Add or edit task details'},
            { src: 'images/smartask-slides/list.png', alt: 'View task list'},
            { src: 'images/smartask-slides/schedule.png', alt: 'View daily schedule'},
            { src: 'images/smartask-slides/settings.png', alt: 'Edit user settings'},
        ]
    };

    return (
        <div className='bg-medium row py-7 px-2'>
            <div className='col-12 p-5'>
                <ProjectBoard 
                    project={smarTask}
                    featured
                />
            </div>
            <div className='col-12 col-md-4 p-5 p-md-3'>
                <ProjectCard 
                    header='Cinema Art'
                    subTitle='Responsive Educational Website'
                    image={{url: 'images/cinema-art.jpg', alt: 'mockup of website on 3 different screen sizes'}}
                    html sass bootstrap js
                    code='https://github.com/dinaporia/cinema-art'
                    demo='https://dinamuhic.com/cinema-art/index.html'
                />
            </div>
            <div className='col-12 col-md-4 p-5 p-md-3'>
                <ProjectCard 
                    header="You Don't Know Film!"
                    subTitle='Jeopardy-style Trivia Game'
                    image={{url: 'images/film-trivia.jpg', alt: 'mockup of game on laptop and tablet'}}
                    html css js
                    code='https://github.com/dinaporia/cinema-art/blob/main/js/games.js'
                    demo='https://dinamuhic.com/cinema-art/learning/games.html'
                />
            </div>
            <div className='col-12 col-md-4 p-5 p-md-3'>
                <ProjectCard 
                        header="My Portfolio Site"
                        subTitle="Responsive Single Page App"
                        image={{url: 'images/portfolio.jpg', alt: 'homepage of this site with a you-are-here pointer'}}
                        react sass bootstrap js
                        code='https://github.com/dinaporia/my-portfolio'
                        
                    />
            </div>
                
        </div>
    );
}

export default Projects;