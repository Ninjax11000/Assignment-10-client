import React, { useEffect, useState } from 'react';
import ChefsCard from '../ChefsCard/ChefsCard';
import { CardGroup, Col, Row } from 'react-bootstrap';
import HomeBanner from '../HomeBanner/HomeBanner';
import Team from '../Team/Team';
import NewRecipes from '../NewRecipes/NewRecipes';

const Home = () => {
    const [chefs, setChefs]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res=>res.json())
        .then(data=>setChefs(data))
        .catch(error=>console.log(error))
    },[])

    return (
        <div>
            <HomeBanner></HomeBanner>
            <h2 className='text-center my-3 py-3'>All chefs</h2>
           <div>
            <CardGroup >
                
                {
                    chefs.map(chef=> (<Col key={chef.id}lg={6} className="mb-3"><ChefsCard 
                        chef={chef}></ChefsCard></Col> ))
                }
                </CardGroup>
           </div>

           <Team></Team>
           <NewRecipes></NewRecipes>
           
        </div>
    );
};

export default Home;