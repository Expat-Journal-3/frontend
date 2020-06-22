import React from 'react';
import PhotoDetailsSection from './PhotoDetailsSection';
import PostPhoto from '../Photo Grid/PostPhoto'
import logo from '../../Assets/example.jpg'

function Post(){
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
        <div className='Post'>
            <PhotoDetailsSection details={exampleData[1]}/>
            <PostPhoto details={exampleData[1]}/>
        </div>
    )
}

export default Post;