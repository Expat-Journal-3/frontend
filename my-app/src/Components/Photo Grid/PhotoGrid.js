import React from 'react';
import PostPhoto from './PostPhoto';
import logo from '../../Assets/example.jpg'

function PhotoGrid(){
    const exampleData = [
        {
        id: 0,
        image: logo,
        title: 'example'
        },
        {
        id: 1,
        image: logo,
        title: 'exampleTwo'
        },
    ]
    return (
        <div className='PhotoGrid'>
            {exampleData.map((data)=>{
             return <PostPhoto details = {data}/>
            })}
        </div>
    )
}
export default PhotoGrid;