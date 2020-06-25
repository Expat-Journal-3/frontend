import React,{ useEffect} from 'react';
import { connect } from 'react-redux';
import Post from '../View Post/Post';
import { fetchPosts } from '../../store/actions/getAction.js';

const PhotoGrid = props =>{
    useEffect(()=>{
        props.fetchPosts();
       
    },[])
    console.log(props)

     return (
        <div className='PhotoGrid'>
            {props.photos.map((data)=>{
             return <Post details = {data}/>
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