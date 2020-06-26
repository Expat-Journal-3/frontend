import React from 'react';
import { Link } from "react-router-dom";


function Post(props) {
  const {details} = props

  return (
    <Link to={`/we_are_in/posts/${details.id}`}>
      <div className='card'>
        <p>test</p>
        <h2>{details.title}</h2>
        <img top width="100%" src={details.photo_url} alt={details.title}/>
      </div>
    </Link>
  )
} 

export default Post;