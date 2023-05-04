import React, { useEffect, useState } from 'react';
import Member from '../Member/Member';

const Team = () => {
    const [team, setTeam]=useState([]);

    useEffect(()=>{
        fetch('https://italian-taste-server1-ninjax11000.vercel.app/team')
        .then(res=>res.json())
        .then(data=>setTeam(data))
        .catch(error=>console.log(error))
    },[])
    return (
        <div>
            <div className='my-5'>
                <h3  className='text-center'>Our Team</h3>
            </div>
            <div className='d-lg-flex bg-warning'>
               {
                team.map(t=> <Member
                                key={t.name}
                                t={t}
                
                ></Member>)
               }
                
            </div>
        </div>
    );
};

export default Team;