import React from 'react';
import {CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import { Link } from "react-router-dom";
function Post(props) {
  const {details} = props
  return (
    <Link to={`/we_are_in/post/${details.id}`}>
      <div className='card'>
                <CardImg top width="100%" src={details.photo_url} alt={details.title}/>
                <CardBody>
                    <CardTitle tag='h3'> {details.title}</CardTitle>
                    <CardText> {details.description}</CardText>
                </CardBody>
    </div>
    </Link>
  )
}
export default Post;