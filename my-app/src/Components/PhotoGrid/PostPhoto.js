import React from 'react';

function PostPhoto(props){
   const {details} = props;

   return(
       <div className='PostPhoto'>
           <img src={details.image} alt={details.title}/>
       </div>
   )
}

export default PostPhoto;