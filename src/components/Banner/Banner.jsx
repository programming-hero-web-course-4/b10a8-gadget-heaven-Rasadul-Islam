import React from 'react';

const Banner = () => {
    return (
        <div className='rounded-xl rounded-t-none px-1 pb-1 border-x-2 border-b-2 border-gray-300 mb-20 md:mb-52 lg:mb-96'>
              {/* Top Section */}
            <div className="pt-5 md:pt-10 pb-32 lg:pb-40 flex justify-center bg-purple-500 items-center flex-col rounded-xl rounded-t-none border-none">
                <h1 className="container mx-auto text-center text-white font-bold lg:text-5xl text-2xl">
                    Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
                </h1>
                <p className="container mx-auto text-center text-gray-200 text-sm lg:text-base mt-10">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <button className="btn mt-10 text-purple-500 px-10 rounded-full font-bold text-base lg:text-xl">Shop Now</button>
            </div>
            <div className='w-3/5 max-w-2xl mx-auto relative '>
                <div className='absolute -top-28 lg:-top-36 z-30 border-2 border-white p-2 rounded-xl'>
                    <img src="../../../public/assets/banner.jpg" alt="" className='rounded-xl' />
                </div>
            </div>
        </div>

    );
};

export default Banner;