import React from 'react';

function Post(props) {
  const {details} = props

  return (
        <img src={details.photo_url} alt={details.title}/>
  )
} 

export default Post