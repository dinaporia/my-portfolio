import React from 'react';

const PostIt = ({color, title, text}) => {
    let bgColor = 'bg-yellowPost';
    let txtColor = 'text-medium';
    switch (color) {
        case 'green':
            bgColor = 'bg-greenPost';
        break;
        case 'blue':
            bgColor = 'bg-bluePost';
        break;
        case 'purple':
            bgColor = 'bg-purplePost';
        break;
        default:
            bgColor = 'bg-yellowPost';
    }

    return (
        <div className='postit-wrap'>
            <div className={`postit-main ${bgColor} ${txtColor}`} >
                <h6 className={`postit-header ${bgColor}`}>
                    {title}
                </h6>
                <ul className='postit-bullets fa-ul'>
                    {text.map((item, index) => {
                        return <li key={index}><span class='fa-li'> <i className='far fa-sm fa-check-square'/></span>{item}</li>
                    })}
                </ul>
                
                <div className={`postit-inset ${bgColor}`} />
            </div>
        </div>
    );
}

export default PostIt;