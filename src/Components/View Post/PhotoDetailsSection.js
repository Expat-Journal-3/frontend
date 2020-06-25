import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import {axiosWithAuth} from "../../axiosWithAuth.js"; 


export default function PhotoDetailsSection(props){
    const [post, setPost] = useState();
    const [edit, setEdit] = useState(false);
    const { id } = useParams();
    const history = useHistory();
    console.log(post);
  
    useEffect(() => {
      axiosWithAuth()
        .get(`api/posts/${id}`)
        .then((res) => {
          setPost(res.data);
        })
        .catch((err) => console.log(err));
    }, [id]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axiosWithAuth()
        .put(`/api/posts/${id}`, post )
        .then((res) => {
          console.log(res);
          history.push("/posts");
        })
        .catch((err) => console.log(err));
    };
  
    const handleDelete = () => {
      axiosWithAuth()
        .delete(`/api/posts/delete/${id}`)
        .then((res) => {
            history.push("/posts");
        });
    };
  
    const handleChange = (e) => {
      setPost({
        ...post,
        [e.target.name]: e.target.value,
      });
    };
    const {details}= props
    return (
        <div className='PhotoDetails'>
            <h2>{details.username}</h2>
            <p className='postDescription'>{details.description}</p>
            <p className='postLocation'>{details.location}</p>
        
        {!edit && <button onClick={() => setEdit(true)}>Edit Post</button>}
        {edit && (
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <br/>
            <br/>
            <input
              name="post_title"
              value={post && post.title}
              onChange={handleChange}
            />
            <br/>
            <br/>
            <label>Image Url</label>
            <br/>
            <br/>
            <input
              name="image"
              value={post && post.photo_url}
              onChange={handleChange}
            />
            <br/>
            <br/>
            <label>Description</label>
            <br/>
            <br/>
            <input
              name="description"
              value={post && post.description}
              onChange={handleChange}
            />
            
            
            <br/>
            <br/>
            <button type="submit">Save Changes</button>
            <br/>
            <br/>
            <button onClick={handleDelete}>Delete</button>
          </form>
        )}
        </div>
    )
    }
