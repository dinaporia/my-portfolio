import React from 'react';

const PostIt = ({color, title, text}) => {
    let bgColor = 'bg-yellowPost';
    let txtColor = 'text-primary';
    switch (color) {
        case 'green':
            bgColor = 'bg-greenPost';
            txtColor = 'text-red';
        break;
        case 'blue':
            bgColor = 'bg-bluePost';
            txtColor = 'text-yellow';
        break;
        case 'purple':
            bgColor = 'bg-purplePost';
            txtColor = 'text-white';
        break;
        default:
            bgColor = 'bg-yellowPost';
            txtColor = 'text-primary';
    }

    return (
        <div className='postit-wrap'>
            <div className={`postit-main ${bgColor} ${txtColor}`} >
                <h6 className={`postit-header ${bgColor}`}>
                    {title}
                </h6>
                <ul className='postit-bullets'>
                    {text.map((item, index) => {
                        return <li key={index}><i className='fa fa-sm fa-check mr-2'/>{item}</li>
                    })}
                </ul>
                
                <div className={`postit-inset ${bgColor}`} />
            </div>
        </div>
    );
}

export default PostIt;