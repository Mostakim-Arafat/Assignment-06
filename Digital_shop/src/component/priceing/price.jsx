import React from 'react';
import { use } from 'react';
import PriceCard from './priceCard';
const Price = ({pricefetch}) => {
   const pricedata = use(pricefetch)
   console.log(pricedata)
    return (
        <div className='py-9 my-3.5 text-center space-y-3'>
            <h1 className='text-4xl font-bold'>Simple, Transparent Pricing</h1>
            <p className='text-[#627382] text-sm mb-10'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 w-11/12 mx-auto'>
            {
                pricedata.map( i => <PriceCard data={i}></PriceCard>)
            }
            </div>
        </div>
    );
};

export default Price;