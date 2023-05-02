import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefsCard = ({chef}) => {

    const {name, years_of_experience,number_of_recipes,picture, likes,id}=chef
    return (
       <div>
         <Card className='mx-3 w-75'>
        <Card.Img variant="top" className='w-100' src={picture} />
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