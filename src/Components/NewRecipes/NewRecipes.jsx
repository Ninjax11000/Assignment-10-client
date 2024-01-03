import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewRecipes = () => {
    const [newRecipes, setNewRecipes] = useState([]);
    useEffect(() => {
        fetch('https://italian-taste-server1-o8ig9yvfa-ninjax11000.vercel.app/newrecipes')
            .then(res => res.json())
            .then(data => setNewRecipes(data))
            .catch(error => console.log(error))
    }, []);
       console.log(newRecipes[0]?.id);
    return (
        <div className=' mb-5'>

            <hr className=' border border-dark border-2 w-50 mx-auto' />
            <h2 className='text-center py-2'>Try Our New Recipes!</h2>
            <hr className='mb-5 border border-dark border-2 w-50 mx-auto' />
            <Container fluid="md">
                <Row>
                    <Col sm={12} md={3}>
                        <div className=' py-5 px-3 text-center mx-auto'>
                            <h3 className='my-2'>{newRecipes[0]?.name}</h3>
                            <img className='rounded-circle w-100 h-100' src={newRecipes[0]?.image} alt="" />
                            <Link to={`/newrecipe/${newRecipes[0]?.id}`}><button className='btn btn-warning my-3 fw-bold'>View Recipe</button></Link>
                        </div>
                    </Col>
                    <Col sm={12} md={3}>
                        <div className=' py-5 px-3 text-center mx-auto'>
                            <h3 className='my-2'>{newRecipes[1]?.name}</h3>
                            <img className='rounded-circle w-100 h-100' src={newRecipes[1]?.image} alt="" />
                            <Link to={`/newrecipe/${newRecipes[1]?.id}`}><button className='btn btn-warning my-3 fw-bold'>View Recipe</button></Link>
                        </div>
                    </Col>
                    <Col sm={12} md={3}>
                        <div className=' py-5 px-3 text-center mx-auto'>
                            <h3 className='my-2'>{newRecipes[2]?.name}</h3>
                            <img className='rounded-circle w-100 h-100' src={newRecipes[2]?.image} alt="" />
                            <Link to={`/newrecipe/${newRecipes[2]?.id}`}><button className='btn btn-warning my-3 fw-bold'>View Recipe</button></Link>
                        </div>
                    </Col>
                    <Col sm={12} md={3}>
                        <div className=' py-5 px-3 text-center mx-auto'>
                            <h3 className='my-2'>{newRecipes[3]?.name}</h3>
                            <img className='rounded-circle w-100 h-100' src={newRecipes[3]?.image} alt="" />
                            <Link to={`/newrecipe/${newRecipes[3]?.id}`}><button className='btn btn-warning my-3 fw-bold'>View Recipe</button></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default NewRecipes;