import React from 'react';
import { Link } from "react-router-dom";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

function Post(props) {
  const {details} = props

  return (
    <Link to={`/we_are_in/posts/${details.id}`}>
      <div className='card'>
        <Card>
          <CardImg top width="100%" src={details.photo_url} alt={details.title}/>
          <CardBody>
            <CardTitle>{details.title}</CardTitle>
            <CardText>{details.description}</CardText>
          </CardBody>
        </Card>
      </div>
    </Link>
  )
} 

export default Post;