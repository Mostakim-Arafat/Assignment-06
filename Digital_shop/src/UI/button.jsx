import React from 'react';

const Button = ({text}) => {
    return (
        <>
        <button className='btn btn-primary rounded-3xl' text={text}>{text}</button>
        </>
        
    );
};

export default Button;