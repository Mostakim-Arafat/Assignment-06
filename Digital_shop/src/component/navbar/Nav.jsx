import React from 'react';
import { FaCarSide } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Button from '../../UI/button';

const Nav = () => {
    return (
        <div className='bg-base-100 shadow-sm flex  justify-around items-center  my-3 p-2'>
            <div className='text-2xl font-bold'>
                 <h1>DigiTools</h1>
            </div>
            <div className='flex gap-2 font-semibold'>
                <p>Products</p>
                <p>Features</p>
                <p>Pricing</p>
                <p>Testimonials</p>
                <p>FAQ</p>
            </div>
            <div className='flex items-center gap-2'>
                <MdOutlineShoppingCart />
            <p> Login</p>
            
            <Button text='Get Started'></Button>

            </div>
                      
        </div>
    );
};

export default Nav;