import React from 'react';


const HomeBanner = () => {
    
    return (
        <div style={
            {
                backgroundImage:'url("https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Homemade-Ground-Beef-Lasagna.png")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                height:'100vh' 
            }}className='d-md-flex  my-5 align-items-center '>
            <div className='w-50  px-5'>
            <div style={{backgroundColor:"rgba(249, 235, 0, 1)"}} className='rounded'>
            <h1 className='text-black fw-bold mx-2'>Welcome to Our Italian Recipe Website</h1>
            </div>
            <p className='text-white'>
              Discover the flavors of Italy with our authentic recipes, prepared by our skilled chefs with years of experience.
            </p>
            </div >
            <div  className=' px-5'>
                <img className='w-100' src="https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Homemade-Ground-Beef-Lasagna.png" alt="" />
            </div>
        </div>
    );
};

export default HomeBanner;