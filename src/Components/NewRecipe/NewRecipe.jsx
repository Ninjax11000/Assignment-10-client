import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';
import { Col, Container, Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const NewRecipe = () => {
    const [chef, setChef] = useState([]);
    const recipe = useLoaderData();
    console.log(recipe);
    

    useEffect(() => {
        fetch(`https://italian-taste-server1-o8ig9yvfa-ninjax11000.vercel.app/chefs/${recipe?.chef_id}`)
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.log(error))
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className='container d-lg-flex bg-warning rounded align-items-center my-3'>
                <Container>
                    <Row>
                        <Col sm={12} md={6}>
                            <div>
                                <LazyLoadImage className='w-100 rounded my-3' src={chef.picture} alt="" />
                            </div>
                        </Col>
                        <Col sm={12} md={6} className='d-flex align-items-center'>
                            <div >
                                <div >
                                    <h2>{chef.name}</h2>
                                    <p>{chef.short_bio}</p>
                                    <h4>{chef.likes} likes</h4>
                                    <h4>{chef.number_of_recipes} recipes</h4>
                                    <h4>{chef.years_of_experience} years of experience!</h4>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>



            </div>

            <RecipeCard
                key={recipe.chef_id}
                recipe={recipe}
            >
            </RecipeCard>
        </div>
    );
};

export default NewRecipe;