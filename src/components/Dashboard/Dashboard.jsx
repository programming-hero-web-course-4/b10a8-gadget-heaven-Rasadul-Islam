import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCardList, getStoredWishList } from '../../Utility/AddToDb';
import { IoClose } from 'react-icons/io5';

const Dashboard = () => {
    const items = useLoaderData();
    const [cardList, setCardList] = useState([]);
    const [wishList, setWishList] = useState([]);
    useEffect(() => {
        const storedCardList = getStoredCardList();
        const cardList = items.filter(item => storedCardList.includes(item.product_id));
        setCardList(cardList);

        const storedWishList = getStoredWishList();
        const wishList = items.filter(item => storedWishList.includes(item.product_id));
        setWishList(wishList);

    }, []);

    return (
        <div className="relative z-0">
            {/* Dashboard Top Section */}
            <div className="py-10 pb-32 text-white text-center bg-purple-500">
                <h1 className="text-2xl md:text-4xl font-bold">
                    Dashboard
                </h1>
                <p className="w-11/12 md:w-2/3 lg:w-1/2 mx-auto mt-5 text-gray-100">
                    The dashboard allows users to view and manage their cart and wishlist, sort cart items by price, and track total prices for a seamless shopping experience.
                </p>
            </div>
            {/* button tabs */}
            <div>
                <Tabs className='relative -top-32 mt-10'>
                    {/* Tabs*/}
                    <TabList className='gap-3 flex justify-center items-center'>
                        <Tab className="btn bg-transparent font-bold text-lg rounded-full">Cart 🛒</Tab>
                        <Tab className='btn bg-transparent font-bold text-lg rounded-full'> Wishlist ♥</Tab>
                    </TabList>
                    <div className='bg-white text-black text-lg text-center mt-16'>
                        {/* Card List content */}
                        <TabPanel >
                            <div className='container max-w-4xl  px-5 mx-auto'>
                                <div className='flex w-full justify-start items-center'>
                                    <div className='w-1/4 text-start'>
                                        <h1 className='font-bold'>Card </h1>
                                    </div>
                                    <div className='flex justify-end items-center w-3/4 gap-5 text-base'>
                                        <h1 className='font-bold'>Total Cost:</h1>
                                        <button className='border-2 border-purple-400 text-purple-600 rounded-full px-3 py-1'>Sort by Price</button>
                                        <button className=' bg-purple-400 rounded-full px-3 py-1 text-white border-none'>Purchase</button>
                                    </div>
                                </div>
                                {/* Card items */}
                                <div className='mt-10'>
                                    {cardList.map(card =>
                                        <div key={card.product_id}>
                                            <div className='flex gap-5 justify-between bg-purple-100 mt-2 rounded-xl px-2'>
                                                {/* product image */}
                                                <div className='w-24 h-24 mt-2 justify-start flex'>
                                                    <img className='w-full h-full border-2 border-purple-400 rounded-xl' src={card.product_image} alt={card.product_title} />
                                                </div>
                                                {/* Product info */}
                                                <div className='flex flex-col justify-start items-start'>
                                                    <h1 className='mt-1 font-bold capitalize'>{card.product_title}</h1>
                                                    <div className='flex gap-2 text-gray-500 text-base'>
                                                        <h1 className='mt-1'><span className='font-bold'>Brand:</span> {card.brand}</h1>,
                                                        <h1 className='mt-1'><span className='font-bold'>Color:</span>{card.color}</h1>
                                                    </div>
                                                    <h1 className='mt-1'><span className='font-bold'>Price: $</span>{card.price}</h1>
                                                </div>
                                                {/* action */}
                                                <button className='flex justify-end w-fit mt-2'>
                                                    <IoClose className="bg-white border-2 border-red-400 text-red-400 text-3xl rounded-full p-1 "></IoClose>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </TabPanel>
                        {/* Wish List content */}
                        <TabPanel>
                            <div className='container max-w-4xl px-5 mx-auto'>
                                <div className='flex w-full justify-start items-center'>
                                    <div className='w-full text-start'>
                                        <h1 className='font-bold py-1'>Wish List:</h1>
                                    </div>
                                </div>
                                <div>
                                    {/* Wish items */}
                                    <div className='mt-10'>
                                        {wishList.map(wish =>
                                            <div key={wish.product_id}>
                                                <div className='flex gap-5 justify-between bg-purple-100 mt-2 rounded-xl px-2'>
                                                    {/* product image */}
                                                    <div className='w-24 h-24 mt-2 justify-start flex'>
                                                        <img className='w-full h-full border-2 border-purple-400 rounded-xl' src={wish.product_image} alt={wish.product_title} />
                                                    </div>
                                                    {/* Product info */}
                                                    <div className='flex flex-col justify-start items-start'>
                                                        <h1 className='mt-1 font-bold capitalize'>{wish.product_title}</h1>
                                                        <div className='flex gap-2 text-gray-500 text-base'>
                                                            <h1 className='mt-1'><span className='font-bold'>Brand:</span> {wish.brand}</h1>,
                                                            <h1 className='mt-1'><span className='font-bold'>Color:</span>{wish.color}</h1>
                                                        </div>
                                                        <h1 className='mt-1'><span className='font-bold'>Price: $</span>{wish.price}</h1>
                                                    </div>
                                                    {/* action */}
                                                    <button className='flex justify-end w-fit mt-2'>
                                                        <IoClose className="bg-white border-2 border-red-400 text-red-400 text-3xl rounded-full p-1 "></IoClose>
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default Dashboard;
