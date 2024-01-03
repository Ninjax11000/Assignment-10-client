import React, { useState } from 'react';
import { Button, Card, Toast } from 'react-bootstrap';


const RecipeCard = ({ recipe }) => {
    const [favourite, setFavourite] = useState(false);
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);
    const handleDisable = () => {
        setFavourite(true);
    }

    const { name, ingredients, cooking_method, rating, image } = recipe;
    //console.log(typeof ingredients);
    return (
        <Card className='w-75 mt-3 mx-auto'>
            <Card.Img variant="top" src={image} />
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
                <Button onClick={handleDisable} variant="danger" className="me-2" disabled={favourite}>
                    Add to Favorites
                </Button>
                {favourite && 
                <Toast show={showA} onClose={toggleShowA}>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">Recipe</strong>
                        <small>Just Now</small>
                    </Toast.Header>
                    <Toast.Body>Added to favourites!!!</Toast.Body>
                </Toast>}
            </Card.Body>
        </Card>
    );
};

export default RecipeCard;