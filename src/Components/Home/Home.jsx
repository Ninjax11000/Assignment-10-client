import React, { useEffect, useState } from 'react';
import ChefsCard from '../ChefsCard/ChefsCard';
import { CardGroup, Col, Row } from 'react-bootstrap';

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
            <h2>All chefs</h2>
            <CardGroup>
                
            {
                chefs.map(chef=> (<Col key={chef.id}lg={6} className="mb-3 "><ChefsCard 
                    chef={chef}></ChefsCard></Col> ))
            }
            </CardGroup>
           
        </div>
    );
};

export default Home;