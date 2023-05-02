import React from 'react';
import { CardGroup, Col } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';

const Recipes = () => {
    const recipes =useLoaderData();
    console.log(recipes);
    return (
        <div>
           <div className=' d-flex flex-column justify-content-center '>
           
                
                {
                    recipes.map(recipe=>  <RecipeCard 
                        key={recipe.chef_id}
                        recipe={recipe}></RecipeCard> )
                }
               
           </div>
             
        </div>
    );
};

export default Recipes;