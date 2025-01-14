import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCardList } from '../../Utility/AddToDb';

const Dashboard = () => {
    const items = useLoaderData();
    const [cardList, setCardList] = useState([]);
    useEffect(() => {
        const storedCardList = getStoredCardList();


        console.log(items, "items", storedCardList, "strCardList",);

        const cardList = items.filter(item => storedCardList.includes(item.product_id));
        setCardList(cardList);

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
                    <TabList className='gap-3 flex justify-center items-center'>
                        <Tab className="btn bg-transparent font-bold text-lg rounded-full">Cart 🛒</Tab>
                        <Tab className='btn bg-transparent font-bold text-lg rounded-full'> Wishlist ♥</Tab>
                    </TabList>
                    <div className='bg-white text-black text-lg text-center mt-16'>
                        <TabPanel >
                            <div className='container max-w-4xl  px-5 mx-auto'>
                                <div className='flex w-full justify-start items-center'>
                                    <div className='w-1/4 text-start'>
                                        <h1 className='font-bold'>Card: {cardList.length}</h1>
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
                                            <div className='flex gap-5 text-start bg-gray-200 mt-2 rounded-xl px-2'>
                                                <div className='w-24 h-24 mt-2'>
                                                    <img className='w-full h-full border-2 border-purple-400 rounded-xl' src={card.product_image} alt={card.product_title} />
                                                </div>
                                                <div>
                                                    <h1 className='mt-1 font-bold capitalize'>{card.product_title}</h1>
                                                    <div className='flex gap-2 text-gray-500 text-base'>
                                                    <h1 className='mt-1'><span className='font-bold'>Brand:</span> {card.brand}</h1>,
                                                    <h1 className='mt-1'><span className='font-bold'>Color:</span>{card.color}</h1>
                                                    </div>
                                                    <h1 className='mt-1'><span className='font-bold'>Price: $</span>{card.price}</h1>
                                                </div>
                                            </div>

                                        </div>
                                    )}
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='container max-w-4xl px-5 mx-auto'>
                                <div className='flex w-full justify-start items-center'>
                                    <div className='w-full text-start'>
                                        <h1 className='font-bold py-1'>Wish List</h1>
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
