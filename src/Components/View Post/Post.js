import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

function Post(props) {
  const { details } = props

  if (!details) {
    return <h3>Getting Posts...</h3>
  }

  return (
      <div className='card'>
            <Card >
                <CardImg top width="100%" src={details.image} alt={details.title}/>
                <CardBody>
                    <CardTitle> title: {details.title}</CardTitle>
                    <CardText> description: {details.description}</CardText>
                </CardBody>
            </Card>
    </div>
  )
} 

export default Post