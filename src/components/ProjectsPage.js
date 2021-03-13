import React, { Fragment } from 'react';

import { ProjectCard } from './common';
import ProjectBoard from './ProjectBoard';

const Projects = () => {

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
                text: ['Appointment scheduling', 'Recurring tasks', 'User-defined categories']
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
        <Fragment>
        <div className='bg-medium row pt-6 px-3'>
            <div className='col-12 px-2 py-3 pb-sm-5 px-sm-5'>
            <h4 className='wrapped-title text-light'>Featured Project</h4>
                <ProjectBoard 
                    project={smarTask}
                    featured
                />
            </div>
        </div>
        <div className='bg-medium row'>
        <h4 className='wrapped-title text-light mb-0'>Other Work</h4>
        </div>
        <div className='bg-medium row pb-7 px-3 px-lg-5 px-xl-7'>
            <div className='col-12 col-lg-4 py-4 p-sm-5 px-md-6 px-lg-4'>
                <ProjectCard 
                    header='Cinema Art'
                    subTitle='Responsive Educational Website'
                    image={{url: 'images/cinema-art.jpg', alt: 'mockup of website on 3 different screen sizes'}}
                    html sass bootstrap js
                    code='https://github.com/dinaporia/cinema-art'
                    demo='https://dinamuhic.com/cinema-art/index.html'
                />
            </div>
            <div className='col-12 col-lg-4 py-4 p-sm-5 px-md-6 px-lg-4'>
                <ProjectCard 
                    header="I Know Film!"
                    subTitle='Jeopardy-style Trivia Game'
                    image={{url: 'images/film-trivia.jpg', alt: 'mockup of game on laptop and tablet'}}
                    html css js
                    code='https://github.com/dinaporia/cinema-art/blob/main/js/games.js'
                    demo='https://dinamuhic.com/cinema-art/learning/games.html'
                />
            </div>
            <div className='col-12 col-lg-4 py-4 p-sm-5 px-md-6 px-lg-4'>
                <ProjectCard 
                    header="My Portfolio Site"
                    subTitle="Responsive Single Page App"
                    image={{url: 'images/portfolio.jpg', alt: 'homepage of this site with a you-are-here pointer'}}
                    react sass bootstrap js
                    code='https://github.com/dinaporia/my-portfolio'
                    modal={{
                        title: 'You\'re looking at it!', 
                        body: 'This website was created using React and Sass, with a dash of Bootstrap. It features 2 types of reusable project-demo components, a customizable, Sass-styled PostIt component, and a css-animated navigation bar component. The entire site is fully responsive - feel free to resize your browser to check it out!'
                        }}
                />
            </div>           
        </div>
        </Fragment>
    );
}

export default Projects;