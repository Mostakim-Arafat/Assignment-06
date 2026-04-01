import React from 'react';
import Check from '../../assets/Check.png'
import Button from '../../UI/button';

const Card = ({product}) => {
    return (
        <div className='p-5 shadow rounded-2xl space-y-3 flex flex-col'>
            <div className='flex justify-end'>
                <div className={`ml-auto px-3 py-1 rounded-3xl w-fit ${product.tag === 'Best Seller' ? 'bg-[#FEF3C6]  text-[#BB4D00]' : product.tag === 'Popular' ? 'bg-[#E1E7FF] text-purple-400' : 'bg-[#DBFCE7] text-[#0A883E]'}`}>
                {product.tag}
                </div>
            </div>
            
            <div className='border-2 rounded-full w-fit p-1 border-gray-100'>
                {product.icon}
            </div>
            <h1 className='font-bold'>{product.name}</h1>
            <p className='text-[#627382]'>{product.description}</p>

            <p> <span className='font-bold'>${product.price} </span> {product.period}</p>
            <div className='flex flex-col  items-start'>
            {
                product.features.map( (item,index) => <li key={index} className='flex items-center justify-center gap-1'><img src={Check} /> {item}</li>)
            }
            </div>

            <Button text='Buy Now'></Button>

        </div>
    );
};

export default Card;