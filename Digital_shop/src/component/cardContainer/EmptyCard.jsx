import React from 'react';
import { GiShoppingCart } from "react-icons/gi";

const EmptyCard = () => {
    return (
        <div className='w-11/12 mx-auto rounded-2xl shadow p-5'>
            <h1 className='text-2xl'>Your Cart</h1>
            <div className='flex justify-center items-center py-20'>
                <div>
                    <GiShoppingCart />
                    <p>Your Cart is empty</p>
                </div>
            </div>
        </div>
    );
};

export default EmptyCard;