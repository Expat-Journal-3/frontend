import React, {useState, useEffect} from 'react';
import PostPhoto from './PostPhoto';
import axios from 'axios';
function PhotoGrid(){
    const [photo, setPhoto]=useState([])
    useEffect(()=>{
        axios.get('https://bwexpat-journal.herokuapp.com/api/posts')
        .then(res=>{
          setPhoto([...photo, res.data])
        })
        .catch(err=>{
          console.log(err)
        })
    },[])
     
     return (
        <div className='PhotoGrid'>
            {photo.map((data)=>{
             return <PostPhoto details = {data}/>
            })}
        </div>
    )
}
export default PhotoGrid;