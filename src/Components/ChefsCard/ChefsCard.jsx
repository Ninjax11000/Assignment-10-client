import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ChefsCard = ({chef}) => {

    const {name, years_of_experience,number_of_recipes,image, likes}=chef
    return (
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
          <Button variant="danger">View Recipes</Button>
        </Card.Body>
      </Card>
    );
};

export default ChefsCard;