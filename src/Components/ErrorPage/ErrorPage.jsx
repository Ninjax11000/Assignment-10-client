import React from 'react';
import error from '/404.png'
const ErrorPage = () => {
    return (
        <div className='text-center'>
            <h2 className='text-5xl font-bold mx-auto my-8 py-8'> Error!!!! 404 not found!</h2>
            <img src={error} alt="" />
        </div>
    );
};

export default ErrorPage;