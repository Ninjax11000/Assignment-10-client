import React from 'react';

const Member = ({t}) => {
    const {name,picture, designation}=t;
    return (
        <div className='w-25 text-center py-5'>
          <h3 className='my-2'>{name}</h3>
          <img className='rounded-circle w-75 h-75' src={picture} alt="" /> 
          <h4 className='my-2'>{designation}</h4> 
        </div>
    );
};

export default Member;