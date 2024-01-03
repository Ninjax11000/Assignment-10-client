import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMail } from "react-icons/hi";
import { Col } from 'react-bootstrap';

const Member = ({ t }) => {
  const { name, picture, designation } = t;
  return (
    <Col sm={12} md={3} className='my-2 pb-3'>
      <div className='w-100 h-100 text-center py-5 mx-auto'>
        <h3 className='my-2'>{name}</h3>
        <img className='rounded-circle w-75 h-75 border border-dark' src={picture} alt="" />
        <h4 className='my-2'>{designation}</h4>
        <Link className='text-decoration-none text-secondary'>email <HiOutlineMail /> </Link>
      </div>
    </Col>

  );
};

export default Member;