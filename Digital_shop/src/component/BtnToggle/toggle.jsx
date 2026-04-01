import React from 'react';
import Button from '../../UI/button';

const Toggle = ({product,setProduct}) => {
    return (
        <div className='text-center mt-4 space-y-2 mb-2'>
            <h1 className='text-5xl font-bold'>Premium Digital Tools</h1>
            <p>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
            <div>
               
                <button className={`${product === 'product' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-3 py-1 rounded-3xl' : 'btn ml-4'}`} onClick={() => setProduct('product')}>product</button>
                <button className={`${product === 'cart' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-3 py-1 rounded-3xl' : 'btn ml-4'}`} onClick={() => setProduct('cart')}>Cart(2)</button>
            </div>
        </div>
    );
};

export default Toggle;