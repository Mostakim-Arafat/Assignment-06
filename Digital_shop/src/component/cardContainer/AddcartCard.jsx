import React from 'react';

const AddcartCard = ({cartitem,handleRemove}) => {

    
    
    return (
        <div className='bg-base-200 rounded-2xl flex justify-between items-center p-4 mb-3 '>
            <div className='flex items-center gap-2'>
                <div className='h-8 w-8 rounded-full bg-white flex justify-center items-center'>
              <p>{cartitem.icon}</p>  
                </div>
                <div>
                    <h1 className='font-bold'>{cartitem.name}</h1>
                    <p className='text-sm'>$ {cartitem.price}</p>
                </div>
            </div>
            <div>
                <button className='text-red-700 btn' onClick={ () => handleRemove(cartitem.id)}>Remove</button>
            </div>
        </div>
    );
};

export default AddcartCard;