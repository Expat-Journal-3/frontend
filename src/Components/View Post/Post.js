import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';



function Post({post}) {
  const { photo_url,title,description } = post

  return (
      <div className='card'>
            <Card >
                <CardImg top width="100%" src={photo_url} alt={title}/>
                <CardBody>
                    <CardTitle> title: {title}</CardTitle>
                    <CardText> description: {description}</CardText>
                </CardBody>
            </Card>
    </div>
  )
} 

export default Post;