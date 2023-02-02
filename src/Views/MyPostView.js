import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
function MyPostView({val}) {
    const {id,title,content,createdAt} = val
  return (
    <>
       <Card className='m-4'>
      <Card.Header>{val.id}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {content}
        </Card.Text>
        <NavLink to="/post/:id">
        <Button variant="outline-dark" size="sm">Show Post</Button>
        </NavLink>
      </Card.Body>
    </Card>

    </>
  )
}

export default MyPostView

