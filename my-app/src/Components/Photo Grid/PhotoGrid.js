import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PostPhoto from './PostPhoto';
import logo from '../../Assets/example.jpg'
import { fetchPosts } from '../../store/actions/getAction.js';

const PhotoGrid = props => {

    useEffect(() => {

        props.fetchPosts();
    }, []);
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
            {props.PhotoGird.map((data) => {
                return <PostPhoto details={data} />
            })}
        </div>
    )
}
const mapStateToProps = state => {
    console.log(state);
    return {
      PhotoGrid: state.PhotoGrid
    };
  };
  
  export default connect(
    mapStateToProps,
    { fetchPosts }
  )(PhotoGrid);