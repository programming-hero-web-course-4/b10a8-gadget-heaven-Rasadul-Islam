import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
    const { product_Id } = useParams(); 
    const [item, setItem] = useState(null);
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        // Fetch item details from JSON
        fetch("../../../public/items.json")
            .then((res) => res.json())
            .then((data) => {
                const selectedItem = data.find(
                    (gadget) => gadget.product_id === product_Id
                );
                setItem(selectedItem);
            });
    }, [product_Id]);

    const handleAddToCart = () => {
        if (item) {
            setCart((prevCart) => [...prevCart, item]);
            alert(`${item.product_title} has been added to your cart!`);
        }
    };

    const handleAddToWishlist = () => {
        if (item) {
            if (!wishlist.find((wishItem) => wishItem.product_id === item.product_id)) {
                setWishlist((prevWishlist) => [...prevWishlist, item]);
                alert(`${item.product_title} has been added to your wishlist!`);
            }
        }
    };

    return (
        <div className="pb-20 md:pb-40 bg-gray-50">
            {/* Top Section */}
            <div className="pt-10 pb-40 text-white text-center bg-purple-500">
                <h1 className="text-2xl md:text-4xl font-bold">Product Details</h1>
                <p className="w-11/12 md:w-2/3 lg:w-1/2 mx-auto mt-5 text-gray-100">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
            </div>

            {/* Product Section */}
            <div className="relative z-10 w-11/12 md:w-4/5 lg:max-w-3xl mx-auto">
                <div className="relative bg-white border-2 border-gray-200 p-4 md:p-6 rounded-xl shadow-lg -mt-24 md:-mt-36">
                    {/* Grid Layout for Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Product Image */}
                        <div>
                            <img
                                src={item.product_image}
                                alt={item.product_title}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>

                        {/* Product Details */}
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold">{item.product_title}</h1>
                            <p className="text-gray-600 mt-4">{item.description}</p>
                            <p className="text-xl font-semibold mt-4">Price: ${item.price}</p>

                            <div className="mt-6">
                                <h3 className="text-2xl font-bold mb-2">Specifications:</h3>
                                <ul className="list-disc list-inside space-y-2">
                                    {Object.entries(item.specification).map(([key, value]) => (
                                        <li key={key}>
                                            <strong>{key}:</strong> {value}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Buttons */}
                            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={handleAddToCart}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                                >
                                    Add to Cart 🛒
                                </button>
                                <button
                                    onClick={() => handleAddToWishlist(item)}
                                    className={`px-4 py-2 rounded transition ${
                                        wishlist.some((wishItem) => wishItem.product_id === item.product_id)
                                            ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                                            : "bg-red-500 text-white hover:bg-red-600"
                                    }`}
                                    disabled={wishlist.some((wishItem) => wishItem.product_id === item.product_id)}
                                >
                                    Add to Wishlist ♥
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Padding*/}
            <div className="h-40 md:h-20"></div>
        </div>
    );
};

export default ItemDetails;
