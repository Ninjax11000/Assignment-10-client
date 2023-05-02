import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefsCard = ({chef}) => {

    const {name, years_of_experience,number_of_recipes,image, likes,id}=chef
    return (
       <div>
         <Card className='mx-3'>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {years_of_experience} years of experience
          </Card.Text>
          <Card.Text>
            {number_of_recipes} recipes
          </Card.Text>
          <Card.Text>
            {likes} likes
          </Card.Text>
          
          <Link to={`/recipes/${id}`}><Button variant="danger">View Recipes </Button></Link>
        </Card.Body>
      </Card>
       </div>
    );
};

export default ChefsCard;