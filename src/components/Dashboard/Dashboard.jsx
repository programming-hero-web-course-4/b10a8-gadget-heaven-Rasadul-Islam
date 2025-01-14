import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCardList, getStoredWishList, clearStoredCardList, clearStoredWishList } from '../../Utility/AddToDb';
import { IoClose } from 'react-icons/io5';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
    const items = useLoaderData();
    const [cardList, setCardList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const Navigete = useNavigate();

    useEffect(() => {
        const storedCardList = getStoredCardList();
        const cardList = items.filter(item => storedCardList.includes(item.product_id));
        setCardList(cardList);

        const storedWishList = getStoredWishList();
        const wishList = items.filter(item => storedWishList.includes(item.product_id));
        setWishList(wishList);
    }, []);

    useEffect(() => {
        // Calculate the total price whenever the cart changes
        const total = cardList.reduce((acc, item) => acc + item.price, 0);
        setTotalPrice(total);
    }, [cardList]);

    // Sort cart items by price
    const handleSortByPrice = () => {
        const sortedCart = [...cardList].sort((a, b) => b.price - a.price);
        setCardList(sortedCart);
    };

    // Modal toggle and clear cart function
    const toggleModal = () => {
        if (isModalOpen) {
            // Clear the cart when closing the modal
            clearStoredCardList();
            setCardList([]);
            // Go to Home after click close button
            Navigete('/');
        }
        setIsModalOpen(!isModalOpen);
    };

    // wish list clear
    const handleClearWishList = () => {
        clearStoredWishList();
        setWishList([]);
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: 'Success!',
            text: "Successfully Clear the Wish List",
            showConfirmButton: false,
            timer: 3000,
        });
    }

    return (
        <div className="relative z-0">
            <Helmet>
                <title>Dashboard | GadgetHeaven</title>
            </Helmet>
            {/* Dashboard Top Section */}
            <div className="py-10 pb-32 text-white text-center bg-purple-500">
                <h1 className="text-2xl md:text-4xl font-bold">Dashboard</h1>
                <p className="w-11/12 md:w-2/3 lg:w-1/2 mx-auto mt-5 text-gray-100">
                    The dashboard allows users to view and manage their cart and wishlist, sort cart items by price, and track total prices for a seamless shopping experience.
                </p>
            </div>

            {/* Button Tabs */}
            <div>
                <Tabs className="relative -top-32 mt-10">
                    {/* Tabs */}
                    <TabList className="gap-3 flex justify-center items-center">
                        <Tab className="btn bg-transparent font-bold text-lg rounded-full">Cart 🛒</Tab>
                        <Tab className="btn bg-transparent font-bold text-lg rounded-full">Wishlist ♥</Tab>
                    </TabList>
                    <div className="bg-white text-black text-lg text-center mt-16">
                        {/* Card List content */}
                        <TabPanel>
                            <div className="container max-w-4xl px-5 mx-auto">
                                <div className="flex w-full justify-start items-center">
                                    <div className="w-1/5 md:w-1/4 text-start">
                                        <h1 className="font-bold">Cart</h1>
                                    </div>
                                    <div className="flex justify-end items-center w-4/5 md:w-3/4 gap-2 md:gap-5 text-sm md:text-base">
                                        <h1 className="font-bold">Total Cost: ${totalPrice.toFixed(2)}</h1>
                                        <button
                                            onClick={handleSortByPrice}
                                            className="border-2 border-purple-400 text-purple-600 rounded-full px-3 py-1"
                                        >
                                            Sort by Price
                                        </button>
                                        <button
                                            onClick={toggleModal}
                                            className="bg-purple-400 rounded-full px-3 py-1 text-white border-none"
                                        >
                                            Purchase
                                        </button>
                                    </div>
                                </div>
                                {/* Card items */}
                                <div className="mt-10">
                                    {cardList.map(card => (
                                        <div key={card.product_id}>
                                            <div className="flex gap-5 justify-between bg-purple-100 mt-2 rounded-xl px-2 md:px-5 md:py-3">
                                                {/* Product image */}
                                                <div className="w-24 h-24 mt-2 justify-start flex">
                                                    <img
                                                        className="w-full h-full border-2 border-purple-400 rounded-xl"
                                                        src={card.product_image}
                                                        alt={card.product_title}
                                                    />
                                                </div>
                                                {/* Product info */}
                                                <div className="flex flex-col justify-start items-start text-start w-full">
                                                    <h1 className="mt-1 font-bold capitalize">{card.product_title}</h1>
                                                    <div className="flex gap-2 text-gray-500 text-base">
                                                        <h1 className="mt-1">
                                                            <span className="font-bold">Brand:</span> {card.brand}
                                                        </h1>
                                                        ,
                                                        <h1 className="mt-1">
                                                            <span className="font-bold">Color:</span>
                                                            {card.color}
                                                        </h1>
                                                    </div>
                                                    <h1 className="mt-1">
                                                        <span className="font-bold">Price: $</span>
                                                        {card.price}
                                                    </h1>
                                                </div>
                                                {/* Action */}
                                                <button className="flex justify-end w-fit mt-2">
                                                    <IoClose className="bg-white border-2 border-red-400 text-red-400 text-3xl rounded-full p-1"></IoClose>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </TabPanel>

                        {/* Wishlist content */}
                        <TabPanel>
                            <div className="container max-w-4xl px-5 mx-auto">
                                <div className="flex w-full justify-start items-center">
                                    <div className="w-full flex justify-between text-start">
                                        <h1 className="font-bold py-1">Wishlist:</h1>
                                        <button
                                            onClick={() => {
                                                handleClearWishList();
                                            }}
                                            className="font-bold py-1 border-purple-500 border-2 rounded-full px-3">List clear</button>
                                    </div>
                                </div>
                                <div>
                                    {/* Wish items */}
                                    <div className="mt-10">
                                        {wishList.map(wish => (
                                            <div key={wish.product_id}>
                                                <div className="flex gap-5 justify-between bg-purple-100 mt-2 rounded-xl px-2">
                                                    {/* Product image */}
                                                    <div className="w-24 h-24 mt-2 justify-start flex">
                                                        <img
                                                            className="w-full h-full border-2 border-purple-400 rounded-xl"
                                                            src={wish.product_image}
                                                            alt={wish.product_title}
                                                        />
                                                    </div>
                                                    {/* Product info */}
                                                    <div className="flex flex-col justify-start items-start">
                                                        <h1 className="mt-1 font-bold capitalize">{wish.product_title}</h1>
                                                        <div className="flex gap-2 text-gray-500 text-base">
                                                            <h1 className="mt-1">
                                                                <span className="font-bold">Brand:</span> {wish.brand}
                                                            </h1>
                                                            ,
                                                            <h1 className="mt-1">
                                                                <span className="font-bold">Color:</span>
                                                                {wish.color}
                                                            </h1>
                                                        </div>
                                                        <h1 className="mt-1">
                                                            <span className="font-bold">Price: $</span>
                                                            {wish.price}
                                                        </h1>
                                                    </div>
                                                    {/* Action */}
                                                    <button className="flex justify-end w-fit mt-2">
                                                        <IoClose className="bg-white border-2 border-red-400 text-red-400 text-3xl rounded-full p-1"></IoClose>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-5 max-w-md w-full text-center">
                        <h1 className="flex justify-center my-5">
                            <BsFillPatchCheckFill className="text-green-400 w-16 h-16" />
                        </h1>
                        <h1 className="text-xl md:text-3xl font-bold mb-3 pb-3 border-b-2">
                            Purchase Successfully
                        </h1>
                        <p className="text-gray-700 text-lg">Thanks for purchasing.</p>
                        <p className="mb-5 text-gray-700 text-xl">Total: ${totalPrice.toFixed(2)}</p>
                        <button
                            className="bg-gray-200 text-black px-4 py-2 font-bold rounded-full w-full text-xl"
                            onClick={toggleModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
