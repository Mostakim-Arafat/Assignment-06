import React from 'react';
import Check from '../../assets/Check.png'
import Button from '../../UI/button';


const PriceCard = ({data}) => {
   
    return (
        <div className={`relative p-5 shadow rounded-2xl space-y-3 flex flex-col h-full ${data.plan === 'Pro' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white': ''}`}>
           {
                data.plan === 'Pro' ? <div className='bg-[#FEF3C6]  text-[#BB4D00] w-30 rounded-2xl py-3 px-1 absolute -top-8 left-35'> 
                 <h1>Most Popular</h1>
                    </div> : ''

           } 
              
            <h1 className='font-bold'>{data.plan}</h1>
            <p className={`text-[#627382] ${data.plan === 'Pro' ? 'text-white':''}`}>{data.description}</p>

            <p> <span className='font-bold'>${data.price} </span> {data.period}</p>
            <div className='flex flex-col  items-start'>
            {
                data.features.map( (item) => <li key={data.id} className='flex items-center justify-center gap-1'><img src={Check} /> {item}</li>)
            }
            </div>

           {data.plan === 'Pro' ? <button className='btn bg-white text-blue-500 rounded-2xl'>Buy Now</button> : <Button text='Buy Now'></Button>}

        </div>
    );
};

export default PriceCard;