import React from 'react';

const Stats = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>
            <div className="flex w-full flex-col lg:flex-row">
                <div className="card   grid h-32 grow place-items-center">
                    <h1 className='text-4xl font-bold'>50K+</h1>
                    <p>Active Users</p>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="card  grid h-32 grow place-items-center">
                    <h1 className='text-4xl font-bold'>200+</h1>
                    <p>Premium Tools</p>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="card  grid h-32 grow place-items-center">
                   <h1 className='text-4xl font-bold'>4.9</h1>
                    <p>Rating</p> 
                </div>
            </div>
        </div>
    );
};

export default Stats;