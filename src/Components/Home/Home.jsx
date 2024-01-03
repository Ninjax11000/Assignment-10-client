import React, { useEffect, useState } from 'react';
import ChefsCard from '../ChefsCard/ChefsCard';
import { CardGroup, Col, Row } from 'react-bootstrap';
import HomeBanner from '../HomeBanner/HomeBanner';
import Team from '../Team/Team';
import NewRecipes from '../NewRecipes/NewRecipes';

const Home = () => {
    const [chefs, setChefs]=useState([]);
    // load the chefs
    useEffect(()=>{
        fetch('https://italian-taste-server1-o8ig9yvfa-ninjax11000.vercel.app/chefs')
        .then(res=>res.json())
        .then(data=>setChefs(data))
        .catch(error=>console.log(error))
        
    },[])

    return (
        <div >
            <HomeBanner></HomeBanner>
            <NewRecipes></NewRecipes>
            <hr className=' border border-dark border-2 w-50 mx-auto'/>
            <h2 className='text-center py-2'>All Chefs</h2>
            <hr className='mb-5 border border-dark border-2 w-50 mx-auto'/>
            {/* <h2 className='text-center my-3 py-3'>All chefs</h2> */}
           <div>
            <CardGroup >
                
                {
                    chefs.map(chef=> (<Col key={chef.id}lg={4} className="mb-3"><ChefsCard 
                        chef={chef}></ChefsCard></Col> ))
                }
                </CardGroup>
           </div>

           <Team></Team>
           
           
        </div>
    );
};

export default Home;