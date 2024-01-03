import React, { useEffect, useState } from 'react';
import Member from '../Member/Member';
import { Container, Row } from 'react-bootstrap';

const Team = () => {
    const [team, setTeam] = useState([]);

    // load team members

    useEffect(() => {
        fetch('https://italian-taste-server1-o8ig9yvfa-ninjax11000.vercel.app/team')
            .then(res => res.json())
            .then(data => setTeam(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <div className='my-5'>
                <hr className=' border border-dark border-2 w-50 mx-auto' />
                <h2 className='text-center py-2'>Our Team</h2>
                <hr className='mb-5 border border-dark border-2 w-50 mx-auto' />
                {/* <h3  className='text-center'>Our Team</h3> */}
            </div>
          
            <Container className='bg-warning'>
                <Row>
                    
                    {
                         team.map(t => <Member
                            key={t.name}
                            t={t}
    
                        ></Member>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Team;