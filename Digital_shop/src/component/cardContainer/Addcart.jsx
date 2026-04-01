import React from 'react';
import AddcartCard from './AddcartCard';
import EmptyCard from './EmptyCard';

const Addcart = ({cart}) => {
    console.log(cart.length)
    return (
        <div>
            {
                cart.length > 0 ? <h1>you good bro</h1>  : <EmptyCard/>
            }
        </div>
    );
};

export default Addcart;