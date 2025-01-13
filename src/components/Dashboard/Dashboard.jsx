import React, { useState } from 'react';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("Cart"); // State to manage active tab

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="">
            {/* Top Section */}
            <div className="py-10  text-white text-center bg-purple-500">
                <h1 className="text-2xl md:text-4xl font-bold">
                    Dashboard
                </h1>
                <p className="w-11/12 md:w-2/3 lg:w-1/2 mx-auto mt-5 text-gray-100">
                    The dashboard allows users to view and manage their cart and wishlist, sort cart items by price, and track total prices for a seamless shopping experience.
                </p>
                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => handleTabClick("Cart")}
                        className={`btn bg-transparent font-bold text-lg ${activeTab === "Cart" ? "bg-white text-black" : "text-white"}`}
                    >
                        Cart 🛒
                    </button>
                    <button
                        onClick={() => handleTabClick("Wishlist")}
                        className={`btn bg-transparent font-bold text-lg ${activeTab === "Wishlist" ? "bg-white text-black" : "text-white"}`}
                    >
                        Wishlist ♥
                    </button>
                </div>
            </div>

            {/* Display active tab content */}
            <div className="pt-10">
                {activeTab === "Cart" ? (
                    <div>
                        {/* Cart content goes here */}
                        <h2 className="text-2xl font-bold text-center">Your Cart Items</h2>
                        {/* Cart items display */}
                    </div>
                ) : (
                    <div>
                        {/* Wishlist content goes here */}
                        <h2 className="text-2xl font-bold text-center">Your Wishlist Items</h2>
                        {/* Wishlist items display */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
