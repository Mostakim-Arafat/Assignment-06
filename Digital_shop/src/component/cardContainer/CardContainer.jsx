import React from 'react';
import { use } from 'react';
import Card from './Card';

const CardContainer = ({jsonDataPromise,cart,setCart}) => {
    const productList = use(jsonDataPromise)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 w-11/12 mx-auto'>
            {
                productList.map( product => <Card product={product} key={product.id} cart={cart} setCart={setCart}></Card>)
            }
        </div>
    );
};

export default CardContainer;