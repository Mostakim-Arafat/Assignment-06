import React from 'react';

const Button = ({text}) => {
    return (
        <>
        <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl' text={text}>{text}</button>
        </>
        
    );
};

export default Button;