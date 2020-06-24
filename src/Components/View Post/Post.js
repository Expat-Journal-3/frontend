import React from 'react';
import PhotoDetailsSection from './PhotoDetailsSection';
import PostPhoto from '../Photo Grid/PostPhoto'
import logo from '../../Assets/example.jpg'
import { Link } from "react-router-dom";

function Post(props){
    const exampleData = [
        {
        id: 0,
        image: logo,
        title: 'example',
        username: 'Ehuntwork',
        description: 'blahblahba hcowueo owubcoo owuweovbodub wjwdksdbwe !!!!',
        location: 'Not here, USA',
        },
        {
        id: 1,
        image: logo,
        title: 'exampleTwo',
        username: 'Ehuntwork',
        description: 'blahblahba hcowueo owubcoo owuweovbodub wjwdksdbwe !!!!',
        location: 'Not here, USA',
        },
    ]
    return (
        //<Link to={`/post/${details.id}`}>
        <div className='Post'>
            <PhotoDetailsSection details={exampleData[1]}/>
            <PostPhoto details={exampleData[1]}/>
        </div>
       // </Link>
    )
}

export default Post;