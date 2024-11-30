import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='text-center mt-20 mb-5'>
                <h1 className='font-bold text-3xl'>Gadget Heaven</h1>
                <p className='text-gray-400 text-base'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr />
            <div className='flex flex-col md:flex-row justify-around gap-y-10 my-5'>
                <div className='text-center'>
                    <h1 className='font-bold text-lg mb-5 '>Services</h1>
                    <ul className='text-gray-400'>
                        <li><a href='#'>Product Support</a></li>
                        <li><a href='#'>Order Tracking</a></li>
                        <li><a href='#'>Shipping & Delivery</a></li>
                        <li><a href='#'> Returns</a></li>
                    </ul>
                </div>
                <div className='text-center'>
                    <h1 className='font-bold text-lg mb-5 '>Company</h1>
                    <ul className='text-gray-400'>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Careers</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
                <div className='text-center'>
                    <h1 className='font-bold text-lg mb-5 '>Legal</h1>
                    <ul className='text-gray-400'>
                        <li><a href='#'>Terms of Service</a></li>
                        <li><a href='#'>Privacy Policy</a></li>
                        <li><a href='#'>Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;