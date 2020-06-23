import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import PostPhoto from './PostPhoto';
import axios from 'axios';
import { fetchPosts } from '../../store/actions/getAction.js';

const PhotoGrid = props =>{
    useEffect(()=>{
        props.fetchPosts();
       
    },[])
     
     return (
        <div className='PhotoGrid'>
            {props.photos.map((data)=>{
             return <PostPhoto details = {data}/>
            })}
        </div>
    )
}
const mapStateToProps = state => {
    console.log(state);
    return {
      photos: state.photos
    };
  };
  
  export default connect(
    mapStateToProps,
    { fetchPosts }
  )(PhotoGrid);