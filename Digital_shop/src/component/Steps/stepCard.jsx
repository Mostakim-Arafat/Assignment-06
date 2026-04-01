import React from 'react';


const StepCard = ({num,img,h1,p}) => {
    return (
        <div>
            <div className='p-6 space-y-5 text-center rounded-2xl shadow'>
                <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-8 h-8 rounded-full ml-auto  text-white flex justify-center items-center'><span>{num}</span></div>
                <div className='flex items-center justify-center'>
                <div className='rounded-full bg-purple-200 w-fit p-2 flex items-center justify-center '>
                   
                        <img src={img} alt="" />
        
                </div>
                </div>
                <h1 className='font-bold text-2xl'>{h1}</h1>
                <p className='text-[#627382] mb-12'>{p}</p>

            </div>
        </div>
    );
};

export default StepCard;