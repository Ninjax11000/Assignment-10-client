import React from 'react';


const HomeBanner = () => {
    return (
        <div className='d-md-flex bg-warning  my-5 align-items-center '>
            <div className='w-50  px-5'>
            <h1 className='text-white'>Welcome to Our Italian Recipe Website</h1>
            <p className='text-secondary'>
              Discover the flavors of Italy with our authentic recipes, prepared by our skilled chefs with years of experience.
            </p>
            </div>
            <div className=' px-5'>
                <img className='w-100' src="https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Homemade-Ground-Beef-Lasagna.png" alt="" />
            </div>
        </div>
    );
};

export default HomeBanner;