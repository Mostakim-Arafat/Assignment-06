import React from 'react';
import { use } from 'react';
import Card from './Card';

const CardContainer = ({jsonDataPromise}) => {
    const productList = use(jsonDataPromise)
    console.log(productList)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 w-11/12 mx-auto'>
            {
                productList.map( product => <Card product={product} key={product.id}></Card>)
            }
        </div>
    );
};

export default CardContainer;