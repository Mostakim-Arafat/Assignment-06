import React from 'react';
import bannerImg from '../../assets/banner.png'
import play from '../../assets/Play.png'
import Button from '../../UI/button';
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
                    <img
                        src={bannerImg}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <div className='bg-blue-300 rounded-3xl flex items-center gap-2 p-2 max-w-2xs mb-2'>
                            <div className='h-2.5 w-2.5 rounded-full bg-purple-600'></div>
                            <div><p className='text-purple-600'>New:AI-Powered Tools Available</p></div>
                        </div>
                        <h1 className="text-5xl font-bold">Supercharge Your <br></br> Digital Workflow</h1>
                        <p className="py-6">
                            Access premium AI tools, design assets, templates, and productivity <br />
                            software—all in one place. Start creating faster today. <br />
                            Explore Products
                        </p>
                        <div className='space-x-1'>
                        <Button text='Get Started'></Button>
                        <button className='btn btn-outline btn-primary'> 
                            <img src={play} alt="" />
                            Watch Demo
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;