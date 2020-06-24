import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";


const initialItem = {
  title: "",
  description: "",
  photo: '',
  
  
};

const UpdateForm = props => {
  //const { push } = useHistory();
  const { id } = useParams();
  const [item, setItem] = useState(initialItem);

  useEffect(() => {
    axios
      .get(`https://bwexpat-journal.herokuapp.com/api/posts/${id}`)
      .then(res => {
      
        setItem(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    if (ev.target.name === "metascore") {
      value = parseInt(value, 10);
    }

    setItem({
      ...item,
      [ev.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // make a PUT request to edit the item
    axios
      .put(`https://bwexpat-journal.herokuapp.com/api/posts/${id}`, item)
      .then(res => {
        // res.data
        props.setItems(res.data);
        // props.setRefresh(true);
        //push(`/movie-list/${id}`);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={changeHandler}
          placeholder="title"
          value={item.title}
        />
        <div className="baseline" />

        <input
          type="text"
          name="description"
          onChange={changeHandler}
          placeholder="description"
          value={item.director}
        />
        <div className="baseline" />

        <input
          type="text"
          name="photo"
          onChange={changeHandler}
          placeholder="Photo URL"
          value={item.imageUrl}
        />
        <div className="baseline" />

        

       

        <button className="md-button form-button">Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;