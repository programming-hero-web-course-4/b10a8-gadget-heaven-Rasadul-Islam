import React from 'react';

const Banner = () => {
    return (
        <div className="mt-10 flex justify-center items-center flex-col">
            <h1 className="container mx-auto text-center text-white font-bold lg:text-5xl text-2xl">
                Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
            </h1>
            <p className="container mx-auto text-center text-gray-200 text-sm lg:text-base mt-10">
                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            <button className="btn mt-10 text-purple-500 px-10 rounded-full font-bold text-base lg:text-xl">Shop Now</button>
        </div>

    );
};

export default Banner;