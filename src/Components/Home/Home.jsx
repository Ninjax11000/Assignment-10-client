import React, { useEffect, useState } from 'react';

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
            {
                chefs.map(chef=> <p
                
                key={chef.id}>
                        {chef.name}

                </p>)
            }
        </div>
    );
};

export default Home;