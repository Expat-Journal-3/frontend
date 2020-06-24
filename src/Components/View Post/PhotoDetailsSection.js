import React from 'react';

function PhotoDetailsSection(props){
    const {details}= props
    return (
        <div className='PhotoDetails'>
            <h2>{details.username}</h2>
            <p className='postDescription'>{details.description}</p>
            <p className='postLocation'>{details.location}</p>
        </div>
    )
}

export default PhotoDetailsSection;