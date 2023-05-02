import React from 'react';
import { Button, Card } from 'react-bootstrap';

const RecipeCard = ({ recipe }) => {

    const { name, ingredients, cooking_method, rating } = recipe;
    console.log(typeof ingredients);
    return (
        <Card className='w-75 mt-3 mx-auto'>
            <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    This classic Italian pasta dish is made with {ingredients}. It's quick and easy to make, perfect for a busy weeknight dinner.
                </Card.Text>
                <Card.Text>
                    <strong>Ingredients:</strong>
                    <ul>
                        {ingredients.map((item, index) => (
                            <li key={index}>{item.trim()}</li>
                        ))}
                    </ul>
                </Card.Text>
                <Card.Text>
                    <strong>Cooking Method:</strong>
                    <ol>
                        {cooking_method.split('.').map((step, index) => (
                            <li key={index}>{step.trim()}</li>
                        ))}
                    </ol>
                </Card.Text>
                <Card.Text>
                    <strong>Rating:</strong> {rating}
                </Card.Text>
                <Button variant="danger" className="me-2">
                    Add to Favorites
                </Button>
            </Card.Body>
        </Card>
    );
};

export default RecipeCard;