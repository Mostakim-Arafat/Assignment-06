import React from 'react';
import StepCard from './stepCard';
import profile from '../../assets/user.png'
import rocket from '../../assets/rocket.png'
import box from '../../assets/package.png'

const Step = () => {
    return (
        <div className='py-9 my-3.5 text-center space-y-3'>
            <h1 className='text-4xl font-bold'>Get Started in 3 Steps</h1>
            <p className='text-[#627382] text-sm'>Start using premium digital tools in minutes, not hours.</p>
            <div className='flex mx-auto w-10/12 justify-around gap-4'>
                <StepCard num='01' img={profile} h1='Create Account' p='Sign up for free in seconds. No credit card required to get started.'/>
                <StepCard num='02' img={box} h1='Choose Products' p='Browse our catalog and select the tools that fit your needs.'/>
                <StepCard num='03' img={rocket} h1='Start Creating' p='Download and start using your premium tools immediately.'/>
            </div>
        </div>
    );
};


export default Step;