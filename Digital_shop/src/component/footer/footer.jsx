import React from 'react';
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-[#101727]'>
            <div className='max-w-4xs mx-auto py-14'>
                <div className='flex justify-around text-white mb-4'>
                        <div>
                            <h1 className='font-bold text-4xl mb-3'>DigiTools</h1>
                            <p className='text-sm'>Premium digital tools for creators, professionals,<br /> and businesses. Work smarter with our <br /> suite of powerful tools.</p>
                        </div>
                        <div className='flex gap-10' id='list'>
                            <div>
                                <h1 className='font-bold'>Product</h1>
                                <p>Features</p>
                                <p>Pricing</p>
                                <p>Templates</p>
                                <p>Integration</p>
                            </div>
                            <div>
                                <h1 className='font-bold'>Company</h1>
                                <p>About</p>
                                <p>Blog</p>
                                <p>Careers</p>
                                <p>Press</p>
                            </div>
                            <div>
                                <h1 className='font-bold'>Resources</h1>
                                <p>Documentation</p>
                                <p>Help Center</p>
                                <p>Community</p>
                                <p>Contact</p>
                            </div>
                        </div>
                        <div>
                            <h1>Social Links</h1>
                            <div className='flex gap-3 mt-3'>
                                <p><RiFacebookCircleLine /></p>
                                <p><FaInstagram /></p>
                                <p><FaXTwitter /></p>
                            </div>
                        </div>
                </div>
                <hr className='text-[#FAFAFA] my-6'/>
                <div className='mt-20 flex justify-around items-center my-5 text-gray-300'>
                    <div>
                        <p>&copy; 2026 Digitools. All rights reserved</p>
                    </div>
                    <div className=' flex gap-4'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;